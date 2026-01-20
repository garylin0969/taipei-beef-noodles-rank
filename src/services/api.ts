import axios from 'axios';
import type { TaipeiBeefNoodlesResponse, Shop } from '@/types';

/**
 * 取得台北牛肉麵資料的 API 函式
 *
 * 從 GitHub Pages 獲取 JSON 資料，並過濾掉沒有區域資訊的店家。
 *
 * @returns {Promise<TaipeiBeefNoodlesResponse>} 回傳包含店家列表與統計資訊的 Promise 物件
 */
export const getTaipeiBeefNoodles = async (): Promise<TaipeiBeefNoodlesResponse> => {
  const response = await axios.get<TaipeiBeefNoodlesResponse>(
    'https://garylin0969.github.io/json-gather/data/taipei-beef-noodles.json'
  );
  const data = response.data;

  // 過濾掉沒有區域資訊的店家
  if (data.shops) {
    data.shops = data.shops.filter((shop: Shop) => shop.district);
  }

  return data;
};
