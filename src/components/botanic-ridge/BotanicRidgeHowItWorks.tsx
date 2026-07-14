import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const BotanicRidgeHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Botanic Ridge" onQuoteClick={onQuoteClick} />;
export default BotanicRidgeHowItWorks;