// 店家基本資訊的類型
export interface StoreBasicInfo {
	name: string;
	description: string;
	openHours: string;
	phone: string;
	mobile: string;
	address: string;
	email: string;
	googleMapUrl: string;
}

// 社交媒體連結的類型
export interface SocialLinks {
	uber?: string;
	instagram?: string;
	facebook?: string;
	line?: string;
}

// 營業時間的類型定義
export interface BusinessHoursType {
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
	sunday: string;
}

// 關於頁面特性項目的類型定義
export interface FeatureItem {
	title: string;
	description: string;
	imageUrl: string;
}

// 關於頁面信息的類型定義
export interface AboutInfoType {
	title: string;
	description: string;
	features: FeatureItem[];
}

// 新聞分類類型
export type NewsCategory = keyof typeof newsCategories;

// 新聞文章的類型定義
export interface NewsItem {
	id: number;
	category: NewsCategory;
	title: string;
	date: string;
	content: string;
	imageUrl: string;
}

// 新聞分類的常量
export const newsCategories = {
	new: "最新消息",
	event: "活動資訊",
	notice: "營業公告",
};

// 食品項目的型別定義
export interface Food {
	id: number;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
}

// 食品分類的型別定義
export interface FoodCategories {
	category: Food[];
}
