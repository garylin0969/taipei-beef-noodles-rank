import { type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SortButtonProps {
    icon: LucideIcon;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

// 排序按鈕
const SortButton = ({ icon: Icon, label, isActive, onClick }: SortButtonProps) => {
    return (
        <Button variant={isActive ? 'default' : 'outline'} onClick={onClick}>
            <Icon className="size-4" />
            {label}
        </Button>
    );
};

export default SortButton;
