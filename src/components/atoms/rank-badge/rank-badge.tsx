import { cn } from '@/utils/shadcn';

interface RankBadgeProps {
    rank: number;
    className?: string;
}

const RankBadge = ({ rank, className = '' }: RankBadgeProps) => {
    const formattedRank = rank.toString().padStart(2, '0');

    return <span className={cn('text-primary font-bold', className)}>{formattedRank}.</span>;
};

export default RankBadge;
