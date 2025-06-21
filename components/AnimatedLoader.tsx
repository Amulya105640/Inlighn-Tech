import React from 'react';
import { motion } from 'motion/react';

interface AnimatedLoaderProps {
  onComplete?: () => void;
}

const AnimatedLoader: React.FC<AnimatedLoaderProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        setTimeout(() => {
          onComplete?.();
        }, 4000);
      }} data-id="ww6fvi4g3" data-path="src/components/AnimatedLoader.tsx">

      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 overflow-hidden" data-id="svguxhwp7" data-path="src/components/AnimatedLoader.tsx">
        <div className="absolute inset-0 opacity-10" data-id="yn5zs7bua" data-path="src/components/AnimatedLoader.tsx">
          {[...Array(20)].map((_, i) =>
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-cyan-400 to-blue-600"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }} data-id="spk4kq5jy" data-path="src/components/AnimatedLoader.tsx" />
          )}
          {[...Array(15)].map((_, i) =>
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-cyan-400 to-blue-600"
            style={{
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }} data-id="jukgnc00t" data-path="src/components/AnimatedLoader.tsx" />
          )}
        </div>
      </div>

      {/* Main Logo Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center p-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} data-id="8kgls9910" data-path="src/components/AnimatedLoader.tsx">

        {/* Logo Background Circle */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl shadow-cyan-500/20 border border-gray-700 flex items-center justify-center"
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }} data-id="gpeyntoia" data-path="src/components/AnimatedLoader.tsx">

          {/* Company Logo Image - Centered */}
          <motion.div
            className="relative z-20 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }} data-id="g221elngp" data-path="src/components/AnimatedLoader.tsx">
            
            <motion.img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/24343/3377f7f7-ddba-4c42-89d9-f1a235911a11.png"
              alt="InLightn Tech Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: [-180, 0, 0]
              }}
              transition={{
                duration: 2,
                delay: 1.8,
                ease: "easeOut"
              }} data-id="2efajokdh" data-path="src/components/AnimatedLoader.tsx" />

            {/* Glowing Ring around Logo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 blur-xl"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }} data-id="cm306xfup" data-path="src/components/AnimatedLoader.tsx" />
          </motion.div>

          {/* Circuit Board Pattern */}
          <div className="absolute inset-8 overflow-hidden rounded-full opacity-30" data-id="kb604x1ph" data-path="src/components/AnimatedLoader.tsx">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg" data-id="pu358f3n4" data-path="src/components/AnimatedLoader.tsx">

              <defs data-id="0ueaux8hj" data-path="src/components/AnimatedLoader.tsx">
                <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%" data-id="cwnpl5vwh" data-path="src/components/AnimatedLoader.tsx">
                  <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} data-id="0x4vb0ne0" data-path="src/components/AnimatedLoader.tsx" />
                  <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} data-id="jghfoowrn" data-path="src/components/AnimatedLoader.tsx" />
                  <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} data-id="q4tf26j6v" data-path="src/components/AnimatedLoader.tsx" />
                </linearGradient>
              </defs>
              
              {/* Circuit Lines */}
              <motion.path
                d="M 40 60 L 80 60 L 80 40 L 120 40"
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 2.2 }} data-id="7b3w6y6ag" data-path="src/components/AnimatedLoader.tsx" />

              <motion.path
                d="M 40 80 L 60 80 L 60 100 L 100 100"
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 2.4 }} data-id="r4412hgp5" data-path="src/components/AnimatedLoader.tsx" />

              <motion.path
                d="M 60 120 L 100 120 L 100 140 L 140 140"
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 2.6 }} data-id="pljxbc884" data-path="src/components/AnimatedLoader.tsx" />

              <motion.path
                d="M 120 60 L 140 60 L 140 80 L 160 80"
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 2.8 }} data-id="pczghkh8n" data-path="src/components/AnimatedLoader.tsx" />

              <motion.path
                d="M 80 160 L 120 160 L 120 120 L 160 120"
                stroke="url(#circuitGradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 3.0 }} data-id="oj0o2fxjk" data-path="src/components/AnimatedLoader.tsx" />

              
              {/* Circuit Nodes */}
              {[
              { x: 80, y: 60 }, { x: 120, y: 40 }, { x: 60, y: 80 },
              { x: 100, y: 100 }, { x: 100, y: 120 }, { x: 140, y: 140 },
              { x: 140, y: 60 }, { x: 160, y: 80 }, { x: 120, y: 160 },
              { x: 160, y: 120 }].
              map((node, index) =>
              <motion.circle
                key={index}
                cx={node.x}
                cy={node.y}
                r="6"
                fill="url(#circuitGradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }} data-id="3y5al2g4c" data-path="src/components/AnimatedLoader.tsx" />
              )}
            </svg>
          </div>

          {/* Company Name */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }} data-id="h1x5ce4e6" data-path="src/components/AnimatedLoader.tsx">

            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent" data-id="igvbu7w47" data-path="src/components/AnimatedLoader.tsx">
              InLightn Tech
            </h1>
            <motion.p
              className="text-sm md:text-base text-gray-300 mt-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }} data-id="zfqk6m1c8" data-path="src/components/AnimatedLoader.tsx">
              Experience, Learn, Thrive.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          className="mt-8 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.4 }} data-id="rjwift9s3" data-path="src/components/AnimatedLoader.tsx">

          {[0, 1, 2].map((index) =>
          <motion.div
            key={index}
            className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2
            }} data-id="qkvllksnq" data-path="src/components/AnimatedLoader.tsx" />
          )}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="mt-4 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.8 }} data-id="uwpj09r4n" data-path="src/components/AnimatedLoader.tsx">
          Initializing your journey...
        </motion.p>
      </motion.div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" data-id="hrj61idcf" data-path="src/components/AnimatedLoader.tsx">
        {[...Array(15)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: Math.random() * 4 + 2
          }} data-id="rmzco3du4" data-path="src/components/AnimatedLoader.tsx" />
        )}
      </div>

      {/* Popup Effect Ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }} data-id="z3z3fv3vv" data-path="src/components/AnimatedLoader.tsx">
        
        <motion.div
          className="w-96 h-96 md:w-[28rem] md:h-[28rem] border-2 border-cyan-400/20 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 1.2],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 2,
            delay: 2.5,
            ease: "easeOut"
          }} data-id="qvk006pfc" data-path="src/components/AnimatedLoader.tsx" />
      </motion.div>
    </motion.div>);

};

export default AnimatedLoader;