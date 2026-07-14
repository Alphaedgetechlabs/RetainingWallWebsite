import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const BayswaterFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Bayswater" onQuoteClick={onQuoteClick} />;
export default BayswaterFenceTypes;