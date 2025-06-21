import { motion } from 'motion/react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50" data-id="6wccycnjm" data-path="src/components/LoadingScreen.tsx">
      <div className="text-center" data-id="zwfoqdc8r" data-path="src/components/LoadingScreen.tsx">
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }} data-id="2pmrhg2qu" data-path="src/components/LoadingScreen.tsx">

          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg transform-gpu perspective-1000" data-id="69lvizq9s" data-path="src/components/LoadingScreen.tsx">
            <div className="absolute inset-2 bg-slate-900 rounded-lg flex items-center justify-center" data-id="nq5l2762w" data-path="src/components/LoadingScreen.tsx">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }} data-id="gn667r3i6" data-path="src/components/LoadingScreen.tsx" />

            </div>
          </div>
        </motion.div>
        
        <motion.h2
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }} data-id="dl0n5rijm" data-path="src/components/LoadingScreen.tsx">

          Inlighn Tech
        </motion.h2>
        
        <motion.div
          className="flex space-x-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }} data-id="n5b2epcaf" data-path="src/components/LoadingScreen.tsx">

          {[0, 1, 2].map((i) =>
          <motion.div
            key={i}
            className="w-3 h-3 bg-cyan-400 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2
            }} data-id="b8tau56wu" data-path="src/components/LoadingScreen.tsx" />

          )}
        </motion.div>
      </div>
    </div>);

};

export default LoadingScreen;