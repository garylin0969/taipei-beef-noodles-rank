import type { Shop } from '@/types';

// 排序方式常數
export const SortType = {
    USER_RATING_COUNT: 'userRatingCount',
    RATING: 'rating',
} as const;

export type SortType = (typeof SortType)[keyof typeof SortType];

// 顯示數量限制
const LIMIT_ALL_DISTRICTS = 60;
const LIMIT_SINGLE_DISTRICT = 5;

/**
 * 根據排序方式和區域篩選店家
 *
 * 1. 根據區域篩選店家
 * 2. 過濾掉無效資料（評論數或評分 <= 0）
 * 3. 根據排序方式排序（評分或評論數）
 * 4. 根據區域選擇限制回傳數量
 *
 * @param {Shop[]} shops - 店家列表
 * @param {SortType} sortBy - 排序方式 (評分或評論數)
 * @param {string} selectedDistrict - 選擇的區域 ('all' 或特定區域)
 * @returns {Shop[]} 篩選並排序後的店家列表
 */
export const filterAndSortShops = (shops: Shop[], sortBy: SortType, selectedDistrict: string): Shop[] => {
    if (!shops || shops.length === 0) return [];

    // 根據區域篩選
    let filteredShops = shops;
    if (selectedDistrict !== 'all') {
        filteredShops = shops.filter((shop) => shop.district === selectedDistrict);
    }

    // 確保所有店家都有有效的評論數和評分
    const validShops = filteredShops.filter((shop) => {
        return shop.userRatingCount > 0 && shop.rating > 0;
    });

    // 根據評論數或評分排序（降序），評分相同時根據評論數排序
    const sortedShops = [...validShops].sort((a, b) => {
        if (sortBy === SortType.RATING) {
            // 評分相同時，根據評論數排序
            if (a.rating === b.rating) {
                return b.userRatingCount - a.userRatingCount;
            }
            return b.rating - a.rating;
        }
        // 評論數排序
        return b.userRatingCount - a.userRatingCount;
    });

    // 根據選擇的區域決定顯示數量
    const limit = selectedDistrict === 'all' ? LIMIT_ALL_DISTRICTS : LIMIT_SINGLE_DISTRICT;

    return sortedShops.slice(0, limit);
};