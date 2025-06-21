import React from 'react';
import { motion } from 'motion/react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'avatar' | 'button' | 'image' | 'list';
  count?: number;
  className?: string;
  animate?: 'shimmer' | 'wave' | 'pulse';
  width?: string | number;
  height?: string | number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'card',
  count = 1,
  className = '',
  animate = 'shimmer',
  width,
  height
}) => {
  const shimmerVariants = {
    shimmer: {
      x: ['-100%', '100%'],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear'
      }
    },
    wave: {
      scale: [1, 1.02, 1],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut'
      }
    },
    pulse: {
      opacity: [0.6, 1, 0.6],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: 'easeInOut'
      }
    }
  };

  const getSkeletonStyles = () => {
    const baseStyles = "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-md overflow-hidden relative";

    switch (variant) {
      case 'card':
        return `${baseStyles} w-full h-48`;
      case 'text':
        return `${baseStyles} w-full h-4`;
      case 'avatar':
        return `${baseStyles} w-12 h-12 rounded-full`;
      case 'button':
        return `${baseStyles} w-24 h-10`;
      case 'image':
        return `${baseStyles} w-full h-40`;
      case 'list':
        return `${baseStyles} w-full h-16`;
      default:
        return baseStyles;
    }
  };

  const renderSkeleton = (index: number) =>
  <motion.div
    key={index}
    className={`${getSkeletonStyles()} ${className}`}
    style={{ width, height }}
    variants={shimmerVariants}
    animate={animate} data-id="2uwtasaki" data-path="src/components/SkeletonLoader.tsx">

      {animate === 'shimmer' &&
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      variants={shimmerVariants}
      animate="shimmer" data-id="k9fi6k12b" data-path="src/components/SkeletonLoader.tsx" />

    }
    </motion.div>;


  if (variant === 'card') {
    return (
      <div className="space-y-4" data-id="3joxrwjjs" data-path="src/components/SkeletonLoader.tsx">
        {Array.from({ length: count }, (_, index) =>
        <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md" data-id="cvixwwfyl" data-path="src/components/SkeletonLoader.tsx">
            <div className="flex items-center space-x-4 mb-4" data-id="kho6fus9k" data-path="src/components/SkeletonLoader.tsx">
              <SkeletonLoader variant="avatar" animate={animate} data-id="r2lo0f12f" data-path="src/components/SkeletonLoader.tsx" />
              <div className="flex-1 space-y-2" data-id="er548b3b4" data-path="src/components/SkeletonLoader.tsx">
                <SkeletonLoader variant="text" animate={animate} width="60%" data-id="93kp09kps" data-path="src/components/SkeletonLoader.tsx" />
                <SkeletonLoader variant="text" animate={animate} width="40%" data-id="dre9sj2bu" data-path="src/components/SkeletonLoader.tsx" />
              </div>
            </div>
            <SkeletonLoader variant="image" animate={animate} className="mb-4" data-id="p1cefp061" data-path="src/components/SkeletonLoader.tsx" />
            <div className="space-y-2" data-id="pmxr5vxjn" data-path="src/components/SkeletonLoader.tsx">
              <SkeletonLoader variant="text" animate={animate} data-id="sr79xv8lm" data-path="src/components/SkeletonLoader.tsx" />
              <SkeletonLoader variant="text" animate={animate} width="80%" data-id="lllf7l0w1" data-path="src/components/SkeletonLoader.tsx" />
              <SkeletonLoader variant="text" animate={animate} width="60%" data-id="f0576zce6" data-path="src/components/SkeletonLoader.tsx" />
            </div>
          </div>
        )}
      </div>);

  }

  if (variant === 'list') {
    return (
      <div className="space-y-3" data-id="6bzhfcyas" data-path="src/components/SkeletonLoader.tsx">
        {Array.from({ length: count }, (_, index) =>
        <div key={index} className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg" data-id="aapnoxoje" data-path="src/components/SkeletonLoader.tsx">
            <SkeletonLoader variant="avatar" animate={animate} data-id="8cfs0cnx3" data-path="src/components/SkeletonLoader.tsx" />
            <div className="flex-1 space-y-2" data-id="fo4rr87pk" data-path="src/components/SkeletonLoader.tsx">
              <SkeletonLoader variant="text" animate={animate} width="70%" data-id="977bqv56x" data-path="src/components/SkeletonLoader.tsx" />
              <SkeletonLoader variant="text" animate={animate} width="50%" data-id="mcn9b8orh" data-path="src/components/SkeletonLoader.tsx" />
            </div>
            <SkeletonLoader variant="button" animate={animate} data-id="jk8l9s1xw" data-path="src/components/SkeletonLoader.tsx" />
          </div>
        )}
      </div>);

  }

  return (
    <div className="space-y-2" data-id="1c6w9jol1" data-path="src/components/SkeletonLoader.tsx">
      {Array.from({ length: count }, (_, index) => renderSkeleton(index))}
    </div>);

};

export default SkeletonLoader;