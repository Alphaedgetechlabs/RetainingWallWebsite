import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const PakenhamHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Pakenham" onQuoteClick={onQuoteClick} />;
export default PakenhamHowItWorks;
