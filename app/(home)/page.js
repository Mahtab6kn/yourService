import EnterpriseSection from "@/components/home/EnterpriseSection";
import FeatureSection from "@/components/home/FeatureSection";
import HeroSection from "@/components/home/HeroSection";
import LandingSection from "@/components/home/LandingSection";
import ModernLandingSection from "@/components/home/ModernLandingSection";
import PriceCard from "@/components/home/PriceSection";
import PromoSection from "@/components/home/PromoSection";
import StatsSection from "@/components/home/StatsSection";
import SupportSection from "@/components/home/SupportSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <PromoSection />
      <StatsSection />
      <PriceCard />
      <LandingSection />
      <ModernLandingSection />
      <EnterpriseSection />
      <SupportSection />
    </div>
  );
};

export default page;
