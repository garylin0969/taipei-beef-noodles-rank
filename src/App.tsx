import DistrictSelector from '@/components/organisms/district-selector';
import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import LoadingSkeleton from '@/components/organisms/loading-skeleton';
import ShopList from '@/components/organisms/shop-list';
import SortControls from '@/components/organisms/sort-controls';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import useShopFilters from '@/hooks/use-shop-filters';
import useTaipeiBeefNoodles from '@/hooks/use-taipei-beef-noodles';

function App() {
    const { data, isLoading, error } = useTaipeiBeefNoodles();
    const { shops, updateTime } = data || {};

    const { selectedDistrict, setSelectedDistrict, sortBy, setSortBy, districts, filteredAndSortedShops } =
        useShopFilters({ shops });

    const renderContent = () => {
        if (isLoading) {
            return <LoadingSkeleton className="max-w-4xl" />;
        }

        if (error) {
            return (
                <main className="container mx-auto my-8 max-w-4xl p-4">
                    <p>載入失敗：{error?.message}</p>
                </main>
            );
        }

        return (
            <main className="container mx-auto my-8 max-w-4xl p-4">
                <div className="mb-4 space-y-4">
                    <SortControls sortBy={sortBy} onSortChange={setSortBy} />
                    <DistrictSelector
                        selectedDistrict={selectedDistrict}
                        districts={districts}
                        onDistrictChange={setSelectedDistrict}
                    />
                    <div className="text-muted-foreground text-right text-sm">
                        <p>顯示 {filteredAndSortedShops?.length} 筆資料</p>
                    </div>
                    <Accordion type="single" collapsible className="bg-muted rounded-md p-2">
                        <AccordionItem value="declaration">
                            <AccordionTrigger>聲明</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-inside list-disc">
                                    <li>本站無任何商業營利行為</li>
                                    <li>本站資料來源為 Google Maps</li>
                                    <li>本站資料僅供參考，不代表任何立場</li>
                                    <li>當排序方式為評分且評分相同時，根據評論數排序</li>
                                    <li>當區域選擇為全部時，顯示前60筆資料</li>
                                    <li>當區域選擇為其他時，顯示前5筆資料</li>
                                    <li>因作者怕橫死街頭，故只顯示前列資料</li>
                                    <li>資料更新時間：{updateTime}</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <ShopList shops={filteredAndSortedShops} />
            </main>
        );
    };

    return (
        <>
            <Header />
            {renderContent()}
            <Footer />
        </>
    );
}

export default App;
