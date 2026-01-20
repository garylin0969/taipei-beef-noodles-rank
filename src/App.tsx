import DeclarationSection from '@/components/molecules/declaration-section';
import DistrictSelector from '@/components/organisms/district-selector';
import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import LoadingSkeleton from '@/components/organisms/loading-skeleton';
import ShopList from '@/components/organisms/shop-list';
import SortControls from '@/components/organisms/sort-controls';
import useShopFilters from '@/hooks/use-shop-filters';
import useTaipeiBeefNoodles from '@/hooks/use-taipei-beef-noodles';

/**
 * 主應用程式元件
 *
 * 整合 Header, Footer 以及主要內容區域。
 * 處理資料載入、錯誤狀態以及店家列表的顯示。
 */
function App() {
    const { data, isLoading, error } = useTaipeiBeefNoodles();
    const { shops, updateTime } = data || {};

    const { selectedDistrict, setSelectedDistrict, sortBy, setSortBy, districts, filteredAndSortedShops } =
        useShopFilters({ shops });

    if (isLoading) {
        return (
            <>
                <Header />
                <LoadingSkeleton className="max-w-4xl" />
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <main className="container mx-auto my-8 max-w-4xl p-4">
                    <div className="bg-destructive/10 text-destructive rounded-md p-4">
                        <p className="font-bold">載入失敗</p>
                        <p>{error?.message}</p>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
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
                    <DeclarationSection updateTime={updateTime} />
                </div>
                <ShopList shops={filteredAndSortedShops} />
            </main>
            <Footer />
        </>
    );
}

export default App;