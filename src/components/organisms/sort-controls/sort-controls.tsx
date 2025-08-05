import { MessageCircle, Star } from 'lucide-react';
import SortButton from '@/components/molecules/sort-button';

// 排序方式常數
const SortType = {
    USER_RATING_COUNT: 'userRatingCount',
    RATING: 'rating',
} as const;

type SortType = (typeof SortType)[keyof typeof SortType];

interface SortControlsProps {
    sortBy: SortType;
    onSortChange: (sortType: SortType) => void;
}

// 排序控制器
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
