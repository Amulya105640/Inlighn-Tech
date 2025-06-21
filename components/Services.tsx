import { motion } from 'motion/react';

const Services = () => {
  const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom, scalable web apps with modern frameworks like React and Next.js.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions with seamless UX.'
  },
  {
    icon: '🧠',
    title: 'AI Integration',
    description: 'Smart automation and AI-powered tools built into your workflow.'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable, secure infrastructure hosted on AWS, Azure, or GCP.'
  },
  {
    icon: '🎯',
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and creative design tailored for your users.'
  },
  {
    icon: '🔐',
    title: 'Cybersecurity',
    description: 'Security-first architecture to keep your systems and data safe.'
  }];


  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden" data-id="3npca2d5y" data-path="src/components/Services.tsx">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(41,182,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(41,182,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" data-id="2m5v6oi3c" data-path="src/components/Services.tsx" />
      
      <div className="max-w-7xl mx-auto relative z-10" data-id="ptjjadfl4" data-path="src/components/Services.tsx">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} data-id="x8bt5whei" data-path="src/components/Services.tsx">

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 relative" data-id="q9wyg3ps0" data-path="src/components/Services.tsx">
            Our Services
            <span className="absolute inset-0 text-transparent bg-gradient-to-r from-[#29b6f6] to-[#00ffc8] bg-clip-text animate-pulse" data-id="96mdap9w1" data-path="src/components/Services.tsx">
              Our Services
            </span>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="jfltitp3h" data-path="src/components/Services.tsx">
          {services.map((service, index) =>
          <motion.div
            key={index}
            className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-[#00ffc8]/50 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              y: -5
            }} data-id="yosvgh76g" data-path="src/components/Services.tsx">

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ffc8]/5 to-[#29b6f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-id="cc4f7y109" data-path="src/components/Services.tsx" />
              
              {/* Glowing border animation */}
              <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(45deg, #00ffc8, #29b6f6, #00ffc8)',
                padding: '1px'
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }} data-id="ie9fob4vg" data-path="src/components/Services.tsx">

                <div className="w-full h-full bg-gradient-to-br from-gray-900/90 to-gray-800/70 rounded-2xl" data-id="et5xaeclb" data-path="src/components/Services.tsx" />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10" data-id="ltminq986" data-path="src/components/Services.tsx">
                {/* Icon */}
                <motion.div
                className="text-6xl mb-6 relative"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 0.5 }} data-id="qmdzrkjw7" data-path="src/components/Services.tsx">

                  <span className="relative z-10" data-id="tsr59lw3q" data-path="src/components/Services.tsx">{service.icon}</span>
                  {/* Icon glow */}
                  <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-[#00ffc8] to-[#29b6f6]" data-id="7bqxsrt00" data-path="src/components/Services.tsx" />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ffc8] transition-colors duration-300" data-id="3guehkrwe" data-path="src/components/Services.tsx">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-lg" data-id="4h0d6ymbp" data-path="src/components/Services.tsx">
                  {service.description}
                </p>
              </div>
              
              {/* Floating particles on hover */}
              {[...Array(3)].map((_, i) =>
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00ffc8] rounded-full opacity-0 group-hover:opacity-60"
              animate={{
                x: [0, Math.random() * 60 - 30],
                y: [0, Math.random() * 60 - 30],
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
              }} data-id="uku0gi1ik" data-path="src/components/Services.tsx" />

            )}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default Services;