import React from 'react';
import { motion } from 'motion/react';
import { Eye, Rocket, Globe, Zap, Brain, Shield, Lightbulb, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const VisionPage: React.FC = () => {
  const visionPillars = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized education experiences that adapt to each student's learning style, pace, and career goals using advanced artificial intelligence.",
    timeline: "2024-2025"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Breaking down geographical and economic barriers to make world-class tech education available to anyone, anywhere in the world.",
    timeline: "Ongoing"
  },
  {
    icon: Rocket,
    title: "Emerging Technologies",
    description: "Leading the curriculum in quantum computing, sustainable tech, space technology, and other cutting-edge fields shaping our future.",
    timeline: "2025-2030"
  },
  {
    icon: Shield,
    title: "Ethical Technology",
    description: "Training the next generation of technologists to build responsible, secure, and ethical solutions that benefit humanity.",
    timeline: "Always"
  }];


  const futureGoals = [
  {
    goal: "1 Million Lives Transformed",
    description: "Reach and positively impact one million students worldwide by 2030",
    progress: 50000,
    target: 1000000,
    color: "from-blue-500 to-cyan-500"
  },
  {
    goal: "Zero-Cost Education Access",
    description: "Provide free, high-quality tech education through scholarships and partnerships",
    progress: 5000,
    target: 50000,
    color: "from-green-500 to-emerald-500"
  },
  {
    goal: "Global Innovation Hubs",
    description: "Establish physical and virtual learning centers in 100 countries",
    progress: 25,
    target: 100,
    color: "from-purple-500 to-violet-500"
  },
  {
    goal: "Industry Partnership Network",
    description: "Partner with 1000+ companies for direct career placement",
    progress: 500,
    target: 1000,
    color: "from-orange-500 to-red-500"
  }];


  const technologies = [
  { name: "Quantum Computing", icon: Zap, description: "Preparing students for the quantum revolution" },
  { name: "Sustainable Tech", icon: Lightbulb, description: "Green technology solutions for climate change" },
  { name: "Space Technology", icon: Rocket, description: "Skills for the new space economy" },
  { name: "Biotech Integration", icon: Brain, description: "Where biology meets technology" },
  { name: "Metaverse Development", icon: Globe, description: "Building the next digital frontier" },
  { name: "Cybersecurity Evolution", icon: Shield, description: "Protecting our digital future" }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black" data-id="4ffyciuis" data-path="src/pages/VisionPage.tsx">
      <Header data-id="bcjr86fuv" data-path="src/pages/VisionPage.tsx" />
      
      <AboutHero
        title="Our Vision"
        subtitle="Shaping Tomorrow's Technology Leaders"
        description="We envision a world where technology education is accessible to everyone, where innovation thrives, and where the next generation of technologists builds solutions that make the world a better place for all humanity."
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
        icon={<Eye className="w-10 h-10 text-white" data-id="6gezf1svf" data-path="src/pages/VisionPage.tsx" />} data-id="1t3eei1n0" data-path="src/pages/VisionPage.tsx">

        {/* Vision Quote */}
        <motion.div
          className="bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }} data-id="l65om0byv" data-path="src/pages/VisionPage.tsx">

          <p className="text-2xl font-semibold text-white mb-2" data-id="k3jpve8ps" data-path="src/pages/VisionPage.tsx">
            "The future belongs to those who prepare for it today."
          </p>
          <p className="text-brand-accent" data-id="7d0jtc54i" data-path="src/pages/VisionPage.tsx">- INLIGHTN TECH Vision Statement</p>
        </motion.div>
      </AboutHero>

      {/* Vision Pillars */}
      <section className="py-20 relative" data-id="ab9n2zvmc" data-path="src/pages/VisionPage.tsx">
        <div className="container mx-auto px-6" data-id="yw8yljzdq" data-path="src/pages/VisionPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="fgdn8wlzq" data-path="src/pages/VisionPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="rkl9d0smh" data-path="src/pages/VisionPage.tsx">
              Our Vision Pillars
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="d9s1djpze" data-path="src/pages/VisionPage.tsx">
              Building the Future of Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="xk0fvkt04" data-path="src/pages/VisionPage.tsx">
              Our vision is built on four fundamental pillars that guide every decision we make 
              and every innovation we pursue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" data-id="9n02tattb" data-path="src/pages/VisionPage.tsx">
            {visionPillars.map((pillar, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group" data-id="c7aa43dof" data-path="src/pages/VisionPage.tsx">

                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300" data-id="oihehxg1k" data-path="src/pages/VisionPage.tsx">
                  <CardHeader data-id="1lacq98rv" data-path="src/pages/VisionPage.tsx">
                    <div className="flex items-center gap-4 mb-4" data-id="5s2euhlcs" data-path="src/pages/VisionPage.tsx">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" data-id="tjx3qyzy9" data-path="src/pages/VisionPage.tsx">
                        <pillar.icon className="w-8 h-8 text-white" data-id="j1a46wqao" data-path="src/pages/VisionPage.tsx" />
                      </div>
                      <div data-id="qyygnqdv8" data-path="src/pages/VisionPage.tsx">
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors" data-id="2cdxzdpcy" data-path="src/pages/VisionPage.tsx">
                          {pillar.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-brand-accent border-brand-accent/50 mt-1" data-id="l0lrzv6xk" data-path="src/pages/VisionPage.tsx">
                          {pillar.timeline}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent data-id="7coffd9o7" data-path="src/pages/VisionPage.tsx">
                    <p className="text-gray-300 leading-relaxed" data-id="o617ymh03" data-path="src/pages/VisionPage.tsx">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md" data-id="rhm40pmwv" data-path="src/pages/VisionPage.tsx">
        <div className="container mx-auto px-6" data-id="7qko2ohgu" data-path="src/pages/VisionPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="vze0u4hyk" data-path="src/pages/VisionPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="nldt23ovz" data-path="src/pages/VisionPage.tsx">
              2030 Goals
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="49ebp3fys" data-path="src/pages/VisionPage.tsx">
              Our Ambitious Targets
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="x07hwi0j6" data-path="src/pages/VisionPage.tsx">
              We're not just dreaming about the future—we're actively building it with concrete, 
              measurable goals that will transform tech education globally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="a52f6d30x" data-path="src/pages/VisionPage.tsx">
            {futureGoals.map((goal, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }} data-id="qpw7914na" data-path="src/pages/VisionPage.tsx">

                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300" data-id="vup7kwb7i" data-path="src/pages/VisionPage.tsx">
                  <CardHeader data-id="jc9o4e5v4" data-path="src/pages/VisionPage.tsx">
                    <CardTitle className="text-2xl font-bold text-white mb-2" data-id="9dsnzyq36" data-path="src/pages/VisionPage.tsx">
                      {goal.goal}
                    </CardTitle>
                    <p className="text-gray-300" data-id="ecek6f5ru" data-path="src/pages/VisionPage.tsx">
                      {goal.description}
                    </p>
                  </CardHeader>
                  <CardContent data-id="e7lb9cv0m" data-path="src/pages/VisionPage.tsx">
                    <div className="space-y-3" data-id="ixjfj3h9g" data-path="src/pages/VisionPage.tsx">
                      <div className="flex justify-between text-sm" data-id="ut0apob9c" data-path="src/pages/VisionPage.tsx">
                        <span className="text-gray-400" data-id="68kiqz73k" data-path="src/pages/VisionPage.tsx">Progress</span>
                        <span className="text-brand-accent font-semibold" data-id="nmowcrhok" data-path="src/pages/VisionPage.tsx">
                          {goal.progress.toLocaleString()} / {goal.target.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden" data-id="fqniodw3l" data-path="src/pages/VisionPage.tsx">
                        <motion.div
                        className={`h-full bg-gradient-to-r ${goal.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress / goal.target * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }} data-id="rqkg1cdal" data-path="src/pages/VisionPage.tsx" />

                      </div>
                      <div className="text-right" data-id="sraoehhmi" data-path="src/pages/VisionPage.tsx">
                        <span className="text-brand-accent font-bold" data-id="o5n33tr3a" data-path="src/pages/VisionPage.tsx">
                          {Math.round(goal.progress / goal.target * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Future Technologies */}
      <section className="py-20" data-id="58jvgp4bp" data-path="src/pages/VisionPage.tsx">
        <div className="container mx-auto px-6" data-id="guocsh4on" data-path="src/pages/VisionPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="wazgwtph5" data-path="src/pages/VisionPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="m9qf4k8h2" data-path="src/pages/VisionPage.tsx">
              Future Curriculum
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="0mny8acv7" data-path="src/pages/VisionPage.tsx">
              Tomorrow's Technologies, Today's Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="5wrwygx0k" data-path="src/pages/VisionPage.tsx">
              We're already preparing curricula for technologies that will define the next decade, 
              ensuring our students are always ahead of the curve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="hf8uwxb6x" data-path="src/pages/VisionPage.tsx">
            {technologies.map((tech, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group" data-id="ok5gubtwk" data-path="src/pages/VisionPage.tsx">

                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300 text-center p-6" data-id="84x95r3rk" data-path="src/pages/VisionPage.tsx">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" data-id="3dkt858jn" data-path="src/pages/VisionPage.tsx">
                    <tech.icon className="w-8 h-8 text-white" data-id="lq5amsmlm" data-path="src/pages/VisionPage.tsx" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors" data-id="v8i8lfpir" data-path="src/pages/VisionPage.tsx">
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-sm" data-id="wcsg4thph" data-path="src/pages/VisionPage.tsx">
                    {tech.description}
                  </p>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Vision */}
      <section className="py-20" data-id="jhg026sph" data-path="src/pages/VisionPage.tsx">
        <div className="container mx-auto px-6" data-id="n56d18ivc" data-path="src/pages/VisionPage.tsx">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="tsjfk5w75" data-path="src/pages/VisionPage.tsx">

            <Card className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 p-8" data-id="8tqfhy3os" data-path="src/pages/VisionPage.tsx">
              <CardHeader data-id="r012oftlm" data-path="src/pages/VisionPage.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4" data-id="g5txdzzid" data-path="src/pages/VisionPage.tsx">
                  <Target className="w-8 h-8 text-white" data-id="yr8q142fz" data-path="src/pages/VisionPage.tsx" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-4" data-id="je4v3d0vh" data-path="src/pages/VisionPage.tsx">
                  Join Us in Building the Future
                </CardTitle>
              </CardHeader>
              <CardContent data-id="0bzsmo5fm" data-path="src/pages/VisionPage.tsx">
                <p className="text-lg text-gray-300 leading-relaxed mb-6" data-id="wg7vpcqzy" data-path="src/pages/VisionPage.tsx">
                  Our vision isn't just about what we want to achieve—it's about what we can accomplish 
                  together. Every student who joins us, every career we help transform, and every innovation 
                  we foster brings us closer to a world where technology truly serves humanity.
                </p>
                <div className="flex flex-wrap justify-center gap-3" data-id="4uqed86f7" data-path="src/pages/VisionPage.tsx">
                  {["Be Part of Change", "Shape the Future", "Transform Lives", "Build Tomorrow"].map((tag, index) =>
                  <Badge key={index} variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30" data-id="xnzwuf39y" data-path="src/pages/VisionPage.tsx">
                      {tag}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer data-id="gpeyup5gy" data-path="src/pages/VisionPage.tsx" />
    </div>);

};

export default VisionPage;