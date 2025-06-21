import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'colored';
  showText?: boolean;
  animated?: boolean;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'colored',
  showText = true,
  animated = true,
  onClick
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const content =
  <div className={`flex items-center gap-3 ${className}`} data-id="08upgypfe" data-path="src/components/Logo.tsx">
      <motion.div
      className="relative"
      whileHover={animated ? {
        scale: 1.1,
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.6 }
      } : {}}
      whileTap={animated ? { scale: 0.95 } : {}} data-id="scygo6mg3" data-path="src/components/Logo.tsx">

        <img
        src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/24343/3377f7f7-ddba-4c42-89d9-f1a235911a11.png"
        alt="Inlighntn Tech Logo"
        className={`${sizes[size]} object-contain relative z-10 rounded-lg`} data-id="hbn1xkx0z" data-path="src/components/Logo.tsx" />

        
        {/* Glowing effect */}
        {animated &&
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00ffc8]/20 to-[#29b6f6]/20 blur-lg"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="l6c0cpaea" data-path="src/components/Logo.tsx" />
      }
      </motion.div>
      
      {showText &&
    <div className="flex flex-col" data-id="tgc5kmt95" data-path="src/components/Logo.tsx">
          <span className={`font-bold tracking-tight ${textSizes[size]} ${
      variant === 'light' ? 'text-gray-900' :
      variant === 'dark' ? 'text-white' :
      'bg-gradient-to-r from-[#00ffc8] via-[#29b6f6] to-[#00ffc8] bg-clip-text text-transparent'}`
      } data-id="t5vzcwe8n" data-path="src/components/Logo.tsx">
            Inlighntn Tech
          </span>
          <span className={`text-xs font-medium ${
      variant === 'light' ? 'text-gray-600' :
      variant === 'dark' ? 'text-gray-300' :
      'text-gray-400'}`
      } data-id="kchzmko1t" data-path="src/components/Logo.tsx">
            Smart Technology Solutions
          </span>
        </div>
    }
    </div>;


  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        className="flex items-center gap-3 group"
        whileHover={animated ? { scale: 1.02 } : {}}
        whileTap={animated ? { scale: 0.98 } : {}} data-id="ti0p3eylv" data-path="src/components/Logo.tsx">
        {content}
      </motion.button>);

  }

  return (
    <Link to="/" className="flex items-center gap-3 group" data-id="khj2mqbki" data-path="src/components/Logo.tsx">
      {content}
    </Link>);

};

export default Logo;