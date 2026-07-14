import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const ClaytonFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Clayton" onQuoteClick={onQuoteClick} />;
export default ClaytonFenceTypes;