import { MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import useTaipeiBeefNoodles from './hooks/use-taipei-beef-noodles';

function App() {
    const { data, isLoading, error } = useTaipeiBeefNoodles();

    const { updateTime, shops, rating, userRatingCount } = data || {};

    const districts = [...new Set(shops?.map((shop) => shop?.district))];

    return (
        <main className="container mx-auto my-8 p-4">
            <p className="text-muted-foreground mb-4 text-sm">上次更新時間：{updateTime}</p>
            <div className="mb-4 flex flex-wrap items-center gap-2">
                <span>排序根據</span>
                <Button variant="outline">
                    <MessageCircle className="size-4" />
                    評論數
                </Button>
                <Button variant="outline">
                    <Star className="size-4" />
                    評分
                </Button>
            </div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
                <span>區域選擇</span>
                <Select>
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
            <ul className="space-y-4">
                {shops?.map((shop) => (
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
