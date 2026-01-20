import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface DeclarationSectionProps {
    updateTime?: string;
}

/**
 * 聲明區塊元件
 * 
 * 顯示網站的免責聲明、資料來源及更新時間等資訊。
 * 使用 Accordion 收合內容以節省空間。
 * 
 * @param {string} updateTime - 資料更新時間字串
 */
export const DeclarationSection = ({ updateTime }: DeclarationSectionProps) => {
    return (
        <Accordion type="single" collapsible className="bg-muted rounded-md p-2">
            <AccordionItem value="declaration">
                <AccordionTrigger>聲明</AccordionTrigger>
                <AccordionContent>
                    <ul className="list-inside list-disc">
                        <li>本站無任何商業營利行為</li>
                        <li>本站資料來源為 Google Maps</li>
                        <li>本站資料僅供參考，不代表任何立場</li>
                        <li>當排序方式為評分且評分相同時，根據評論數排序</li>
                        <li>當區域選擇為全部時，顯示前 60 筆資料</li>
                        <li>當區域選擇為其他時，顯示前 5 筆資料</li>
                        <li>因作者怕橫死街頭，故只顯示前列資料</li>
                        {updateTime && <li>資料更新時間：{updateTime}</li>}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default DeclarationSection;
