import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const LilydaleFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Lilydale" onQuoteClick={onQuoteClick} />;
export default LilydaleFenceTypes;
