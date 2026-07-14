import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const BayswaterFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Bayswater" onQuoteClick={onQuoteClick} />;
export default BayswaterFAQSection;