import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DistrictSelectorProps {
    /** 目前選取的區域 */
    selectedDistrict: string;
    /** 可用的區域列表 */
    districts: string[];
    /** 區域變更事件處理函式 */
    onDistrictChange: (district: string) => void;
}

/**
 * 區域選擇器元件
 * 
 * 提供下拉式選單讓使用者篩選特定區域的店家。
 * 
 * @param {DistrictSelectorProps} props - 元件屬性
 */
const DistrictSelector = ({ selectedDistrict, districts, onDistrictChange }: DistrictSelectorProps) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <span>區域選擇</span>
            <Select value={selectedDistrict} onValueChange={onDistrictChange}>
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
    );
};

export default DistrictSelector;