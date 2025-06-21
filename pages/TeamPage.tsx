import React from 'react';
import { motion } from 'motion/react';
import { Users, Star, Award, Heart, Linkedin, Twitter, Github } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const TeamPage: React.FC = () => {
  const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Technology Officer",
    company: "Former Google AI Lead",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop&crop=face",
    bio: "PhD in Computer Science from MIT. Led AI initiatives at Google for 8 years.",
    specialties: ["Machine Learning", "AI Ethics", "Data Science"],
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Curriculum",
    company: "Former Tesla Senior Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack developer with 12 years experience in automotive tech and clean energy.",
    specialties: ["Full-Stack Development", "IoT", "Clean Tech"],
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Emily Park",
    role: "Cloud Architecture Lead",
    company: "Former Amazon AWS Principal",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Cloud infrastructure expert who designed systems serving millions of users.",
    specialties: ["Cloud Computing", "DevOps", "System Architecture"],
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Alex Thompson",
    role: "Cybersecurity Director",
    company: "Former Microsoft Security Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Cybersecurity expert who protected enterprise systems for Fortune 500 companies.",
    specialties: ["Cybersecurity", "Ethical Hacking", "Risk Management"],
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Dr. Priya Patel",
    role: "Learning Experience Designer",
    company: "Former Coursera VP of Education",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face",
    bio: "Educational technology pioneer with expertise in online learning platforms.",
    specialties: ["EdTech", "UX Design", "Learning Psychology"],
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "David Kim",
    role: "Mobile Development Lead",
    company: "Former Uber Principal Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Mobile app architect who built platforms used by millions daily.",
    specialties: ["Mobile Development", "React Native", "App Architecture"],
    social: { linkedin: "#", twitter: "#", github: "#" }
  }];


  const teamStats = [
  { number: "15+", label: "Average Years Experience" },
  { number: "6", label: "Former FAANG Engineers" },
  { number: "50+", label: "Industry Certifications" },
  { number: "1M+", label: "Students Mentored" }];


  const companyLogos = [
  "Google", "Microsoft", "Amazon", "Tesla", "Apple", "Meta", "Netflix", "Uber"];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black" data-id="7tobq9psr" data-path="src/pages/TeamPage.tsx">
      <Header data-id="zcvsrzxo0" data-path="src/pages/TeamPage.tsx" />
      
      <AboutHero
        title="Our Team"
        subtitle="Meet the Minds Behind Innovation"
        description="Our team consists of industry veterans from the world's leading tech companies. They bring decades of real-world experience to create the most comprehensive and practical learning experience."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
        icon={<Users className="w-10 h-10 text-white" data-id="sdnirt4fp" data-path="src/pages/TeamPage.tsx" />} data-id="rklsq5mqu" data-path="src/pages/TeamPage.tsx">

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-id="ib0alq1su" data-path="src/pages/TeamPage.tsx">
          {teamStats.map((stat, index) =>
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }} data-id="v926neosc" data-path="src/pages/TeamPage.tsx">

              <div className="text-2xl md:text-3xl font-bold text-brand-accent mb-1" data-id="46vgsdpc7" data-path="src/pages/TeamPage.tsx">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300" data-id="07s4ixrmr" data-path="src/pages/TeamPage.tsx">{stat.label}</div>
            </motion.div>
          )}
        </div>

        {/* Company Logos */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }} data-id="8wo5ymd2s" data-path="src/pages/TeamPage.tsx">

          <p className="text-gray-400 mb-4" data-id="qwda6yzwz" data-path="src/pages/TeamPage.tsx">Our team members come from:</p>
          <div className="flex flex-wrap justify-center gap-4" data-id="r2a2s6pxl" data-path="src/pages/TeamPage.tsx">
            {companyLogos.map((company, index) =>
            <Badge key={index} variant="outline" className="text-gray-300 border-gray-600" data-id="6hm3ccphj" data-path="src/pages/TeamPage.tsx">
                {company}
              </Badge>
            )}
          </div>
        </motion.div>
      </AboutHero>

      {/* Team Members Section */}
      <section className="py-20 relative" data-id="87stquz4v" data-path="src/pages/TeamPage.tsx">
        <div className="container mx-auto px-6" data-id="vwm8ykizj" data-path="src/pages/TeamPage.tsx">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="oj9m6tojl" data-path="src/pages/TeamPage.tsx">

            <Badge variant="outline" className="mb-4 text-brand-accent border-brand-accent" data-id="9ylmdumdt" data-path="src/pages/TeamPage.tsx">
              Leadership Team
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6" data-id="azeypxuyf" data-path="src/pages/TeamPage.tsx">
              Learn from the Best in the Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="1kcprxxfe" data-path="src/pages/TeamPage.tsx">
              Our instructors aren't just teachers—they're innovators, leaders, and pioneers who 
              have shaped the technology we use every day.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="r7ml1wgby" data-path="src/pages/TeamPage.tsx">
            {teamMembers.map((member, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group" data-id="wqoic67vn" data-path="src/pages/TeamPage.tsx">

                <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-brand-accent/30 transition-all duration-300 overflow-hidden" data-id="r5mhlptx1" data-path="src/pages/TeamPage.tsx">
                  <CardHeader className="text-center" data-id="6ym8r5hsp" data-path="src/pages/TeamPage.tsx">
                    <div className="relative w-32 h-32 mx-auto mb-4" data-id="9de2wvtdy" data-path="src/pages/TeamPage.tsx">
                      <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-brand-accent/30 group-hover:border-brand-primary/50 transition-colors duration-300" data-id="mbf6db7es" data-path="src/pages/TeamPage.tsx" />

                      <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }} data-id="g5q4gma5b" data-path="src/pages/TeamPage.tsx" />

                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors" data-id="go8vpv9nv" data-path="src/pages/TeamPage.tsx">
                      {member.name}
                    </CardTitle>
                    <p className="text-brand-accent font-semibold" data-id="bzbaq6fn8" data-path="src/pages/TeamPage.tsx">{member.role}</p>
                    <p className="text-sm text-gray-400" data-id="w855ywutm" data-path="src/pages/TeamPage.tsx">{member.company}</p>
                  </CardHeader>
                  
                  <CardContent className="text-center space-y-4" data-id="ns3bldqgn" data-path="src/pages/TeamPage.tsx">
                    <p className="text-gray-300 text-sm leading-relaxed" data-id="ymf5vhgm0" data-path="src/pages/TeamPage.tsx">
                      {member.bio}
                    </p>
                    
                    {/* Specialties */}
                    <div className="flex flex-wrap justify-center gap-2" data-id="5gwm495od" data-path="src/pages/TeamPage.tsx">
                      {member.specialties.map((specialty, idx) =>
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-brand-accent/20 text-brand-accent border-brand-accent/30 text-xs" data-id="ducnslica" data-path="src/pages/TeamPage.tsx">

                          {specialty}
                        </Badge>
                    )}
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-3 pt-2" data-id="xelbsn4cn" data-path="src/pages/TeamPage.tsx">
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-brand-accent/20" data-id="28qtq6w3y" data-path="src/pages/TeamPage.tsx">
                        <Linkedin className="w-4 h-4 text-brand-accent" data-id="g5jpdky8q" data-path="src/pages/TeamPage.tsx" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-brand-accent/20" data-id="2fuwpkaq2" data-path="src/pages/TeamPage.tsx">
                        <Twitter className="w-4 h-4 text-brand-accent" data-id="n65bgb700" data-path="src/pages/TeamPage.tsx" />
                      </Button>
                      <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-brand-accent/20" data-id="sqpemvhwj" data-path="src/pages/TeamPage.tsx">
                        <Github className="w-4 h-4 text-brand-accent" data-id="5uuzdsqz3" data-path="src/pages/TeamPage.tsx" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>

          {/* Team Philosophy */}
          <motion.div
            className="max-w-4xl mx-auto text-center mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="2b1fknamy" data-path="src/pages/TeamPage.tsx">

            <Card className="bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 backdrop-blur-md border border-white/20 p-8" data-id="lsi62644d" data-path="src/pages/TeamPage.tsx">
              <CardHeader data-id="bbzbxf61r" data-path="src/pages/TeamPage.tsx">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4" data-id="0ln979agb" data-path="src/pages/TeamPage.tsx">
                  <Heart className="w-8 h-8 text-white" data-id="8tboiwx13" data-path="src/pages/TeamPage.tsx" />
                </div>
                <CardTitle className="text-3xl font-bold text-white mb-4" data-id="ssto5bdc8" data-path="src/pages/TeamPage.tsx">
                  Our Teaching Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent data-id="e8zj5yw09" data-path="src/pages/TeamPage.tsx">
                <p className="text-lg text-gray-300 leading-relaxed mb-6" data-id="txwz49gct" data-path="src/pages/TeamPage.tsx">
                  We believe that the best learning happens when students are challenged, supported, 
                  and inspired. Our team doesn't just teach technology—we mentor the next generation 
                  of innovators, sharing not just what we know, but how we think and solve problems.
                </p>
                <div className="flex flex-wrap justify-center gap-3" data-id="8eso441hx" data-path="src/pages/TeamPage.tsx">
                  {["Mentorship First", "Real-World Focus", "Continuous Learning", "Innovation Mindset"].map((value, index) =>
                  <Badge key={index} variant="secondary" className="bg-brand-accent/20 text-brand-accent border-brand-accent/30" data-id="m8yy38o9s" data-path="src/pages/TeamPage.tsx">
                      {value}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer data-id="9y7e6cqpg" data-path="src/pages/TeamPage.tsx" />
    </div>);

};

export default TeamPage;