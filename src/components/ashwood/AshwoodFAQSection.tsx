import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const AshwoodFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Ashwood" onQuoteClick={onQuoteClick} />;
export default AshwoodFAQSection;