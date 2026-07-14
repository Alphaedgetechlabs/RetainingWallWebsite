import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const PakenhamFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Pakenham" onQuoteClick={onQuoteClick} />;
export default PakenhamFAQSection;
