import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import CTASection from '../components/CTASection/CTASection';
import LandingFooter from '../components/LandingFooter/LandingFooter';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <CTASection />
      </main>
      <LandingFooter />
    </div>
  );
}