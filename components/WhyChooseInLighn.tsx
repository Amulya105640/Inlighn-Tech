import { motion } from "motion/react";
import { BookOpen, Users, Shield } from "lucide-react";

const WhyChooseInLighn = () => {
  const features = [
  {
    icon: BookOpen,
    title: "High Quality Resources",
    description: "Hands-on learning with expertly designed material",
    gradient: "from-purple-400 to-pink-400",
    glowColor: "shadow-purple-300",
    position: "translate-x-0"
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from real-world industry professionals",
    gradient: "from-blue-400 to-cyan-400",
    glowColor: "shadow-blue-300",
    position: "translate-y-8"
  },
  {
    icon: Shield,
    title: "Internship Portal Access",
    description: "Easy access to your learning journey anytime",
    gradient: "from-teal-400 to-green-400",
    glowColor: "shadow-teal-300",
    position: "translate-x-0"
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" data-id="lxx42jsf0" data-path="src/components/WhyChooseInLighn.tsx">
      {/* Background decorative elements */}
      <div className="absolute inset-0" data-id="bffygag0v" data-path="src/components/WhyChooseInLighn.tsx">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" data-id="jxp8xnk5g" data-path="src/components/WhyChooseInLighn.tsx"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" data-id="wn7roqxho" data-path="src/components/WhyChooseInLighn.tsx"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" data-id="bndxh0x7x" data-path="src/components/WhyChooseInLighn.tsx"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-id="awh7otyvp" data-path="src/components/WhyChooseInLighn.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20" data-id="ovb2u0pq0" data-path="src/components/WhyChooseInLighn.tsx">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="20pzhm9yv" data-path="src/components/WhyChooseInLighn.tsx">
            The Best Beneficial Side of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" data-id="87d9up0i1" data-path="src/components/WhyChooseInLighn.tsx">
              INLIGHN TECH
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="gvexbth2a" data-path="src/components/WhyChooseInLighn.tsx">
            Discover what makes our internship programs stand out in the industry
          </p>
        </motion.div>

        <div className="relative" data-id="0hjn3wm6x" data-path="src/components/WhyChooseInLighn.tsx">
          {/* Curved connecting line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" viewBox="0 0 1000 300" data-id="yi9prgevc" data-path="src/components/WhyChooseInLighn.tsx">
            <defs data-id="fbs09qoc9" data-path="src/components/WhyChooseInLighn.tsx">
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%" data-id="y696dqvur" data-path="src/components/WhyChooseInLighn.tsx">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" data-id="isnaw83my" data-path="src/components/WhyChooseInLighn.tsx" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" data-id="6on00nsgi" data-path="src/components/WhyChooseInLighn.tsx" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" data-id="xrftb94bz" data-path="src/components/WhyChooseInLighn.tsx" />
              </linearGradient>
            </defs>
            <path
              d="M 200 150 Q 500 50 800 150"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
              className="animate-pulse" data-id="vlmaxuflg" data-path="src/components/WhyChooseInLighn.tsx" />

          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10" data-id="ruqzbcdv7" data-path="src/components/WhyChooseInLighn.tsx">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`text-center ${feature.position}`} data-id="t6b2g35xi" data-path="src/components/WhyChooseInLighn.tsx">

                  <div className="relative mb-8" data-id="swob4zfr7" data-path="src/components/WhyChooseInLighn.tsx">
                    <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} shadow-2xl ${feature.glowColor} flex items-center justify-center transform hover:scale-110 transition-all duration-500 hover:shadow-3xl`} data-id="wvku1yhjm" data-path="src/components/WhyChooseInLighn.tsx">
                      <Icon className="w-16 h-16 text-white" data-id="n2zjs0seg" data-path="src/components/WhyChooseInLighn.tsx" />
                    </div>
                    
                    {/* Glowing ring */}
                    <div className={`absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} opacity-20 animate-ping`} data-id="5ugzj4fs9" data-path="src/components/WhyChooseInLighn.tsx"></div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300" data-id="0mw4kib20" data-path="src/components/WhyChooseInLighn.tsx">
                    <h3 className="text-2xl font-bold text-white mb-4" data-id="24he82n9s" data-path="src/components/WhyChooseInLighn.tsx">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed" data-id="3oebjkbug" data-path="src/components/WhyChooseInLighn.tsx">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

};

export default WhyChooseInLighn;