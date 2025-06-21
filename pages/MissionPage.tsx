import React from 'react';
import { motion } from 'motion/react';
import { Compass, Target, Globe, Heart, Lightbulb, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MissionPage: React.FC = () => {
  const missionValues = [
  {
    icon: Target,
    title: "Excellence in Education",
    description: "We deliver world-class tech education that meets the highest industry standards and prepares students for real-world challenges."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Breaking down geographical barriers to make quality tech education accessible to learners worldwide, regardless of location."
  },
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Every decision we make is centered around student success, creating personalized learning experiences that adapt to individual needs."
  },
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description: "Pioneering new teaching methodologies and incorporating cutting-edge technologies to stay ahead of industry trends."
  }];


  const impactStats = [
  { number: "50,000+", label: "Lives Transformed" },
  { number: "180+", label: "Countries Reached" },
  { number: "95%", label: "Job Placement Rate" },
  { number: "1M+", label: "Lines of Code Written" }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black" data-id="92fxa8a6r" data-path="src/pages/MissionPage.tsx">
      <Header data-id="9rv1dohou" data-path="src/pages/MissionPage.tsx" />
      
      <AboutHero
        title="Our Mission"
        subtitle="Empowering Tomorrow's Tech Leaders"
        description="We exist to democratize access to world-class technology education, breaking down barriers and creating pathways for anyone with the passion to learn and grow in the tech industry."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
        icon={<Compass className="w-10 h-10 text-white" data-id="zoecgug76" data-path="src/pages/MissionPage.tsx" />} data-id="lk1nho097" data-path="src/pages/MissionPage.tsx">

        {/* Highlighted Quote */}
        <motion.div
          className="bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }} data-id="07sh2fi7o" data-path="src/pages/MissionPage.tsx">

          <p className="text-2xl font-semibold text-white mb-2" data-id="vhrtan1va" data-path="src/pages/MissionPage.tsx">
            "Education is the most powerful weapon you can use to change the world."
          </p>
          <p className="text-brand-accent" data-id="1c1j6yd7h" data-path="src/pages/MissionPage.tsx">- Nelson Mandela</p>
        </motion.div>
        
        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-id="j3yd2dwh4" data-path="src/pages/MissionPage.tsx">
          {impactStats.map((stat, index) =>
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }} data-id="5h36g82hz" data-path="src/pages/MissionPage.tsx">

              <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-1" data-id="tgyz1he0m" data-path="src/pages/MissionPage.tsx">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300" data-id="xubjnrj9q" data-path="src/pages/MissionPage.tsx">{stat.label}</div>
            </motion.div>
          )}
        </div>
      </AboutHero>

      {/* Mission Details Section */}
      <section className="py-20 relative" data-id="qdw101w0o" data-path="src/pages/MissionPage.tsx">
        <div className="container mx-auto px-6" data-id="zo0cm6kuh" data-path="src/pages/MissionPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="0w5sgl2i6" data-path="src/pages/MissionPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="4qfypniqu" data-path="src/pages/MissionPage.tsx">
              Our Core Mission
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="lrfjpnati" data-path="src/pages/MissionPage.tsx">
              Transforming Lives Through Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="mycciad87" data-path="src/pages/MissionPage.tsx">
              Our mission goes beyond teaching code. We're building a community of innovators, 
              problem-solvers, and future leaders who will shape the technology landscape of tomorrow.
            </p>
          </motion.div>

          {/* Mission Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" data-id="klltk6qzy" data-path="src/pages/MissionPage.tsx">
            {missionValues.map((value, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }} data-id="ful9wf3z9" data-path="src/pages/MissionPage.tsx">

                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300" data-id="lheblcfo8" data-path="src/pages/MissionPage.tsx">
                  <CardHeader data-id="uffb92g7l" data-path="src/pages/MissionPage.tsx">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mb-4" data-id="tul52k1oe" data-path="src/pages/MissionPage.tsx">
                      <value.icon className="w-8 h-8 text-white" data-id="2qxb0yb0b" data-path="src/pages/MissionPage.tsx" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white" data-id="6f4tfroiz" data-path="src/pages/MissionPage.tsx">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent data-id="ira583i7i" data-path="src/pages/MissionPage.tsx">
                    <p className="text-gray-300 leading-relaxed" data-id="zrz04sxqa" data-path="src/pages/MissionPage.tsx">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Mission Statement */}
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="c7lvmfc60" data-path="src/pages/MissionPage.tsx">

            <Card className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 p-8" data-id="s3lqkrxwf" data-path="src/pages/MissionPage.tsx">
              <CardHeader data-id="lcktnp46s" data-path="src/pages/MissionPage.tsx">
                <CardTitle className="text-3xl font-bold text-white mb-4" data-id="jb39eiu2r" data-path="src/pages/MissionPage.tsx">
                  Our Commitment to You
                </CardTitle>
              </CardHeader>
              <CardContent data-id="zltgujlnv" data-path="src/pages/MissionPage.tsx">
                <p className="text-lg text-gray-300 leading-relaxed mb-6" data-id="6zvltxtiq" data-path="src/pages/MissionPage.tsx">
                  We believe that everyone deserves the opportunity to unlock their potential through 
                  technology education. Whether you're a complete beginner or looking to advance your 
                  career, we're committed to providing you with the tools, knowledge, and support 
                  needed to succeed in the ever-evolving tech landscape.
                </p>
                <div className="flex flex-wrap justify-center gap-3" data-id="ifa4764hb" data-path="src/pages/MissionPage.tsx">
                  {["Inclusive Learning", "Industry-Relevant", "Career-Focused", "Community-Driven"].map((tag, index) =>
                  <Badge key={index} variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30" data-id="u9g75quzp" data-path="src/pages/MissionPage.tsx">
                      {tag}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer data-id="3x0oldo8c" data-path="src/pages/MissionPage.tsx" />
    </div>);

};

export default MissionPage;