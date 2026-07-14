import SuburbFAQSection from "@/components/shared/SuburbFAQSection";
interface Props { onQuoteClick?: () => void; }
const BotanicRidgeFAQSection = ({ onQuoteClick }: Props) => <SuburbFAQSection suburbName="Botanic Ridge" onQuoteClick={onQuoteClick} />;
export default BotanicRidgeFAQSection;