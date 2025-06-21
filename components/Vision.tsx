import { motion } from 'motion/react';

const Vision = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden" data-id="znzyeltf0" data-path="src/components/Vision.tsx">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" data-id="uh1yxqow4" data-path="src/components/Vision.tsx" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10" data-id="zy2octbqt" data-path="src/components/Vision.tsx">
        {/* Section title with glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16" data-id="jll7wxhph" data-path="src/components/Vision.tsx">

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative" data-id="diyeevahx" data-path="src/components/Vision.tsx">
            Our Vision
            {/* Glowing text effect */}
            <span className="absolute inset-0 text-transparent bg-gradient-to-r from-[#00ffc8] to-[#29b6f6] bg-clip-text animate-pulse" data-id="tm16hu782" data-path="src/components/Vision.tsx">
              Our Vision
            </span>
          </h2>
          
          {/* Animated divider line */}
          <motion.div
            className="relative mx-auto w-32 h-1 mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} data-id="gxylr7yrt" data-path="src/components/Vision.tsx">

            <div className="absolute inset-0 bg-gradient-to-r from-[#00ffc8] to-[#29b6f6] rounded-full" data-id="b04o7nyei" data-path="src/components/Vision.tsx">
              {/* Glowing animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00ffc8] to-[#29b6f6] rounded-full blur-md"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} data-id="j6w5nadbn" data-path="src/components/Vision.tsx" />

            </div>
          </motion.div>
          
          {/* Vision paragraph */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }} data-id="h4ywe3am5" data-path="src/components/Vision.tsx">

            Inlighntn Tech envisions a world where smart technology empowers people and businesses to thrive. 
            We aim to push the boundaries of innovation through integrity, creativity, and real-world impact.
          </motion.p>
        </motion.div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#00ffc8] rounded-full opacity-20"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }} data-id="p0mlbmpsi" data-path="src/components/Vision.tsx" />

        )}
      </div>
    </section>);

};

export default Vision;