import Header from './components/sections/Header';
import HeroSection from './components/sections/HeroSection';
import WorkManagement from './components/sections/WorkManagement';
import CustomizeSections from './components/sections/CustomizeSections';
import PricingSection from './components/sections/PricingSection';
import YourWorkSection from './components/sections/YourWorkSection';
import YourDataSection from './components/sections/YourDataSection';
import SponsorsSection from './components/sections/SponsorsSection';
import AppsSection from './components/sections/AppsSection';
import TestimonialSection from './components/sections/TestimonialSection';
import FreeTrialSection from './components/sections/FreeTrialSection';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WorkManagement />
        <CustomizeSections />
        <PricingSection />
        <YourWorkSection />
        <YourDataSection />
        <SponsorsSection />
        <AppsSection />
        <TestimonialSection />
        <FreeTrialSection />
      </main>
      <Footer />
    </div>
  );
}
