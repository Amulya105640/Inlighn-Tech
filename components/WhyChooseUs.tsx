import { motion } from 'motion/react';

const WhyChooseUs = () => {
  const features = [
  {
    icon: '👨‍💻',
    title: 'Expert Team',
    description: 'Our tech experts bring deep knowledge and real-world experience to every project.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&h=80&fit=crop&crop=face'
  },
  {
    icon: '🎨',
    title: 'Creative Vision',
    description: 'We combine logic and design to deliver engaging, brand-aligned solutions.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=80&h=80&fit=crop'
  },
  {
    icon: '⚡',
    title: 'Fast & Reliable',
    description: 'Optimized processes and agile delivery — we never miss deadlines.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop'
  },
  {
    icon: '🤝',
    title: 'You First',
    description: 'Every solution is built around your goals, with full transparency and support.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop'
  }];


  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden" data-id="vrzsa5njn" data-path="src/components/WhyChooseUs.tsx">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" data-id="tfahku5by" data-path="src/components/WhyChooseUs.tsx" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-[#00ffc8]/10 to-[#29b6f6]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="ujdmrxfo1" data-path="src/components/WhyChooseUs.tsx" />

      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-[#29b6f6]/10 to-[#00ffc8]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} data-id="oogyfmrxd" data-path="src/components/WhyChooseUs.tsx" />


      <div className="max-w-6xl mx-auto relative z-10" data-id="x3l2p45bg" data-path="src/components/WhyChooseUs.tsx">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} data-id="68t9wbc68" data-path="src/components/WhyChooseUs.tsx">

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 relative" data-id="x9ncgybxx" data-path="src/components/WhyChooseUs.tsx">
            Why Choose Us
            <span className="absolute inset-0 text-transparent bg-gradient-to-r from-[#00ffc8] to-[#29b6f6] bg-clip-text animate-pulse" data-id="vo83q4li7" data-path="src/components/WhyChooseUs.tsx">
              Why Choose Us
            </span>
          </h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }} data-id="lcb4s2zcv" data-path="src/components/WhyChooseUs.tsx">

            At Inlighntn Tech, we craft intelligent digital experiences with precision, creativity, and cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="kjoxep4i0" data-path="src/components/WhyChooseUs.tsx">
          {features.map((feature, index) =>
          <motion.div
            key={index}
            className="group relative p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-md rounded-3xl border border-gray-700/40 hover:border-[#00ffc8]/60 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -8
            }} data-id="tpxeb7gtx" data-path="src/components/WhyChooseUs.tsx">

              {/* Glowing background gradient on hover */}
              <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#00ffc8]/10 via-[#29b6f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false} data-id="a5kj66vka" data-path="src/components/WhyChooseUs.tsx" />

              
              {/* Animated border glow */}
              <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, #00ffc8, transparent, #29b6f6, transparent)',
                filter: 'blur(1px)'
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }} data-id="k3yj8x4el" data-path="src/components/WhyChooseUs.tsx" />

              
              {/* Content */}
              <div className="relative z-10 text-center" data-id="j07y70t0a" data-path="src/components/WhyChooseUs.tsx">
                {/* Icon with glow effect and small inline image */}
                <motion.div
                className="text-5xl mb-6 relative inline-block"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 0.6 }} data-id="cx0jzpghu" data-path="src/components/WhyChooseUs.tsx">

                  <div className="flex items-center justify-center gap-3 mb-2" data-id="84uwnplyi" data-path="src/components/WhyChooseUs.tsx">
                    <span className="relative z-10" data-id="34ko8rzea" data-path="src/components/WhyChooseUs.tsx">{feature.icon}</span>
                    <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-8 h-8 rounded-full border border-[#00ffc8]/30 group-hover:border-[#00ffc8]/60 transition-all duration-300" data-id="51jxe3eov" data-path="src/components/WhyChooseUs.tsx" />

                  </div>
                  {/* Icon glow */}
                  <motion.div
                  className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, #00ffc8 0%, #29b6f6 50%, transparent 70%)'
                  }} data-id="jmwv29yin" data-path="src/components/WhyChooseUs.tsx" />

                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00ffc8] transition-colors duration-300" data-id="e3d9sm1cd" data-path="src/components/WhyChooseUs.tsx">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300" data-id="qer4eq8ip" data-path="src/components/WhyChooseUs.tsx">
                  {feature.description}
                </p>
              </div>
              
              {/* Subtle particle effects */}
              {[...Array(4)].map((_, i) =>
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-[#00ffc8] rounded-full opacity-0 group-hover:opacity-40"
              animate={{
                x: [0, (Math.random() - 0.5) * 40],
                y: [0, (Math.random() - 0.5) * 40],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`
              }} data-id="7tyqjcq7j" data-path="src/components/WhyChooseUs.tsx" />

            )}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default WhyChooseUs;