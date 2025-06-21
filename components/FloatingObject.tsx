
import React from 'react';
import { motion } from 'motion/react';

interface FloatingObjectProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'cube' | 'sphere' | 'pyramid';
}

const FloatingObject: React.FC<FloatingObjectProps> = ({
  className = '',
  size = 'md',
  type = 'cube'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const shapeClasses = {
    cube: 'rounded-lg',
    sphere: 'rounded-full',
    pyramid: 'clip-path-triangle'
  };

  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${shapeClasses[type]} bg-gradient-to-br from-cyan-400 to-purple-600 shadow-2xl ${className}`}
      animate={{
        y: [-20, 20, -20],
        rotateX: [0, 360],
        rotateY: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        transformStyle: 'preserve-3d',
        filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))'
      }} data-id="9ao70sw7x" data-path="src/components/FloatingObject.tsx">

      {/* Inner glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent" data-id="tfsn8w2zf" data-path="src/components/FloatingObject.tsx" />
      
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-600/30 blur-lg scale-150 -z-10" data-id="5qu0a47p0" data-path="src/components/FloatingObject.tsx" />
    </motion.div>);

};

export default FloatingObject;