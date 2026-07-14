import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const BlackburnHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Blackburn" onQuoteClick={onQuoteClick} />;
export default BlackburnHowItWorks;