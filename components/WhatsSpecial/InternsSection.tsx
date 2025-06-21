
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Star, Award, Target } from 'lucide-react';

const internsData = [
{
  id: 1,
  name: "Alex Thompson",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  role: "Full Stack Developer Intern",
  achievements: [
  "Built 3 production-ready web applications",
  "Mentored 5 junior interns",
  "Contributed to open-source projects",
  "95% client satisfaction rating"],

  projects: ["E-commerce Platform", "Task Management App", "API Integration Tool"],
  duration: "6 months",
  rating: 4.9,
  technologies: ["React", "Node.js", "MongoDB", "AWS"]
},
{
  id: 2,
  name: "Priya Sharma",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  role: "Data Science Intern",
  achievements: [
  "Developed ML models with 92% accuracy",
  "Published research paper",
  "Led data visualization workshop",
  "Optimized existing algorithms by 40%"],

  projects: ["Predictive Analytics Dashboard", "Customer Segmentation", "Fraud Detection System"],
  duration: "4 months",
  rating: 4.8,
  technologies: ["Python", "TensorFlow", "Pandas", "Tableau"]
},
{
  id: 3,
  name: "Jordan Kim",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  role: "UI/UX Design Intern",
  achievements: [
  "Redesigned 4 major product interfaces",
  "Improved user engagement by 60%",
  "Created comprehensive design system",
  "Won internal design competition"],

  projects: ["Mobile App Redesign", "Design System", "User Research Study"],
  duration: "5 months",
  rating: 4.9,
  technologies: ["Figma", "Adobe XD", "Prototyping", "User Testing"]
}];


const InternsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" data-id="ytmvwmndi" data-path="src/components/WhatsSpecial/InternsSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="ljct2me6a" data-path="src/components/WhatsSpecial/InternsSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="5wpidj0y1" data-path="src/components/WhatsSpecial/InternsSection.tsx">

          <div className="flex items-center justify-center mb-4" data-id="owyox2t9a" data-path="src/components/WhatsSpecial/InternsSection.tsx">
            <Trophy className="w-12 h-12 text-amber-500 mr-3" data-id="r3hws81j6" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
            <h2 className="text-4xl font-bold text-gray-900" data-id="xtap9ca34" data-path="src/components/WhatsSpecial/InternsSection.tsx">
              Interns of the Month
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="atc775zvf" data-path="src/components/WhatsSpecial/InternsSection.tsx">
            Celebrating our outstanding interns who have shown exceptional dedication, innovation, and remarkable achievements in their journey with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" data-id="tpyio1b4f" data-path="src/components/WhatsSpecial/InternsSection.tsx">
          {internsData.map((intern, index) =>
          <motion.div
            key={intern.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }} data-id="b419wmf2q" data-path="src/components/WhatsSpecial/InternsSection.tsx">

              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden" data-id="49z5dfvjs" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                <div className="relative bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400 p-6 text-center" data-id="t8qtjuddl" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                  <div className="absolute top-4 right-4" data-id="hc542571l" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                    <Badge className="bg-white/20 text-white border-white/30" data-id="aoy5a8og7" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                      #{index + 1}
                    </Badge>
                  </div>
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white/50" data-id="rug3akmx2" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                    <AvatarImage src={intern.image} alt={intern.name} data-id="dwg6awi5g" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                    <AvatarFallback className="bg-white text-amber-600 text-xl" data-id="uymlz7hg5" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                      {intern.name.split(' ').map((n) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white mb-1" data-id="9ybccpsq9" data-path="src/components/WhatsSpecial/InternsSection.tsx">{intern.name}</h3>
                  <p className="text-white/90 text-sm mb-2" data-id="btmiidicf" data-path="src/components/WhatsSpecial/InternsSection.tsx">{intern.role}</p>
                  <div className="flex items-center justify-center space-x-1" data-id="d9j09xpgb" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                    <Star className="w-4 h-4 fill-white text-white" data-id="7x5d1s2yj" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                    <span className="text-white font-semibold" data-id="8hn6fstno" data-path="src/components/WhatsSpecial/InternsSection.tsx">{intern.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6" data-id="kao2r6rfc" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                  <div className="mb-6" data-id="njyray9hw" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                    <div className="flex items-center justify-between mb-3" data-id="ft8i4hbf1" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                      <h4 className="font-semibold text-gray-900 flex items-center" data-id="omq41mye3" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                        <Award className="w-4 h-4 mr-2 text-amber-500" data-id="hydxd8naz" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                        Key Achievements
                      </h4>
                      <Badge variant="outline" className="text-xs" data-id="0hs9k8a0q" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                        {intern.duration}
                      </Badge>
                    </div>
                    <ul className="space-y-2" data-id="yqurinumc" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                      {intern.achievements.map((achievement, i) =>
                    <li key={i} className="flex items-start text-sm text-gray-600" data-id="w4gin3zpi" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                          <Target className="w-3 h-3 mr-2 mt-1 text-green-500 flex-shrink-0" data-id="kecp4jh7l" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                          {achievement}
                        </li>
                    )}
                    </ul>
                  </div>

                  <div className="mb-4" data-id="xaabou9dy" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                    <h4 className="font-semibold text-gray-900 mb-2" data-id="c26up76ms" data-path="src/components/WhatsSpecial/InternsSection.tsx">Major Projects</h4>
                    <div className="flex flex-wrap gap-2" data-id="gu2ko8swy" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                      {intern.projects.map((project, i) =>
                    <Badge key={i} variant="secondary" className="text-xs" data-id="5tom3xoos" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                          {project}
                        </Badge>
                    )}
                    </div>
                  </div>

                  <div data-id="s4u80i9oi" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                    <h4 className="font-semibold text-gray-900 mb-2" data-id="ihhxurchy" data-path="src/components/WhatsSpecial/InternsSection.tsx">Technologies</h4>
                    <div className="flex flex-wrap gap-2" data-id="yiv5haza0" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                      {intern.technologies.map((tech, i) =>
                    <Badge key={i} variant="outline" className="text-xs" data-id="jrhde1dpo" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                          {tech}
                        </Badge>
                    )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center" data-id="9px6qk0nr" data-path="src/components/WhatsSpecial/InternsSection.tsx">

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto" data-id="6u5g78jux" data-path="src/components/WhatsSpecial/InternsSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="s7cyj0kg4" data-path="src/components/WhatsSpecial/InternsSection.tsx">
              Your Success Story Awaits
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed" data-id="n4dn6mq1u" data-path="src/components/WhatsSpecial/InternsSection.tsx">
              These exceptional interns started their journey just like you - with curiosity, determination, and a passion for learning. 
              Through our comprehensive program, mentorship, and hands-on projects, they've not only gained valuable skills but also 
              made significant contributions to real-world applications. Join our program and become our next success story!
            </p>
            <div className="flex items-center justify-center space-x-8 mt-6 text-sm text-gray-500" data-id="zthdl5rqs" data-path="src/components/WhatsSpecial/InternsSection.tsx">
              <div className="flex items-center" data-id="7ejtwt07k" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                <Trophy className="w-5 h-5 mr-2 text-amber-500" data-id="xj1ee3el8" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                <span data-id="w7so5nra4" data-path="src/components/WhatsSpecial/InternsSection.tsx">Excellence Recognition</span>
              </div>
              <div className="flex items-center" data-id="9nc6krl8w" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                <Star className="w-5 h-5 mr-2 text-blue-500" data-id="bwb9o2rfz" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                <span data-id="kp5vq8qx1" data-path="src/components/WhatsSpecial/InternsSection.tsx">Outstanding Performance</span>
              </div>
              <div className="flex items-center" data-id="ntkd7qcpd" data-path="src/components/WhatsSpecial/InternsSection.tsx">
                <Award className="w-5 h-5 mr-2 text-green-500" data-id="8ln88147v" data-path="src/components/WhatsSpecial/InternsSection.tsx" />
                <span data-id="uapdd76bm" data-path="src/components/WhatsSpecial/InternsSection.tsx">Career Growth</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default InternsSection;