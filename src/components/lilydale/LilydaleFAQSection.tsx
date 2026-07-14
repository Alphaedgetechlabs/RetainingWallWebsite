import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const LilydaleFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Lilydale" onQuoteClick={onQuoteClick} />;
export default LilydaleFAQSection;
