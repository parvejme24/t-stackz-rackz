import AboutTrading from "@/components/custom/AboutTrading/AboutTrading";
import Banner from "@/components/custom/Banner/Banner";
import FAQ from "@/components/custom/FAQ/FAQ";
import LiveMarket from "@/components/custom/LiveMarket/LiveMarket";
import MarketTred from "@/components/custom/MarketTred/MarketTred";
import PrivacyPolicy from "@/components/custom/PrivacyPolicy/PrivacyPolicy";
import SecurityAndPriority from "@/components/custom/SecurityAndPriority/SecurityAndPriority";
import SuccessStories from "@/components/custom/SuccessStroies/SuccessStories";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <Banner />
        <MarketTred />
        <LiveMarket />
        <SuccessStories />
        <AboutTrading />
        <FAQ />
        <SecurityAndPriority />
        <PrivacyPolicy />
      </div>
    </DefaultLayout>
  );
}
