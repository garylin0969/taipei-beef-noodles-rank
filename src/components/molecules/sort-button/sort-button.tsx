import { type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SortButtonProps {
    /** 按鈕圖示元件 */
    icon: LucideIcon;
    /** 按鈕文字標籤 */
    label: string;
    /** 是否為當前選取的排序方式 */
    isActive: boolean;
    /** 點擊事件處理函式 */
    onClick: () => void;
}

/**
 * 排序按鈕元件
 *
 * 顯示帶有圖示的排序按鈕，根據啟用狀態改變樣式。
 *
 * @param {SortButtonProps} props - 元件屬性
 */
const SortButton = ({ icon: Icon, label, isActive, onClick }: SortButtonProps) => {
    return (
        <Button variant={isActive ? 'default' : 'outline'} onClick={onClick}>
            <Icon className="size-4" />
            {label}
        </Button>
    );
};

export default SortButton;