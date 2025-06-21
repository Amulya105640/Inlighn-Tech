import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import Programs from '@/components/Programs';
import RecognizedBy from '@/components/RecognizedBy';
import VerifyCertificate from '@/components/VerifyCertificate';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import LoadingScreen from '@/components/LoadingScreen';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen data-id="whojpz98h" data-path="src/pages/HomePage.tsx" />;
  }

  return (
    <div className="relative bg-[#0f0f0f] min-h-screen" data-id="bflbh9obp" data-path="src/pages/HomePage.tsx">
      <Header data-id="1rtbtq4gu" data-path="src/pages/HomePage.tsx" />
      <main data-id="ddf1pd2ks" data-path="src/pages/HomePage.tsx">
        <Hero data-id="5xiz7p2so" data-path="src/pages/HomePage.tsx" />
        <Vision data-id="oqom3wra7" data-path="src/pages/HomePage.tsx" />
        <Services data-id="w6ps05c8k" data-path="src/pages/HomePage.tsx" />
        <WhyChooseUs data-id="skn6aq1su" data-path="src/pages/HomePage.tsx" />
        <About data-id="uaf3ah5ul" data-path="src/pages/HomePage.tsx" />
        <Programs data-id="zdsf45ebv" data-path="src/pages/HomePage.tsx" />
        <RecognizedBy data-id="9ut3iluio" data-path="src/pages/HomePage.tsx" />
        <Gallery data-id="zfu1rwfjv" data-path="src/pages/HomePage.tsx" />
        <VerifyCertificate data-id="cbt0wra1s" data-path="src/pages/HomePage.tsx" />
        <Testimonials data-id="txsocfhts" data-path="src/pages/HomePage.tsx" />
        <Contact data-id="uyn5docq5" data-path="src/pages/HomePage.tsx" />
      </main>
      <Footer data-id="utgkam7gm" data-path="src/pages/HomePage.tsx" />
      <Chatbot data-id="t58k21w74" data-path="src/pages/HomePage.tsx" />
    </div>);

};

export default HomePage;