/**
 * 位置座標介面
 * 
 * 代表地圖上的經緯度座標。
 */
export interface Location {
    /** 緯度 */
    latitude: number;
    /** 經度 */
    longitude: number;
}

/**
 * 搜尋區域邊界介面
 * 
 * 代表地圖搜尋區域的單一邊界點。
 */
export interface SearchAreaBoundary {
    /** 緯度 */
    lat: number;
    /** 經度 */
    lng: number;
}

/**
 * 搜尋區域介面
 * 
 * 定義了搜尋的地理範圍，包含西北角和東南角座標。
 */
export interface SearchArea {
    /** 西北角座標 */
    northwest: SearchAreaBoundary;
    /** 東南角座標 */
    southeast: SearchAreaBoundary;
    /** 網格大小 (公里) */
    gridSizeKm: number;
}

/**
 * 店家資訊介面
 * 
 * 包含店家的基本資訊、評分、位置等。
 */
export interface Shop {
    /** 店家唯一識別碼 (通常為 Google Maps Place ID) */
    id: string;
    /** 店家名稱 */
    name: string;
    /** 評分 (1.0 - 5.0) */
    rating: number;
    /** 評論總數 */
    userRatingCount: number;
    /** 格式化地址 */
    formattedAddress: string;
    /** 地理位置座標 */
    location: Location;
    /** 行政區 */
    district: string;
}

/**
 * 區域統計介面
 * 
 * key 為行政區名稱，value 為該區域的店家數量。
 */
export interface DistrictStats {
    [key: string]: number;
}

/**
 * API 回傳資料介面
 * 
 * 從後端或靜態檔案獲取的完整資料結構。
 */
export interface TaipeiBeefNoodlesResponse {
    /** 資料更新日期 */
    updated: string;
    /** 詳細更新時間 */
    updateTime: string;
    /** 店家總數 */
    totalShops: number;
    /** 處理時間 (毫秒) */
    processingTimeMs: number;
    /** 搜尋區域範圍 */
    searchArea: SearchArea;
    /** 各區域統計資料 */
    districtStats: DistrictStats;
    /** 錯誤訊息列表 */
    errors: string[];
    /** 店家列表 */
    shops: Shop[];
}