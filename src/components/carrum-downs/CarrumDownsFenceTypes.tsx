import SuburbFenceTypes from "@/components/shared/SuburbFenceTypes";
interface Props { onQuoteClick?: () => void; }
const CarrumDownsFenceTypes = ({ onQuoteClick }: Props) => <SuburbFenceTypes suburbName="Carrum Downs" onQuoteClick={onQuoteClick} />;
export default CarrumDownsFenceTypes;