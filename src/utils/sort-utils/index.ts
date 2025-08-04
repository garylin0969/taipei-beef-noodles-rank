import type { Shop } from '@/types';

// 排序方式常數
export const SortType = {
    USER_RATING_COUNT: 'userRatingCount',
    RATING: 'rating',
} as const;

export type SortType = (typeof SortType)[keyof typeof SortType];

/**
 * 根據排序方式和區域篩選店家
 * @param shops 店家列表
 * @param sortBy 排序方式
 * @param selectedDistrict 選擇的區域
 * @returns 篩選並排序後的店家列表
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
    const limit = selectedDistrict === 'all' ? 60 : 5;

    // 添加調試資訊
    console.log('排序資訊:', {
        totalShops: shops.length,
        filteredShops: filteredShops.length,
        validShops: validShops.length,
        sortedShops: sortedShops.length,
        limit,
        sortBy,
        selectedDistrict,
        topShops: sortedShops.slice(0, 5).map((shop) => ({
            name: shop.name,
            rating: shop.rating,
            userRatingCount: shop.userRatingCount,
            district: shop.district,
        })),
    });

    return sortedShops.slice(0, limit);
};
