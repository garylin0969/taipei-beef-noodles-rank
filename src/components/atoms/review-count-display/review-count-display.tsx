import { MessageCircle } from 'lucide-react';
import { cn } from '@/utils/shadcn';

interface ReviewCountDisplayProps {
    count: number;
    className?: string;
}

// 評論數顯示
const ReviewCountDisplay = ({ count, className = '' }: ReviewCountDisplayProps) => {
    return (
        <p className={cn('flex items-center gap-1', className)}>
            <MessageCircle className="size-4" />
            {count}
        </p>
    );
};

export default ReviewCountDisplay;
