import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Code, BarChart3, Database, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingObject from '@/components/FloatingObject';
import ParallaxSection from '@/components/ParallaxSection';

const Hero = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-dark via-brand-secondary to-brand-dark" data-id="el046nrb1" data-path="src/components/Hero.tsx">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" data-id="cp4m5pcnp" data-path="src/components/Hero.tsx" />
      
      {/* Floating objects */}
      <FloatingObject className="top-20 left-10" size="sm" type="cube" data-id="bu02s5npm" data-path="src/components/Hero.tsx" />
      <FloatingObject className="top-40 right-20" size="md" type="sphere" data-id="pj1jqkhx4" data-path="src/components/Hero.tsx" />
      <FloatingObject className="bottom-40 left-20" size="lg" type="pyramid" data-id="4gzuxiy88" data-path="src/components/Hero.tsx" />
      <FloatingObject className="bottom-20 right-10" size="sm" type="cube" data-id="ymuj83yxh" data-path="src/components/Hero.tsx" />
      
      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto" data-id="df3jauhcw" data-path="src/components/Hero.tsx">

        {/* Animated title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8" data-id="vxtt6zo61" data-path="src/components/Hero.tsx">

          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }} data-id="h753rsb1c" data-path="src/components/Hero.tsx">

            Transform Your Career with{' '}
            <span className="brand-text-gradient glow-text" data-id="pemudsgbb" data-path="src/components/Hero.tsx">
              INLIGHTN TECH
            </span>
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }} data-id="0m878z0r9" data-path="src/components/Hero.tsx">

            Gain real-world experience with our immersive internship programs in Cyber Security, 
            Full Stack Development, Data Science, Data Analytics and various tech domains. 
            Learn today, lead tomorrow.
          </motion.div>
        </motion.div>

        {/* Interactive skill cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }} data-id="51olvxjdm" data-path="src/components/Hero.tsx">

          {[
          { icon: Shield, title: "Cybersecurity", desc: "Ethical Hacking & Penetration Testing" },
          { icon: Code, title: "Full Stack", desc: "Modern Web Development Stack" },
          { icon: BarChart3, title: "Data Science", desc: "AI, ML & Predictive Analytics" },
          { icon: Database, title: "Data Analytics", desc: "Business Intelligence & Insights" }].
          map((skill, index) =>
          <motion.div
            key={index}
            className="group relative p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:border-brand-accent/40 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50
            }}
            style={{ transformStyle: 'preserve-3d' }} data-id="vlf3jxsdh" data-path="src/components/Hero.tsx">

              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-id="0twfnucdq" data-path="src/components/Hero.tsx" />
              
              <skill.icon className="w-12 h-12 text-brand-primary mb-4 mx-auto group-hover:text-brand-accent transition-colors" data-id="xjajcca5v" data-path="src/components/Hero.tsx" />
              <h3 className="text-lg font-bold text-white mb-2" data-id="t2zougmbj" data-path="src/components/Hero.tsx">{skill.title}</h3>
              <p className="text-gray-300 text-sm" data-id="qnuuz1ia0" data-path="src/components/Hero.tsx">{skill.desc}</p>
              
              {/* Glowing particles */}
              {[...Array(3)].map((_, i) =>
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100"
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }} data-id="ia68uxsm3" data-path="src/components/Hero.tsx" />

            )}
            </motion.div>
          )}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }} data-id="4izf29gg2" data-path="src/components/Hero.tsx">

          <Button
            onClick={() => navigate('/programs')}
            className="group relative px-8 py-4 brand-gradient hover:brightness-110 border-0 text-lg font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 btn-glow"
            size="lg" data-id="acck99dbt" data-path="src/components/Hero.tsx">

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }} data-id="35u7auoxd" data-path="src/components/Hero.tsx">

              Explore Internships
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-id="gar03qe49" data-path="src/components/Hero.tsx" />
            </motion.div>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-300" data-id="qfflie0mv" data-path="src/components/Hero.tsx" />
          </Button>
          
          <Button
            onClick={() => navigate('/about')}
            variant="outline"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-brand-accent/50 text-lg font-semibold"
            size="lg" data-id="vvtkfpjwp" data-path="src/components/Hero.tsx">

            <Sparkles className="w-5 h-5 mr-2" data-id="4ciimyadz" data-path="src/components/Hero.tsx" />
            Learn More
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="odey07muz" data-path="src/components/Hero.tsx">

          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center" data-id="d00bw0yrh" data-path="src/components/Hero.tsx">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} data-id="m79zet2x6" data-path="src/components/Hero.tsx" />

          </div>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <ParallaxSection className="absolute inset-0 -z-10" speed={0.3} data-id="veguglql6" data-path="src/components/Hero.tsx">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl" data-id="1uufddq6t" data-path="src/components/Hero.tsx" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-secondary/10 to-brand-primary/10 rounded-full blur-3xl" data-id="clc55ybpb" data-path="src/components/Hero.tsx" />
      </ParallaxSection>

      {/* Hero inline image - Person designing website */}
      <motion.div
        className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }} data-id="8yjlr80mf" data-path="src/components/Hero.tsx">

        <div className="relative" data-id="t3dgb2vwz" data-path="src/components/Hero.tsx">
          {/* Main hero image */}
          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop"
            alt="Person designing website on laptop"
            className="w-80 h-80 object-cover rounded-2xl border-2 border-brand-accent/30 shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }} data-id="7g5fx2hhk" data-path="src/components/Hero.tsx" />

          
          {/* Glowing orb effects */}
          <motion.div
            className="absolute top-10 right-10 w-3 h-3 bg-brand-primary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="bspny4804" data-path="src/components/Hero.tsx" />

          <motion.div
            className="absolute bottom-20 left-5 w-2 h-2 bg-brand-accent rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }} data-id="0si9chlel" data-path="src/components/Hero.tsx" />

        </div>
      </motion.div>
    </section>);

};

export default Hero;