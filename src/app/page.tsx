import HeroSection from "@/components/sections/hero-section";
import TrustedCompanies from "@/components/sections/trusted-companies";
import WithoutWithDeelSection from "@/components/sections/without-with-deel";
import GlobalPeoplePlatform from "@/components/sections/global-people-platform";
import ScaleGlobally from "@/components/sections/scale-globally";
import Testimonials from "@/components/sections/testimonials";
import IndustryStats from "@/components/sections/industry-stats";
import ComplianceHub from "@/components/sections/compliance-hub";
import DeelAdvantage from "@/components/sections/deel-advantage";
import GlobalCoverage from "@/components/sections/global-coverage";
import CustomerStories from "@/components/sections/customer-stories";
import GettingStarted from "@/components/sections/getting-started";
import ClientReviews from "@/components/sections/client-reviews";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustedCompanies />
      <WithoutWithDeelSection />
      <GlobalPeoplePlatform />
      <ScaleGlobally />
      <Testimonials />
      <IndustryStats />
      <ComplianceHub />
      <DeelAdvantage />
      <GlobalCoverage />
      <CustomerStories />
      <GettingStarted />
      <ClientReviews />
    </main>
  );
}
