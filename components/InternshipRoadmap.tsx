import { motion } from 'motion/react';
import { MapPin, FileText, Phone, Mail, FolderOpen, Award, Users, Code, BookOpen, Trophy, GitBranch, Briefcase } from 'lucide-react';

const InternshipRoadmap = () => {
  const mainSteps = [
  {
    icon: FileText,
    title: "Registration Form & Portal Access",
    description: "Complete your registration and get instant access to our learning portal",
    gradient: "from-purple-400 to-pink-400"
  },
  {
    icon: Phone,
    title: "Interview Call – Next Day",
    description: "Quick assessment call to understand your goals and match you with the right program",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: Mail,
    title: "Offer Letter with Batch Group Link",
    description: "Receive your official offer letter and join your dedicated batch group",
    gradient: "from-teal-400 to-green-400"
  },
  {
    icon: FolderOpen,
    title: "Select Your Project and Submit Work",
    description: "Choose from industry-relevant projects and showcase your skills",
    gradient: "from-orange-400 to-red-400"
  },
  {
    icon: Award,
    title: "Experience Letter & Letter of Completion",
    description: "Earn your certificates and boost your professional portfolio",
    gradient: "from-violet-400 to-purple-400"
  }];


  const programRoadmaps = [
  {
    title: "Full Stack Development",
    duration: "12 Weeks",
    icon: Code,
    color: "from-blue-500 to-purple-600",
    phases: [
    { week: "Week 1-3", topic: "Frontend Fundamentals", skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js"] },
    { week: "Week 4-6", topic: "Backend Development", skills: ["Node.js", "Express.js", "API Design", "Authentication"] },
    { week: "Week 7-9", topic: "Database & DevOps", skills: ["MongoDB", "PostgreSQL", "Docker", "AWS Basics"] },
    { week: "Week 10-12", topic: "Project & Deployment", skills: ["Full Stack Project", "CI/CD", "Testing", "Portfolio"] }]

  },
  {
    title: "Data Science & AI",
    duration: "16 Weeks",
    icon: BookOpen,
    color: "from-green-500 to-teal-600",
    phases: [
    { week: "Week 1-4", topic: "Python & Statistics", skills: ["Python", "NumPy", "Pandas", "Statistics"] },
    { week: "Week 5-8", topic: "Machine Learning", skills: ["Scikit-learn", "Algorithms", "Feature Engineering", "Model Selection"] },
    { week: "Week 9-12", topic: "Deep Learning", skills: ["TensorFlow", "Neural Networks", "CNN", "RNN"] },
    { week: "Week 13-16", topic: "AI Projects", skills: ["NLP", "Computer Vision", "MLOps", "Real Projects"] }]

  },
  {
    title: "DevOps Engineering",
    duration: "10 Weeks",
    icon: GitBranch,
    color: "from-orange-500 to-red-600",
    phases: [
    { week: "Week 1-3", topic: "Infrastructure Basics", skills: ["Linux", "Networking", "Cloud Computing", "Virtualization"] },
    { week: "Week 4-6", topic: "CI/CD Pipeline", skills: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes"] },
    { week: "Week 7-8", topic: "Monitoring & Security", skills: ["Prometheus", "Grafana", "Security Best Practices", "Compliance"] },
    { week: "Week 9-10", topic: "Capstone Project", skills: ["End-to-end Pipeline", "Infrastructure as Code", "Automation"] }]

  },
  {
    title: "Digital Marketing",
    duration: "8 Weeks",
    icon: Briefcase,
    color: "from-pink-500 to-rose-600",
    phases: [
    { week: "Week 1-2", topic: "Marketing Fundamentals", skills: ["Digital Strategy", "Market Research", "Brand Building", "Analytics"] },
    { week: "Week 3-4", topic: "Content & Social Media", skills: ["Content Creation", "Social Media Strategy", "Influencer Marketing", "SEO"] },
    { week: "Week 5-6", topic: "Paid Advertising", skills: ["Google Ads", "Facebook Ads", "PPC", "Campaign Management"] },
    { week: "Week 7-8", topic: "Marketing Projects", skills: ["Real Campaigns", "ROI Analysis", "A/B Testing", "Portfolio"] }]

  }];


  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50" data-id="ohvmlc2gn" data-path="src/components/InternshipRoadmap.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="bhwo5r1qx" data-path="src/components/InternshipRoadmap.tsx">
        {/* Main Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="h3m6yvz13" data-path="src/components/InternshipRoadmap.tsx">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="x3n70gmrn" data-path="src/components/InternshipRoadmap.tsx">
            Your Internship Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="9ba8gh5ix" data-path="src/components/InternshipRoadmap.tsx">
            Follow our structured path to professional growth and industry readiness
          </p>
        </motion.div>

        <div className="relative mb-20" data-id="ny6nhd6p5" data-path="src/components/InternshipRoadmap.tsx">
          {/* Curved Path SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1000 400" data-id="o70wgedfq" data-path="src/components/InternshipRoadmap.tsx">
            <defs data-id="3715cwunh" data-path="src/components/InternshipRoadmap.tsx">
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-id="206auass4" data-path="src/components/InternshipRoadmap.tsx">
                <stop offset="0%" stopColor="#8B5CF6" data-id="6aqq9ymod" data-path="src/components/InternshipRoadmap.tsx" />
                <stop offset="25%" stopColor="#3B82F6" data-id="fv0i4qlbn" data-path="src/components/InternshipRoadmap.tsx" />
                <stop offset="50%" stopColor="#10B981" data-id="feu7v2s6d" data-path="src/components/InternshipRoadmap.tsx" />
                <stop offset="75%" stopColor="#F59E0B" data-id="ntnk75il0" data-path="src/components/InternshipRoadmap.tsx" />
                <stop offset="100%" stopColor="#8B5CF6" data-id="08q7b87xs" data-path="src/components/InternshipRoadmap.tsx" />
              </linearGradient>
            </defs>
            <path
              d="M 100 200 Q 300 100 500 200 T 900 200"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse" data-id="t56lwhs95" data-path="src/components/InternshipRoadmap.tsx" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10" data-id="02d1m4s12" data-path="src/components/InternshipRoadmap.tsx">
            {mainSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center" data-id="v8u8mgyol" data-path="src/components/InternshipRoadmap.tsx">
                  <div className="relative mb-6" data-id="liq9asdgk" data-path="src/components/InternshipRoadmap.tsx">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${step.gradient} shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300`} data-id="frffo43rl" data-path="src/components/InternshipRoadmap.tsx">
                      <Icon className="w-10 h-10 text-white" data-id="ur6p8ujlv" data-path="src/components/InternshipRoadmap.tsx" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center" data-id="1326txolc" data-path="src/components/InternshipRoadmap.tsx">
                      <span className="text-sm font-bold text-gray-700" data-id="4kgwt3dnr" data-path="src/components/InternshipRoadmap.tsx">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-id="4usqpmmul" data-path="src/components/InternshipRoadmap.tsx">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3" data-id="e8i6f9o0v" data-path="src/components/InternshipRoadmap.tsx">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed" data-id="pb642ne66" data-path="src/components/InternshipRoadmap.tsx">
                      {step.description}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>

        {/* Program-Specific Roadmaps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16" data-id="ol84nizn4" data-path="src/components/InternshipRoadmap.tsx">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="rpo73em73" data-path="src/components/InternshipRoadmap.tsx">
            Program Learning Roadmaps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="d2yenh8rs" data-path="src/components/InternshipRoadmap.tsx">
            Detailed curriculum paths for each of our specialized internship programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="wujquq0a0" data-path="src/components/InternshipRoadmap.tsx">
          {programRoadmaps.map((program, programIndex) => {
            const ProgramIcon = program.icon;
            return (
              <motion.div
                key={programIndex}
                initial={{ opacity: 0, x: programIndex % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: programIndex * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden" data-id="b5ha1uogk" data-path="src/components/InternshipRoadmap.tsx">
                
                {/* Program Header */}
                <div className={`bg-gradient-to-r ${program.color} p-8 text-white relative overflow-hidden`} data-id="4iynwv48i" data-path="src/components/InternshipRoadmap.tsx">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" data-id="gdk3lfh4q" data-path="src/components/InternshipRoadmap.tsx"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" data-id="vv1e79pik" data-path="src/components/InternshipRoadmap.tsx"></div>
                  
                  <div className="relative z-10" data-id="gzu9bwpz0" data-path="src/components/InternshipRoadmap.tsx">
                    <div className="flex items-center justify-between mb-4" data-id="60il84zdw" data-path="src/components/InternshipRoadmap.tsx">
                      <div className="flex items-center space-x-3" data-id="enpothwb0" data-path="src/components/InternshipRoadmap.tsx">
                        <ProgramIcon className="w-10 h-10" data-id="httstp6b8" data-path="src/components/InternshipRoadmap.tsx" />
                        <div data-id="qyepltl8d" data-path="src/components/InternshipRoadmap.tsx">
                          <h3 className="text-2xl font-bold" data-id="bdjpczgss" data-path="src/components/InternshipRoadmap.tsx">{program.title}</h3>
                          <p className="text-white/80 text-sm" data-id="hbpg07okl" data-path="src/components/InternshipRoadmap.tsx">{program.duration} Program</p>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-full px-4 py-2" data-id="lj98ydhgx" data-path="src/components/InternshipRoadmap.tsx">
                        <span className="text-sm font-semibold" data-id="uf25xc7bu" data-path="src/components/InternshipRoadmap.tsx">{program.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Program Phases */}
                <div className="p-8" data-id="8pmh4ppfx" data-path="src/components/InternshipRoadmap.tsx">
                  <div className="space-y-6" data-id="cf9uqoefv" data-path="src/components/InternshipRoadmap.tsx">
                    {program.phases.map((phase, phaseIndex) =>
                    <motion.div
                      key={phaseIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: programIndex * 0.2 + phaseIndex * 0.1 }}
                      className="border-l-4 border-gradient-to-b from-purple-400 to-blue-400 pl-6 relative" data-id="rkn9i7683" data-path="src/components/InternshipRoadmap.tsx">
                        
                        <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" data-id="e30gibnmr" data-path="src/components/InternshipRoadmap.tsx"></div>
                        
                        <div className="bg-gray-50 rounded-xl p-4" data-id="funqb7x9z" data-path="src/components/InternshipRoadmap.tsx">
                          <div className="flex items-center justify-between mb-3" data-id="ogrgs48sq" data-path="src/components/InternshipRoadmap.tsx">
                            <h4 className="text-sm font-bold text-purple-600 uppercase tracking-wide" data-id="ou23r8cwl" data-path="src/components/InternshipRoadmap.tsx">{phase.week}</h4>
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full" data-id="cb7e3r85x" data-path="src/components/InternshipRoadmap.tsx">
                              Phase {phaseIndex + 1}
                            </span>
                          </div>
                          <h5 className="text-lg font-semibold text-gray-800 mb-3" data-id="kxmhonzfv" data-path="src/components/InternshipRoadmap.tsx">{phase.topic}</h5>
                          <div className="flex flex-wrap gap-2" data-id="hjzgjfumf" data-path="src/components/InternshipRoadmap.tsx">
                            {phase.skills.map((skill, skillIndex) =>
                          <span
                            key={skillIndex}
                            className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full border border-gray-200 hover:border-purple-300 transition-colors duration-200" data-id="rul7cjznj" data-path="src/components/InternshipRoadmap.tsx">
                                {skill}
                              </span>
                          )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Program Footer */}
                <div className={`bg-gradient-to-r ${program.color} p-4`} data-id="l0jrwnaei" data-path="src/components/InternshipRoadmap.tsx">
                  <div className="flex items-center justify-between text-white" data-id="uu7vjlzbh" data-path="src/components/InternshipRoadmap.tsx">
                    <div className="flex items-center space-x-2" data-id="4o4f1balh" data-path="src/components/InternshipRoadmap.tsx">
                      <Trophy className="w-5 h-5" data-id="437557sbt" data-path="src/components/InternshipRoadmap.tsx" />
                      <span className="text-sm font-semibold" data-id="ttfwv199n" data-path="src/components/InternshipRoadmap.tsx">Industry-Ready Skills</span>
                    </div>
                    <div className="flex items-center space-x-2" data-id="vybh3432i" data-path="src/components/InternshipRoadmap.tsx">
                      <Users className="w-5 h-5" data-id="vkg7jsksc" data-path="src/components/InternshipRoadmap.tsx" />
                      <span className="text-sm" data-id="7m856vhgd" data-path="src/components/InternshipRoadmap.tsx">Mentor Support</span>
                    </div>
                  </div>
                </div>
              </motion.div>);

          })}
        </div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center" data-id="fb7uka6tp" data-path="src/components/InternshipRoadmap.tsx">
          <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-teal-100 rounded-3xl p-12" data-id="uf4g2peyv" data-path="src/components/InternshipRoadmap.tsx">
            <h3 className="text-2xl font-bold text-gray-800 mb-8" data-id="1tv0tewd0" data-path="src/components/InternshipRoadmap.tsx">Our Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="9ovk9yvjn" data-path="src/components/InternshipRoadmap.tsx">
              <div className="text-center" data-id="54xbe9l1v" data-path="src/components/InternshipRoadmap.tsx">
                <div className="text-4xl font-bold text-purple-600 mb-2" data-id="4g7lhgcmw" data-path="src/components/InternshipRoadmap.tsx">95%</div>
                <p className="text-gray-600" data-id="qvvuacgoa" data-path="src/components/InternshipRoadmap.tsx">Completion Rate</p>
              </div>
              <div className="text-center" data-id="7c2yxl6uq" data-path="src/components/InternshipRoadmap.tsx">
                <div className="text-4xl font-bold text-blue-600 mb-2" data-id="3hws5us2k" data-path="src/components/InternshipRoadmap.tsx">85%</div>
                <p className="text-gray-600" data-id="te5rjhada" data-path="src/components/InternshipRoadmap.tsx">Job Placement</p>
              </div>
              <div className="text-center" data-id="1z8bh5myq" data-path="src/components/InternshipRoadmap.tsx">
                <div className="text-4xl font-bold text-teal-600 mb-2" data-id="ol1y747dj" data-path="src/components/InternshipRoadmap.tsx">500+</div>
                <p className="text-gray-600" data-id="tjf4x6dht" data-path="src/components/InternshipRoadmap.tsx">Alumni Network</p>
              </div>
              <div className="text-center" data-id="q1ll9qy2k" data-path="src/components/InternshipRoadmap.tsx">
                <div className="text-4xl font-bold text-green-600 mb-2" data-id="m2t4l6tin" data-path="src/components/InternshipRoadmap.tsx">4.8/5</div>
                <p className="text-gray-600" data-id="xcx2dgaub" data-path="src/components/InternshipRoadmap.tsx">Student Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default InternshipRoadmap;