import { useState, useMemo } from 'react';
import type { Shop } from '@/types';
import { filterAndSortShops, SortType } from '@/utils/sort-utils';

interface UseShopFiltersProps {
    shops: Shop[] | undefined;
}

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
