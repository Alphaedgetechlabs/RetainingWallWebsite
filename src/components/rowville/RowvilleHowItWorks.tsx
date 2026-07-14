import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const RowvilleHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Rowville" onQuoteClick={onQuoteClick} />;
export default RowvilleHowItWorks;
