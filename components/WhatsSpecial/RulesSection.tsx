
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Users,
  Laptop,
  Award } from
'lucide-react';

const rulesCategories = [
{
  id: 1,
  title: "Attendance & Commitment",
  icon: Clock,
  color: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50",
  rules: [
  "Maintain minimum 85% attendance throughout the program",
  "Notify supervisors at least 2 hours in advance for any absence",
  "Punctual arrival for all scheduled meetings and sessions",
  "Complete minimum 20 hours per week (part-time) or 40 hours (full-time)",
  "No unauthorized leaves during critical project phases"]

},
{
  id: 2,
  title: "Professional Conduct",
  icon: Shield,
  color: "from-green-500 to-emerald-500",
  bgColor: "bg-green-50",
  rules: [
  "Maintain professional behavior and communication at all times",
  "Respect colleagues, mentors, and company property",
  "Follow dress code guidelines for office and client meetings",
  "Use company resources responsibly and only for work purposes",
  "Report any conflicts of interest or ethical concerns immediately"]

},
{
  id: 3,
  title: "Learning & Development",
  icon: BookOpen,
  color: "from-purple-500 to-pink-500",
  bgColor: "bg-purple-50",
  rules: [
  "Actively participate in all training sessions and workshops",
  "Complete assigned learning modules within specified deadlines",
  "Seek feedback regularly and implement suggested improvements",
  "Document learning progress and maintain a development journal",
  "Share knowledge with peers and contribute to team learning"]

},
{
  id: 4,
  title: "Project Requirements",
  icon: Laptop,
  color: "from-amber-500 to-orange-500",
  bgColor: "bg-amber-50",
  rules: [
  "Submit all project deliverables on time and meet quality standards",
  "Follow coding standards and documentation requirements",
  "Participate actively in code reviews and team discussions",
  "Test work thoroughly before submission",
  "Maintain project confidentiality and data security protocols"]

},
{
  id: 5,
  title: "Communication",
  icon: Users,
  color: "from-rose-500 to-red-500",
  bgColor: "bg-rose-50",
  rules: [
  "Check and respond to official communications within 24 hours",
  "Use designated communication channels for different purposes",
  "Provide regular status updates on assigned tasks",
  "Ask questions when unclear about requirements or expectations",
  "Maintain professional tone in all written and verbal communications"]

},
{
  id: 6,
  title: "Evaluation & Assessment",
  icon: Award,
  color: "from-indigo-500 to-blue-500",
  bgColor: "bg-indigo-50",
  rules: [
  "Participate in all scheduled performance reviews and evaluations",
  "Complete self-assessments honestly and on time",
  "Accept constructive feedback positively and work on improvements",
  "Meet minimum performance benchmarks in all evaluation criteria",
  "Complete final project presentation and documentation requirements"]

}];


const importantNotes = [
{
  type: "warning",
  icon: AlertTriangle,
  title: "Violation Consequences",
  description: "Serious or repeated violations may result in program termination without certificate completion."
},
{
  type: "success",
  icon: CheckCircle,
  title: "Compliance Benefits",
  description: "Full compliance with rules ensures maximum learning experience and positive recommendations."
}];


const RulesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" data-id="2lg2xj7vm" data-path="src/components/WhatsSpecial/RulesSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="09hni8tvc" data-path="src/components/WhatsSpecial/RulesSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="li2j6tje4" data-path="src/components/WhatsSpecial/RulesSection.tsx">

          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="35nqg8gkj" data-path="src/components/WhatsSpecial/RulesSection.tsx">
            Rules & Regulations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="f4u6zgs9g" data-path="src/components/WhatsSpecial/RulesSection.tsx">
            Clear guidelines to ensure a productive, professional, and rewarding internship experience for everyone
          </p>
        </motion.div>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-id="spr47e8m0" data-path="src/components/WhatsSpecial/RulesSection.tsx">
          {importantNotes.map((note, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} data-id="tqoqy1ep5" data-path="src/components/WhatsSpecial/RulesSection.tsx">

              <Card className={`border-0 shadow-lg ${
            note.type === 'warning' ?
            'bg-amber-50 border-l-4 border-l-amber-500' :
            'bg-green-50 border-l-4 border-l-green-500'}`
            } data-id="ucejcr83u" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                <CardContent className="p-6" data-id="9nytom72v" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                  <div className="flex items-start space-x-4" data-id="d6wsjvrkh" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  note.type === 'warning' ?
                  'bg-amber-100 text-amber-600' :
                  'bg-green-100 text-green-600'}`
                  } data-id="fnfra9qp0" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                      <note.icon className="w-6 h-6" data-id="r6gg88hfm" data-path="src/components/WhatsSpecial/RulesSection.tsx" />
                    </div>
                    <div data-id="dv8fpdgcr" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                      <h3 className="font-bold text-lg text-gray-900 mb-2" data-id="kx25etr0s" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                        {note.title}
                      </h3>
                      <p className="text-gray-600" data-id="bvx2feknn" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                        {note.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Rules Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-id="rj0h70pg2" data-path="src/components/WhatsSpecial/RulesSection.tsx">
          {rulesCategories.map((category, index) =>
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} data-id="zeyvqr4vk" data-path="src/components/WhatsSpecial/RulesSection.tsx">

              <Card className={`h-full ${category.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300`} data-id="r9nds4z45" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                <CardHeader className="pb-4" data-id="9fb8no8fd" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                  <div className="flex items-center space-x-3" data-id="ctn7ywwh8" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`} data-id="hse1yfxod" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                      <category.icon className="w-6 h-6 text-white" data-id="q4ivihcji" data-path="src/components/WhatsSpecial/RulesSection.tsx" />
                    </div>
                    <div data-id="4fstycv4s" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                      <CardTitle className="text-xl text-gray-900" data-id="78813ba5t" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                        {category.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1" data-id="jh95z2277" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                        {category.rules.length} rules
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0" data-id="93t9yv9jl" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                  <ul className="space-y-3" data-id="u88wqt3gr" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                    {category.rules.map((rule, ruleIndex) =>
                  <motion.li
                    key={ruleIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + ruleIndex * 0.05 }}
                    className="flex items-start space-x-3 text-gray-700" data-id="dtibm3oj2" data-path="src/components/WhatsSpecial/RulesSection.tsx">

                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" data-id="i0dueim64" data-path="src/components/WhatsSpecial/RulesSection.tsx" />
                        <span className="text-sm leading-relaxed" data-id="mi5pherff" data-path="src/components/WhatsSpecial/RulesSection.tsx">{rule}</span>
                      </motion.li>
                  )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12" data-id="zqj9c6h6z" data-path="src/components/WhatsSpecial/RulesSection.tsx">

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto" data-id="fi8cmd9ev" data-path="src/components/WhatsSpecial/RulesSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="ospq4qcsg" data-path="src/components/WhatsSpecial/RulesSection.tsx">
              Questions About Rules?
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6" data-id="aj1g64ip4" data-path="src/components/WhatsSpecial/RulesSection.tsx">
              These guidelines are designed to create a positive learning environment for everyone. 
              If you have any questions about these rules or need clarification on any point, 
              please don't hesitate to reach out to your mentor or the program coordinator.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500" data-id="jhwqosie7" data-path="src/components/WhatsSpecial/RulesSection.tsx">
              <div className="flex items-center" data-id="re5tavvup" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                <BookOpen className="w-5 h-5 mr-2 text-blue-500" data-id="asw220i98" data-path="src/components/WhatsSpecial/RulesSection.tsx" />
                <span data-id="oe088fxjy" data-path="src/components/WhatsSpecial/RulesSection.tsx">Detailed handbook provided</span>
              </div>
              <div className="flex items-center" data-id="01hgchnjh" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                <Users className="w-5 h-5 mr-2 text-green-500" data-id="l1gk1makw" data-path="src/components/WhatsSpecial/RulesSection.tsx" />
                <span data-id="3sud50vuw" data-path="src/components/WhatsSpecial/RulesSection.tsx">Mentor support available</span>
              </div>
              <div className="flex items-center" data-id="wb24rdhns" data-path="src/components/WhatsSpecial/RulesSection.tsx">
                <Shield className="w-5 h-5 mr-2 text-purple-500" data-id="g4zbqvkw2" data-path="src/components/WhatsSpecial/RulesSection.tsx" />
                <span data-id="owyixuugs" data-path="src/components/WhatsSpecial/RulesSection.tsx">Fair & transparent policies</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default RulesSection;