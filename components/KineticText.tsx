import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { useRef } from 'react';

interface KineticTextProps {
  children: string;
  variant?: 'typewriter' | 'wave' | 'stretch' | 'morph' | 'glitch' | 'bounce' | 'fade';
  trigger?: 'load' | 'scroll' | 'hover' | 'click';
  delay?: number;
  duration?: number;
  className?: string;
  repeat?: boolean;
  staggerDelay?: number;
}

const KineticText: React.FC<KineticTextProps> = ({
  children,
  variant = 'wave',
  trigger = 'scroll',
  delay = 0,
  duration = 0.6,
  className = '',
  repeat = false,
  staggerDelay = 0.05
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !repeat });
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const letters = children.split('');

  useEffect(() => {
    if (trigger === 'load' || trigger === 'scroll' && isInView) {
      const timer = setTimeout(() => {
        controls.start('animate');
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [controls, delay, trigger, isInView]);

  useEffect(() => {
    if (trigger === 'hover' && isHovered) {
      controls.start('animate');
    } else if (trigger === 'hover' && !isHovered) {
      controls.start('initial');
    }
  }, [controls, trigger, isHovered]);

  useEffect(() => {
    if (trigger === 'click' && isClicked) {
      controls.start('animate');
      const timer = setTimeout(() => {
        setIsClicked(false);
        controls.start('initial');
      }, duration * 1000 * letters.length);
      return () => clearTimeout(timer);
    }
  }, [controls, trigger, isClicked, duration, letters.length]);

  const getVariants = () => {
    switch (variant) {
      case 'typewriter':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        };

      case 'wave':
        return {
          initial: { y: 0 },
          animate: {
            y: [-10, -20, -10, 0],
            transition: {
              duration: duration,
              ease: 'easeInOut'
            }
          }
        };

      case 'stretch':
        return {
          initial: { scaleY: 1, scaleX: 1 },
          animate: {
            scaleY: [1, 1.3, 1],
            scaleX: [1, 0.8, 1],
            transition: {
              duration: duration,
              ease: 'easeInOut'
            }
          }
        };

      case 'morph':
        return {
          initial: {
            scale: 1,
            rotate: 0,
            skew: 0
          },
          animate: {
            scale: [1, 1.2, 0.9, 1.1, 1],
            rotate: [0, 5, -3, 2, 0],
            skew: [0, 2, -1, 1, 0],
            transition: {
              duration: duration * 1.5,
              ease: 'easeInOut'
            }
          }
        };

      case 'glitch':
        return {
          initial: {
            x: 0,
            y: 0,
            opacity: 1,
            filter: 'none'
          },
          animate: {
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 2, -2, 0],
            opacity: [1, 0.8, 1, 0.9, 1],
            filter: [
            'none',
            'hue-rotate(90deg)',
            'hue-rotate(180deg)',
            'hue-rotate(270deg)',
            'none'],

            transition: {
              duration: duration * 0.8,
              ease: 'easeInOut'
            }
          }
        };

      case 'bounce':
        return {
          initial: { y: 0 },
          animate: {
            y: [0, -30, -15, -25, -10, -15, 0],
            transition: {
              duration: duration * 1.2,
              ease: 'easeOut'
            }
          }
        };

      case 'fade':
        return {
          initial: { opacity: 0, y: 20 },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration,
              ease: 'easeOut'
            }
          }
        };

      default:
        return {
          initial: { y: 0 },
          animate: { y: -10 }
        };
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsClicked(true);
    }
  };

  // Special handling for typewriter effect
  if (variant === 'typewriter') {
    return (
      <motion.span
        ref={ref}
        className={`inline-block ${className}`}
        onMouseEnter={() => trigger === 'hover' && setIsHovered(true)}
        onMouseLeave={() => trigger === 'hover' && setIsHovered(false)}
        onClick={handleClick} data-id="fo1sdwy7t" data-path="src/components/KineticText.tsx">

        {letters.map((letter, index) =>
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            animate: {
              opacity: 1,
              transition: {
                delay: index * staggerDelay,
                duration: 0.1
              }
            }
          }} data-id="bdzzboamf" data-path="src/components/KineticText.tsx">

            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        )}
      </motion.span>);

  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      onMouseEnter={() => trigger === 'hover' && setIsHovered(true)}
      onMouseLeave={() => trigger === 'hover' && setIsHovered(false)}
      onClick={handleClick} data-id="9uhuvdzio" data-path="src/components/KineticText.tsx">

      {letters.map((letter, index) =>
      <motion.span
        key={index}
        className="inline-block"
        variants={getVariants()}
        initial="initial"
        animate={controls}
        transition={{
          delay: index * staggerDelay,
          repeat: repeat ? Infinity : 0,
          repeatType: 'loop',
          repeatDelay: repeat ? 2 : 0
        }} data-id="dxvq3tkmk" data-path="src/components/KineticText.tsx">

          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      )}
    </motion.span>);

};

// Word-based kinetic text for better control
export const KineticWords: React.FC<{
  children: string;
  variant?: 'slide' | 'rotate' | 'scale' | 'flip';
  trigger?: 'load' | 'scroll' | 'hover' | 'click';
  className?: string;
}> = ({
  children,
  variant = 'slide',
  trigger = 'scroll',
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = children.split(' ');

  const wordVariants = {
    slide: {
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 }
    },
    rotate: {
      initial: { rotate: -90, opacity: 0 },
      animate: { rotate: 0, opacity: 1 }
    },
    scale: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 }
    },
    flip: {
      initial: { rotateX: -90, opacity: 0 },
      animate: { rotateX: 0, opacity: 1 }
    }
  };

  return (
    <span ref={ref} className={`inline-block ${className}`} data-id="61jzmacgx" data-path="src/components/KineticText.tsx">
      {words.map((word, index) =>
      <motion.span
        key={index}
        className="inline-block mr-2"
        variants={wordVariants[variant]}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        transition={{
          delay: index * 0.1,
          duration: 0.6,
          ease: 'easeOut'
        }} data-id="uhdlkxrnr" data-path="src/components/KineticText.tsx">

          {word}
        </motion.span>
      )}
    </span>);

};

export default KineticText;