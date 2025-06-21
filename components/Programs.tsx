import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InteractiveCard from '@/components/InteractiveCard';
import FloatingObject from '@/components/FloatingObject';
import StatsCounter from '@/components/StatsCounter';
import { programs, getFeaturedPrograms } from '@/data/programs';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const navigate = useNavigate();

  const featuredPrograms = getFeaturedPrograms();

  const stats = [
  { label: "Students Graduated", value: 2500, suffix: "+" },
  { label: "Success Rate", value: 96, suffix: "%" },
  { label: "Partner Companies", value: 150, suffix: "+" },
  { label: "Average Salary Increase", value: 85, prefix: "$", suffix: "K" }];


  const handleProgramClick = (programId: string) => {
    navigate(`/programs/${programId}`);
  };

  const handleLearnMore = (programId: string) => {
    navigate(`/programs/${programId}`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" data-id="6n2j6om7f" data-path="src/components/Programs.tsx">
      {/* Floating objects */}
      <FloatingObject className="top-10 right-10" size="sm" type="cube" data-id="fsd8n8met" data-path="src/components/Programs.tsx" />
      <FloatingObject className="bottom-20 left-10" size="md" type="sphere" data-id="hz04khdqw" data-path="src/components/Programs.tsx" />
      
      <div className="container mx-auto px-6" data-id="7oesvrwrr" data-path="src/components/Programs.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="pw80ufgzd" data-path="src/components/Programs.tsx">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 brand-text-gradient glow-text"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="clq3zomwx" data-path="src/components/Programs.tsx">

            Transform Your Career
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="ofbisbani" data-path="src/components/Programs.tsx">
            Choose from our comprehensive programs designed by industry experts. 
            Each program combines theoretical knowledge with hands-on projects.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }} data-id="hbtoz2mny" data-path="src/components/Programs.tsx">

          <StatsCounter stats={stats} data-id="3k0jooq8v" data-path="src/components/Programs.tsx" />
        </motion.div>

        {/* Featured Programs Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }} data-id="qi56h0l3m" data-path="src/components/Programs.tsx">

          <h3 className="text-3xl font-bold text-white mb-8 text-center" data-id="128y8i75c" data-path="src/components/Programs.tsx">Featured Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="ra4ahiz6u" data-path="src/components/Programs.tsx">
            {featuredPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="cursor-pointer group"
                  onClick={() => handleProgramClick(program.id)} data-id="zf4uy62bi" data-path="src/components/Programs.tsx">

                  <Card className="h-full relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 group-hover:border-brand-accent/50 transition-all duration-300" data-id="u2uxflps1" data-path="src/components/Programs.tsx">
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} data-id="t6nryfjlv" data-path="src/components/Programs.tsx" />
                    
                    <CardHeader className="relative z-10" data-id="7nxmrxppc" data-path="src/components/Programs.tsx">
                      <div className="flex items-center justify-between mb-4" data-id="qcwqas228" data-path="src/components/Programs.tsx">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${program.gradient} group-hover:scale-110 transition-transform duration-300`} data-id="0b6eg8tjy" data-path="src/components/Programs.tsx">
                          <IconComponent className="w-8 h-8 text-white" data-id="lgl5xuf5b" data-path="src/components/Programs.tsx" />
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-brand-accent transition-colors duration-300" data-id="14tse5ph9" data-path="src/components/Programs.tsx" />
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-brand-accent transition-colors duration-300" data-id="m65wwqxdw" data-path="src/components/Programs.tsx">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300" data-id="48j39lxsg" data-path="src/components/Programs.tsx">
                        {program.duration} • {program.level}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10" data-id="zy4ejvvfa" data-path="src/components/Programs.tsx">
                      <p className="text-gray-300 mb-4 line-clamp-3" data-id="r1cq7dk54" data-path="src/components/Programs.tsx">
                        {program.shortDescription}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4" data-id="89xqb1wex" data-path="src/components/Programs.tsx">
                        {program.technologies.slice(0, 3).map((tech) =>
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-white/20 text-white border-brand-accent/30" data-id="ndkxfopo8" data-path="src/components/Programs.tsx">

                            {tech}
                          </Badge>
                        )}
                        {program.technologies.length > 3 &&
                        <Badge variant="secondary" className="bg-white/20 text-white border-brand-accent/30" data-id="mips3e57l" data-path="src/components/Programs.tsx">
                            +{program.technologies.length - 3} more
                          </Badge>
                        }
                      </div>

                      <div className="flex items-center justify-between" data-id="j9l4qww01" data-path="src/components/Programs.tsx">
                        <span className="text-brand-primary font-bold text-lg" data-id="sad7y8yrk" data-path="src/components/Programs.tsx">{program.fee}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-brand-accent hover:text-white hover:bg-brand-accent/20"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMore(program.id);
                          }} data-id="90bua44rx" data-path="src/components/Programs.tsx">

                          Learn More <ChevronRight className="w-4 h-4 ml-1" data-id="xrfz55sqr" data-path="src/components/Programs.tsx" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* All Programs Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }} data-id="u9d48h4ki" data-path="src/components/Programs.tsx">

          <h3 className="text-3xl font-bold text-white mb-8 text-center" data-id="fa8lyj5kk" data-path="src/components/Programs.tsx">All Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="c42sm26hr" data-path="src/components/Programs.tsx">
            {programs.map((program, index) =>
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }} data-id="wk9ubg6x2" data-path="src/components/Programs.tsx">

                <InteractiveCard
                title={program.title}
                description={program.shortDescription}
                tags={program.technologies.slice(0, 3)}
                onClick={() => handleProgramClick(program.id)}
                className="h-full" data-id="ob3u6vt29" data-path="src/components/Programs.tsx" />

              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Featured Program Detail */}
        {selectedProgram &&
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} data-id="f6d427ze8" data-path="src/components/Programs.tsx">

            {(() => {
            const program = programs.find((p) => p.id === selectedProgram);
            if (!program) return null;
            const IconComponent = program.icon;

            return (
              <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="jxh8m88pf" data-path="src/components/Programs.tsx">
                  <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-10`} data-id="933kgknb8" data-path="src/components/Programs.tsx" />
                  
                  <CardHeader className="relative z-10" data-id="n90drhv34" data-path="src/components/Programs.tsx">
                    <div className="flex items-center justify-between mb-4" data-id="7z5j439gn" data-path="src/components/Programs.tsx">
                      <div className="flex items-center gap-4" data-id="oq7yp8bec" data-path="src/components/Programs.tsx">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${program.gradient}`} data-id="g7nmbp5tg" data-path="src/components/Programs.tsx">
                          <IconComponent className="w-8 h-8 text-white" data-id="3bmg7rxmp" data-path="src/components/Programs.tsx" />
                        </div>
                        <div data-id="l5putbueg" data-path="src/components/Programs.tsx">
                          <CardTitle className="text-2xl text-white" data-id="h2yqwmoau" data-path="src/components/Programs.tsx">{program.title}</CardTitle>
                          <CardDescription className="text-gray-300" data-id="58edqvyh9" data-path="src/components/Programs.tsx">
                            {program.duration} • {program.level}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/10"
                      onClick={() => setSelectedProgram(null)} data-id="uxyt0m8tf" data-path="src/components/Programs.tsx">

                        ×
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10" data-id="iurk2iwvw" data-path="src/components/Programs.tsx">
                    <div className="grid md:grid-cols-3 gap-6" data-id="e32v9epgf" data-path="src/components/Programs.tsx">
                      <div data-id="l29lvgnxz" data-path="src/components/Programs.tsx">
                        <h4 className="text-lg font-semibold text-white mb-3" data-id="ecyvsbuvu" data-path="src/components/Programs.tsx">Technologies</h4>
                        <div className="flex flex-wrap gap-2" data-id="tqutq5ank" data-path="src/components/Programs.tsx">
                          {program.technologies.map((tech) =>
                        <Badge key={tech} variant="secondary" className="bg-white/20 text-white border-brand-accent/30" data-id="aeml03zbo" data-path="src/components/Programs.tsx">
                              {tech}
                            </Badge>
                        )}
                        </div>
                      </div>
                      
                      <div data-id="7d67cg5de" data-path="src/components/Programs.tsx">
                        <h4 className="text-lg font-semibold text-white mb-3" data-id="w4l6c6cj3" data-path="src/components/Programs.tsx">Key Projects</h4>
                        <ul className="space-y-1" data-id="s4j3goh3z" data-path="src/components/Programs.tsx">
                          {program.projects.map((project) =>
                        <li key={project} className="text-gray-300 flex items-center gap-2" data-id="tsmzi7klp" data-path="src/components/Programs.tsx">
                              <ChevronRight className="w-4 h-4 text-brand-accent" data-id="3fajtnrub" data-path="src/components/Programs.tsx" />
                              {project}
                            </li>
                        )}
                        </ul>
                      </div>
                      
                      <div data-id="2fq9lvw7d" data-path="src/components/Programs.tsx">
                        <h4 className="text-lg font-semibold text-white mb-3" data-id="pn03j1b8i" data-path="src/components/Programs.tsx">Career Outcomes</h4>
                        <ul className="space-y-1" data-id="pl1x57f5e" data-path="src/components/Programs.tsx">
                          {program.outcomes.map((outcome) =>
                        <li key={outcome} className="text-gray-300 flex items-center gap-2" data-id="246kyv8hz" data-path="src/components/Programs.tsx">
                              <ChevronRight className="w-4 h-4 text-brand-primary" data-id="p185cs7u8" data-path="src/components/Programs.tsx" />
                              {outcome}
                            </li>
                        )}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-4" data-id="guqot289z" data-path="src/components/Programs.tsx">
                      <Button
                      className="brand-gradient border-0 text-white hover:brightness-110"
                      onClick={() => handleLearnMore(program.id)} data-id="hc15lsd9y" data-path="src/components/Programs.tsx">

                        View Full Details
                      </Button>
                      <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => handleProgramClick(program.id)} data-id="5vxn0piy8" data-path="src/components/Programs.tsx">

                        Enroll Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>);

          })()}
          </motion.div>
        }

        {/* Learning Path Visualization */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="trjm7ibcj" data-path="src/components/Programs.tsx">

          <h3 className="text-3xl font-bold text-white mb-8" data-id="zgytdto5x" data-path="src/components/Programs.tsx">Your Learning Journey</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto" data-id="yxppekz1x" data-path="src/components/Programs.tsx">
            {[
            { step: "1", title: "Choose Program", desc: "Select the perfect program for your goals" },
            { step: "2", title: "Learn & Build", desc: "Hands-on projects with expert mentorship" },
            { step: "3", title: "Get Certified", desc: "Earn industry-recognized certification" },
            { step: "4", title: "Land Your Job", desc: "Career support and job placement assistance" }].
            map((phase, index) =>
            <React.Fragment key={index} data-id="ii78iea6z" data-path="src/components/Programs.tsx">
                <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }} data-id="f2yvaa7mr" data-path="src/components/Programs.tsx">

                  <div className="w-16 h-16 brand-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto brand-glow" data-id="8tgh7d0hs" data-path="src/components/Programs.tsx">
                    {phase.step}
                  </div>
                  <h4 className="text-white font-semibold mb-2" data-id="lvheujqg2" data-path="src/components/Programs.tsx">{phase.title}</h4>
                  <p className="text-gray-400 text-sm max-w-32" data-id="wsdafsd3h" data-path="src/components/Programs.tsx">{phase.desc}</p>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" data-id="3z3w9si6w" data-path="src/components/Programs.tsx" />
                </motion.div>
                
                {index < 3 &&
              <ChevronRight className="w-6 h-6 text-gray-500 hidden md:block" data-id="oano6jn36" data-path="src/components/Programs.tsx" />
              }
              </React.Fragment>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default Programs;