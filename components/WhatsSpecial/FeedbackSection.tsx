
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const feedbackData = [
{
  id: 1,
  name: "Sarah Johnson",
  role: "Software Developer",
  company: "TechCorp Inc.",
  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  rating: 5,
  feedback: "The internship program exceeded my expectations. I gained real-world experience and valuable mentorship that helped shape my career.",
  date: "2024-01-15"
},
{
  id: 2,
  name: "Michael Chen",
  role: "Data Scientist",
  company: "DataVision Ltd.",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  rating: 5,
  feedback: "Outstanding program with hands-on projects. The team was supportive and I learned industry best practices that I still use today.",
  date: "2024-02-03"
},
{
  id: 3,
  name: "Emily Rodriguez",
  role: "UX Designer",
  company: "DesignHub",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  rating: 5,
  feedback: "The internship provided me with the confidence and skills needed to transition into the tech industry. Highly recommend!",
  date: "2024-01-28"
},
{
  id: 4,
  name: "David Park",
  role: "Full Stack Developer",
  company: "InnovateTech",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  rating: 4,
  feedback: "Great learning environment with challenging projects. The mentorship program was particularly valuable for my professional growth.",
  date: "2024-02-10"
}];


const FeedbackSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100" data-id="sul3wzd0r" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="ohtb3qusy" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="6ncsqd4q9" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">

          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="de7amfek0" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
            What Our Interns Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="6inhgz5oa" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
            Hear from our successful interns about their transformative experiences and career growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="3dhpguvzf" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
          {feedbackData.map((feedback, index) =>
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} data-id="km60dovmw" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">

              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300" data-id="wronnw1xk" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                <CardContent className="p-6" data-id="st7zm23p9" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                  <div className="flex items-start space-x-4 mb-4" data-id="fqy2nn5t0" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                    <Avatar className="w-16 h-16 ring-4 ring-blue-100" data-id="j7b0c2nia" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                      <AvatarImage src={feedback.image} alt={feedback.name} data-id="g3y0u7ume" data-path="src/components/WhatsSpecial/FeedbackSection.tsx" />
                      <AvatarFallback className="bg-blue-500 text-white text-lg" data-id="pg71agloc" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                        {feedback.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1" data-id="c4vbapur0" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                      <div className="flex items-center justify-between mb-2" data-id="ai7ydyc54" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                        <h3 className="font-semibold text-lg text-gray-900" data-id="s6scpk0fa" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                          {feedback.name}
                        </h3>
                        <div className="flex items-center space-x-1" data-id="ikhzrqjgv" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                          {[...Array(feedback.rating)].map((_, i) =>
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" data-id="z6s9frrnd" data-path="src/components/WhatsSpecial/FeedbackSection.tsx" />
                        )}
                        </div>
                      </div>
                      <div className="space-y-1" data-id="vu5eokfv5" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                        <Badge variant="secondary" className="text-xs" data-id="5985ugbm9" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                          {feedback.role}
                        </Badge>
                        <p className="text-sm text-gray-600" data-id="usc2ib0mf" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">{feedback.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative" data-id="amwcfmwws" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" data-id="foo6715bf" data-path="src/components/WhatsSpecial/FeedbackSection.tsx" />
                    <blockquote className="text-gray-700 italic leading-relaxed pl-6" data-id="pmq5hmusb" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                      "{feedback.feedback}"
                    </blockquote>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100" data-id="17ijkjrf2" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                    <p className="text-xs text-gray-500" data-id="heaktq59a" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
                      {new Date(feedback.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    </p>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12" data-id="mj4ht4ndg" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto" data-id="djfqnb7gp" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="0dce9ad7s" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600" data-id="1pgyc9548" data-path="src/components/WhatsSpecial/FeedbackSection.tsx">
              Be part of our growing community of successful interns who have transformed their careers through our comprehensive program.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FeedbackSection;