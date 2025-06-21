
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Briefcase,
  FileText,
  Video,
  Users,
  Star,
  BookOpen,
  Trophy,
  Zap,
  Globe,
  Coffee,
  Gift } from
'lucide-react';

const perksData = [
{
  id: 1,
  title: "Certificate of Completion",
  description: "Industry-recognized digital certificate upon successful program completion",
  icon: Award,
  color: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50",
  image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=300&h=200&fit=crop",
  features: [
  "Digital certificate with blockchain verification",
  "LinkedIn integration ready",
  "PDF download for portfolio",
  "Shareable on social media"],

  highlight: "Verified Credential"
},
{
  id: 2,
  title: "Real Project Exposure",
  description: "Work on live client projects and contribute to production applications",
  icon: Briefcase,
  color: "from-green-500 to-emerald-500",
  bgColor: "bg-green-50",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
  features: [
  "Client-facing project experience",
  "Production environment access",
  "Real-world problem solving",
  "Portfolio-worthy deliverables"],

  highlight: "Industry Experience"
},
{
  id: 3,
  title: "Letter of Recommendation",
  description: "Personalized LOR from industry experts and senior mentors",
  icon: FileText,
  color: "from-purple-500 to-pink-500",
  bgColor: "bg-purple-50",
  image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
  features: [
  "Written by senior professionals",
  "Customized to your performance",
  "Suitable for job applications",
  "Graduate school ready"],

  highlight: "Career Booster"
},
{
  id: 4,
  title: "Exclusive Webinars",
  description: "Access to premium webinars by industry leaders and subject matter experts",
  icon: Video,
  color: "from-amber-500 to-orange-500",
  bgColor: "bg-amber-50",
  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop",
  features: [
  "Live sessions with industry experts",
  "Q&A with senior professionals",
  "Recorded sessions library",
  "Networking opportunities"],

  highlight: "Expert Insights"
},
{
  id: 5,
  title: "Mentorship Program",
  description: "One-on-one guidance from experienced professionals in your field",
  icon: Users,
  color: "from-rose-500 to-red-500",
  bgColor: "bg-rose-50",
  image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop",
  features: [
  "Personal mentor assignment",
  "Weekly one-on-one sessions",
  "Career guidance and planning",
  "Technical skill development"],

  highlight: "Personal Growth"
},
{
  id: 6,
  title: "Skill Development Workshops",
  description: "Hands-on workshops covering latest technologies and soft skills",
  icon: BookOpen,
  color: "from-indigo-500 to-blue-500",
  bgColor: "bg-indigo-50",
  image: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=300&h=200&fit=crop",
  features: [
  "Technical skills training",
  "Soft skills development",
  "Interactive learning sessions",
  "Practical assignments"],

  highlight: "Comprehensive Learning"
}];


const additionalBenefits = [
{ icon: Trophy, title: "Performance Awards", description: "Recognition for outstanding contributions" },
{ icon: Globe, title: "Global Community", description: "Connect with interns worldwide" },
{ icon: Coffee, title: "Flexible Schedule", description: "Work-life balance support" },
{ icon: Gift, title: "Welcome Kit", description: "Branded merchandise and resources" },
{ icon: Zap, title: "Fast-track Hiring", description: "Priority consideration for full-time roles" },
{ icon: Star, title: "Alumni Network", description: "Lifetime access to professional network" }];


const PerksSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" data-id="slk0qkpy2" data-path="src/components/WhatsSpecial/PerksSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="qj5r50xv5" data-path="src/components/WhatsSpecial/PerksSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="yfevl61u1" data-path="src/components/WhatsSpecial/PerksSection.tsx">

          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="icswo8ako" data-path="src/components/WhatsSpecial/PerksSection.tsx">
            Perks & Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="2vylfu6y7" data-path="src/components/WhatsSpecial/PerksSection.tsx">
            Discover the comprehensive benefits package that makes our internship program truly exceptional
          </p>
        </motion.div>

        {/* Main Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-id="qla2x0iw6" data-path="src/components/WhatsSpecial/PerksSection.tsx">
          {perksData.map((perk, index) =>
          <motion.div
            key={perk.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} data-id="22b3jrq1m" data-path="src/components/WhatsSpecial/PerksSection.tsx">

              <Card className="group h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer" data-id="95xyodn6g" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                <div className="relative" data-id="6req3ifrj" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                  <img
                  src={perk.image}
                  alt={perk.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-id="adg84lxo3" data-path="src/components/WhatsSpecial/PerksSection.tsx" />

                  <div className="absolute top-4 left-4" data-id="26zncronp" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    <Badge className={`bg-gradient-to-r ${perk.color} text-white border-0`} data-id="zu3jx1tzo" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                      {perk.highlight}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4" data-id="pgoisitjp" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    <div className={`w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg`} data-id="blc6ge301" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                      <perk.icon className="w-6 h-6 text-gray-700" data-id="c1ywhguih" data-path="src/components/WhatsSpecial/PerksSection.tsx" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6" data-id="qb6zacvqf" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                  <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors" data-id="fw1gowkpo" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    {perk.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed" data-id="uhq1dz8sw" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    {perk.description}
                  </p>

                  <div className="space-y-2" data-id="xrjd1ze8e" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2" data-id="src8yq4ef" data-path="src/components/WhatsSpecial/PerksSection.tsx">Key Features:</h4>
                    <ul className="space-y-1" data-id="n05lnv0xs" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                      {perk.features.map((feature, i) =>
                    <li key={i} className="flex items-start text-xs text-gray-600" data-id="nti0sdaov" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0" data-id="s3yk65gus" data-path="src/components/WhatsSpecial/PerksSection.tsx"></div>
                          {feature}
                        </li>
                    )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12" data-id="3x5s12xzs" data-path="src/components/WhatsSpecial/PerksSection.tsx">

          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8" data-id="8zgozsf6n" data-path="src/components/WhatsSpecial/PerksSection.tsx">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="0kcorw3gn" data-path="src/components/WhatsSpecial/PerksSection.tsx">
            {additionalBenefits.map((benefit, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200" data-id="s50jccwp3" data-path="src/components/WhatsSpecial/PerksSection.tsx">

                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0" data-id="of52qp96u" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                  <benefit.icon className="w-6 h-6 text-white" data-id="8rmrn2cvt" data-path="src/components/WhatsSpecial/PerksSection.tsx" />
                </div>
                <div data-id="stcl74c3f" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                  <h4 className="font-semibold text-gray-900 text-sm" data-id="qq5dgladk" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-xs" data-id="1o26oqjyt" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center" data-id="pnlhumu12" data-path="src/components/WhatsSpecial/PerksSection.tsx">

          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto" data-id="3pdj39942" data-path="src/components/WhatsSpecial/PerksSection.tsx">
            <h3 className="text-3xl font-bold text-gray-900 mb-4" data-id="85cewo6gn" data-path="src/components/WhatsSpecial/PerksSection.tsx">
              Total Value: $5,000+
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6" data-id="wdfoi61a6" data-path="src/components/WhatsSpecial/PerksSection.tsx">
              Our comprehensive internship program provides benefits and experiences worth over $5,000, 
              including professional certifications, expert mentorship, real project experience, and exclusive resources - 
              all provided at no cost to deserving candidates.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8" data-id="84anfqmtk" data-path="src/components/WhatsSpecial/PerksSection.tsx">
              <div className="text-center" data-id="9j9yfgar0" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                <div className="text-2xl font-bold text-blue-600" data-id="6pquoooho" data-path="src/components/WhatsSpecial/PerksSection.tsx">$1,200</div>
                <div className="text-sm text-gray-600" data-id="1a8d9at3k" data-path="src/components/WhatsSpecial/PerksSection.tsx">Professional Training</div>
              </div>
              <div className="text-center" data-id="bzkgbqfa2" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                <div className="text-2xl font-bold text-green-600" data-id="ul2iywtf5" data-path="src/components/WhatsSpecial/PerksSection.tsx">$800</div>
                <div className="text-sm text-gray-600" data-id="bov3yov4l" data-path="src/components/WhatsSpecial/PerksSection.tsx">Mentorship Value</div>
              </div>
              <div className="text-center" data-id="chit1la3a" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                <div className="text-2xl font-bold text-purple-600" data-id="kuux9ymg4" data-path="src/components/WhatsSpecial/PerksSection.tsx">$1,500</div>
                <div className="text-sm text-gray-600" data-id="cyqb5a5f7" data-path="src/components/WhatsSpecial/PerksSection.tsx">Project Experience</div>
              </div>
              <div className="text-center" data-id="vy2txpnc1" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                <div className="text-2xl font-bold text-orange-600" data-id="5sl1t7rz7" data-path="src/components/WhatsSpecial/PerksSection.tsx">$1,500</div>
                <div className="text-sm text-gray-600" data-id="uthkdt02h" data-path="src/components/WhatsSpecial/PerksSection.tsx">Resources & Tools</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200" data-id="7pubvtvm8" data-path="src/components/WhatsSpecial/PerksSection.tsx">
              <p className="text-gray-500 text-sm" data-id="hupbz1c7f" data-path="src/components/WhatsSpecial/PerksSection.tsx">
                * Value calculation based on market rates for similar professional services and training programs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default PerksSection;