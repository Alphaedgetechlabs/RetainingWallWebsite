import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const BayswaterHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Bayswater" onQuoteClick={onQuoteClick} />;
export default BayswaterHowItWorks;