// 位置座標介面
export interface Location {
    latitude: number;
    longitude: number;
}

// 搜尋區域邊界介面
export interface SearchAreaBoundary {
    lat: number;
    lng: number;
}

// 搜尋區域介面
export interface SearchArea {
    northwest: SearchAreaBoundary;
    southeast: SearchAreaBoundary;
    gridSizeKm: number;
}

// 店家資訊介面
export interface Shop {
    id: string;
    name: string;
    rating: number;
    userRatingCount: number;
    formattedAddress: string;
    location: Location;
    district: string;
}

// 區域統計介面
export interface DistrictStats {
    [key: string]: number;
}

// API 回傳資料介面
export interface TaipeiBeefNoodlesResponse {
    updated: string;
    updateTime: string;
    totalShops: number;
    processingTimeMs: number;
    searchArea: SearchArea;
    districtStats: DistrictStats;
    errors: string[];
    shops: Shop[];
}
