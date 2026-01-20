import { useQuery } from '@tanstack/react-query';
import { GetTaipeiBeefNoodles } from '@/services';
import type { TaipeiBeefNoodlesResponse } from '@/types';

/**
 * 使用 React Query 獲取台北牛肉麵資料的 Hook
 *
 * 封裝了 useQuery 來獲取和快取 API 回傳的資料。
 *
 * @returns UseQuery 的回傳結果，包含 data, isLoading, error 等狀態
 */
const useTaipeiBeefNoodles = () => {
    const query = useQuery<TaipeiBeefNoodlesResponse>({
        queryKey: ['taipei-beef-noodles'],
        queryFn: GetTaipeiBeefNoodles,
    });

    return query;
};

export default useTaipeiBeefNoodles;
