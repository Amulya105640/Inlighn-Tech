import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BlurTransitionProps {
  children: React.ReactNode;
  isVisible?: boolean;
  variant?: 'modal' | 'section' | 'image' | 'card';
  blurAmount?: number;
  duration?: number;
  className?: string;
  trigger?: 'hover' | 'click' | 'scroll' | 'auto';
  onTransitionComplete?: () => void;
}

const BlurTransition: React.FC<BlurTransitionProps> = ({
  children,
  isVisible = true,
  variant = 'modal',
  blurAmount = 10,
  duration = 0.5,
  className = '',
  trigger = 'auto',
  onTransitionComplete
}) => {
  const [isBlurred, setIsBlurred] = useState(!isVisible);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
          setIsBlurred(!entry.isIntersecting);
        },
        { threshold: 0.3 }
      );

      const element = document.getElementById('blur-transition-target');
      if (element) {
        observer.observe(element);
      }

      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (trigger === 'auto') {
      setIsBlurred(!isVisible);
    }
  }, [isVisible, trigger]);

  const getBlurStyles = () => {
    const baseStyles = "transition-all duration-300 ease-in-out";

    switch (variant) {
      case 'modal':
        return `${baseStyles} backdrop-blur-sm`;
      case 'section':
        return `${baseStyles} w-full`;
      case 'image':
        return `${baseStyles} overflow-hidden rounded-lg`;
      case 'card':
        return `${baseStyles} bg-white/10 backdrop-blur-sm rounded-lg border border-white/20`;
      default:
        return baseStyles;
    }
  };

  const getMotionVariants = () => {
    return {
      blurred: {
        filter: `blur(${blurAmount}px)`,
        opacity: 0.7,
        scale: 0.95,
        transition: { duration, ease: 'easeOut' }
      },
      sharp: {
        filter: 'blur(0px)',
        opacity: 1,
        scale: 1,
        transition: { duration, ease: 'easeOut' }
      }
    };
  };

  const handleInteraction = () => {
    if (trigger === 'click') {
      setIsBlurred(!isBlurred);
    }
  };

  const shouldBlur = () => {
    switch (trigger) {
      case 'hover':
        return !isHovered;
      case 'click':
        return isBlurred;
      case 'scroll':
        return !isInView;
      case 'auto':
      default:
        return isBlurred;
    }
  };

  const renderContent = () =>
  <motion.div
    id="blur-transition-target"
    className={`${getBlurStyles()} ${className}`}
    variants={getMotionVariants()}
    animate={shouldBlur() ? 'blurred' : 'sharp'}
    onMouseEnter={() => trigger === 'hover' && setIsHovered(true)}
    onMouseLeave={() => trigger === 'hover' && setIsHovered(false)}
    onClick={handleInteraction}
    onAnimationComplete={onTransitionComplete} data-id="apftev428" data-path="src/components/BlurTransition.tsx">

      {children}
    </motion.div>;


  if (variant === 'modal') {
    return (
      <AnimatePresence data-id="iuefop9kv" data-path="src/components/BlurTransition.tsx">
        {isVisible &&
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }} data-id="6tlr033g2" data-path="src/components/BlurTransition.tsx">

            {/* Backdrop */}
            <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ backdropFilter: 'blur(0px)' }}
            animate={{ backdropFilter: `blur(${blurAmount}px)` }}
            exit={{ backdropFilter: 'blur(0px)' }}
            onClick={() => trigger === 'click' && handleInteraction()} data-id="u5o68df2k" data-path="src/components/BlurTransition.tsx" />

            
            {/* Modal Content */}
            <motion.div
            className="relative z-10 max-w-lg w-full mx-4"
            initial={{
              scale: 0.9,
              opacity: 0,
              filter: `blur(${blurAmount}px)`
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)'
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
              filter: `blur(${blurAmount}px)`
            }}
            transition={{ duration, ease: 'easeOut' }} data-id="u6i9ezkxz" data-path="src/components/BlurTransition.tsx">

              {children}
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>);

  }

  return renderContent();
};

// Progressive Blur Background Component
export const BlurredBackground: React.FC<{
  children: React.ReactNode;
  blurIntensity?: number;
  className?: string;
}> = ({ children, blurIntensity = 20, className = '' }) => {
  return (
    <div className={`relative ${className}`} data-id="1txn6tbs6" data-path="src/components/BlurTransition.tsx">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20"
        style={{
          filter: `blur(${blurIntensity}px)`,
          transform: 'scale(1.1)'
        }}
        animate={{
          filter: [`blur(${blurIntensity}px)`, `blur(${blurIntensity * 0.8}px)`, `blur(${blurIntensity}px)`]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }} data-id="8bc24e3jo" data-path="src/components/BlurTransition.tsx" />

      <div className="relative z-10" data-id="5zj89w6p1" data-path="src/components/BlurTransition.tsx">
        {children}
      </div>
    </div>);

};

export default BlurTransition;