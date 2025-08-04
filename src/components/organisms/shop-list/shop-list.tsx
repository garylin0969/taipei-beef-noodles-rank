import ShopCard from '@/components/molecules/shop-card';
import type { Shop } from '@/types';

interface ShopListProps {
    shops: Shop[];
}

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
