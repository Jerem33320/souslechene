import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExtraitsSection } from "@/components/ExtraitsSection";
// import { VideoSection } from "@/components/VideoSection";
import { AuthorSection } from "@/components/AuthorSection";
import { EngagementSection } from "@/components/EngagementSection";
import { Footer } from "@/components/Footer";
import { HelmetSetup } from "@/seo/HelmetSetup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HelmetSetup
        title="Sous le chêne, la France"
        description="Un voyage historique et lyrique dans l'histoire de France. Disponible sur Amazon."
        path="/"
      />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExtraitsSection />
      {/* <VideoSection /> */}
      <AuthorSection />
      <EngagementSection />
      <Footer />
    </div>
  );
};

export default Index;
