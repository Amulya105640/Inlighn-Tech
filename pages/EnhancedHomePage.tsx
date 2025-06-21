import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import EnhancedHero from '@/components/EnhancedHero';
import Vision from '@/components/Vision';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import About from '@/components/About';
import EnhancedPrograms from '@/components/EnhancedPrograms';
import RecognizedBy from '@/components/RecognizedBy';
import VerifyCertificate from '@/components/VerifyCertificate';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import SkeletonLoader from '@/components/SkeletonLoader';
import { motion } from 'motion/react';

const EnhancedHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900" data-id="fqlzgnr8a" data-path="src/pages/EnhancedHomePage.tsx">
        {/* Header Skeleton */}
        <div className="h-16 bg-white dark:bg-gray-800 shadow-sm" data-id="m7yy0jwhc" data-path="src/pages/EnhancedHomePage.tsx">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between" data-id="gkh4l7602" data-path="src/pages/EnhancedHomePage.tsx">
            <SkeletonLoader variant="button" width={120} animate="pulse" data-id="16vcudc8p" data-path="src/pages/EnhancedHomePage.tsx" />
            <div className="hidden md:flex space-x-8" data-id="j10sifrsm" data-path="src/pages/EnhancedHomePage.tsx">
              <SkeletonLoader variant="text" width={80} count={5} animate="shimmer" data-id="odf66fnrl" data-path="src/pages/EnhancedHomePage.tsx" />
            </div>
            <SkeletonLoader variant="button" width={100} animate="wave" data-id="x2hkbjuud" data-path="src/pages/EnhancedHomePage.tsx" />
          </div>
        </div>

        {/* Hero Section Skeleton */}
        <div className="py-20 px-4" data-id="t1l6o8o5z" data-path="src/pages/EnhancedHomePage.tsx">
          <div className="max-w-6xl mx-auto text-center space-y-8" data-id="4htqzpd62" data-path="src/pages/EnhancedHomePage.tsx">
            <SkeletonLoader variant="text" height={60} width="80%" animate="shimmer" data-id="vsw05nbuf" data-path="src/pages/EnhancedHomePage.tsx" />
            <SkeletonLoader variant="text" height={60} width="60%" animate="shimmer" data-id="5viq5fdkv" data-path="src/pages/EnhancedHomePage.tsx" />
            <SkeletonLoader variant="text" height={24} width="100%" count={3} animate="pulse" data-id="tbhanav1e" data-path="src/pages/EnhancedHomePage.tsx" />
            <div className="flex justify-center space-x-4" data-id="5ikwn7w84" data-path="src/pages/EnhancedHomePage.tsx">
              <SkeletonLoader variant="button" width={150} height={48} animate="wave" data-id="aooy9ii42" data-path="src/pages/EnhancedHomePage.tsx" />
              <SkeletonLoader variant="button" width={150} height={48} animate="wave" data-id="lcv39kphk" data-path="src/pages/EnhancedHomePage.tsx" />
            </div>
          </div>
        </div>

        {/* Content Skeletons */}
        <div className="space-y-20 px-4" data-id="xqhop33dy" data-path="src/pages/EnhancedHomePage.tsx">
          <SkeletonLoader variant="card" count={3} animate="shimmer" data-id="ueaka955j" data-path="src/pages/EnhancedHomePage.tsx" />
          <SkeletonLoader variant="list" count={4} animate="pulse" data-id="hp4krj1ox" data-path="src/pages/EnhancedHomePage.tsx" />
        </div>
      </div>);

  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900" data-id="u3nlwfrcv" data-path="src/pages/EnhancedHomePage.tsx">

      <Header data-id="0zc2zidmq" data-path="src/pages/EnhancedHomePage.tsx" />
      <EnhancedHero data-id="zkdisnfgv" data-path="src/pages/EnhancedHomePage.tsx" />
      <Vision data-id="b2kgxuiz0" data-path="src/pages/EnhancedHomePage.tsx" />
      <Services data-id="t4ayfmkuc" data-path="src/pages/EnhancedHomePage.tsx" />
      <WhyChooseUs data-id="mik31i7s4" data-path="src/pages/EnhancedHomePage.tsx" />
      <About data-id="pnkjs296d" data-path="src/pages/EnhancedHomePage.tsx" />
      <EnhancedPrograms data-id="igz24lii9" data-path="src/pages/EnhancedHomePage.tsx" />
      <RecognizedBy data-id="mg5vujzgt" data-path="src/pages/EnhancedHomePage.tsx" />
      <VerifyCertificate data-id="rehpcu5zg" data-path="src/pages/EnhancedHomePage.tsx" />
      <Gallery data-id="rrwqijyuy" data-path="src/pages/EnhancedHomePage.tsx" />
      <Testimonials data-id="lfvge6sob" data-path="src/pages/EnhancedHomePage.tsx" />
      <Contact data-id="ltrxcgfcl" data-path="src/pages/EnhancedHomePage.tsx" />
      <Footer data-id="1jt9l8ga5" data-path="src/pages/EnhancedHomePage.tsx" />
      <Chatbot data-id="117d3n7f0" data-path="src/pages/EnhancedHomePage.tsx" />
    </motion.div>);

};

export default EnhancedHomePage;