import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const RingwoodHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Ringwood" onQuoteClick={onQuoteClick} />;
export default RingwoodHowItWorks;
