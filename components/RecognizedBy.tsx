import { motion } from 'motion/react';

const RecognizedBy = () => {
  const logos = [
  {
    name: "Startup India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Startup_India_logo.svg/1200px-Startup_India_logo.svg.png",
    url: "https://www.startupindia.gov.in/",
    description: "Recognized by Government of India"
  },
  {
    name: "ISO Certified",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
    url: "#",
    description: "Quality Management System"
  },
  {
    name: "Ministry of Corporate Affairs",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    url: "http://www.mca.gov.in/",
    description: "Government of India"
  },
  {
    name: "Make in India",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Make_In_India.png/1200px-Make_In_India.png",
    url: "https://www.makeinindia.com/",
    description: "Supporting Digital India"
  }];


  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden" data-id="xocvg3e64" data-path="src/components/RecognizedBy.tsx">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" data-id="pjg0suev0" data-path="src/components/RecognizedBy.tsx" />
      
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5" data-id="czlvbj9ax" data-path="src/components/RecognizedBy.tsx" />

      <div className="container mx-auto px-6 relative z-10" data-id="sc98ka0m1" data-path="src/components/RecognizedBy.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="sh842pv6o" data-path="src/components/RecognizedBy.tsx">

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            animate={{
              backgroundImage: [
              'linear-gradient(45deg, #00ffc8, #29b6f6)',
              'linear-gradient(45deg, #29b6f6, #00ffc8)',
              'linear-gradient(45deg, #00ffc8, #29b6f6)']

            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="8ziz5mmz2" data-path="src/components/RecognizedBy.tsx">

            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent" data-id="if5bfo3zm" data-path="src/components/RecognizedBy.tsx">
              Recognized & Supported By
            </span>
          </motion.h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto" data-id="6by1wo7w4" data-path="src/components/RecognizedBy.tsx">
            Proud to be recognized by leading government institutions and certification bodies
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} data-id="qrmm6crjg" data-path="src/components/RecognizedBy.tsx">

          {logos.map((logo, index) =>
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }} data-id="npdb1hl2w" data-path="src/components/RecognizedBy.tsx">

              <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-accent/30 transition-all duration-300 cursor-pointer group-hover:bg-white/10" data-id="fom50b18j" data-path="src/components/RecognizedBy.tsx">
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" data-id="6xtjynt87" data-path="src/components/RecognizedBy.tsx" />
                
                {/* Logo container */}
                <div className="relative z-10 text-center" data-id="whb5cuq4s" data-path="src/components/RecognizedBy.tsx">
                  <div className="w-full h-16 mb-4 flex items-center justify-center" data-id="qmqni1tec" data-path="src/components/RecognizedBy.tsx">
                    <img
                    src={logo.logo}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    style={{ width: 'auto', height: '100%' }} data-id="8i2a296af" data-path="src/components/RecognizedBy.tsx" />

                  </div>
                  
                  <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-brand-accent transition-colors" data-id="0bhwwq1dr" data-path="src/components/RecognizedBy.tsx">
                    {logo.name}
                  </h3>
                  
                  <p className="text-gray-400 text-xs" data-id="f27btjvao" data-path="src/components/RecognizedBy.tsx">
                    {logo.description}
                  </p>
                </div>

                {/* Animated border glow */}
                <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30"
                style={{
                  background: 'linear-gradient(45deg, #00ffc8, transparent, #29b6f6, transparent)',
                  filter: 'blur(1px)'
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }} data-id="o83ebhkn9" data-path="src/components/RecognizedBy.tsx" />


                {/* Subtle particles */}
                {[...Array(3)].map((_, i) =>
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-brand-accent rounded-full opacity-0 group-hover:opacity-60"
                animate={{
                  x: [0, Math.random() * 30 - 15],
                  y: [0, Math.random() * 30 - 15],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }} data-id="oouqy0yf0" data-path="src/components/RecognizedBy.tsx" />

              )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Additional certifications text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }} data-id="xy8ydvezq" data-path="src/components/RecognizedBy.tsx">

          <p className="text-gray-400 text-sm max-w-3xl mx-auto" data-id="yixi5sp5m" data-path="src/components/RecognizedBy.tsx">
            These recognitions validate our commitment to quality education and innovation. 
            Our programs meet the highest industry standards and government guidelines.
          </p>
        </motion.div>
      </div>

      {/* Background animated elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-brand-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="fzy2rondt" data-path="src/components/RecognizedBy.tsx" />

      
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} data-id="auxq78f64" data-path="src/components/RecognizedBy.tsx" />

    </section>);

};

export default RecognizedBy;