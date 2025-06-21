import { motion } from "motion/react";

const AboutUsHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50" data-id="m6em2jfo5" data-path="src/components/AboutUsHero.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="oaoz6kx0e" data-path="src/components/AboutUsHero.tsx">
        <div className="text-center" data-id="rzst4f1r6" data-path="src/components/AboutUsHero.tsx">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8" data-id="if6ad2ymf" data-path="src/components/AboutUsHero.tsx">

            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/24343/3377f7f7-ddba-4c42-89d9-f1a235911a11.png"
              alt="InLighn Tech Logo"
              className="h-16 mx-auto mb-6" data-id="vjfsfk7ld" data-path="src/components/AboutUsHero.tsx" />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6" data-id="0ivuvp3bq" data-path="src/components/AboutUsHero.tsx">
              We Provide Best Industry Services For You
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed" data-id="21y8a4uaq" data-path="src/components/AboutUsHero.tsx">

            At <span className="font-semibold text-purple-600" data-id="eflv7iqjk" data-path="src/components/AboutUsHero.tsx">INLIGHN TECH</span>, we believe the future of education lies in bridging the gap between academic learning and real-world industry needs. Our internship programs equip students and young professionals with practical skills in <span className="font-semibold text-teal-600" data-id="tp6sd0qkc" data-path="src/components/AboutUsHero.tsx">Cyber Security</span>, <span className="font-semibold text-blue-600" data-id="tjejj4i22" data-path="src/components/AboutUsHero.tsx">Full Stack Development</span>, <span className="font-semibold text-purple-600" data-id="9gxbsjf5g" data-path="src/components/AboutUsHero.tsx">Data Science</span>, and <span className="font-semibold text-pink-600" data-id="awr89x9bw" data-path="src/components/AboutUsHero.tsx">Project Management</span>.
          </motion.p>
        </div>
      </div>
    </section>);

};

export default AboutUsHero;