import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const LilydaleHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Lilydale" onQuoteClick={onQuoteClick} />;
export default LilydaleHowItWorks;
