import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const AshwoodHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Ashwood" onQuoteClick={onQuoteClick} />;
export default AshwoodHowItWorks;