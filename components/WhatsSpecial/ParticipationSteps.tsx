
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  UserPlus,
  FileText,
  CheckCircle,
  MessageCircle,
  Users,
  ArrowRight,
  Clock,
  Target } from
'lucide-react';

const stepsData = [
{
  id: 1,
  title: "Register",
  description: "Create your account and complete your profile with your skills and interests",
  icon: UserPlus,
  color: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50",
  details: [
  "Fill out personal information",
  "Upload your resume/CV",
  "Select areas of interest",
  "Verify your email address"],

  duration: "5-10 minutes",
  tips: "Make sure your profile is complete and accurate to increase your chances of selection"
},
{
  id: 2,
  title: "Fill Form",
  description: "Complete our comprehensive application form with your experience and goals",
  icon: FileText,
  color: "from-green-500 to-emerald-500",
  bgColor: "bg-green-50",
  details: [
  "Answer technical questions",
  "Describe your project experience",
  "Explain your career goals",
  "Submit portfolio/work samples"],

  duration: "20-30 minutes",
  tips: "Be specific about your experience and demonstrate your passion for learning"
},
{
  id: 3,
  title: "Get Shortlisted",
  description: "Our team reviews applications and selects candidates for the next round",
  icon: CheckCircle,
  color: "from-amber-500 to-orange-500",
  bgColor: "bg-amber-50",
  details: [
  "Application review process",
  "Technical assessment",
  "Portfolio evaluation",
  "Background verification"],

  duration: "3-5 business days",
  tips: "You'll receive an email notification about your application status"
},
{
  id: 4,
  title: "Interview",
  description: "Participate in our structured interview process with industry experts",
  icon: MessageCircle,
  color: "from-purple-500 to-pink-500",
  bgColor: "bg-purple-50",
  details: [
  "Technical interview round",
  "Behavioral assessment",
  "Problem-solving session",
  "Culture fit evaluation"],

  duration: "45-60 minutes",
  tips: "Prepare by reviewing fundamentals and practicing problem-solving scenarios"
},
{
  id: 5,
  title: "Join",
  description: "Welcome to the team! Begin your internship journey with orientation",
  icon: Users,
  color: "from-rose-500 to-red-500",
  bgColor: "bg-rose-50",
  details: [
  "Orientation session",
  "Meet your mentor",
  "Set up development environment",
  "Receive project assignments"],

  duration: "First week",
  tips: "Come prepared to learn, ask questions, and make the most of this opportunity"
}];


const ParticipationSteps: React.FC = () => {
  return (
    <section className="py-16 bg-white" data-id="82gnqqiu4" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="9ne4q5we5" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="vocnemsfe" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="hvf3obf5o" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
            How to Participate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="cru4pkk8z" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
            Follow these simple steps to join our internship program and start your journey towards professional growth
          </p>
        </motion.div>

        {/* Desktop Flowchart View */}
        <div className="hidden lg:block mb-16" data-id="j5b2ikzks" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
          <div className="relative" data-id="b6o94ewbh" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 via-amber-300 via-purple-300 to-rose-300 transform -translate-y-1/2 z-0" data-id="4ud9gim4e" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx"></div>
            
            <div className="relative z-10 flex items-center justify-between" data-id="l451wyiws" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
              {stepsData.map((step, index) =>
              <div key={step.id} className="flex flex-col items-center" data-id="2x2036dh1" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                  <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4`} data-id="5ykyzr0oe" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

                    <step.icon className="w-8 h-8 text-white" data-id="r8wkeyq24" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                  </motion.div>
                  
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="text-center max-w-xs" data-id="8a43q3t3w" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

                    <Badge className="mb-2 bg-gray-100 text-gray-700 border-0" data-id="meweqwl20" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      Step {step.id}
                    </Badge>
                    <h3 className="font-bold text-lg text-gray-900 mb-2" data-id="83g2c4zi0" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600" data-id="zm5fmlzsp" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow */}
                  {index < stepsData.length - 1 &&
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="absolute top-10 transform translate-x-16" data-id="mui55oacu" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

                      <ArrowRight className="w-6 h-6 text-gray-400" data-id="28aktwzjf" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                    </motion.div>
                }
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-6 mb-12" data-id="djzwvbcfu" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
          {stepsData.map((step, index) =>
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start space-x-4" data-id="l9ols6nub" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`} data-id="kpzg3s664" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                <step.icon className="w-6 h-6 text-white" data-id="wmzbacxa7" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
              </div>
              <div className="flex-1" data-id="s7vyhq9pe" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                <div className="flex items-center space-x-2 mb-2" data-id="lbidfnhh3" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                  <Badge className="bg-gray-100 text-gray-700 border-0" data-id="2u994pan3" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                    Step {step.id}
                  </Badge>
                  <h3 className="font-bold text-lg text-gray-900" data-id="5aclrpyda" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600" data-id="y8m8wkrbv" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                  {step.description}
                </p>
              </div>
              {index < stepsData.length - 1 &&
            <div className="absolute left-8 mt-16 w-0.5 h-6 bg-gray-300" data-id="1vdag3dtg" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx"></div>
            }
            </motion.div>
          )}
        </div>

        {/* Detailed Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="8xglftt15" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
          {stepsData.map((step, index) =>
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} data-id="0ziukfcs6" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

              <Card className={`h-full ${step.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300`} data-id="48dmrl15l" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                <CardContent className="p-6" data-id="c1mrige6a" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                  <div className="flex items-center space-x-3 mb-4" data-id="wyucyvupx" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`} data-id="6bggsnklb" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      <step.icon className="w-6 h-6 text-white" data-id="dsaqs5m5v" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                    </div>
                    <div data-id="opma5nwyi" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      <Badge variant="outline" className="mb-1" data-id="45gimplvo" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                        Step {step.id}
                      </Badge>
                      <h3 className="font-bold text-lg text-gray-900" data-id="u5p8h7w4a" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-4" data-id="xif33425k" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                    <div className="flex items-center space-x-2 text-sm text-gray-600" data-id="7mc70pjok" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      <Clock className="w-4 h-4" data-id="orxjn62jj" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                      <span data-id="g6z95d18x" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">{step.duration}</span>
                    </div>

                    <div data-id="vmbur845y" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center" data-id="iobd5stil" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                        <Target className="w-4 h-4 mr-2" data-id="znynivsj8" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                        What's Involved:
                      </h4>
                      <ul className="space-y-1" data-id="z2asu8ecs" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                        {step.details.map((detail, i) =>
                      <li key={i} className="text-sm text-gray-600 flex items-start" data-id="8mtpscjbs" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0" data-id="8x0hfidhq" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx"></div>
                            {detail}
                          </li>
                      )}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-200" data-id="1g14gmqk8" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                      <p className="text-sm text-gray-700 font-medium mb-1" data-id="50ujrou2s" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">💡 Pro Tip:</p>
                      <p className="text-sm text-gray-600 italic" data-id="s1ugwo3cw" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">{step.tips}</p>
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12" data-id="utej3hbf2" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-3xl mx-auto" data-id="m1qi4kv0t" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="fui8khdoo" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 text-lg mb-6" data-id="o9gj0dw76" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
              The application process typically takes 1-2 weeks from registration to final decision. 
              Don't wait - spots are limited and filled on a first-come, first-served basis!
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600" data-id="sti6ri31x" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
              <div className="flex items-center" data-id="679f7h5x7" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" data-id="84fmmn38e" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                <span data-id="312af6edb" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">No application fee</span>
              </div>
              <div className="flex items-center" data-id="57m01kqzc" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                <Clock className="w-5 h-5 mr-2 text-blue-500" data-id="pglyxtr1w" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                <span data-id="1y0oo72gt" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">Quick process</span>
              </div>
              <div className="flex items-center" data-id="jyotdbpg2" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">
                <Users className="w-5 h-5 mr-2 text-purple-500" data-id="m61scry1a" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx" />
                <span data-id="8xne02fom" data-path="src/components/WhatsSpecial/ParticipationSteps.tsx">Personal mentorship</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ParticipationSteps;