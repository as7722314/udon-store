import type {
	StoreBasicInfo,
	SocialLinks,
	BusinessHoursType,
	AboutInfoType,
	NewsItem,
} from "@/types/store";

// 商店配置的主要數據結構
export const siteConfig: StoreBasicInfo & SocialLinks = {
	name: "川杉食堂",
	description: "提供美味的烏龍麵與各式餐點",
	openHours: "11:00 - 21:00",
	phone: "(02) 2345-6789",
	mobile: "0912-345-678",
	address: "高雄市新興區八德二路27號",
	email: "info@udon.com",
	uber: "https://www.ubereats.com/tw/store/%E5%B7%9D%E6%9D%89%E9%A3%9F%E5%A0%82-%E6%97%A5%E5%BC%8F%E7%83%8F%E9%BE%8D%E9%BA%B5/WBiKADyXUx2tF9aMJWLUtA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
	instagram: "https://www.instagram.com/ka.wa.su.gi_food/",
	googleMapUrl: "https://maps.app.goo.gl/e4XSwGWpaKarRLYDA",
};

// 營業時間
export const businessHours: BusinessHoursType = {
	monday: "18:00–22:30",
	tuesday: "18:00–22:30",
	wednesday: "18:00–22:30",
	thursday: "18:00–22:30",
	friday: "18:00–22:30",
	saturday: "18:00–01:00",
	sunday: "18:00–01:00",
};

// 關於頁面的數據
export const aboutInfo: AboutInfoType = {
	title: "關於川杉食堂",
	description: `我們的烏龍麵店創立於2020年，秉持著傳統日本烏龍麵的製作工藝，
  結合台灣在地食材，為顧客提供最道地的美味。每一根麵條都由師傅手工製作，
  湯頭更是使用精選食材，熬煮超過8小時。`,
	features: [
		{
			title: "手工製麵",
			description: "堅持每日新鮮現做，保持麵條最佳口感",
			imageUrl: "/fake/fake-noodle.jpg",
		},
		{
			title: "特製湯頭",
			description: "使用多種食材精心熬煮，層次豐富",
			imageUrl: "/fake/fake-soup.jpg",
		},
		{
			title: "在地食材",
			description: "嚴選台灣當地新鮮食材，支持在地農業",
			imageUrl: "/fake/fake-ingredients.jpg",
		},
	],
};

// 新聞數據
export const newsData: NewsItem[] = [
	{
		id: 1,
		category: "new",
		title: "新品上市：季節限定抹茶烏龍麵",
		date: "2024-03-15",
		content: `春季限定，使用日本進口抹茶粉製作，
    口感清爽，搭配特製抹茶醬汁，
    為您帶來全新的烏龍麵體驗。
    
    限定供應時間：2024/03/15 - 2024/04/30
    售完為止，敬請把握機會！`,
		imageUrl: "/fake/fake-product.jpg",
	},
	{
		id: 2,
		category: "event",
		title: "分店開幕：台中店盛大開幕",
		date: "2024-03-01",
		content: `為了服務更多喜愛烏龍麵的顧客，我們很高興宣布台中店正式開幕！
    
    新店位於台中市西區美術園道，環境優美寬敞，
    除了原有的經典餐點外，更推出台中店限定菜單。
    
    開幕期間推出多項優惠活動：
    - 消費滿500元贈送精美小禮
    - 特定餐點買一送一
    - 集點卡消費加倍
    
    歡迎舊雨新知蒞臨品嚐！`,
		imageUrl: "/fake/fake-restaurant.jpg",
	},
	{
		id: 3,
		category: "new",
		title: "夏日清爽新選擇：冷麵系列上市",
		date: "2024-02-15",
		content: `炎炎夏日即將來臨，本店特別推出清爽冷麵系列：
    
    - 柚子醋冷麵：清新柚子香，開胃爽口
    - 麻辣冷麵：微辣開胃，層次豐富
    - 芝麻醬冷麵：香濃芝麻，經典美味
    
    每份冷麵都搭配特製醬汁，完美詮釋夏日清爽好滋味。
    供應期間：2024/03/01 - 2024/09/30`,
		imageUrl: "/fake/fake-cold-noodle.jpg",
	},
	{
		id: 4,
		category: "notice",
		title: "新年特別營業時間公告",
		date: "2024-02-01",
		content: `農曆新年即將到來，本店營業時間調整如下：
    
    除夕（2024/02/09）：營業至下午3點
    初一至初三（2024/02/10-12）：休息
    初四起（2024/02/13）：恢復正常營業
    
    新年期間推出限定餐點：
    - 紅燒牛肉烏龍麵
    - 干貝天婦羅烏龍麵
    
    提前預祝大家新年快樂！`,
		imageUrl: "/fake/chinese-festival.jpg",
	},
	{
		id: 5,
		category: "event",
		title: "週年慶感謝祭開跑",
		date: "2024-01-15",
		content: `感謝各位顧客一年來的支持，本店特別舉辦週年慶感謝祭：

    優惠活動：
    - 全品項9折優惠
    - 特製週年紀念杯贈送
    - 集點加倍送
    
    限定餐點：
    - 豪華海鮮烏龍麵
    - 松露野菇烏龍麵
    
    活動期間：2024/01/15-2024/01/31
    歡迎大家踴躍參與！`,
		imageUrl: "/fake/fake-restaurant.jpg",
	},
	{
		id: 6,
		category: "new",
		title: "新品上市：養生蔬食烏龍麵",
		date: "2024-01-01",
		content: `響應健康飲食風潮，推出全新蔬食烏龍麵系列：

    - 什錦菇菇烏龍麵：嚴選各式菇類
    - 時令蔬菜烏龍麵：當季新鮮蔬菜
    - 麻辣素食烏龍麵：純素可食
    
    所有食材皆為有機認證，讓您吃得健康又安心。
    另有素食調理包可供外帶。`,
		imageUrl: "/fake/fake-cold-noodle.jpg",
	},
	{
		id: 7,
		category: "notice",
		title: "外送服務開始營運",
		date: "2023-12-15",
		content: `為了讓更多顧客方便享用，本店正式開始提供外送服務：

    合作平台：
    - Uber Eats
    - Foodpanda
    - 在地外送
    
    外送注意事項：
    - 請提前30分鐘訂餐
    - 特定品項不提供外送
    - 外送訂單不適用店內優惠
    
    歡迎大家多加利用！`,
		imageUrl: "/fake/chinese-festival.jpg",
	},
];

export const foodData = {
	飯食: [
		{
			id: 1,
			name: "咖哩飯",
			price: 75,
			description: `特製咖哩醬汁，搭配新鮮蔬菜和嫩煎雞肉，
      香濃美味，令人回味無窮。

      配料：
      - 嫩煎雞肉
      - 紅蘿蔔
      - 馬鈴薯
      - 洋蔥
      - 青花菜`,
			imageUrl: "/fake/fake-product.jpg",
		},
		{
			id: 2,
			name: "親子丼",
			price: 80,
			description: `使用溫泉蛋製作，口感滑嫩，
      搭配特製醬汁，香氣四溢。

      配料：
      - 溫泉蛋
      - 雞肉
      - 洋蔥
      - 蔥花`,
			imageUrl: "/fake/fake-product.jpg",
		},
		{
			id: 3,
			name: "炸豬排飯",
			price: 90,
			description: `外酥內嫩的炸豬排，
      搭配特製醬汁，美味可口。

      配料：
      - 炸豬排
      - 高麗菜絲
      - 蛋花
      - 蔥花`,
			imageUrl: "/fake/fake-product.jpg",
		},
	],
	麵食: [
		{
			id: 4,
			name: "拉麵",
			price: 95,
			description: `濃郁豚骨湯頭，搭配彈牙麵條，
      完美呈現日式拉麵的精髓。

      配料：
      - 叉燒肉
      - 溏心蛋
      - 筍乾
      - 海苔
      - 蔥花`,
			imageUrl: "/fake/fake-product.jpg",
		},
		{
			id: 5,
			name: "炒烏龍麵",
			price: 85,
			description: `特製醬汁炒製，搭配新鮮海鮮，
      口感豐富，風味獨特。

      配料：
      - 蝦仁
      - 魷魚
      - 高麗菜
      - 紅蘿蔔
      - 青蔥`,
			imageUrl: "/fake/fake-product.jpg",
		},
	],
	小菜: [
		{
			id: 6,
			name: "炸雞翅",
			price: 60,
			description: `外酥內嫩，特製醬料醃製，
      香脆可口。

      配料：
      - 雞翅
      - 蒜末
      - 辣椒粉`,
			imageUrl: "/fake/fake-product.jpg",
		},
		{
			id: 7,
			name: "涼拌小黃瓜",
			price: 40,
			description: `清爽開胃，特製醬料調味，
      爽脆可口。

      配料：
      - 小黃瓜
      - 蒜末
      - 辣椒`,
			imageUrl: "/fake/fake-product.jpg",
		},
	],
	飲料: [
		{
			id: 8,
			name: "抹茶拿鐵",
			price: 65,
			description: `使用日本進口抹茶粉，
      搭配鮮奶，香醇濃郁。

      可選配料：
      - 珍珠
      - 椰果
      - 布丁`,
			imageUrl: "/fake/fake-product.jpg",
		},
		{
			id: 9,
			name: "水果茶",
			price: 55,
			description: `新鮮水果搭配特調茶品，
      清爽解渴。

      水果選項：
      - 檸檬
      - 柳橙
      - 蘋果
      - 葡萄`,
			imageUrl: "/fake/fake-product.jpg",
		},
	],
};
