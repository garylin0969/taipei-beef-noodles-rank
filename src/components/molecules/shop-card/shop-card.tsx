import RankBadge from '@/components/atoms/rank-badge';
import RatingDisplay from '@/components/atoms/rating-display';
import ReviewCountDisplay from '@/components/atoms/review-count-display';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Shop } from '@/types';

interface ShopCardProps {
    shop: Shop;
    rank: number;
}

// 店家卡片
const ShopCard = ({ shop, rank }: ShopCardProps) => {
    // 使用 react-map-gl 實現地圖功能
    const handleViewOnMap = () => {
        const { latitude, longitude } = shop.location;
        const { name } = shop;
        const url = `https://www.google.com/maps/search/${encodeURIComponent(name)}/@${latitude},${longitude},15z`;
        window.open(url, '_blank');
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <RankBadge rank={rank} className="mr-2" />
                    {shop.name}
                </CardTitle>
                <CardDescription>{shop.formattedAddress}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <div className="flex gap-2">
                    <RatingDisplay rating={shop.rating} />
                    <ReviewCountDisplay count={shop.userRatingCount} />
                </div>
                <CardAction>
                    <Button onClick={handleViewOnMap}>View</Button>
                </CardAction>
            </CardContent>
        </Card>
    );
};

export default ShopCard;
