import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const RowvilleFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Rowville" onQuoteClick={onQuoteClick} />;
export default RowvilleFAQSection;
