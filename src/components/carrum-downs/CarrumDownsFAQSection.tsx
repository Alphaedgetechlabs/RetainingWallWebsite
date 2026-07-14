import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const CarrumDownsFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Carrum Downs" onQuoteClick={onQuoteClick} />;
export default CarrumDownsFAQSection;