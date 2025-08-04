import { MessageCircle, Star } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import useTaipeiBeefNoodles from './hooks/use-taipei-beef-noodles';

// 排序方式常數
const SortType = {
    USER_RATING_COUNT: 'userRatingCount',
    RATING: 'rating',
} as const;

type SortType = (typeof SortType)[keyof typeof SortType];

function App() {
    const { data, isLoading, error } = useTaipeiBeefNoodles();
    const [selectedDistrict, setSelectedDistrict] = useState<string>('all');
    const [sortBy, setSortBy] = useState<SortType>(SortType.USER_RATING_COUNT);

    const { updateTime, shops } = data || {};

    // 取得所有區域（排除空值）
    const districts = useMemo(() => {
        if (!shops) return [];
        return [...new Set(shops.map((shop) => shop.district).filter(Boolean))];
    }, [shops]);

    // 根據選擇的區域和排序方式處理資料
    const filteredAndSortedShops = useMemo(() => {
        if (!shops) return [];

        // 根據區域篩選
        let filteredShops = shops;
        if (selectedDistrict !== 'all') {
            filteredShops = shops.filter((shop) => shop.district === selectedDistrict);
        }

        // 根據評論數或評分排序（降序），評分相同時根據評論數排序
        const sortedShops = [...filteredShops].sort((a, b) => {
            if (sortBy === SortType.RATING) {
                // 評分相同時，根據評論數排序
                if (a.rating === b.rating) {
                    return b.userRatingCount - a.userRatingCount;
                }
                return b.rating - a.rating;
            }
            // 評論數排序
            return b.userRatingCount - a.userRatingCount;
        });

        // 根據選擇的區域決定顯示數量
        const limit = selectedDistrict === 'all' ? 30 : 5;

        return sortedShops.slice(0, limit);
    }, [shops, selectedDistrict, sortBy]);

    if (isLoading) {
        return (
            <main className="container mx-auto my-8 p-4">
                <Skeleton className="mb-4 h-4 w-48" />
                <div className="mb-4 flex flex-wrap items-center gap-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                </div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-[180px]" />
                </div>
                <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="space-y-2">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <Skeleton className="h-4 w-16" />
                                    <Skeleton className="h-4 w-20" />
                                </div>
                                <Skeleton className="h-10 w-16" />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        );
    }

    if (error) {
        return (
            <main className="container mx-auto my-8 p-4">
                <p>載入失敗：{error?.message}</p>
            </main>
        );
    }

    return (
        <main className="container mx-auto my-8 p-4">
            <div className="mb-4 space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <span>排序根據</span>
                    <Button
                        variant={sortBy === SortType.USER_RATING_COUNT ? 'default' : 'outline'}
                        onClick={() => setSortBy(SortType.USER_RATING_COUNT)}
                    >
                        <MessageCircle className="size-4" />
                        評論數
                    </Button>
                    <Button
                        variant={sortBy === SortType.RATING ? 'default' : 'outline'}
                        onClick={() => setSortBy(SortType.RATING)}
                    >
                        <Star className="size-4" />
                        評分
                    </Button>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <span>區域選擇</span>
                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="全部" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">全部</SelectItem>
                            {districts.map((district) => (
                                <SelectItem key={district} value={district}>
                                    {district}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="text-muted-foreground text-right text-sm">
                    <p>顯示 {filteredAndSortedShops?.length} 筆資料</p>
                </div>
                <Accordion type="single" collapsible className="bg-muted rounded-md p-2">
                    <AccordionItem value="declaration">
                        <AccordionTrigger>聲明</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-inside list-disc">
                                <li>本站無任何商業營利行為</li>
                                <li>本站資料來源為 Google Map</li>
                                <li>本站資料僅供參考，不代表任何立場</li>
                                <li>當排序方式為評分且評分相同時，根據評論數排序</li>
                                <li>當區域選擇為全部時，顯示前30筆資料</li>
                                <li>當區域選擇為其他時，顯示前5筆資料</li>
                                <li>因作者怕橫死街頭，故只顯示前列資料</li>
                                <li>資料更新時間：{updateTime}</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <ul className="space-y-4">
                {filteredAndSortedShops.map((shop, index) => {
                    const rank = (index + 1)?.toString()?.padStart(2, '0');
                    return (
                        <Card key={shop.id}>
                            <CardHeader>
                                <CardTitle>
                                    {rank}. {shop.name}
                                </CardTitle>
                                <CardDescription>{shop.formattedAddress}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <p className="flex items-center gap-1">
                                        <Star className="size-4" />
                                        {shop.rating}
                                    </p>
                                    <p className="flex items-center gap-1">
                                        <MessageCircle className="size-4" />
                                        {shop.userRatingCount}
                                    </p>
                                </div>
                                <CardAction>
                                    <Button
                                        onClick={() => {
                                            const { latitude, longitude } = shop.location;
                                            const { name } = shop;
                                            // 使用店家名稱和座標建立 Google Maps URL
                                            const url = `https://www.google.com/maps/search/${encodeURIComponent(name)}/@${latitude},${longitude},15z`;
                                            window.open(url, '_blank');
                                        }}
                                    >
                                        View
                                    </Button>
                                </CardAction>
                            </CardContent>
                        </Card>
                    );
                })}
            </ul>
        </main>
    );
}

export default App;
