import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LocationStep from "@/components/quote/LocationStep";
import TimelineStep from "@/components/quote/TimelineStep";
import DescriptionStep from "@/components/quote/DescriptionStep";
import ContactStep from "@/components/quote/ContactStep";
import ResultsStep from "@/components/quote/ResultsStep";
import { Suburb } from "@/data/quoteFunnelData";

type Step = "location" | "timeline" | "description" | "contact" | "results";

const TRADE = "Fencing";

const QuotePage = () => {
  const [step, setStep] = useState<Step>("location");
  const [suburb, setSuburb] = useState<Suburb | null>(null);
  const [, setTimeline] = useState("");
  const [, setDescription] = useState("");

  return (
    <>
      <Helmet>
        <title>Get 3 Free Fencing Quotes in Minutes | Fast Online Quote</title>
        <meta
          name="description"
          content="Compare free fencing quotes from verified local pros in minutes. Fast, mobile-friendly quote form — no obligation."
        />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      {step === "location" && (
        <LocationStep
          trade={TRADE}
          onNext={(s) => {
            setSuburb(s);
            setStep("timeline");
          }}
        />
      )}
      {step === "timeline" && (
        <TimelineStep
          onNext={(t) => {
            setTimeline(t);
            setStep("description");
          }}
          onBack={() => setStep("location")}
        />
      )}
      {step === "description" && (
        <DescriptionStep
          trade={TRADE}
          onNext={(d) => {
            setDescription(d);
            setStep("contact");
          }}
          onBack={() => setStep("timeline")}
        />
      )}
      {step === "contact" && (
        <ContactStep
          onNext={() => setStep("results")}
          onBack={() => setStep("description")}
        />
      )}
      {step === "results" && <ResultsStep state={suburb?.state || "VIC"} />}
    </>
  );
};

export default QuotePage;
