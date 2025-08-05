import axios from 'axios';
import type { TaipeiBeefNoodlesResponse, Shop } from '@/types';

// 獲取台北牛肉麵資料
export const GetTaipeiBeefNoodles = async (): Promise<TaipeiBeefNoodlesResponse> => {
    const response = await axios.get('https://garylin0969.github.io/json-gather/data/taipei-beef-noodles.json');
    const data = response?.data;
    data.shops = data.shops?.filter((shop: Shop) => shop.district);
    return data;
};
