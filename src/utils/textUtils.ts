/**
 * 中文文本的標點符號
 */
const PUNCTUATIONS = {
  PERIOD: '。', // 句號
  COMMA: '，',  // 逗號
  EXCLAMATION: '！', // 驚嘆號 
  QUESTION: '？', // 問號
  COLON: '：', // 冒號
  SEMICOLON: '；' // 分號
};

/**
 * 生成文本摘要
 * 
 * @param content 原始文本內容
 * @param maxLength 最大長度限制，預設為 50 字元
 * @returns 處理後的摘要文本
 * 
 * @example
 * // 返回 "這是一個測試句子。..."
 * generateSummary("這是一個測試句子。這是第二句。", 10)
 */
export function generateSummary(content: string, maxLength: number = 50): string {
  // 參數驗證
  if (!content) return '';
  if (maxLength <= 0) return '';
  
  // 移除多餘的空白和換行
  const cleanContent = content.replace(/\s+/g, ' ').trim();
  
  // 如果內容長度小於等於最大長度，直接返回
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  // 取得指定長度的文字
  const truncated = cleanContent.slice(0, maxLength);
  
  // 尋找最後出現的標點符號位置
  const lastPunctuationIndices = [
    { char: PUNCTUATIONS.PERIOD, index: truncated.lastIndexOf(PUNCTUATIONS.PERIOD) },
    { char: PUNCTUATIONS.COMMA, index: truncated.lastIndexOf(PUNCTUATIONS.COMMA) },
    { char: PUNCTUATIONS.EXCLAMATION, index: truncated.lastIndexOf(PUNCTUATIONS.EXCLAMATION) },
    { char: PUNCTUATIONS.QUESTION, index: truncated.lastIndexOf(PUNCTUATIONS.QUESTION) },
    { char: PUNCTUATIONS.COLON, index: truncated.lastIndexOf(PUNCTUATIONS.COLON) },
    { char: PUNCTUATIONS.SEMICOLON, index: truncated.lastIndexOf(PUNCTUATIONS.SEMICOLON) }
  ];
  
  // 找出最後出現且位置最靠後的標點符號
  const lastValidPunctuation = lastPunctuationIndices
    .filter(item => item.index >= 0)
    .sort((a, b) => b.index - a.index)[0];
  
  // 決定截斷點：優先在標點符號後，否則在最大長度處截斷
  const breakPoint = lastValidPunctuation 
    ? lastValidPunctuation.index + 1 
    : maxLength;
  
  return cleanContent.slice(0, breakPoint) + '...';
}