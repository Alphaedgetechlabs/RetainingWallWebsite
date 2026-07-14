import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const AshwoodFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Ashwood" onQuoteClick={onQuoteClick} />;
export default AshwoodFenceTypes;