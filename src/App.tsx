import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import ProjectManagement from './components/sections/ProjectManagement';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import YourWork from './components/sections/YourWork';
import YourData from './components/sections/YourData';
import Sponsors from './components/sections/Sponsors';
import Apps from './components/sections/Apps';
import Testimonial from './components/sections/Testimonial';
import FreeTrial from './components/sections/FreeTrial';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProjectManagement />
        <Features />
        <Pricing />
        <YourWork />
        <YourData />
        <Sponsors />
        <Apps />
        <Testimonial />
        <FreeTrial />
      </main>
      <Footer />
    </div>
  );
}