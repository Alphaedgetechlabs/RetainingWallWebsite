import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const BlackburnFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Blackburn" onQuoteClick={onQuoteClick} />;
export default BlackburnFAQSection;