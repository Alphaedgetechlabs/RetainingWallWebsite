import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const ColdstreamHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Coldstream" onQuoteClick={onQuoteClick} />;
export default ColdstreamHowItWorks;