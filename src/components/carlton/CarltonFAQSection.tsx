import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const CarltonFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Carlton" onQuoteClick={onQuoteClick} />;
export default CarltonFAQSection;