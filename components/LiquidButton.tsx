import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  liquidColor?: string;
  effect?: 'ripple' | 'wave' | 'blob' | 'ink';
}

const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  liquidColor,
  effect = 'ripple'
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const getButtonStyles = () => {
    const baseStyles = "relative overflow-hidden transition-all duration-300 font-medium rounded-lg border-0 cursor-pointer";

    const variants = {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
      secondary: "bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800",
      accent: "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return `${baseStyles} ${variants[variant]} ${sizes[size]}`;
  };

  const getLiquidColor = () => {
    if (liquidColor) return liquidColor;

    switch (variant) {
      case 'primary':
        return 'rgba(59, 130, 246, 0.3)';
      case 'secondary':
        return 'rgba(156, 163, 175, 0.3)';
      case 'accent':
        return 'rgba(236, 72, 153, 0.3)';
      default:
        return 'rgba(59, 130, 246, 0.3)';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);

    onClick?.();
  };

  const renderLiquidEffect = () => {
    if (!isClicked) return null;

    const effects = {
      ripple:
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          backgroundColor: getLiquidColor(),
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ width: 0, height: 0, opacity: 1 }}
        animate={{
          width: 300,
          height: 300,
          opacity: 0,
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }} data-id="clx5vpheg" data-path="src/components/LiquidButton.tsx" />,


      wave:
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: getLiquidColor() }}
        initial={{
          clipPath: `circle(0% at ${mousePosition.x}px ${mousePosition.y}px)`
        }}
        animate={{
          clipPath: `circle(150% at ${mousePosition.x}px ${mousePosition.y}px)`
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }} data-id="i5y523d9v" data-path="src/components/LiquidButton.tsx" />,


      blob:
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          backgroundColor: getLiquidColor(),
          transform: 'translate(-50%, -50%)'
        }}
        initial={{
          width: 0,
          height: 0,
          opacity: 1,
          borderRadius: '50%'
        }}
        animate={{
          width: [0, 100, 200],
          height: [0, 80, 150],
          opacity: [1, 0.7, 0],
          borderRadius: ['50%', '40%', '30%']
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }} data-id="nt4ozb0l0" data-path="src/components/LiquidButton.tsx" />,


      ink:
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          backgroundColor: getLiquidColor(),
          transform: 'translate(-50%, -50%)'
        }}
        initial={{
          width: 0,
          height: 0,
          opacity: 1,
          borderRadius: '50%'
        }}
        animate={{
          width: 400,
          height: 400,
          opacity: 0,
          borderRadius: ['50%', '45%', '40%', '35%']
        }}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          times: [0, 0.3, 0.7, 1]
        }} data-id="33id8vc66" data-path="src/components/LiquidButton.tsx" />


    };

    return effects[effect];
  };

  return (
    <motion.button
      className={`${getButtonStyles()} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={{
        scale: disabled ? 1 : 1.02,
        y: disabled ? 0 : -1
      }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }} data-id="cl90pjizp" data-path="src/components/LiquidButton.tsx">

      <span className="relative z-10" data-id="ql8ft0w68" data-path="src/components/LiquidButton.tsx">{children}</span>
      {renderLiquidEffect()}
      
      {/* Background liquid animation on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{ backgroundColor: getLiquidColor() }}
        whileHover={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }} data-id="yt1s8e0ou" data-path="src/components/LiquidButton.tsx" />

    </motion.button>);

};

export default LiquidButton;