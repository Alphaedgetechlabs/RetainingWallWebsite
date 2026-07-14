import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const CarltonFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Carlton" onQuoteClick={onQuoteClick} />;
export default CarltonFenceTypes;