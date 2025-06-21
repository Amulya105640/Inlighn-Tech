
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeedbackSection from '@/components/WhatsSpecial/FeedbackSection';
import VideosSection from '@/components/WhatsSpecial/VideosSection';
import InternsSection from '@/components/WhatsSpecial/InternsSection';
import ParticipationSteps from '@/components/WhatsSpecial/ParticipationSteps';
import RulesSection from '@/components/WhatsSpecial/RulesSection';
import PerksSection from '@/components/WhatsSpecial/PerksSection';
import { motion } from 'motion/react';
import { Sparkles, Star, Heart } from 'lucide-react';

const WhatsSpecialPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50" data-id="xzghd0gov" data-path="src/pages/WhatsSpecialPage.tsx">
      <Header data-id="0ffzrmon1" data-path="src/pages/WhatsSpecialPage.tsx" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" data-id="sqh7kpdjc" data-path="src/pages/WhatsSpecialPage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="27z14tmfh" data-path="src/pages/WhatsSpecialPage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center" data-id="nyfza1ipf" data-path="src/pages/WhatsSpecialPage.tsx">

            <div className="flex items-center justify-center mb-6" data-id="h9i81pvso" data-path="src/pages/WhatsSpecialPage.tsx">
              <Sparkles className="w-8 h-8 text-yellow-500 mr-3" data-id="coc85i936" data-path="src/pages/WhatsSpecialPage.tsx" />
              <Star className="w-10 h-10 text-blue-500 mx-2" data-id="58rlxhsh9" data-path="src/pages/WhatsSpecialPage.tsx" />
              <Heart className="w-8 h-8 text-pink-500 ml-3" data-id="vfdc2xfrj" data-path="src/pages/WhatsSpecialPage.tsx" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" data-id="kvcdy3l78" data-path="src/pages/WhatsSpecialPage.tsx">
              What's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="ojxt9awhi" data-path="src/pages/WhatsSpecialPage.tsx">Special</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-id="7imtel6ut" data-path="src/pages/WhatsSpecialPage.tsx">
              Discover what makes our internship program extraordinary - from real project experience 
              to industry recognition, exclusive perks, and a supportive community that propels your career forward.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-id="nmqgzfy0b" data-path="src/pages/WhatsSpecialPage.tsx">

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center" data-id="6saw8mcy0" data-path="src/pages/WhatsSpecialPage.tsx">
                <div className="text-3xl font-bold text-blue-600 mb-2" data-id="jlsui66ey" data-path="src/pages/WhatsSpecialPage.tsx">500+</div>
                <div className="text-gray-600" data-id="pf0txdxb1" data-path="src/pages/WhatsSpecialPage.tsx">Successful Interns</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center" data-id="83pdsqw9o" data-path="src/pages/WhatsSpecialPage.tsx">
                <div className="text-3xl font-bold text-green-600 mb-2" data-id="9rb39ueex" data-path="src/pages/WhatsSpecialPage.tsx">95%</div>
                <div className="text-gray-600" data-id="dp3yeyyjl" data-path="src/pages/WhatsSpecialPage.tsx">Job Placement Rate</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center" data-id="dh2y5kjh2" data-path="src/pages/WhatsSpecialPage.tsx">
                <div className="text-3xl font-bold text-purple-600 mb-2" data-id="lw7h9vvun" data-path="src/pages/WhatsSpecialPage.tsx">4.9★</div>
                <div className="text-gray-600" data-id="phqbrfxdk" data-path="src/pages/WhatsSpecialPage.tsx">Program Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <FeedbackSection data-id="izcu7o6pm" data-path="src/pages/WhatsSpecialPage.tsx" />
      <VideosSection data-id="agzcjg83t" data-path="src/pages/WhatsSpecialPage.tsx" />
      <InternsSection data-id="pwmty61ar" data-path="src/pages/WhatsSpecialPage.tsx" />
      <ParticipationSteps data-id="hdy0o3dhi" data-path="src/pages/WhatsSpecialPage.tsx" />
      <RulesSection data-id="lor4ipdb8" data-path="src/pages/WhatsSpecialPage.tsx" />
      <PerksSection data-id="47sp300ve" data-path="src/pages/WhatsSpecialPage.tsx" />
      
      <Footer data-id="xvpr6or2n" data-path="src/pages/WhatsSpecialPage.tsx" />
    </div>);

};

export default WhatsSpecialPage;