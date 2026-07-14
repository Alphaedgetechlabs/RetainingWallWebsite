import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const CarrumDownsHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Carrum Downs" onQuoteClick={onQuoteClick} />;
export default CarrumDownsHowItWorks;