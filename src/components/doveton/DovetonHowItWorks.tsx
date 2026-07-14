import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const DovetonHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Doveton" onQuoteClick={onQuoteClick} />;
export default DovetonHowItWorks;