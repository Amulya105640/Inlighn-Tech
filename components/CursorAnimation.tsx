import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CursorAnimation: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Bubble */}
      <motion.div
        ref={bubbleRef}
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring
        }} data-id="6pem74tr3" data-path="src/components/CursorAnimation.tsx">

        <motion.div
          className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 shadow-lg shadow-red-500/50"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="w2o3yba1v" data-path="src/components/CursorAnimation.tsx" />

      </motion.div>

      {/* RGB Bubble Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{
          x: cursorXSpring,
          y: cursorYSpring
        }} data-id="ok836b5p2" data-path="src/components/CursorAnimation.tsx">

        {/* Red Bubble */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-red-500/60 blur-sm"
          animate={{
            x: [-15, -25, -35],
            y: [-5, -15, -25],
            scale: [0.8, 1, 0.6],
            opacity: [0.8, 0.4, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }} data-id="5niuz1v9k" data-path="src/components/CursorAnimation.tsx" />

        
        {/* Green Bubble */}
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-green-500/60 blur-sm"
          animate={{
            x: [15, 25, 35],
            y: [-10, -20, -30],
            scale: [0.6, 1, 0.4],
            opacity: [0.7, 0.5, 0]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.3
          }} data-id="s6v7bkay0" data-path="src/components/CursorAnimation.tsx" />

        
        {/* Blue Bubble */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-blue-500/60 blur-sm"
          animate={{
            x: [0, -10, -20],
            y: [20, 30, 40],
            scale: [0.5, 0.8, 0.3],
            opacity: [0.9, 0.6, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.6
          }} data-id="tktl4at6x" data-path="src/components/CursorAnimation.tsx" />


        {/* Purple Bubble */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-purple-500/60 blur-sm"
          animate={{
            x: [10, 20, 30],
            y: [15, 25, 35],
            scale: [0.4, 0.7, 0.2],
            opacity: [0.8, 0.3, 0]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.9
          }} data-id="eaq83ccy6" data-path="src/components/CursorAnimation.tsx" />


        {/* Cyan Bubble */}
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-cyan-500/60 blur-sm"
          animate={{
            x: [-10, -20, -30],
            y: [10, 20, 30],
            scale: [0.7, 0.9, 0.3],
            opacity: [0.6, 0.4, 0]
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.2
          }} data-id="lg3q1j7f3" data-path="src/components/CursorAnimation.tsx" />


        {/* Yellow Bubble */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-yellow-500/60 blur-sm"
          animate={{
            x: [5, 15, 25],
            y: [-15, -25, -35],
            scale: [0.6, 0.8, 0.2],
            opacity: [0.7, 0.5, 0]
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.5
          }} data-id="m86dx3n7f" data-path="src/components/CursorAnimation.tsx" />

      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        style={{
          x: cursorXSpring,
          y: cursorYSpring
        }} data-id="ir9fybasl" data-path="src/components/CursorAnimation.tsx">

        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="fx1o4d64q" data-path="src/components/CursorAnimation.tsx" />

      </motion.div>

      {/* Particle System */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-20"
        style={{
          x: cursorXSpring,
          y: cursorYSpring
        }} data-id="vz9j1ykio" data-path="src/components/CursorAnimation.tsx">

        {[...Array(8)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          animate={{
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100],
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeOut"
          }} data-id="nnrvb2zjd" data-path="src/components/CursorAnimation.tsx" />

        )}
      </motion.div>
    </>);

};

export default CursorAnimation;