import { MessageCircle, Star } from 'lucide-react';
import { useState, useMemo } from 'react';
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

        // 根據評論數或評分排序（降序）
        const sortedShops = [...filteredShops].sort((a, b) => b[sortBy] - a[sortBy]);

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
                    <p>資料更新時間：{updateTime}</p>
                </div>
            </div>
            <ul className="space-y-4">
                {filteredAndSortedShops.map((shop) => (
                    <Card key={shop.id}>
                        <CardHeader>
                            <CardTitle>{shop.name}</CardTitle>
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
                                <Button>View</Button>
                            </CardAction>
                        </CardContent>
                    </Card>
                ))}
            </ul>
        </main>
    );
}

export default App;
