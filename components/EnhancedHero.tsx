import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';
import FluidBackground from '@/components/FluidBackground';
import BlurTransition from '@/components/BlurTransition';

const EnhancedHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-id="1c76wkd3k" data-path="src/components/EnhancedHero.tsx">
      {/* Fluid Background */}
      <FluidBackground
        variant="mesh"
        colors={['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4']}
        intensity="medium"
        className="absolute inset-0" data-id="ce7dld3f2" data-path="src/components/EnhancedHero.tsx" />


      {/* Content Container */}
      <BlurTransition
        variant="section"
        trigger="scroll"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-id="147supya9" data-path="src/components/EnhancedHero.tsx">

        <div className="space-y-8" data-id="hmgquc4ou" data-path="src/components/EnhancedHero.tsx">
          {/* Main Heading with Kinetic Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }} data-id="z4uyl1jmg" data-path="src/components/EnhancedHero.tsx">

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6" data-id="2b4ptxdz2" data-path="src/components/EnhancedHero.tsx">
              <KineticText
                variant="wave"
                trigger="load"
                delay={0.5}
                className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent" data-id="ozln8oxtu" data-path="src/components/EnhancedHero.tsx">

                Transform Your Future
              </KineticText>
              <br data-id="67ozovn56" data-path="src/components/EnhancedHero.tsx" />
              <KineticText
                variant="stretch"
                trigger="load"
                delay={1}
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" data-id="3c7nfc2c6" data-path="src/components/EnhancedHero.tsx">

                with InLighn
              </KineticText>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }} data-id="sjwa3dhcb" data-path="src/components/EnhancedHero.tsx">

            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed" data-id="7s1i4nkd3" data-path="src/components/EnhancedHero.tsx">
              <KineticText
                variant="fade"
                trigger="load"
                delay={1.5}
                staggerDelay={0.02} data-id="e4sofwpsr" data-path="src/components/EnhancedHero.tsx">

                Unlock your potential with industry-leading internships, cutting-edge training programs, and career development opportunities that prepare you for tomorrow's challenges.
              </KineticText>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-id="errgc6odr" data-path="src/components/EnhancedHero.tsx">

            <LiquidButton
              variant="primary"
              size="lg"
              effect="wave"
              onClick={() => navigate('/programs')}
              className="group shadow-2xl shadow-blue-500/25" data-id="djye56ply" data-path="src/components/EnhancedHero.tsx">

              <span className="flex items-center gap-2" data-id="bxomcr423" data-path="src/components/EnhancedHero.tsx">
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-id="5yyamk1j2" data-path="src/components/EnhancedHero.tsx" />
              </span>
            </LiquidButton>

            <LiquidButton
              variant="secondary"
              size="lg"
              effect="ripple"
              onClick={() => navigate('/about')}
              className="shadow-2xl shadow-purple-500/25" data-id="bhpmyzat1" data-path="src/components/EnhancedHero.tsx">

              <span className="flex items-center gap-2" data-id="pi7xjt236" data-path="src/components/EnhancedHero.tsx">
                <Play className="w-5 h-5" data-id="7hgng0qg3" data-path="src/components/EnhancedHero.tsx" />
                Watch Story
              </span>
            </LiquidButton>
          </motion.div>

          {/* Stats with Kinetic Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20" data-id="7w5bhoakp" data-path="src/components/EnhancedHero.tsx">

            {[
            { number: '10K+', label: 'Students Trained' },
            { number: '500+', label: 'Partner Companies' },
            { number: '95%', label: 'Placement Rate' }].
            map((stat, index) =>
            <BlurTransition
              key={index}
              variant="card"
              trigger="scroll"
              className="text-center p-6" data-id="m20n5hgsm" data-path="src/components/EnhancedHero.tsx">

                <div className="text-3xl sm:text-4xl font-bold text-white mb-2" data-id="93d33f15h" data-path="src/components/EnhancedHero.tsx">
                  <KineticText
                  variant="bounce"
                  trigger="scroll"
                  delay={index * 0.2} data-id="0irymd6sl" data-path="src/components/EnhancedHero.tsx">

                    {stat.number}
                  </KineticText>
                </div>
                <div className="text-gray-300" data-id="343qbxuri" data-path="src/components/EnhancedHero.tsx">
                  <KineticText
                  variant="slide"
                  trigger="scroll"
                  delay={index * 0.2 + 0.3} data-id="ft5z1n74w" data-path="src/components/EnhancedHero.tsx">

                    {stat.label}
                  </KineticText>
                </div>
              </BlurTransition>
            )}
          </motion.div>
        </div>
      </BlurTransition>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }} data-id="9cuj9prjd" data-path="src/components/EnhancedHero.tsx" />

      
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }} data-id="q1bcwrblm" data-path="src/components/EnhancedHero.tsx" />

    </section>);

};

export default EnhancedHero;