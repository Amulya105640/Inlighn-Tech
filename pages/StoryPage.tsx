import React from 'react';
import { motion } from 'motion/react';
import { Building, Calendar, Users, Award, Rocket, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const StoryPage: React.FC = () => {
  const milestones = [
  {
    year: "2016",
    title: "The Beginning",
    description: "Founded by three tech industry veterans with a shared vision of making quality tech education accessible to everyone.",
    icon: Rocket,
    stats: "3 Founders, 1 Dream"
  },
  {
    year: "2017",
    title: "First 100 Students",
    description: "Launched our pilot program with 100 students. 96% graduation rate and 94% job placement rate exceeded all expectations.",
    icon: Users,
    stats: "100 Students, 94% Job Placement"
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "Expanded internationally, reaching students in 25 countries. Introduced live online classes and mentorship programs.",
    icon: TrendingUp,
    stats: "25 Countries, 1,000+ Students"
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Adapted to remote learning during the pandemic, launching our advanced virtual lab environments and AI-powered learning platform.",
    icon: Building,
    stats: "Virtual Labs, AI Platform"
  },
  {
    year: "2022",
    title: "Industry Recognition",
    description: "Named 'Best Online Tech Bootcamp' by TechCrunch. Partnerships with 50+ major tech companies for direct hiring.",
    icon: Award,
    stats: "50+ Corporate Partners"
  },
  {
    year: "2024",
    title: "Leading Innovation",
    description: "Today, we serve 10,000+ students annually with 96% job placement rate and continue to innovate in tech education.",
    icon: Calendar,
    stats: "10,000+ Annual Students"
  }];


  const foundersStory = [
  {
    name: "Michael Chen",
    role: "Co-Founder & CEO",
    background: "Former Google Director of Engineering",
    quote: "We saw too many talented people being left behind by traditional education. We knew there had to be a better way."
  },
  {
    name: "Sarah Williams",
    role: "Co-Founder & CTO",
    background: "Former Apple Senior Software Engineer",
    quote: "Technology should be a bridge to opportunity, not a barrier. That's what drove us to create INLIGHTN TECH."
  },
  {
    name: "David Rodriguez",
    role: "Co-Founder & CPO",
    background: "Former Microsoft Principal Program Manager",
    quote: "Education isn't just about learning facts—it's about transforming lives and unlocking human potential."
  }];


  const impactNumbers = [
  { number: "50,000+", label: "Students Graduated" },
  { number: "180+", label: "Countries Served" },
  { number: "96%", label: "Job Placement Rate" },
  { number: "500+", label: "Corporate Partners" }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black" data-id="jdta9z7g8" data-path="src/pages/StoryPage.tsx">
      <Header data-id="zalwq5wa8" data-path="src/pages/StoryPage.tsx" />
      
      <AboutHero
        title="Our Story"
        subtitle="From Vision to Revolution"
        description="What started as three friends with a shared frustration about the gap between traditional education and industry needs has grown into a global movement that's transforming how people learn technology."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop"
        icon={<Building className="w-10 h-10 text-white" data-id="zp9hpuxcs" data-path="src/pages/StoryPage.tsx" />} data-id="15669zw3e" data-path="src/pages/StoryPage.tsx">

        {/* Highlighted Quote */}
        <motion.div
          className="bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 rounded-lg p-6 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }} data-id="cl2de6xan" data-path="src/pages/StoryPage.tsx">

          <p className="text-2xl font-semibold text-white mb-2" data-id="s7jbq1j7b" data-path="src/pages/StoryPage.tsx">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </p>
          <p className="text-brand-accent" data-id="gnrk2pgor" data-path="src/pages/StoryPage.tsx">- Our founding philosophy</p>
        </motion.div>
        
        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" data-id="hkfddyzcz" data-path="src/pages/StoryPage.tsx">
          {impactNumbers.map((stat, index) =>
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }} data-id="vkk5q3f5o" data-path="src/pages/StoryPage.tsx">

              <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-1" data-id="sxiwhny94" data-path="src/pages/StoryPage.tsx">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300" data-id="4mutb4agw" data-path="src/pages/StoryPage.tsx">{stat.label}</div>
            </motion.div>
          )}
        </div>
      </AboutHero>

      {/* Timeline Section */}
      <section className="py-20 relative" data-id="hmtfudkof" data-path="src/pages/StoryPage.tsx">
        <div className="container mx-auto px-6" data-id="8l84h98xe" data-path="src/pages/StoryPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="76so6hn8e" data-path="src/pages/StoryPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="z1a0n0mk3" data-path="src/pages/StoryPage.tsx">
              Our Journey
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="actggmkjg" data-path="src/pages/StoryPage.tsx">
              8 Years of Innovation and Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="9xwgjpdgs" data-path="src/pages/StoryPage.tsx">
              From a small startup to a global leader in tech education, every milestone 
              represents thousands of lives transformed and dreams realized.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative" data-id="w9aa2f4jq" data-path="src/pages/StoryPage.tsx">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-primary" data-id="u2m7dtl99" data-path="src/pages/StoryPage.tsx"></div>
            
            {milestones.map((milestone, index) =>
            <motion.div
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }} data-id="td3e5rfgm" data-path="src/pages/StoryPage.tsx">

                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`} data-id="wtqck0d8k" data-path="src/pages/StoryPage.tsx">
                  <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300" data-id="g4fkhr8zn" data-path="src/pages/StoryPage.tsx">
                    <CardHeader data-id="8xdvwnvp7" data-path="src/pages/StoryPage.tsx">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`} data-id="3ce5nhs3a" data-path="src/pages/StoryPage.tsx">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center" data-id="dxyg6m50s" data-path="src/pages/StoryPage.tsx">
                          <milestone.icon className="w-6 h-6 text-white" data-id="2g0exf1e0" data-path="src/pages/StoryPage.tsx" />
                        </div>
                        <div data-id="p8znnck1a" data-path="src/pages/StoryPage.tsx">
                          <Badge variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30 mb-2" data-id="7rdbha3bv" data-path="src/pages/StoryPage.tsx">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-xl font-bold text-white" data-id="z6487vm40" data-path="src/pages/StoryPage.tsx">
                            {milestone.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent data-id="yulbx3q1i" data-path="src/pages/StoryPage.tsx">
                      <p className="text-gray-300 mb-3" data-id="e1vs5dkez" data-path="src/pages/StoryPage.tsx">
                        {milestone.description}
                      </p>
                      <p className="text-brand-accent font-semibold text-sm" data-id="7v2835cqe" data-path="src/pages/StoryPage.tsx">
                        {milestone.stats}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10" data-id="tnn4pik3s" data-path="src/pages/StoryPage.tsx">
                  <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full border-4 border-black" data-id="7mx582vjv" data-path="src/pages/StoryPage.tsx"></div>
                </div>
                
                <div className="w-1/2" data-id="m17z6231b" data-path="src/pages/StoryPage.tsx"></div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md" data-id="vil94diss" data-path="src/pages/StoryPage.tsx">
        <div className="container mx-auto px-6" data-id="0lbj23xd6" data-path="src/pages/StoryPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="11bj4oazu" data-path="src/pages/StoryPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="x5cixkgpm" data-path="src/pages/StoryPage.tsx">
              The Founding Vision
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="zlevai8t6" data-path="src/pages/StoryPage.tsx">
              Three Friends, One Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="z9mwnbztn" data-path="src/pages/StoryPage.tsx">
              Our founders met while working at different tech giants, each frustrated by the same 
              problem: the disconnect between traditional education and what the industry actually needed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="1n3ke9wlr" data-path="src/pages/StoryPage.tsx">
            {foundersStory.map((founder, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }} data-id="jf2nr3chu" data-path="src/pages/StoryPage.tsx">

                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300" data-id="aoq94likr" data-path="src/pages/StoryPage.tsx">
                  <CardHeader className="text-center" data-id="o1qprhagu" data-path="src/pages/StoryPage.tsx">
                    <CardTitle className="text-xl font-bold text-white" data-id="lryxg3buk" data-path="src/pages/StoryPage.tsx">
                      {founder.name}
                    </CardTitle>
                    <p className="text-brand-accent font-semibold" data-id="r2z44yjuj" data-path="src/pages/StoryPage.tsx">{founder.role}</p>
                    <p className="text-sm text-gray-400" data-id="fulr3o7am" data-path="src/pages/StoryPage.tsx">{founder.background}</p>
                  </CardHeader>
                  <CardContent data-id="j8td5i5rz" data-path="src/pages/StoryPage.tsx">
                    <blockquote className="text-gray-300 italic text-center" data-id="xiq84k4mc" data-path="src/pages/StoryPage.tsx">
                      "{founder.quote}"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="py-20" data-id="0wxs7zt6a" data-path="src/pages/StoryPage.tsx">
        <div className="container mx-auto px-6" data-id="4roqsyqj8" data-path="src/pages/StoryPage.tsx">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="zlg0rfcke" data-path="src/pages/StoryPage.tsx">

            <Card className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 p-8" data-id="yiafx8dzo" data-path="src/pages/StoryPage.tsx">
              <CardHeader data-id="jvr4c9wri" data-path="src/pages/StoryPage.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4" data-id="50kptntc4" data-path="src/pages/StoryPage.tsx">
                  <Rocket className="w-8 h-8 text-white" data-id="o2wn6q8ew" data-path="src/pages/StoryPage.tsx" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-4" data-id="a8562qkr9" data-path="src/pages/StoryPage.tsx">
                  The Story Continues
                </CardTitle>
              </CardHeader>
              <CardContent data-id="lhmlxhtj1" data-path="src/pages/StoryPage.tsx">
                <p className="text-lg text-gray-300 leading-relaxed mb-6" data-id="w1o67067w" data-path="src/pages/StoryPage.tsx">
                  Our story is far from over. Every day, we're working to push the boundaries of what's 
                  possible in tech education. With emerging technologies like AI, quantum computing, and 
                  sustainable tech, we're preparing the next generation of innovators for challenges we 
                  can't even imagine yet.
                </p>
                <div className="flex flex-wrap justify-center gap-3" data-id="ukcm51v87" data-path="src/pages/StoryPage.tsx">
                  {["Innovation", "Global Impact", "Student Success", "Future-Ready"].map((value, index) =>
                  <Badge key={index} variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30" data-id="2631zb9iy" data-path="src/pages/StoryPage.tsx">
                      {value}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer data-id="hlw23xqd1" data-path="src/pages/StoryPage.tsx" />
    </div>);

};

export default StoryPage;