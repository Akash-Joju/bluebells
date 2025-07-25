import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/Hero";
import { RestaurantDescription } from "@/components/sections/RestaurantDescription";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { RoomPreview } from "@/components/sections/RoomPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <RestaurantDescription />
      <SignatureDishes />
      <RoomPreview />
      <AboutPreview />
      <Footer />
    </div>
  );
};

export default Index;
