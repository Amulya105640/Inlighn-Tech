import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare, Headphones } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FloatingObject from '@/components/FloatingObject';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 9368842663", "+1 (555) 123-4567"],
    color: "from-brand-primary to-brand-accent",
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=60&h=60&fit=crop"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@inlightntech.com", "admissions@inlightntech.com"],
    color: "from-brand-secondary to-brand-accent",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=60&h=60&fit=crop"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["WeWork Prestige Central", "Bengaluru, Karnataka 560001"],
    color: "from-brand-accent to-brand-primary",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=60&h=60&fit=crop"
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    color: "from-brand-dark to-brand-secondary",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=60&h=60&fit=crop"
  }];


  const programs = [
  "Full Stack Development",
  "Cybersecurity Specialist",
  "AI & Machine Learning",
  "Mobile App Development",
  "Data Science & Analytics",
  "Cloud Architecture"];


  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" data-id="j0qqz3cq9" data-path="src/components/Contact.tsx">
      {/* Floating objects */}
      <FloatingObject className="top-20 right-10" size="sm" type="cube" data-id="nsis0qrcz" data-path="src/components/Contact.tsx" />
      <FloatingObject className="bottom-40 left-10" size="md" type="sphere" data-id="p6x0zmvup" data-path="src/components/Contact.tsx" />
      <FloatingObject className="top-1/2 right-1/4" size="lg" type="pyramid" data-id="q0pb4s55r" data-path="src/components/Contact.tsx" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" data-id="kz7afb1h6" data-path="src/components/Contact.tsx" />

      <div className="container mx-auto px-6 relative z-10" data-id="kgfasugci" data-path="src/components/Contact.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="ajmmkpiwf" data-path="src/components/Contact.tsx">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 brand-text-gradient glow-text"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="gae0h1h5f" data-path="src/components/Contact.tsx">

            Get In Touch
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="diygo2xkk" data-path="src/components/Contact.tsx">
            Ready to transform your career? Contact us today to learn more about our programs 
            and start your journey in tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" data-id="ryxr8hm8f" data-path="src/components/Contact.tsx">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="fj1rc1f33" data-path="src/components/Contact.tsx">

            <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="u6rw2g6h7" data-path="src/components/Contact.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5" data-id="clq3srhxo" data-path="src/components/Contact.tsx" />
              
              <CardHeader className="relative z-10" data-id="fbke0nk9l" data-path="src/components/Contact.tsx">
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3" data-id="hjivdhemy" data-path="src/components/Contact.tsx">
                  <MessageSquare className="w-6 h-6 text-brand-primary" data-id="46562vo0u" data-path="src/components/Contact.tsx" />
                  Send us a Message
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=40&h=40&fit=crop"
                    alt="Communication"
                    className="w-8 h-8 rounded-full border border-brand-accent/30" data-id="fdfvl8qbv" data-path="src/components/Contact.tsx" />

                </CardTitle>
                <CardDescription className="text-gray-300" data-id="yhmjfa9vt" data-path="src/components/Contact.tsx">
                  Fill out the form below and we'll get back to you soon.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10" data-id="os10qfxuh" data-path="src/components/Contact.tsx">
                <form onSubmit={handleSubmit} className="space-y-6" data-id="5p0r64iii" data-path="src/components/Contact.tsx">
                  <div className="grid md:grid-cols-2 gap-4" data-id="xa3hl0b9p" data-path="src/components/Contact.tsx">
                    <div data-id="sl9sxflq1" data-path="src/components/Contact.tsx">
                      <Label htmlFor="name" className="text-white" data-id="xwvgr59ya" data-path="src/components/Contact.tsx">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-accent"
                        placeholder="Enter your full name"
                        required data-id="rdnechl2t" data-path="src/components/Contact.tsx" />

                    </div>
                    <div data-id="u79fnsqdv" data-path="src/components/Contact.tsx">
                      <Label htmlFor="email" className="text-white" data-id="vbmsg9e9n" data-path="src/components/Contact.tsx">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-accent"
                        placeholder="Enter your email"
                        required data-id="wd10c9nnx" data-path="src/components/Contact.tsx" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4" data-id="jhh83ypux" data-path="src/components/Contact.tsx">
                    <div data-id="inv09d009" data-path="src/components/Contact.tsx">
                      <Label htmlFor="phone" className="text-white" data-id="9ftqk91ci" data-path="src/components/Contact.tsx">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-accent"
                        placeholder="Enter your phone number"
                        required data-id="obbzxhitl" data-path="src/components/Contact.tsx" />

                    </div>
                    <div data-id="reqbrnxfr" data-path="src/components/Contact.tsx">
                      <Label htmlFor="program" className="text-white" data-id="v8tfwyu6e" data-path="src/components/Contact.tsx">Interested Program</Label>
                      <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)} data-id="bebc89vzq" data-path="src/components/Contact.tsx">
                        <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-brand-accent" data-id="vwe54h4sb" data-path="src/components/Contact.tsx">
                          <SelectValue placeholder="Select a program" data-id="fxm27uqv1" data-path="src/components/Contact.tsx" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20" data-id="3x72wbl86" data-path="src/components/Contact.tsx">
                          {programs.map((program) =>
                          <SelectItem key={program} value={program} className="text-white hover:bg-white/10" data-id="vfl47p2rq" data-path="src/components/Contact.tsx">
                              {program}
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div data-id="ip5umq3en" data-path="src/components/Contact.tsx">
                    <Label htmlFor="message" className="text-white" data-id="frstejh9h" data-path="src/components/Contact.tsx">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-accent min-h-[120px]"
                      placeholder="Tell us about your goals and how we can help..."
                      required data-id="3wjqtwaze" data-path="src/components/Contact.tsx" />

                  </div>

                  <Button
                    type="submit"
                    className="w-full brand-gradient hover:brightness-110 text-white font-semibold py-3 transition-all duration-300 btn-glow" data-id="d0ydxf3c7" data-path="src/components/Contact.tsx">
                    <Send className="w-4 h-4 mr-2" data-id="d4g5etzut" data-path="src/components/Contact.tsx" />
                    Send Message
                  </Button>
                </form>
              </CardContent>

              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-secondary/20 rounded-lg blur-xl -z-10" data-id="8plw98z51" data-path="src/components/Contact.tsx" />
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="cskbgrhfj" data-path="src/components/Contact.tsx">

            <div className="space-y-6" data-id="fbppv6944" data-path="src/components/Contact.tsx">
              {contactInfo.map((info, index) =>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group" data-id="zjku5l0qg" data-path="src/components/Contact.tsx">

                  <Card className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-brand-accent/30 transition-all duration-300" data-id="67mn8chjg" data-path="src/components/Contact.tsx">
                    <CardContent className="p-6" data-id="q2lyobet0" data-path="src/components/Contact.tsx">
                      <div className="flex items-start gap-4" data-id="y4mzf0c2s" data-path="src/components/Contact.tsx">
                        <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`} data-id="qm8e9p35b" data-path="src/components/Contact.tsx">
                          <info.icon className="w-6 h-6 text-white" data-id="hd9w810fv" data-path="src/components/Contact.tsx" />
                        </div>
                        <img
                        src={info.image}
                        alt={info.title}
                        className="w-8 h-8 rounded-lg object-cover border border-white/20" data-id="pb8j9tfww" data-path="src/components/Contact.tsx" />

                        <div data-id="cram2uapt" data-path="src/components/Contact.tsx">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-accent transition-colors" data-id="yf9qp7cof" data-path="src/components/Contact.tsx">
                            {info.title}
                          </h3>
                          <div className="space-y-1" data-id="j3hgqyxba" data-path="src/components/Contact.tsx">
                            {info.details.map((detail, idx) =>
                          <p key={idx} className="text-gray-300 text-sm" data-id="q3vn7f63q" data-path="src/components/Contact.tsx">
                                {detail}
                              </p>
                          )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Map placeholder with helpdesk icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group" data-id="pxj6ocidw" data-path="src/components/Contact.tsx">

                <Card className="overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-brand-accent/30 transition-all duration-300" data-id="rc0pisyzp" data-path="src/components/Contact.tsx">
                  <CardContent className="p-0" data-id="pdt8pg2ro" data-path="src/components/Contact.tsx">
                    <div className="h-48 bg-gradient-to-br from-brand-secondary/20 to-brand-primary/20 flex items-center justify-center relative overflow-hidden" data-id="8ofryijzi" data-path="src/components/Contact.tsx">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.02)_75%,rgba(255,255,255,0.02))] bg-[size:20px_20px]" data-id="rp15nfmsw" data-path="src/components/Contact.tsx" />
                      <div className="relative z-10 text-center" data-id="3k08vwnht" data-path="src/components/Contact.tsx">
                        <div className="flex items-center justify-center gap-3 mb-2" data-id="mgze5ykgh" data-path="src/components/Contact.tsx">
                          <MapPin className="w-12 h-12 text-brand-primary" data-id="t171ndf16" data-path="src/components/Contact.tsx" />
                          <Headphones className="w-8 h-8 text-brand-accent" data-id="2s3ldcf5m" data-path="src/components/Contact.tsx" />
                        </div>
                        <p className="text-white font-semibold" data-id="ir0k5pvox" data-path="src/components/Contact.tsx">Our Location & Support</p>
                        <p className="text-gray-300 text-sm" data-id="e2hsqvus2" data-path="src/components/Contact.tsx">Bengaluru, Karnataka</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="tl9u6hkh1" data-path="src/components/Contact.tsx">

          <h3 className="text-3xl font-bold text-white mb-8" data-id="qz84h4k8n" data-path="src/components/Contact.tsx">Frequently Asked Questions</h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" data-id="8hskunjr9" data-path="src/components/Contact.tsx">
            {[
            {
              question: "What are the prerequisites for joining?",
              answer: "Most of our programs are designed for beginners. Basic computer literacy is all you need to get started."
            },
            {
              question: "Do you provide job placement assistance?",
              answer: "Yes! We have a 96% job placement rate with comprehensive career support and industry partnerships."
            },
            {
              question: "Are the programs available online?",
              answer: "We offer both online and hybrid learning options to accommodate different learning preferences."
            },
            {
              question: "What certifications will I receive?",
              answer: "You'll receive industry-recognized certifications that are valued by top tech companies worldwide."
            }].
            map((faq, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group" data-id="s22c3dltm" data-path="src/components/Contact.tsx">

                <Card className="text-left bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-brand-accent/30 transition-all duration-300" data-id="cq6kgpuku" data-path="src/components/Contact.tsx">
                  <CardContent className="p-6" data-id="gy8gdkjoh" data-path="src/components/Contact.tsx">
                    <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-brand-accent transition-colors" data-id="0wp60xbb0" data-path="src/components/Contact.tsx">
                      {faq.question}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed" data-id="ga4r6cedh" data-path="src/components/Contact.tsx">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Background parallax elements */}
      <div className="absolute inset-0 -z-10" data-id="reakfprfz" data-path="src/components/Contact.tsx">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl" data-id="oz6x6b6g2" data-path="src/components/Contact.tsx" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 rounded-full blur-3xl" data-id="wl8jo4xpv" data-path="src/components/Contact.tsx" />
      </div>
    </section>);

};

export default Contact;