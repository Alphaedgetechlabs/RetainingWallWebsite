import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const CarltonHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Carlton" onQuoteClick={onQuoteClick} />;
export default CarltonHowItWorks;