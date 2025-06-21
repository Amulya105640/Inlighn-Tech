import { motion } from "motion/react";
import { GraduationCap, FolderOpen, Clock, Trophy } from "lucide-react";

const InternshipStats = () => {
  const stats = [
  {
    icon: GraduationCap,
    number: "1,200+",
    label: "Interns Enrolled",
    gradient: "from-purple-500 to-pink-500",
    bgGlow: "shadow-purple-200"
  },
  {
    icon: FolderOpen,
    number: "850+",
    label: "Projects Completed",
    gradient: "from-blue-500 to-cyan-500",
    bgGlow: "shadow-blue-200"
  },
  {
    icon: Clock,
    number: "4 Weeks",
    label: "Avg Duration",
    gradient: "from-teal-500 to-green-500",
    bgGlow: "shadow-teal-200"
  },
  {
    icon: Trophy,
    number: "95%",
    label: "ISO-Certified Completions",
    gradient: "from-orange-500 to-red-500",
    bgGlow: "shadow-orange-200"
  }];


  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50" data-id="v3bp30w2g" data-path="src/components/InternshipStats.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="pcg0g6qhn" data-path="src/components/InternshipStats.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="eq0fj93to" data-path="src/components/InternshipStats.tsx">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="jpey19qqk" data-path="src/components/InternshipStats.tsx">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="1q6pa4g0z" data-path="src/components/InternshipStats.tsx">
            Measurable success in transforming careers and building futures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-id="96slvs9qi" data-path="src/components/InternshipStats.tsx">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 text-center shadow-xl ${stat.bgGlow} hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`} data-id="8fy66gonk" data-path="src/components/InternshipStats.tsx">

                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`} data-id="yrbc6v8me" data-path="src/components/InternshipStats.tsx">
                  <Icon className="w-8 h-8 text-white" data-id="erzuykv30" data-path="src/components/InternshipStats.tsx" />
                </div>
                
                <div className="mb-4" data-id="raqprv5ly" data-path="src/components/InternshipStats.tsx">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`} data-id="i02zr6pd1" data-path="src/components/InternshipStats.tsx">

                    {stat.number}
                  </motion.div>
                  <p className="text-gray-600 font-medium text-lg" data-id="eesa5h3ot" data-path="src/components/InternshipStats.tsx">
                    {stat.label}
                  </p>
                </div>
                
                <div className={`w-20 h-1 mx-auto bg-gradient-to-r ${stat.gradient} rounded-full`} data-id="wex3pxde8" data-path="src/components/InternshipStats.tsx"></div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

};

export default InternshipStats;