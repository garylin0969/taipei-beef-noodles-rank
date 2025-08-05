import { Star } from 'lucide-react';
import { cn } from '@/utils/shadcn';

interface RatingDisplayProps {
    rating: number;
    className?: string;
}

// 評分顯示
const RatingDisplay = ({ rating, className = '' }: RatingDisplayProps) => {
    return (
        <p className={cn('flex items-center gap-1', className)}>
            <Star className="size-4" />
            {rating}
        </p>
    );
};

export default RatingDisplay;
