import { useQuery } from '@tanstack/react-query';
import { GetTaipeiBeefNoodles } from '@/services';
import type { TaipeiBeefNoodlesResponse } from '@/types';

// 使用 react-query 獲取台北牛肉麵資料
const useTaipeiBeefNoodles = () => {
    const query = useQuery<TaipeiBeefNoodlesResponse>({
        queryKey: ['taipei-beef-noodles'],
        queryFn: GetTaipeiBeefNoodles,
    });

    return query;
};

export default useTaipeiBeefNoodles;
