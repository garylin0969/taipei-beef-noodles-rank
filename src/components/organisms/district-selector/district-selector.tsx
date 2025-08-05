import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DistrictSelectorProps {
    selectedDistrict: string;
    districts: string[];
    onDistrictChange: (district: string) => void;
}

// 區域選擇器
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
