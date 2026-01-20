import { Star } from 'lucide-react';
import { cn } from '@/utils/shadcn';

interface RatingDisplayProps {
    /** 評分分數 */
    rating: number;
    /** 額外的 CSS class */
    className?: string;
}

/**
 * 評分顯示元件
 * 
 * 顯示帶有星星圖示的評分分數。
 * 
 * @param {RatingDisplayProps} props - 元件屬性
 */
const RatingDisplay = ({ rating, className = '' }: RatingDisplayProps) => {
    return (
        <p className={cn('flex items-center gap-1', className)}>
            <Star className="size-4" />
            {rating}
        </p>
    );
};

export default RatingDisplay;