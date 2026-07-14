import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const PakenhamFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Pakenham" onQuoteClick={onQuoteClick} />;
export default PakenhamFenceTypes;
