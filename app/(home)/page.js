import EnterpriseSection from "@/components/home/EnterpriseSection";
import HeroSection from "@/components/home/HeroSection";
import LandingSection from "@/components/home/LandingSection";
import ModernLandingSection from "@/components/home/ModernLandingSection";
import PriceCard from "@/components/home/PriceSection";
import PromoSection from "@/components/home/PromoSection";
import StatsSection from "@/components/home/StatsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <PromoSection />
      <StatsSection />
      <PriceCard />
      <LandingSection />
      <EnterpriseSection />
      <ModernLandingSection />
    </div>
  );
};

export default page;
