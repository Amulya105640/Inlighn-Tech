import { motion, useScroll, useTransform } from 'motion/react';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Users, Award, Target, Rocket, Shield, Code, Brain, Compass, Building, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FloatingObject from '@/components/FloatingObject';
import StatsCounter from '@/components/StatsCounter';
import ParallaxSection from '@/components/ParallaxSection';

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const navigate = useNavigate();

  const aboutSections = [
  {
    icon: Compass,
    title: "Our Mission",
    subtitle: "What drives us forward",
    description: "Discover the core mission that fuels our passion for transforming tech education worldwide.",
    gradient: "from-blue-500 to-cyan-500",
    path: "/about/mission"
  },
  {
    icon: Users,
    title: "Our Team",
    subtitle: "Meet the minds behind the brand",
    description: "Get to know the industry experts and innovators who make our vision a reality.",
    gradient: "from-purple-500 to-pink-500",
    path: "/about/team"
  },
  {
    icon: Building,
    title: "Our Story",
    subtitle: "How we started",
    description: "Learn about our journey from a small startup to a global leader in tech education.",
    gradient: "from-green-500 to-emerald-500",
    path: "/about/story"
  },
  {
    icon: Eye,
    title: "Our Vision",
    subtitle: "Where we're headed",
    description: "Explore our ambitious plans for the future of technology education.",
    gradient: "from-orange-500 to-red-500",
    path: "/about/vision"
  }];


  const features = [
  {
    icon: Zap,
    title: "Cutting-Edge Curriculum",
    description: "Learn the latest technologies with industry-relevant projects and real-world applications.",
    gradient: "from-brand-primary to-brand-accent"
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Get personalized guidance from industry professionals with years of experience.",
    gradient: "from-brand-secondary to-brand-accent"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Earn certificates recognized by top tech companies and boost your career prospects.",
    gradient: "from-brand-accent to-brand-primary"
  },
  {
    icon: Target,
    title: "Job Placement",
    description: "96% job placement rate with our comprehensive career support and network.",
    gradient: "from-brand-dark to-brand-secondary"
  }];


  const stats = [
  { label: "Students Graduated", value: 2500, suffix: "+" },
  { label: "Success Rate", value: 96, suffix: "%" },
  { label: "Partner Companies", value: 150, suffix: "+" },
  { label: "Years of Excellence", value: 8, suffix: "+" }];


  const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We stay ahead of technology trends, ensuring our students learn the most relevant and cutting-edge skills."
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every program is meticulously designed and regularly updated to meet industry standards."
  },
  {
    icon: Code,
    title: "Hands-on Learning",
    description: "Theory is important, but practice makes perfect. 70% of our curriculum is project-based."
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "We don't just teach code; we teach problem-solving and analytical thinking skills."
  }];


  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" data-id="xdqw69hmt" data-path="src/components/About.tsx">
      {/* Floating objects */}
      <FloatingObject className="top-20 right-10" size="lg" type="cube" data-id="0wun7f3zd" data-path="src/components/About.tsx" />
      <FloatingObject className="bottom-40 left-10" size="md" type="sphere" data-id="dy3uumgk3" data-path="src/components/About.tsx" />
      <FloatingObject className="top-1/2 right-1/4" size="sm" type="pyramid" data-id="s6goekzfx" data-path="src/components/About.tsx" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" data-id="du7p0dda4" data-path="src/components/About.tsx" />

      <div className="container mx-auto px-6 relative z-10" data-id="p1704c2f9" data-path="src/components/About.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="wdof5b4eh" data-path="src/components/About.tsx">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 brand-text-gradient glow-text"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="gqyezh8x6" data-path="src/components/About.tsx">

            About INLIGHTN TECH
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" data-id="xmjd6cj79" data-path="src/components/About.tsx">
            We're revolutionizing tech education with immersive learning experiences, 
            cutting-edge curriculum, and a commitment to your success. Join thousands of 
            students who have transformed their careers with us.
          </p>
        </motion.div>

        {/* About Inline Image */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="cjrhb0xlk" data-path="src/components/About.tsx">
          
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
            alt="Our friendly team working together"
            className="rounded-2xl border-2 border-brand-accent/30 shadow-2xl max-w-2xl w-full h-80 object-cover" data-id="lzhx6rp7z" data-path="src/components/About.tsx" />

        </motion.div>

        {/* Interactive About Sections */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="oidjh7hgn" data-path="src/components/About.tsx">

          <h3 className="text-3xl font-bold text-center text-white mb-12" data-id="oddvmggs0" data-path="src/components/About.tsx">
            Discover Our Story
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="58t10hilz" data-path="src/components/About.tsx">
            {aboutSections.map((section, index) =>
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(section.path)}
              style={{ transformStyle: 'preserve-3d' }} data-id="y7avbpl48" data-path="src/components/About.tsx">

                <Card className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-accent/50 transition-all duration-300 overflow-hidden cursor-pointer" data-id="lksmq48ot" data-path="src/components/About.tsx">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} data-id="ay07k6cvy" data-path="src/components/About.tsx" />
                  
                  <CardHeader className="relative z-10 text-center" data-id="cwejy0dki" data-path="src/components/About.tsx">
                    <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }} data-id="a66lqfpl3" data-path="src/components/About.tsx">

                      <section.icon className="w-10 h-10 text-white" data-id="hkro0t6e0" data-path="src/components/About.tsx" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors" data-id="9q1957cux" data-path="src/components/About.tsx">
                      {section.title}
                    </CardTitle>
                    <p className="text-brand-accent font-semibold text-sm" data-id="0qgm4kqxs" data-path="src/components/About.tsx">
                      {section.subtitle}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-center" data-id="1xhf0z604" data-path="src/components/About.tsx">
                    <CardDescription className="text-gray-300 text-sm leading-relaxed" data-id="v1ncqzp1r" data-path="src/components/About.tsx">
                      {section.description}
                    </CardDescription>
                  </CardContent>

                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} data-id="tmaqh4hui" data-path="src/components/About.tsx" />
                  
                  {/* Click ripple effect */}
                  <motion.div
                  className="absolute inset-0 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{
                    scale: 1.2,
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.4 }
                  }}
                  style={{
                    background: `linear-gradient(45deg, ${section.gradient.includes('blue') ? '#3b82f6' : section.gradient.includes('purple') ? '#8b5cf6' : section.gradient.includes('green') ? '#10b981' : '#f97316'}40, transparent)`
                  }} data-id="lt4lcymne" data-path="src/components/About.tsx" />

                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} data-id="uv88mn8cj" data-path="src/components/About.tsx">

          {features.map((feature, index) =>
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: 'preserve-3d' }} data-id="0z1zanknx" data-path="src/components/About.tsx">

              <Card className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden" data-id="2rqecelp8" data-path="src/components/About.tsx">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} data-id="e8dmugwit" data-path="src/components/About.tsx" />
                
                <CardHeader className="relative z-10" data-id="sevoiq10m" data-path="src/components/About.tsx">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`} data-id="421a066e2" data-path="src/components/About.tsx">
                    <feature.icon className="w-8 h-8 text-white" data-id="99o899qdp" data-path="src/components/About.tsx" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white text-center group-hover:text-brand-accent transition-colors" data-id="sf1cbjo0q" data-path="src/components/About.tsx">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10" data-id="o3m9uji2c" data-path="src/components/About.tsx">
                  <CardDescription className="text-gray-300 text-center" data-id="si3fluohy" data-path="src/components/About.tsx">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) =>
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100"
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
                }} data-id="od5q4m03n" data-path="src/components/About.tsx" />

              )}
              </Card>
            </motion.div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }} data-id="w5ljeabgg" data-path="src/components/About.tsx">

          <h3 className="text-3xl font-bold text-center text-white mb-12" data-id="c6hdkf1gv" data-path="src/components/About.tsx">
            Our Impact in Numbers
          </h3>
          <StatsCounter stats={stats} data-id="1s8bu5ku6" data-path="src/components/About.tsx" />
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }} data-id="lzj1jzu04" data-path="src/components/About.tsx">

          <h3 className="text-3xl font-bold text-center text-white mb-12" data-id="kw9cehtth" data-path="src/components/About.tsx">
            Our Core Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="es2lf60ue" data-path="src/components/About.tsx">
            {values.map((value, index) =>
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }} data-id="c8j3o3frc" data-path="src/components/About.tsx">

                <Card className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-brand-accent/30 transition-all duration-300 p-6" data-id="psvenzuej" data-path="src/components/About.tsx">
                  <div className="flex items-start gap-4" data-id="1jwopf82h" data-path="src/components/About.tsx">
                    <div className="flex-shrink-0" data-id="aahxk4vcq" data-path="src/components/About.tsx">
                      <div className="w-12 h-12 brand-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-id="xha2q5cj1" data-path="src/components/About.tsx">
                        <value.icon className="w-6 h-6 text-white" data-id="m7brn7nt2" data-path="src/components/About.tsx" />
                      </div>
                    </div>
                    <div data-id="ct5r4eknq" data-path="src/components/About.tsx">
                      <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors" data-id="sv399z9vs" data-path="src/components/About.tsx">
                        {value.title}
                      </h4>
                      <p className="text-gray-300 leading-relaxed" data-id="14jzejvyi" data-path="src/components/About.tsx">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Team Preview */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }} data-id="2w9a5s4kl" data-path="src/components/About.tsx">

          <h3 className="text-3xl font-bold text-white mb-6" data-id="4xbpunfqo" data-path="src/components/About.tsx">
            Meet Our Expert Team
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto" data-id="q713yrn61" data-path="src/components/About.tsx">
            Our instructors are industry veterans from top tech companies like Google, Microsoft, 
            Amazon, and Tesla. They bring real-world experience to every lesson.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto" data-id="kcqva80oh" data-path="src/components/About.tsx">
            {[
            { name: "Alex Chen", role: "Senior Developer at Google", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
            { name: "Sarah Johnson", role: "Security Expert at Microsoft", image: "https://images.unsplash.com/photo-1747778450758-1b2abbcd3b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTJDJTIwZm9jdXNpbmclMjBvbiUyMHRoZWlyJTIwZmFjZSUyQyUyMHdpdGglMjBhJTIwYmx1cnJlZCUyMGJhY2tncm91bmQufGVufDB8fHx8MTc1MDQzMzQwNnww&ixlib=rb-4.1.0&q=80&w=200$w=400" },
            { name: "Marcus Rodriguez", role: "AI Researcher at Tesla", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" },
            { name: "Emily Park", role: "Cloud Architect at Amazon", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" }].
            map((instructor, index) =>
            <motion.div
              key={index}
              className="group relative"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }} data-id="gbm57he6p" data-path="src/components/About.tsx">

                <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-brand-accent/50 group-hover:border-brand-primary/50 transition-colors" data-id="w88l5kmiq" data-path="src/components/About.tsx">
                  <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-id="wb9ooahiq" data-path="src/components/About.tsx" />

                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-id="f04nt05q8" data-path="src/components/About.tsx" />
                </div>
                <h4 className="text-sm font-semibold text-white" data-id="0y9bzgz9c" data-path="src/components/About.tsx">{instructor.name}</h4>
                <p className="text-xs text-gray-400" data-id="s0ffs6mfj" data-path="src/components/About.tsx">{instructor.role}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Parallax background elements */}
      <ParallaxSection className="absolute inset-0 -z-10" speed={0.2} data-id="ekk9wd015" data-path="src/components/About.tsx">
        <motion.div
          style={{ y }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-brand-accent/10 to-brand-primary/10 rounded-full blur-3xl" data-id="h9dlnm50d" data-path="src/components/About.tsx" />

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl" data-id="luif66cvu" data-path="src/components/About.tsx" />

      </ParallaxSection>
    </section>);

};

export default About;