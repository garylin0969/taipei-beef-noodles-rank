import RankBadge from '@/components/atoms/rank-badge';
import RatingDisplay from '@/components/atoms/rating-display';
import ReviewCountDisplay from '@/components/atoms/review-count-display';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Shop } from '@/types';

interface ShopCardProps {
    /** 店家資訊物件 */
    shop: Shop;
    /** 排名 */
    rank: number;
}

/**
 * 店家卡片元件
 * 
 * 顯示單一店家的詳細資訊，包含名稱、地址、評分、評論數等。
 * 提供按鈕連結至 Google Maps 查看。
 * 
 * @param {ShopCardProps} props - 元件屬性
 */
const ShopCard = ({ shop, rank }: ShopCardProps) => {
    /**
     * 開啟 Google Maps 連結
     * 使用經緯度定位並搜尋店家名稱
     */
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