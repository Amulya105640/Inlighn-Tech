import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Palette,
  BarChart3,
  Shield,
  Smartphone,
  Database,
  ArrowRight,
  Clock,
  Users,
  Award } from
'lucide-react';
import KineticText from '@/components/KineticText';
import LiquidButton from '@/components/LiquidButton';
import SkeletonLoader from '@/components/SkeletonLoader';
import BlurTransition from '@/components/BlurTransition';

const EnhancedPrograms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const programs = [
  {
    id: 1,
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Master modern web development with React, Node.js, and cloud technologies',
    duration: '16 weeks',
    students: '2,500+',
    rating: '4.9',
    skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
    level: 'Intermediate',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create stunning user experiences with design thinking and modern tools',
    duration: '12 weeks',
    students: '1,800+',
    rating: '4.8',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems'],
    level: 'Beginner',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Data Science',
    description: 'Analyze data and build machine learning models for business insights',
    duration: '20 weeks',
    students: '1,200+',
    rating: '4.9',
    skills: ['Python', 'Machine Learning', 'SQL', 'Tableau', 'Statistics'],
    level: 'Advanced',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect digital assets with comprehensive security training',
    duration: '18 weeks',
    students: '900+',
    rating: '4.7',
    skills: ['Ethical Hacking', 'Network Security', 'CISSP', 'Penetration Testing'],
    level: 'Advanced',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 5,
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications',
    duration: '14 weeks',
    students: '1,500+',
    rating: '4.8',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
    level: 'Intermediate',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    icon: Database,
    title: 'Cloud Engineering',
    description: 'Design and manage scalable cloud infrastructure',
    duration: '16 weeks',
    students: '800+',
    rating: '4.9',
    skills: ['AWS', 'Docker', 'Kubernetes', 'DevOps', 'Terraform'],
    level: 'Advanced',
    color: 'from-yellow-500 to-orange-500'
  }];


  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" data-id="nf02b8wv2" data-path="src/components/EnhancedPrograms.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="sv32faxkq" data-path="src/components/EnhancedPrograms.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-id="rpcel04ze" data-path="src/components/EnhancedPrograms.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} data-id="0rri6z6ql" data-path="src/components/EnhancedPrograms.tsx">

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" data-id="7w7z1r26w" data-path="src/components/EnhancedPrograms.tsx">
              <KineticText variant="wave" trigger="scroll" data-id="h7zrimuj8" data-path="src/components/EnhancedPrograms.tsx">
                Our Programs
              </KineticText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-id="qsx6nfsw6" data-path="src/components/EnhancedPrograms.tsx">
              <KineticText variant="fade" trigger="scroll" staggerDelay={0.03} data-id="mofhh87mb" data-path="src/components/EnhancedPrograms.tsx">
                Choose from our comprehensive range of industry-aligned programs designed to fast-track your career in technology
              </KineticText>
            </p>
          </motion.div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-id="dsdxhbmeq" data-path="src/components/EnhancedPrograms.tsx">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <BlurTransition
                key={program.id}
                variant="card"
                trigger="scroll"
                className="h-full" data-id="l77j9rxjt" data-path="src/components/EnhancedPrograms.tsx">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full" data-id="adiabc310" data-path="src/components/EnhancedPrograms.tsx">

                  <Card
                    className={`h-full relative overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-2xl ${
                    selectedProgram === program.id ? 'ring-2 ring-blue-500 shadow-2xl' : ''}`
                    }
                    onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)} data-id="vpotostmd" data-path="src/components/EnhancedPrograms.tsx">

                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} data-id="tuzqn76k5" data-path="src/components/EnhancedPrograms.tsx" />
                    
                    <CardHeader className="relative" data-id="726sym2rm" data-path="src/components/EnhancedPrograms.tsx">
                      <div className="flex items-center justify-between mb-4" data-id="k4bv97cdg" data-path="src/components/EnhancedPrograms.tsx">
                        <motion.div
                          className={`p-3 rounded-lg bg-gradient-to-br ${program.color} text-white shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }} data-id="ug2q8sx1r" data-path="src/components/EnhancedPrograms.tsx">

                          <Icon className="w-6 h-6" data-id="m36933ntr" data-path="src/components/EnhancedPrograms.tsx" />
                        </motion.div>
                        <Badge
                          variant={program.level === 'Beginner' ? 'default' : program.level === 'Intermediate' ? 'secondary' : 'destructive'} data-id="xdn9t95w8" data-path="src/components/EnhancedPrograms.tsx">

                          {program.level}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors" data-id="kzd041eko" data-path="src/components/EnhancedPrograms.tsx">
                        <KineticText variant="stretch" trigger="hover" data-id="w6c2w73wj" data-path="src/components/EnhancedPrograms.tsx">
                          {program.title}
                        </KineticText>
                      </CardTitle>
                      
                      <CardDescription className="text-gray-600 dark:text-gray-300" data-id="9an472kol" data-path="src/components/EnhancedPrograms.tsx">
                        {program.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative" data-id="oaep5lmtv" data-path="src/components/EnhancedPrograms.tsx">
                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400" data-id="l8su0y4h6" data-path="src/components/EnhancedPrograms.tsx">
                        <div className="flex items-center gap-1" data-id="qop7dygqa" data-path="src/components/EnhancedPrograms.tsx">
                          <Clock className="w-4 h-4" data-id="i2sxfirwf" data-path="src/components/EnhancedPrograms.tsx" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-1" data-id="drsj6poc8" data-path="src/components/EnhancedPrograms.tsx">
                          <Users className="w-4 h-4" data-id="31ypq92sk" data-path="src/components/EnhancedPrograms.tsx" />
                          {program.students}
                        </div>
                        <div className="flex items-center gap-1" data-id="z2jf77erq" data-path="src/components/EnhancedPrograms.tsx">
                          <Award className="w-4 h-4" data-id="akojl1kk8" data-path="src/components/EnhancedPrograms.tsx" />
                          {program.rating}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-6" data-id="9l83tg0ki" data-path="src/components/EnhancedPrograms.tsx">
                        <div className="flex flex-wrap gap-2" data-id="od9517olf" data-path="src/components/EnhancedPrograms.tsx">
                          {program.skills.map((skill, skillIndex) =>
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            viewport={{ once: true }} data-id="9u5j7lwfk" data-path="src/components/EnhancedPrograms.tsx">

                              <Badge variant="outline" className="text-xs" data-id="wi30k1osv" data-path="src/components/EnhancedPrograms.tsx">
                                {skill}
                              </Badge>
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <LiquidButton
                        variant="primary"
                        size="sm"
                        effect="wave"
                        className="w-full group"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Navigate to program details
                        }} data-id="dsy85ohfr" data-path="src/components/EnhancedPrograms.tsx">

                        <span className="flex items-center justify-center gap-2" data-id="o3a3yqy4z" data-path="src/components/EnhancedPrograms.tsx">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-id="at75t2ijw" data-path="src/components/EnhancedPrograms.tsx" />
                        </span>
                      </LiquidButton>
                    </CardContent>
                  </Card>
                </motion.div>
              </BlurTransition>);

          })}
        </div>

        {/* Loading State */}
        {isLoading &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" data-id="4mkuukyze" data-path="src/components/EnhancedPrograms.tsx">

            <SkeletonLoader variant="card" count={3} animate="shimmer" data-id="cwdjmvmn7" data-path="src/components/EnhancedPrograms.tsx" />
          </motion.div>
        }

        {/* Load More Button */}
        <div className="text-center" data-id="46vpts369" data-path="src/components/EnhancedPrograms.tsx">
          <LiquidButton
            variant="secondary"
            size="lg"
            effect="ripple"
            onClick={handleLoadMore}
            disabled={isLoading} data-id="o39jw3nw5" data-path="src/components/EnhancedPrograms.tsx">

            {isLoading ? 'Loading...' : 'Load More Programs'}
          </LiquidButton>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl" data-id="xpxrx1c8v" data-path="src/components/EnhancedPrograms.tsx">

          <h3 className="text-2xl font-bold mb-4" data-id="cnukjuuiu" data-path="src/components/EnhancedPrograms.tsx">
            <KineticText variant="morph" trigger="scroll" data-id="6j4rf5tgf" data-path="src/components/EnhancedPrograms.tsx">
              Ready to Start Your Journey?
            </KineticText>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6" data-id="4luvwlho8" data-path="src/components/EnhancedPrograms.tsx">
            Join thousands of students who have transformed their careers with our programs
          </p>
          <LiquidButton
            variant="accent"
            size="lg"
            effect="wave" data-id="q16r99jyn" data-path="src/components/EnhancedPrograms.tsx">

            Get Started Today
          </LiquidButton>
        </motion.div>
      </div>
    </section>);

};

export default EnhancedPrograms;