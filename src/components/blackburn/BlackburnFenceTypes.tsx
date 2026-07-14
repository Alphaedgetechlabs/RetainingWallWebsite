import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const BlackburnFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Blackburn" onQuoteClick={onQuoteClick} />;
export default BlackburnFenceTypes;