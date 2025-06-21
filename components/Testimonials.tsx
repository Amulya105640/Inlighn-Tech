
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import FloatingObject from '@/components/FloatingObject';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Full Stack Developer",
    company: "Google",
    image: "https://images.unsplash.com/photo-1735835138452-60dad7553022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTI3cyUyMGZhY2UlMkMlMjBsaWtlbHklMjBhJTIwcG9ydHJhaXQufGVufDB8fHx8MTc1MDQ4MjgyMHww&ixlib=rb-4.1.0&q=80&w=200$w=400",
    content: "The Full Stack program completely transformed my career. The hands-on projects and expert mentorship prepared me for real-world challenges. I landed my dream job at Google within 2 months of graduation!",
    rating: 5,
    program: "Full Stack Development",
    salary: "$120K",
    beforeRole: "Junior Developer"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Cybersecurity Analyst",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    content: "The cybersecurity program exceeded my expectations. The practical labs and real-world scenarios gave me the confidence to tackle complex security challenges. The instructors are industry veterans who really care about your success.",
    rating: 5,
    program: "Cybersecurity Specialist",
    salary: "$110K",
    beforeRole: "IT Support"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "AI Engineer",
    company: "Tesla",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    content: "Learning AI and ML through this program was incredible. The curriculum is cutting-edge and the projects are relevant to today's industry needs. I'm now working on autonomous vehicle technology at Tesla!",
    rating: 5,
    program: "AI & Machine Learning",
    salary: "$145K",
    beforeRole: "Data Analyst"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Mobile Developer",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    content: "The mobile development program taught me both iOS and Android development. The cross-platform approach with React Native was perfect for my career goals. Now I'm building apps used by millions of users!",
    rating: 5,
    program: "Mobile App Development",
    salary: "$105K",
    beforeRole: "Web Developer"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Data Scientist",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    content: "The data science program provided both theoretical knowledge and practical skills. Working with real datasets and building predictive models prepared me perfectly for my role at Netflix analyzing viewer behavior.",
    rating: 5,
    program: "Data Science & Analytics",
    salary: "$125K",
    beforeRole: "Business Analyst"
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Cloud Architect",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    content: "The cloud architecture program was comprehensive and practical. Learning AWS, Azure, and GCP with hands-on labs was invaluable. I'm now designing scalable solutions for Amazon's enterprise clients.",
    rating: 5,
    program: "Cloud Architecture",
    salary: "$135K",
    beforeRole: "System Admin"
  }];


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden" data-id="jfavmc4le" data-path="src/components/Testimonials.tsx">
      {/* Floating objects */}
      <FloatingObject className="top-20 left-10" size="sm" type="sphere" data-id="wqr9ym9d9" data-path="src/components/Testimonials.tsx" />
      <FloatingObject className="bottom-20 right-10" size="md" type="cube" data-id="c0puyk979" data-path="src/components/Testimonials.tsx" />
      
      {/* Background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-20" data-id="yyfty8t0p" data-path="src/components/Testimonials.tsx">

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-full blur-3xl" data-id="69bv2kwxr" data-path="src/components/Testimonials.tsx" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-500/20 rounded-full blur-3xl" data-id="6kb50kuao" data-path="src/components/Testimonials.tsx" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10" data-id="lydjn05ug" data-path="src/components/Testimonials.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="enttb8yyp" data-path="src/components/Testimonials.tsx">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="wf7srnv8p" data-path="src/components/Testimonials.tsx">

            Success Stories
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="gr6whx2t9" data-path="src/components/Testimonials.tsx">
            Hear from our graduates who have transformed their careers and landed their dream jobs 
            at top tech companies around the world.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="3ngxoi0ez" data-path="src/components/Testimonials.tsx">

          <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 p-8" data-id="i8kobj81l" data-path="src/components/Testimonials.tsx">
            {/* Quote decoration */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-cyan-400/30" data-id="ta46ad11x" data-path="src/components/Testimonials.tsx" />
            
            <div className="relative z-10" data-id="qfpliy0py" data-path="src/components/Testimonials.tsx">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center" data-id="g094y38pf" data-path="src/components/Testimonials.tsx">

                {/* Profile */}
                <div className="flex flex-col md:flex-row items-center gap-6 mb-8" data-id="pz91desv2" data-path="src/components/Testimonials.tsx">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }} data-id="d58ogrh0s" data-path="src/components/Testimonials.tsx">

                    <Avatar className="w-24 h-24 border-4 border-gradient-to-r from-cyan-400 to-purple-600" data-id="13qmny95q" data-path="src/components/Testimonials.tsx">
                      <AvatarImage src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} data-id="40w31oa79" data-path="src/components/Testimonials.tsx" />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-purple-600 text-white text-xl" data-id="lr5mgobws" data-path="src/components/Testimonials.tsx">
                        {testimonials[currentIndex].name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  <div className="text-center md:text-left" data-id="95wplbmu4" data-path="src/components/Testimonials.tsx">
                    <h3 className="text-2xl font-bold text-white mb-2" data-id="p38zse5yx" data-path="src/components/Testimonials.tsx">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-1" data-id="v36bkeqvt" data-path="src/components/Testimonials.tsx">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2" data-id="8s3sq1wjx" data-path="src/components/Testimonials.tsx">
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30" data-id="edh95qlgl" data-path="src/components/Testimonials.tsx">
                        {testimonials[currentIndex].salary}
                      </Badge>
                      <span className="text-gray-400 text-sm" data-id="e65xg97e2" data-path="src/components/Testimonials.tsx">
                        (from {testimonials[currentIndex].beforeRole})
                      </span>
                    </div>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border-cyan-500/30" data-id="xpf32og97" data-path="src/components/Testimonials.tsx">
                      {testimonials[currentIndex].program}
                    </Badge>
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-6" data-id="3dgkgpk2i" data-path="src/components/Testimonials.tsx">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-6" data-id="1nw5qkji4" data-path="src/components/Testimonials.tsx">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }} data-id="6j0mrrdsn" data-path="src/components/Testimonials.tsx">

                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" data-id="9wluqntwb" data-path="src/components/Testimonials.tsx" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 rounded-lg" data-id="va4n1c2iw" data-path="src/components/Testimonials.tsx" />
          </Card>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 pointer-events-none" data-id="fe4q6ivpd" data-path="src/components/Testimonials.tsx">
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="sm"
              className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-3 rounded-full" data-id="2loguz4c2" data-path="src/components/Testimonials.tsx">

              <ChevronLeft className="w-6 h-6" data-id="ufb5kr6fm" data-path="src/components/Testimonials.tsx" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="sm"
              className="pointer-events-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-3 rounded-full" data-id="y68hikcmj" data-path="src/components/Testimonials.tsx">

              <ChevronRight className="w-6 h-6" data-id="hy2d1e569" data-path="src/components/Testimonials.tsx" />
            </Button>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <div className="flex items-center justify-center gap-3 mb-12" data-id="scwlqo5v0" data-path="src/components/Testimonials.tsx">
          {testimonials.map((_, index) =>
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ?
            'bg-gradient-to-r from-cyan-400 to-purple-600 w-8' :
            'bg-white/30 hover:bg-white/50'}`
            }
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }} data-id="mgfxr7x30" data-path="src/components/Testimonials.tsx" />

          )}
        </div>

        {/* Horizontal Scroll Testimonials with Profile Pictures */}
        <motion.div
          className="overflow-x-auto scrollbar-hide"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }} data-id="bew880tfw" data-path="src/components/Testimonials.tsx">

          <div className="flex gap-6 pb-4 min-w-max" data-id="aa9oqlku0" data-path="src/components/Testimonials.tsx">
            {testimonials.map((testimonial, index) =>
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0 w-80"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }} data-id="5ur4wj1py" data-path="src/components/Testimonials.tsx">

                <Card
                className={`h-full bg-white/5 backdrop-blur-md border transition-all duration-300 p-6 cursor-pointer ${
                index === currentIndex ?
                'border-cyan-400/50 bg-cyan-400/10' :
                'border-white/10 hover:border-white/20'}`
                }
                onClick={() => goToSlide(index)} data-id="obzo7ywct" data-path="src/components/Testimonials.tsx">

                  <div className="flex items-center gap-4 mb-4" data-id="3dv01t8zl" data-path="src/components/Testimonials.tsx">
                    <Avatar className="w-12 h-12" data-id="oj21lzeek" data-path="src/components/Testimonials.tsx">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-id="xarn56haj" data-path="src/components/Testimonials.tsx" />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-purple-600 text-white" data-id="ekdf4b1op" data-path="src/components/Testimonials.tsx">
                        {testimonial.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div data-id="dq00h7880" data-path="src/components/Testimonials.tsx">
                      <h4 className="font-semibold text-white" data-id="url6rkwek" data-path="src/components/Testimonials.tsx">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400" data-id="u64hayzza" data-path="src/components/Testimonials.tsx">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm line-clamp-4 mb-4" data-id="yumyqiecy" data-path="src/components/Testimonials.tsx">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center justify-between" data-id="k4kb1vfie" data-path="src/components/Testimonials.tsx">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs" data-id="gwb4zf0zu" data-path="src/components/Testimonials.tsx">
                      {testimonial.salary}
                    </Badge>
                    <div className="flex items-center gap-1" data-id="ee1jy9sio" data-path="src/components/Testimonials.tsx">
                      {[...Array(testimonial.rating)].map((_, i) =>
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" data-id="qfxz0czxd" data-path="src/components/Testimonials.tsx" />
                    )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }} data-id="hamnful6z" data-path="src/components/Testimonials.tsx">

          <h3 className="text-2xl font-bold text-white mb-4" data-id="84g1obl3h" data-path="src/components/Testimonials.tsx">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto" data-id="x5jdk6qna" data-path="src/components/Testimonials.tsx">
            Join thousands of students who have transformed their careers with our industry-leading programs.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 text-lg px-8 py-3" data-id="83iwiiui5" data-path="src/components/Testimonials.tsx">
            Start Your Journey Today
          </Button>
        </motion.div>
      </div>
    </section>);

};

export default Testimonials;