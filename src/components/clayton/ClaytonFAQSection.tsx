import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const ClaytonFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Clayton" onQuoteClick={onQuoteClick} />;
export default ClaytonFAQSection;