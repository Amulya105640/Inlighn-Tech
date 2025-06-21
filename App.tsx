import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'motion/react';

// Pages
import EnhancedHomePage from '@/pages/EnhancedHomePage';
import AboutPage from '@/pages/AboutPage';
import ProgramsPage from '@/pages/ProgramsPage';
import ProgramDetailPage from '@/pages/ProgramDetailPage';
import VerifyPage from '@/pages/VerifyPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/NotFound';
import MissionPage from '@/pages/MissionPage';
import TeamPage from '@/pages/TeamPage';
import StoryPage from '@/pages/StoryPage';
import VisionPage from '@/pages/VisionPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import OnAuthSuccessPage from '@/pages/OnAuthSuccessPage';
import AboutUsPage from '@/pages/AboutUsPage';
import WhatsSpecialPage from '@/pages/WhatsSpecialPage';

// Components
import CursorAnimation from '@/components/CursorAnimation';
import SkeletonLoader from '@/components/SkeletonLoader';
import SplashScreen from '@/components/SplashScreen';

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000 // 10 minutes (formerly cacheTime)
    }
  }
});

// App content component to handle routing and splash screen
const AppContent: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle splash screen on navigation
  useEffect(() => {
    if (!isLoading) {
      setShowSplash(true);
    }
  }, [location.pathname, isLoading]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  // Get theme based on current page
  const getPageTheme = () => {
    if (location.pathname === '/' || location.pathname === '/home') {
      return 'dark'; // Keep original theme for home
    }
    return 'light'; // Lighter theme for other pages
  };

  if (isLoading) {
    return <SkeletonLoader data-id="2q9iv0n8i" data-path="src/App.tsx" />;
  }

  return (
    <div className={`min-h-screen transition-all duration-300 ${
    getPageTheme() === 'light' ?
    'bg-gray-50' :
    'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900'}`
    } data-id="9ekblnati" data-path="src/App.tsx">
      <CursorAnimation data-id="lty1eaug5" data-path="src/App.tsx" />
      
      <SplashScreen
        isVisible={showSplash}
        onComplete={handleSplashComplete}
        duration={2500} data-id="c3bgtrq7h" data-path="src/App.tsx" />


      <AnimatePresence mode="wait" data-id="wgiy3ktiq" data-path="src/App.tsx">
        {!showSplash &&
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} data-id="k87dooi5k" data-path="src/App.tsx">

            <Routes data-id="buzqlfl64" data-path="src/App.tsx">
              <Route path="/" element={<EnhancedHomePage data-id="xab7b9jhi" data-path="src/App.tsx" />} data-id="6yxjrzadl" data-path="src/App.tsx" />
              <Route path="/home" element={<EnhancedHomePage data-id="orbkhy8si" data-path="src/App.tsx" />} data-id="gxck1532d" data-path="src/App.tsx" />
              <Route path="/about" element={<AboutPage data-id="qwhifql8l" data-path="src/App.tsx" />} data-id="tjrl5ovu3" data-path="src/App.tsx" />
              <Route path="/programs" element={<ProgramsPage data-id="qe1zpgvzb" data-path="src/App.tsx" />} data-id="wq37ju18s" data-path="src/App.tsx" />
              <Route path="/programs/:programId" element={<ProgramDetailPage data-id="fqodx357d" data-path="src/App.tsx" />} data-id="4je5bqvyp" data-path="src/App.tsx" />
              <Route path="/verify" element={<VerifyPage data-id="a5pzb4qxl" data-path="src/App.tsx" />} data-id="q4qo3lrkk" data-path="src/App.tsx" />
              <Route path="/contact" element={<ContactPage data-id="ypyearfhs" data-path="src/App.tsx" />} data-id="q7hr6u5ol" data-path="src/App.tsx" />
              <Route path="/mission" element={<MissionPage data-id="af9bt0rco" data-path="src/App.tsx" />} data-id="ulwae213e" data-path="src/App.tsx" />
              <Route path="/team" element={<TeamPage data-id="l683tqpqe" data-path="src/App.tsx" />} data-id="kbdu36ghf" data-path="src/App.tsx" />
              <Route path="/story" element={<StoryPage data-id="rvgbrxjys" data-path="src/App.tsx" />} data-id="oovk10yvk" data-path="src/App.tsx" />
              <Route path="/vision" element={<VisionPage data-id="p4a1u72cs" data-path="src/App.tsx" />} data-id="bck2g077y" data-path="src/App.tsx" />
              <Route path="/login" element={<LoginPage data-id="tz94mj0sm" data-path="src/App.tsx" />} data-id="5m7oxp56s" data-path="src/App.tsx" />
              <Route path="/register" element={<RegisterPage data-id="hidncl7z3" data-path="src/App.tsx" />} data-id="4rafqsipk" data-path="src/App.tsx" />
              <Route path="/forgot-password" element={<ForgotPasswordPage data-id="040lujk5b" data-path="src/App.tsx" />} data-id="m8q9795cj" data-path="src/App.tsx" />
              <Route path="/resetpassword" element={<ResetPasswordPage data-id="v4wlll0ob" data-path="src/App.tsx" />} data-id="flhxqu54z" data-path="src/App.tsx" />
              <Route path="/onauthsuccess" element={<OnAuthSuccessPage data-id="e90d83wmv" data-path="src/App.tsx" />} data-id="28ajihglx" data-path="src/App.tsx" />
              <Route path="/aboutus" element={<AboutUsPage data-id="gap37fw5p" data-path="src/App.tsx" />} data-id="fcvo8mi51" data-path="src/App.tsx" />
              <Route path="/whats-special" element={<WhatsSpecialPage data-id="49bqr68oc" data-path="src/App.tsx" />} data-id="a1bdm683z" data-path="src/App.tsx" />
              <Route path="*" element={<NotFound data-id="41oyxc9rf" data-path="src/App.tsx" />} data-id="sqt8qbrxk" data-path="src/App.tsx" />
            </Routes>
          </motion.div>
        }
      </AnimatePresence>

      <Toaster data-id="okzz4l7dl" data-path="src/App.tsx" />
    </div>);

};

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient} data-id="qcclfqkyg" data-path="src/App.tsx">
      <ThemeProvider data-id="fdue9ipmm" data-path="src/App.tsx">
        <AuthProvider data-id="ppxjjb4q5" data-path="src/App.tsx">
          <TooltipProvider data-id="mr10aigjt" data-path="src/App.tsx">
            <Router data-id="zugbh3fr9" data-path="src/App.tsx">
              <AppContent data-id="gw0lsaqqd" data-path="src/App.tsx" />
            </Router>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>);

};

export default App;