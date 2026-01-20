import { MessageCircle, Star } from 'lucide-react';
import SortButton from '@/components/molecules/sort-button';
import { SortType } from '@/utils/sort-utils';

interface SortControlsProps {
    /** 目前的排序方式 */
    sortBy: SortType;
    /** 排序變更事件處理函式 */
    onSortChange: (sortType: SortType) => void;
}

/**
 * 排序控制器元件
 * 
 * 提供使用者切換排序方式（評論數或評分）的介面。
 * 
 * @param {SortControlsProps} props - 元件屬性
 */
const SortControls = ({ sortBy, onSortChange }: SortControlsProps) => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <span>排序根據</span>
            <SortButton
                icon={MessageCircle}
                label="評論數"
                isActive={sortBy === SortType.USER_RATING_COUNT}
                onClick={() => onSortChange(SortType.USER_RATING_COUNT)}
            />
            <SortButton
                icon={Star}
                label="評分"
                isActive={sortBy === SortType.RATING}
                onClick={() => onSortChange(SortType.RATING)}
            />
        </div>
    );
};

export default SortControls;