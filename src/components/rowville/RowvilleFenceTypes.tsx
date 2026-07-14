import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const RowvilleFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Rowville" onQuoteClick={onQuoteClick} />;
export default RowvilleFenceTypes;
