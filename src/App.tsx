import { useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import usePrefetch from "./hooks/usePrefetch";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ColorbondFencing from "./pages/ColorbondFencing";
import TimberFencing from "./pages/TimberFencing";
import AluminiumFencing from "./pages/AluminiumFencing";
import GlassFencing from "./pages/GlassFencing";
import FeatureFencing from "./pages/FeatureFencing";
import ChainLinkFencing from "./pages/ChainLinkFencing";
import SecurityFencing from "./pages/SecurityFencing";
import SteelFencing from "./pages/SteelFencing";
import PoolFencing from "./pages/PoolFencing";
import FenceRepairs from "./pages/FenceRepairs";
import GateInstallation from "./pages/GateInstallation";
import Sydney from "./pages/Sydney";
import Melbourne from "./pages/Melbourne";
import Brisbane from "./pages/Brisbane";
import Perth from "./pages/Perth";
import Adelaide from "./pages/Adelaide";
import Canberra from "./pages/Canberra";
import Hobart from "./pages/Hobart";
import Darwin from "./pages/Darwin";
import FencingGuides from "./pages/FencingGuides";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import SubscriptionConfirmation from "./pages/SubscriptionConfirmation";
import MelbournePakenham from "./pages/MelbournePakenham";
import MelbournePortsea from "./pages/MelbournePortsea";
import MelbourneSorrento from "./pages/MelbourneSorrento";
import MelbourneMountMartha from "./pages/MelbourneMountMartha";
import MelbourneLangwarrin from "./pages/MelbourneLangwarrin";
import MelbourneFrankston from "./pages/MelbourneFrankston";
import MelbourneCarrumDowns from "./pages/MelbourneCarrumDowns";
import MelbourneMornington from "./pages/MelbourneMornington";
import MelbourneRosebud from "./pages/MelbourneRosebud";
import MelbourneMountEliza from "./pages/MelbourneMountEliza";
import MelbourneCranbourne from "./pages/MelbourneCranbourne";
import MelbourneBerwick from "./pages/MelbourneBerwick";
import MelbourneNarreWarren from "./pages/MelbourneNarreWarren";
import MelbourneOfficer from "./pages/MelbourneOfficer";
import MelbourneBotanicRidge from "./pages/MelbourneBotanicRidge";
import MelbourneLynbrook from "./pages/MelbourneLynbrook";
import MelbourneRingwood from "./pages/MelbourneRingwood";
import MelbourneLilydale from "./pages/MelbourneLilydale";
import MelbourneRowville from "./pages/MelbourneRowville";
import MelbourneCroydon from "./pages/MelbourneCroydon";
import MelbourneBoxHill from "./pages/MelbourneBoxHill";
import MelbourneToorak from "./pages/MelbourneToorak";
import MelbourneGlenWaverley from "./pages/MelbourneGlenWaverley";
import MelbourneRichmond from "./pages/MelbourneRichmond";
import MelbourneSouthYarra from "./pages/MelbourneSouthYarra";
import MelbourneDoncaster from "./pages/MelbourneDoncaster";
import MelbourneStKilda from "./pages/MelbourneStKilda";
import MelbourneMountWaverley from "./pages/MelbourneMountWaverley";
import MelbourneCarlton from "./pages/MelbourneCarlton";
import MelbourneDandenong from "./pages/MelbourneDandenong";
import MelbourneBayswater from "./pages/MelbourneBayswater";
import MelbourneClayton from "./pages/MelbourneClayton";
import MelbourneWantirna from "./pages/MelbourneWantirna";
import MelbourneFerntreeGully from "./pages/MelbourneFerntreeGully";
import MelbourneSeaford from "./pages/MelbourneSeaford";
import MelbourneClyde from "./pages/MelbourneClyde";
import MelbourneBoronia from "./pages/MelbourneBoronia";
import MelbourneWheelersHill from "./pages/MelbourneWheelersHill";
import MelbourneSpringvale from "./pages/MelbourneSpringvale";
import MelbourneTemplestowe from "./pages/MelbourneTemplestowe";
import MelbourneAshwood from "./pages/MelbourneAshwood";
import MelbourneHamptonPark from "./pages/MelbourneHamptonPark";
import MelbourneMooroolbark from "./pages/MelbourneMooroolbark";
import MelbourneKilsyth from "./pages/MelbourneKilsyth";
import MelbourneBurwood from "./pages/MelbourneBurwood";
import MelbourneEndeavourHills from "./pages/MelbourneEndeavourHills";
import MelbourneKeysborough from "./pages/MelbourneKeysborough";
import MelbourneSomerville from "./pages/MelbourneSomerville";
import MelbourneBlackburn from "./pages/MelbourneBlackburn";
import MelbourneNoblePark from "./pages/MelbourneNoblepark";
import MelbourneBalwyn from "./pages/MelbourneBalwyn";
import MelbourneChirnsidePark from "./pages/MelbourneChirnsidePark";
import MelbourneScoresby from "./pages/MelbourneScoresby";
import MelbourneHallam from "./pages/MelbourneHallam";
import MelbourneMulgrave from "./pages/MelbourneMulgrave";
import MelbourneBeaconsfield from "./pages/MelbourneBeaconsfield";
import MelbourneChelsea from "./pages/MelbourneChelsea";
import MelbourneNunawading from "./pages/MelbourneNunawading";
import MelbourneRye from "./pages/MelbourneRye";
import MelbourneMitcham from "./pages/MelbourneMitcham";
import MelbourneDromana from "./pages/MelbourneDromana";
import MelbourneHastings from "./pages/MelbourneHastings";
import MelbourneHeathmont from "./pages/MelbourneHeathmont";
import MelbourneKnoxfield from "./pages/MelbourneKnoxfield";
import MelbourneSkye from "./pages/MelbourneSkye";
import MelbourneMontrose from "./pages/MelbourneMontrose";
import MelbourneWarranwood from "./pages/MelbourneWarranwood";
import MelbourneTheBasin from "./pages/MelbourneTheBasin";
import MelbourneSafetyBeach from "./pages/MelbourneSafetyBeach";
import MelbourneWongaPark from "./pages/MelbourneWongaPark";
import MelbourneLyndhurst from "./pages/MelbourneLyndhurst";
import MelbourneMentone from "./pages/MelbourneMentone";
import MelbourneSyndal from "./pages/MelbourneSyndal";
import MelbourneNottingHill from "./pages/MelbourneNottingHill";
import MelbourneEumemmerring from "./pages/MelbourneEumemmerring";
import MelbourneDoveton from "./pages/MelbourneDoveton";
import MelbourneColdstream from "./pages/MelbourneColdstream";
import MelbourneJunctionVillage from "./pages/MelbourneJunctionVillage";
import MelbourneSandhurst from "./pages/MelbourneSandhurst";
import MelbourneDingleyVillage from "./pages/MelbourneDingleyVillage";
// Extra suburb pages (not in source but kept)
import MelbourneNarreWarrenNorth from "./pages/MelbourneNarreWarrenNorth";
import MelbourneOakleigh from "./pages/MelbourneOakleigh";
import MelbourneParkOrchards from "./pages/MelbourneParkOrchards";
import MelbournePattersonLakes from "./pages/MelbournePattersonLakes";
import MelbourneTecoma from "./pages/MelbourneTecoma";
import MelbourneTootgarook from "./pages/MelbourneTootgarook";
import MelbourneUpwey from "./pages/MelbourneUpwey";
import MelbourneVermont from "./pages/MelbourneVermont";
import MelbourneLysterfield from "./pages/MelbourneLysterfield";
import MelbourneMcCrae from "./pages/MelbourneMcCrae";
// Guide pages
import ColorbondFencingGuide from "./pages/guides/ColorbondFencingGuide";
import FenceHeightRegulationsGuide from "./pages/guides/FenceHeightRegulationsGuide";
import ChoosingFenceMaterialGuide from "./pages/guides/ChoosingFenceMaterialGuide";
import PoolFencingSafetyGuide from "./pages/guides/PoolFencingSafetyGuide";
import FenceOnlineQuoteGuide from "./pages/guides/FenceOnlineQuoteGuide";
import QuotePage from "./pages/QuotePage";

const queryClient = new QueryClient();

const PrefetchProvider = ({ children }: { children: React.ReactNode }) => {
  usePrefetch();
  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "IMG") e.preventDefault();
    };
    document.addEventListener("dragstart", onDragStart);
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
    return () => document.removeEventListener("dragstart", onDragStart);
  }, []);

  return (
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PrefetchProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/colorbond-fencing" element={<ColorbondFencing />} />
              <Route path="/timber-fencing" element={<TimberFencing />} />
              <Route path="/aluminum-fencing" element={<AluminiumFencing />} />
              <Route path="/aluminium-fencing" element={<AluminiumFencing />} />
              <Route path="/glass-fencing" element={<GlassFencing />} />
              <Route path="/feature-fencing" element={<FeatureFencing />} />
              <Route path="/chain-link-fencing" element={<ChainLinkFencing />} />
              <Route path="/security-fencing" element={<SecurityFencing />} />
              <Route path="/steel-fencing" element={<SteelFencing />} />
              <Route path="/pool-fencing" element={<PoolFencing />} />
              <Route path="/fence-repairs" element={<FenceRepairs />} />
              <Route path="/gate-installation" element={<GateInstallation />} />
              <Route path="/sydney" element={<Sydney />} />
              <Route path="/melbourne" element={<Melbourne />} />
              <Route path="/vic/pakenham-fencing" element={<MelbournePakenham />} />
              <Route path="/vic/portsea-fencing" element={<MelbournePortsea />} />
              <Route path="/vic/sorrento-fencing" element={<MelbourneSorrento />} />
              <Route path="/vic/mount-martha-fencing" element={<MelbourneMountMartha />} />
              <Route path="/vic/langwarrin-fencing" element={<MelbourneLangwarrin />} />
              <Route path="/vic/frankston-fencing" element={<MelbourneFrankston />} />
              <Route path="/vic/carrum-downs-fencing" element={<MelbourneCarrumDowns />} />
              <Route path="/vic/mornington-fencing" element={<MelbourneMornington />} />
              <Route path="/vic/rosebud-fencing" element={<MelbourneRosebud />} />
              <Route path="/vic/mount-eliza-fencing" element={<MelbourneMountEliza />} />
              <Route path="/vic/cranbourne-fencing" element={<MelbourneCranbourne />} />
              <Route path="/vic/berwick-fencing" element={<MelbourneBerwick />} />
              <Route path="/vic/narre-warren-fencing" element={<MelbourneNarreWarren />} />
              <Route path="/vic/officer-fencing" element={<MelbourneOfficer />} />
              <Route path="/vic/botanic-ridge-fencing" element={<MelbourneBotanicRidge />} />
              <Route path="/vic/lynbrook-fencing" element={<MelbourneLynbrook />} />
              <Route path="/vic/ringwood-fencing" element={<MelbourneRingwood />} />
              <Route path="/vic/lilydale-fencing" element={<MelbourneLilydale />} />
              <Route path="/vic/rowville-fencing" element={<MelbourneRowville />} />
              <Route path="/vic/croydon-fencing" element={<MelbourneCroydon />} />
              <Route path="/vic/box-hill-fencing" element={<MelbourneBoxHill />} />
              <Route path="/vic/toorak-fencing" element={<MelbourneToorak />} />
              <Route path="/vic/glen-waverley-fencing" element={<MelbourneGlenWaverley />} />
              <Route path="/vic/richmond-fencing" element={<MelbourneRichmond />} />
              <Route path="/vic/south-yarra-fencing" element={<MelbourneSouthYarra />} />
              <Route path="/vic/doncaster-fencing" element={<MelbourneDoncaster />} />
              <Route path="/vic/st-kilda-fencing" element={<MelbourneStKilda />} />
              <Route path="/vic/mount-waverley-fencing" element={<MelbourneMountWaverley />} />
              <Route path="/vic/carlton-fencing" element={<MelbourneCarlton />} />
              <Route path="/vic/dandenong-fencing" element={<MelbourneDandenong />} />
              <Route path="/vic/bayswater-fencing" element={<MelbourneBayswater />} />
              <Route path="/vic/clayton-fencing" element={<MelbourneClayton />} />
              <Route path="/vic/wantirna-fencing" element={<MelbourneWantirna />} />
              <Route path="/vic/ferntree-gully-fencing" element={<MelbourneFerntreeGully />} />
              <Route path="/vic/seaford-fencing" element={<MelbourneSeaford />} />
              <Route path="/vic/clyde-fencing" element={<MelbourneClyde />} />
              <Route path="/vic/boronia-fencing" element={<MelbourneBoronia />} />
              <Route path="/vic/wheelers-hill-fencing" element={<MelbourneWheelersHill />} />
              <Route path="/vic/springvale-fencing" element={<MelbourneSpringvale />} />
              <Route path="/vic/templestowe-fencing" element={<MelbourneTemplestowe />} />
              <Route path="/vic/ashwood-fencing" element={<MelbourneAshwood />} />
              <Route path="/vic/hampton-park-fencing" element={<MelbourneHamptonPark />} />
              <Route path="/vic/mooroolbark-fencing" element={<MelbourneMooroolbark />} />
              <Route path="/vic/kilsyth-fencing" element={<MelbourneKilsyth />} />
              <Route path="/vic/burwood-fencing" element={<MelbourneBurwood />} />
              <Route path="/vic/endeavour-hills-fencing" element={<MelbourneEndeavourHills />} />
              <Route path="/vic/keysborough-fencing" element={<MelbourneKeysborough />} />
              <Route path="/vic/somerville-fencing" element={<MelbourneSomerville />} />
              <Route path="/vic/blackburn-fencing" element={<MelbourneBlackburn />} />
              <Route path="/vic/noble-park-fencing" element={<MelbourneNoblePark />} />
              <Route path="/vic/balwyn-fencing" element={<MelbourneBalwyn />} />
              <Route path="/vic/chirnside-park-fencing" element={<MelbourneChirnsidePark />} />
              <Route path="/vic/scoresby-fencing" element={<MelbourneScoresby />} />
              <Route path="/vic/hallam-fencing" element={<MelbourneHallam />} />
              <Route path="/vic/mulgrave-fencing" element={<MelbourneMulgrave />} />
              <Route path="/vic/beaconsfield-fencing" element={<MelbourneBeaconsfield />} />
              <Route path="/vic/chelsea-fencing" element={<MelbourneChelsea />} />
              <Route path="/vic/nunawading-fencing" element={<MelbourneNunawading />} />
              <Route path="/vic/rye-fencing" element={<MelbourneRye />} />
              <Route path="/vic/mitcham-fencing" element={<MelbourneMitcham />} />
              <Route path="/vic/dromana-fencing" element={<MelbourneDromana />} />
              <Route path="/vic/hastings-fencing" element={<MelbourneHastings />} />
              <Route path="/vic/heathmont-fencing" element={<MelbourneHeathmont />} />
              <Route path="/vic/knoxfield-fencing" element={<MelbourneKnoxfield />} />
              <Route path="/vic/skye-fencing" element={<MelbourneSkye />} />
              <Route path="/vic/montrose-fencing" element={<MelbourneMontrose />} />
              <Route path="/vic/warranwood-fencing" element={<MelbourneWarranwood />} />
              <Route path="/vic/the-basin-fencing" element={<MelbourneTheBasin />} />
              <Route path="/vic/safety-beach-fencing" element={<MelbourneSafetyBeach />} />
              <Route path="/vic/wonga-park-fencing" element={<MelbourneWongaPark />} />
              <Route path="/vic/lyndhurst-fencing" element={<MelbourneLyndhurst />} />
              <Route path="/vic/mentone-fencing" element={<MelbourneMentone />} />
              <Route path="/vic/syndal-fencing" element={<MelbourneSyndal />} />
              <Route path="/vic/notting-hill-fencing" element={<MelbourneNottingHill />} />
              <Route path="/vic/eumemmerring-fencing" element={<MelbourneEumemmerring />} />
              <Route path="/vic/doveton-fencing" element={<MelbourneDoveton />} />
              <Route path="/vic/coldstream-fencing" element={<MelbourneColdstream />} />
              <Route path="/vic/junction-village-fencing" element={<MelbourneJunctionVillage />} />
              <Route path="/vic/sandhurst-fencing" element={<MelbourneSandhurst />} />
              <Route path="/vic/dingley-village-fencing" element={<MelbourneDingleyVillage />} />
              {/* Extra suburb routes (not in source but kept) */}
              <Route path="/vic/narre-warren-north-fencing" element={<MelbourneNarreWarrenNorth />} />
              <Route path="/vic/oakleigh-fencing" element={<MelbourneOakleigh />} />
              <Route path="/vic/park-orchards-fencing" element={<MelbourneParkOrchards />} />
              <Route path="/vic/patterson-lakes-fencing" element={<MelbournePattersonLakes />} />
              <Route path="/vic/tecoma-fencing" element={<MelbourneTecoma />} />
              <Route path="/vic/tootgarook-fencing" element={<MelbourneTootgarook />} />
              <Route path="/vic/upwey-fencing" element={<MelbourneUpwey />} />
              <Route path="/vic/vermont-fencing" element={<MelbourneVermont />} />
              <Route path="/vic/lysterfield-fencing" element={<MelbourneLysterfield />} />
              <Route path="/vic/mccrae-fencing" element={<MelbourneMcCrae />} />
              <Route path="/brisbane" element={<Brisbane />} />
              <Route path="/perth" element={<Perth />} />
              <Route path="/adelaide" element={<Adelaide />} />
              <Route path="/canberra" element={<Canberra />} />
              <Route path="/hobart" element={<Hobart />} />
              <Route path="/darwin" element={<Darwin />} />
              <Route path="/fencing-guides" element={<FencingGuides />} />
              <Route path="/guide/complete-guide-to-colorbond-fencing" element={<ColorbondFencingGuide />} />
              <Route path="/guide/fence-height-regulations-by-state" element={<FenceHeightRegulationsGuide />} />
              <Route path="/guide/choosing-the-right-fence-material" element={<ChoosingFenceMaterialGuide />} />
              <Route path="/guide/pool-fencing-safety-guide" element={<PoolFencingSafetyGuide />} />
              <Route path="/guide/fence-online-quote-guide" element={<FenceOnlineQuoteGuide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/subscription-confirmed" element={<SubscriptionConfirmation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PrefetchProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
