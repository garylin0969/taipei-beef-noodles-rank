import { useState, useMemo } from 'react';
import type { Shop } from '@/types';
import { filterAndSortShops, SortType } from '@/utils/sort-utils';

/**
 * useShopFilters Hook 的 Props 介面
 */
interface UseShopFiltersProps {
    /** 店家列表資料 */
    shops: Shop[] | undefined;
}

/**
 * 店家過濾與排序 Hook
 * 
 * 管理店家列表的區域篩選與排序狀態，並計算篩選後的結果。
 * 
 * @param {UseShopFiltersProps} props - Hook 的輸入參數
 * @returns 包含狀態控制函數與篩選結果的物件
 */
const useShopFilters = ({ shops }: UseShopFiltersProps) => {
    const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
    const [sortBy, setSortBy] = useState<SortType>(SortType.USER_RATING_COUNT);

    // 取得所有區域（排除空值）
    const districts = useMemo(() => {
        if (!shops) return [];
        return [...new Set(shops.map((shop) => shop.district).filter(Boolean))];
    }, [shops]);

    // 根據選擇的區域和排序方式處理資料
    const filteredAndSortedShops = useMemo(() => {
        if (!shops) return [];
        return filterAndSortShops(shops, sortBy, selectedDistrict);
    }, [shops, selectedDistrict, sortBy]);

    return {
        selectedDistrict,
        setSelectedDistrict,
        sortBy,
        setSortBy,
        districts,
        filteredAndSortedShops,
    };
};

export default useShopFilters;
