import { useQuery } from '@tanstack/react-query';
import { GetTaipeiBeefNoodles } from '@/services';
import type { TaipeiBeefNoodlesResponse } from '@/types';

const useTaipeiBeefNoodles = () => {
    const query = useQuery<TaipeiBeefNoodlesResponse>({
        queryKey: ['taipei-beef-noodles'],
        queryFn: GetTaipeiBeefNoodles,
    });

    return query;
};

export default useTaipeiBeefNoodles;
