import ShopCard from '@/components/molecules/shop-card';
import type { Shop } from '@/types';

interface ShopListProps {
    /** 店家列表資料 */
    shops: Shop[];
}

/**
 * 店家列表元件
 * 
 * 渲染店家卡片的列表。
 * 
 * @param {ShopListProps} props - 元件屬性
 */
const ShopList = ({ shops }: ShopListProps) => {
    return (
        <ul className="space-y-4">
            {shops.map((shop, index) => (
                <ShopCard key={shop.id} shop={shop} rank={index + 1} />
            ))}
        </ul>
    );
};

export default ShopList;