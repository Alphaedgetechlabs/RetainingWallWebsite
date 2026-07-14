import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const ClaytonHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Clayton" onQuoteClick={onQuoteClick} />;
export default ClaytonHowItWorks;