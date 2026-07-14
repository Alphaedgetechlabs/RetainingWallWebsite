import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const RingwoodFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Ringwood" onQuoteClick={onQuoteClick} />;
export default RingwoodFenceTypes;
