import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const RingwoodFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Ringwood" onQuoteClick={onQuoteClick} />;
export default RingwoodFAQSection;
