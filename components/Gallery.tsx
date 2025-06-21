import { motion } from 'motion/react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Zap, Code, Database, Shield, Smartphone, Cloud } from 'lucide-react';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    description: "Modern React-based shopping platform with real-time inventory",
    tech: ["React", "Node.js", "MongoDB"],
    icon: Code,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Cybersecurity Dashboard",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    description: "Real-time threat monitoring and analysis dashboard",
    tech: ["Python", "Django", "PostgreSQL"],
    icon: Shield,
    color: "from-red-500 to-orange-500"
  },
  {
    id: 3,
    title: "AI Chatbot Interface",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    description: "Intelligent customer service bot with NLP capabilities",
    tech: ["Python", "TensorFlow", "React"],
    icon: Zap,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    description: "Secure mobile banking with biometric authentication",
    tech: ["React Native", "Firebase", "Stripe"],
    icon: Smartphone,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 5,
    title: "Data Analytics Platform",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description: "Business intelligence dashboard with predictive analytics",
    tech: ["Python", "Pandas", "D3.js"],
    icon: Database,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    title: "Cloud Infrastructure",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    description: "Scalable microservices architecture on AWS",
    tech: ["AWS", "Docker", "Kubernetes"],
    icon: Cloud,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 7,
    title: "Social Media Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    description: "Instagram-like social platform with real-time messaging",
    tech: ["Vue.js", "Express", "Socket.io"],
    icon: Code,
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    title: "IoT Security System",
    category: "Security",
    image: "https://images.unsplash.com/photo-1558346648-9757f2fa4474?w=400&h=300&fit=crop",
    description: "Smart home security with facial recognition",
    tech: ["Raspberry Pi", "OpenCV", "Flask"],
    icon: Shield,
    color: "from-teal-500 to-cyan-500"
  }];


  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" data-id="pxydowxeo" data-path="src/components/Gallery.tsx">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" data-id="d2pxsqfi3" data-path="src/components/Gallery.tsx" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }} data-id="0afofmgqo" data-path="src/components/Gallery.tsx" />


      <div className="container mx-auto px-6 relative z-10" data-id="i4tnjxt8s" data-path="src/components/Gallery.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="3wvalxamb" data-path="src/components/Gallery.tsx">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 brand-text-gradient glow-text"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="i6vsok16j" data-path="src/components/Gallery.tsx">

            Student Projects Gallery
          </motion.h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="xlr0m8fmb" data-path="src/components/Gallery.tsx">
            Discover amazing projects built by our students during their internship programs. 
            These real-world applications showcase the skills and creativity of our graduates.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="jkldpbolh" data-path="src/components/Gallery.tsx">
          {projects.map((project, index) =>
          <motion.div
            key={project.id}
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)} data-id="rqop4sp2s" data-path="src/components/Gallery.tsx">

              <Card className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden cursor-pointer" data-id="bn4291ytv" data-path="src/components/Gallery.tsx">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden" data-id="lzm3c04r9" data-path="src/components/Gallery.tsx">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-id="al80jqwlk" data-path="src/components/Gallery.tsx" />

                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-id="3kh75sh4a" data-path="src/components/Gallery.tsx" />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3" data-id="bzmtxrdmf" data-path="src/components/Gallery.tsx">
                    <Badge className={`bg-gradient-to-r ${project.color} text-white border-0`} data-id="dn6iep5t2" data-path="src/components/Gallery.tsx">
                      <project.icon className="w-3 h-3 mr-1" data-id="1y6s1hg19" data-path="src/components/Gallery.tsx" />
                      {project.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }} data-id="1d195kqk4" data-path="src/components/Gallery.tsx" />


                  {/* External link icon */}
                  <motion.div
                  className="absolute top-3 right-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }} data-id="89su5iihq" data-path="src/components/Gallery.tsx">
                    
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30" data-id="nk13wnldn" data-path="src/components/Gallery.tsx">
                      <ExternalLink className="w-4 h-4 text-white" data-id="ickwm3ohu" data-path="src/components/Gallery.tsx" />
                    </div>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-6" data-id="u5kd6xjjb" data-path="src/components/Gallery.tsx">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors" data-id="jj08z94bv" data-path="src/components/Gallery.tsx">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2" data-id="3sj2toq2y" data-path="src/components/Gallery.tsx">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2" data-id="cu3am03ur" data-path="src/components/Gallery.tsx">
                    {project.tech.map((tech, techIndex) =>
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-md border border-white/20" data-id="4xy96z80a" data-path="src/components/Gallery.tsx">
                        {tech}
                      </span>
                  )}
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20"
                style={{
                  background: `linear-gradient(45deg, ${project.color.split(' ')[1]}, transparent, ${project.color.split(' ')[3]}, transparent)`,
                  filter: 'blur(1px)'
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }} data-id="bnkgj0fsc" data-path="src/components/Gallery.tsx" />


                {/* Glowing particles */}
                {hoveredIndex === index &&
              <>
                    {[...Array(4)].map((_, i) =>
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-brand-accent rounded-full"
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
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
                  }} data-id="mlnj3r5fi" data-path="src/components/Gallery.tsx" />

                )}
                  </>
              }
              </Card>
            </motion.div>
          )}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }} data-id="l81xims33" data-path="src/components/Gallery.tsx">

          <h3 className="text-2xl font-bold text-white mb-4" data-id="33tu36otr" data-path="src/components/Gallery.tsx">
            Ready to Build Your Own Project?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto" data-id="zgip0sljr" data-path="src/components/Gallery.tsx">
            Join our internship programs and create impressive projects that showcase your skills 
            to potential employers. Build your portfolio while learning from industry experts.
          </p>
          
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-accent text-white font-semibold rounded-lg transition-all duration-300 btn-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }} data-id="lz0bbyi2k" data-path="src/components/Gallery.tsx">
            
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Background animated elements */}
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }} data-id="fjhc0rqix" data-path="src/components/Gallery.tsx" />

    </section>);

};

export default Gallery;