
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashScreenProps {
  isVisible: boolean;
  onComplete: () => void;
  duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  isVisible,
  onComplete,
  duration = 2500
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowContent(true);
      const timer = setTimeout(() => {
        setShowContent(false);
        setTimeout(onComplete, 500); // Wait for fade out
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onComplete]);

  return (
    <AnimatePresence data-id="3at0dfuam" data-path="src/components/SplashScreen.tsx">
      {isVisible &&
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" data-id="lk0ys7gs4" data-path="src/components/SplashScreen.tsx">

          <div className="relative" data-id="iyzzd77pc" data-path="src/components/SplashScreen.tsx">
            {/* Background glow effect */}
            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-white blur-3xl" data-id="7l9n9yi30" data-path="src/components/SplashScreen.tsx" />

            
            {/* Logo container */}
            <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-white shadow-2xl" data-id="sohib4j7e" data-path="src/components/SplashScreen.tsx">

              <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/24343/c4f507a9-75c9-4a7d-a8c9-7654ef5a7090.png"
              alt="Logo"
              className="w-full h-full object-cover" data-id="lhb1uf7kq" data-path="src/components/SplashScreen.tsx" />

            </motion.div>

            {/* Loading animation */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2" data-id="w7nr1snzl" data-path="src/components/SplashScreen.tsx">

              <div className="flex space-x-2" data-id="x1gfkw5y3" data-path="src/components/SplashScreen.tsx">
                {[0, 1, 2].map((i) =>
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-3 h-3 bg-white rounded-full" data-id="sk8rkeb6e" data-path="src/components/SplashScreen.tsx" />

              )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

};

export default SplashScreen;