import { useMemo } from "react";

// 將常數抽出，便於集中管理
export const COPYRIGHT_STYLES = {
    container: "mt-8 pt-4 border-t border-primary/20 text-center text-sm text-gray-600"
};

export const COPYRIGHT_TEXT = {
    storeName: "川杉食堂",
    rightsText: "All rights reserved"
};

interface CopyrightSectionProps {
    year?: number;
}

export default function CopyrightSection({ year }: CopyrightSectionProps) {
    // 如果沒有提供年份，則自動計算
    const currentYear = useMemo(() => year || new Date().getFullYear(), [year]);

    return (
        <div className={COPYRIGHT_STYLES.container}>
            ©{currentYear} {COPYRIGHT_TEXT.storeName}. {COPYRIGHT_TEXT.rightsText}
        </div>
    );
} 