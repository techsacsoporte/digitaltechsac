import CountdownBar from '@/components/CountdownBar';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import FeaturesSection from '@/components/FeaturesSection';
import ComparisonSection from '@/components/ComparisonSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import Analytics from '@/components/Analytics';

export default function HomePage() {
  return (
    <>
      <CountdownBar />
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <FeaturesSection />
        <ComparisonSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloating />
      <Analytics />
    </>
  );
}
