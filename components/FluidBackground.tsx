import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface FluidBackgroundProps {
  children?: React.ReactNode;
  variant?: 'waves' | 'blobs' | 'particles' | 'liquid' | 'mesh';
  colors?: string[];
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
  interactive?: boolean;
}

const FluidBackground: React.FC<FluidBackgroundProps> = ({
  children,
  variant = 'waves',
  colors = ['#3b82f6', '#8b5cf6', '#ec4899'],
  intensity = 'medium',
  className = '',
  interactive = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIntensityValues = () => {
    switch (intensity) {
      case 'low':
        return { scale: 1.1, duration: 12, blur: 40 };
      case 'medium':
        return { scale: 1.2, duration: 8, blur: 30 };
      case 'high':
        return { scale: 1.3, duration: 5, blur: 20 };
      default:
        return { scale: 1.2, duration: 8, blur: 30 };
    }
  };

  const { scale, duration, blur } = getIntensityValues();

  const renderWaves = () =>
  <div className="absolute inset-0 overflow-hidden" data-id="xzio969ym" data-path="src/components/FluidBackground.tsx">
      {colors.map((color, index) =>
    <motion.div
      key={index}
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at ${30 + index * 20}% ${40 + index * 15}%, ${color}40, transparent 50%)`,
        filter: `blur(${blur}px)`
      }}
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -50, 100, 0],
        scale: [1, scale, 1]
      }}
      transition={{
        duration: duration + index * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.5
      }} data-id="jrdhkdrs0" data-path="src/components/FluidBackground.tsx" />

    )}
    </div>;


  const renderBlobs = () =>
  <div className="absolute inset-0 overflow-hidden" data-id="6xnbrzcz8" data-path="src/components/FluidBackground.tsx">
      {colors.map((color, index) =>
    <motion.div
      key={index}
      className="absolute rounded-full"
      style={{
        background: `radial-gradient(circle, ${color}60, ${color}20, transparent)`,
        width: '300px',
        height: '300px',
        left: `${20 + index * 30}%`,
        top: `${30 + index * 20}%`,
        filter: `blur(${blur}px)`
      }}
      animate={{
        x: [0, 150, -100, 0],
        y: [0, -100, 150, 0],
        scale: [1, 1.4, 0.8, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: duration + index * 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 1
      }} data-id="k3yovlsg0" data-path="src/components/FluidBackground.tsx" />

    )}
    </div>;


  const renderParticles = () =>
  <div className="absolute inset-0 overflow-hidden" data-id="qedizunem" data-path="src/components/FluidBackground.tsx">
      {Array.from({ length: 20 }, (_, index) =>
    <motion.div
      key={index}
      className="absolute rounded-full opacity-70"
      style={{
        background: colors[index % colors.length],
        width: `${10 + Math.random() * 20}px`,
        height: `${10 + Math.random() * 20}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        filter: `blur(${blur * 0.3}px)`
      }}
      animate={{
        x: [0, Math.random() * 200 - 100],
        y: [0, Math.random() * 200 - 100],
        opacity: [0.3, 0.8, 0.3],
        scale: [0.5, 1.2, 0.5]
      }}
      transition={{
        duration: duration + Math.random() * 5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 2
      }} data-id="vwxs7birq" data-path="src/components/FluidBackground.tsx" />

    )}
    </div>;


  const renderLiquid = () =>
  <div className="absolute inset-0 overflow-hidden" data-id="zf149xvkg" data-path="src/components/FluidBackground.tsx">
      <motion.div
      className="absolute inset-0"
      style={{
        background: `linear-gradient(45deg, ${colors[0]}40, ${colors[1]}30, ${colors[2]}40)`,
        filter: `blur(${blur}px)`,
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
      }}
      animate={{
        borderRadius: [
        '30% 70% 70% 30% / 30% 30% 70% 70%',
        '70% 30% 30% 70% / 70% 70% 30% 30%',
        '30% 70% 70% 30% / 30% 30% 70% 70%'],

        scale: [1, 1.1, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }} data-id="xos7jwljt" data-path="src/components/FluidBackground.tsx" />

    </div>;


  const renderMesh = () =>
  <div className="absolute inset-0 overflow-hidden" data-id="628l96jrt" data-path="src/components/FluidBackground.tsx">
      <motion.div
      className="absolute inset-0"
      style={{
        background: `
            radial-gradient(at 20% 30%, ${colors[0]}40 0px, transparent 50%),
            radial-gradient(at 80% 70%, ${colors[1]}40 0px, transparent 50%),
            radial-gradient(at 40% 70%, ${colors[2]}40 0px, transparent 50%),
            radial-gradient(at 90% 20%, ${colors[0]}30 0px, transparent 50%)
          `,
        filter: `blur(${blur}px)`
      }}
      animate={{
        background: [
        `radial-gradient(at 20% 30%, ${colors[0]}40 0px, transparent 50%), radial-gradient(at 80% 70%, ${colors[1]}40 0px, transparent 50%), radial-gradient(at 40% 70%, ${colors[2]}40 0px, transparent 50%)`,
        `radial-gradient(at 80% 20%, ${colors[1]}40 0px, transparent 50%), radial-gradient(at 30% 80%, ${colors[2]}40 0px, transparent 50%), radial-gradient(at 70% 30%, ${colors[0]}40 0px, transparent 50%)`,
        `radial-gradient(at 20% 30%, ${colors[0]}40 0px, transparent 50%), radial-gradient(at 80% 70%, ${colors[1]}40 0px, transparent 50%), radial-gradient(at 40% 70%, ${colors[2]}40 0px, transparent 50%)`]

      }}
      transition={{
        duration: duration * 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }} data-id="3mdeji8ro" data-path="src/components/FluidBackground.tsx" />

    </div>;


  const renderVariant = () => {
    switch (variant) {
      case 'waves':
        return renderWaves();
      case 'blobs':
        return renderBlobs();
      case 'particles':
        return renderParticles();
      case 'liquid':
        return renderLiquid();
      case 'mesh':
        return renderMesh();
      default:
        return renderWaves();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`} data-id="pqqkqsehh" data-path="src/components/FluidBackground.tsx">

      {renderVariant()}
      {children &&
      <div className="relative z-10" data-id="i5dmarfji" data-path="src/components/FluidBackground.tsx">
          {children}
        </div>
      }
    </div>);

};

export default FluidBackground;