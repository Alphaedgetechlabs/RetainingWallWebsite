import SuburbHowItWorks from "@/components/shared/SuburbHowItWorks";
interface Props { onQuoteClick?: () => void; }
const DingleyVillageHowItWorks = ({ onQuoteClick }: Props) => <SuburbHowItWorks suburbName="Dingley Village" onQuoteClick={onQuoteClick} />;
export default DingleyVillageHowItWorks;