export function generateSummary(content: string, maxLength: number = 50): string {
  // 移除多餘的空白和換行
  const cleanContent = content.replace(/\s+/g, ' ').trim();
  
  // 取得指定長度的文字
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  // 在適當的位置截斷文字
  const truncated = cleanContent.slice(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('。');
  const lastComma = truncated.lastIndexOf('，');
  
  // 優先在句號或逗號處截斷
  const breakPoint = lastPeriod > 0 ? lastPeriod + 1 : 
                    lastComma > 0 ? lastComma + 1 : 
                    maxLength;
  
  return cleanContent.slice(0, breakPoint) + '...';
} 