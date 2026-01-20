import { MessageCircle } from 'lucide-react';
import { cn } from '@/utils/shadcn';

interface ReviewCountDisplayProps {
    /** 評論數量 */
    count: number;
    /** 額外的 CSS class */
    className?: string;
}

/**
 * 評論數顯示元件
 *
 * 顯示帶有訊息圖示的評論數量。
 *
 * @param {ReviewCountDisplayProps} props - 元件屬性
 */
const ReviewCountDisplay = ({ count, className = '' }: ReviewCountDisplayProps) => {
    return (
        <p className={cn('flex items-center gap-1', className)}>
            <MessageCircle className="size-4" />
            {count}
        </p>
    );
};

export default ReviewCountDisplay;