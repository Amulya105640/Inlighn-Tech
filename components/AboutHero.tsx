import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface AboutHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  icon,
  children
}) => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" data-id="rjk9uwaaf" data-path="src/components/AboutHero.tsx">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }} data-id="gyc396uzx" data-path="src/components/AboutHero.tsx" />

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" data-id="4y0dq01qf" data-path="src/components/AboutHero.tsx" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0" data-id="o26wbp53l" data-path="src/components/AboutHero.tsx">
        {[...Array(20)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }} data-id="svnsk0qza" data-path="src/components/AboutHero.tsx" />

        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10" data-id="p998gbatv" data-path="src/components/AboutHero.tsx">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} data-id="cfexffwqc" data-path="src/components/AboutHero.tsx">

          {/* Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }} data-id="kxoldnoj1" data-path="src/components/AboutHero.tsx">

            {icon}
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 brand-text-gradient glow-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }} data-id="r9gmfvhuz" data-path="src/components/AboutHero.tsx">

            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-brand-accent font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} data-id="glitfyp8z" data-path="src/components/AboutHero.tsx">

            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }} data-id="82a5tphac" data-path="src/components/AboutHero.tsx">

            {description}
          </motion.p>

          {/* Additional Content */}
          {children &&
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }} data-id="myi6wsbrq" data-path="src/components/AboutHero.tsx">

              {children}
            </motion.div>
          }

          {/* Back Button */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }} data-id="dtyyw55dd" data-path="src/components/AboutHero.tsx">

            <Button
              onClick={() => navigate('/about')}
              className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-accent hover:to-brand-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" data-id="586zo0iqx" data-path="src/components/AboutHero.tsx">

              <ArrowLeft className="w-5 h-5 mr-2" data-id="9wckhihw5" data-path="src/components/AboutHero.tsx" />
              Back to About
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>);

};

export default AboutHero;