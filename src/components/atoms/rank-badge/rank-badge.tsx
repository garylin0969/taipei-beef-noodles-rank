import { cn } from '@/utils/shadcn';

interface RankBadgeProps {
    /** 排名數字 */
    rank: number;
    /** 額外的 CSS class */
    className?: string;
}

/**
 * 排名徽章元件
 * 
 * 顯示店家的排名數字，自動補零至兩位數。
 * 
 * @param {RankBadgeProps} props - 元件屬性
 */
const RankBadge = ({ rank, className = '' }: RankBadgeProps) => {
    const formattedRank = rank.toString().padStart(2, '0');

    return <span className={cn('text-primary font-bold', className)}>{formattedRank}.</span>;
};

export default RankBadge;