import { motion } from 'motion/react';
import { Award, Shield, Star, Download, Eye, CheckCircle, Users, Trophy, Calendar } from 'lucide-react';

const CertificatePreview = () => {
  const certificates = [
  {
    title: "Certificate of Completion",
    recipientName: "John Doe",
    program: "Full Stack Development Internship",
    date: "December 2024",
    gradient: "from-blue-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    skills: ["React.js", "Node.js", "MongoDB", "AWS"],
    hours: "480 hours",
    grade: "A+"
  },
  {
    title: "Experience Certificate",
    recipientName: "Jane Smith",
    program: "Data Science & AI Internship",
    date: "November 2024",
    gradient: "from-teal-600 to-blue-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
    hours: "520 hours",
    grade: "A"
  },
  {
    title: "Professional Certificate",
    recipientName: "Mike Johnson",
    program: "DevOps Engineering Internship",
    date: "October 2024",
    gradient: "from-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS DevOps"],
    hours: "400 hours",
    grade: "A+"
  },
  {
    title: "Excellence Award",
    recipientName: "Sarah Wilson",
    program: "Digital Marketing Internship",
    date: "September 2024",
    gradient: "from-pink-600 to-rose-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    skills: ["SEO", "Social Media Marketing", "Google Ads", "Analytics"],
    hours: "320 hours",
    grade: "A+"
  }];


  const certificateFeatures = [
  {
    icon: Shield,
    title: "ISO Certified",
    description: "All certificates are ISO 9001:2015 certified and globally recognized",
    color: "text-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Blockchain Verified",
    description: "Each certificate is secured with blockchain technology for authenticity",
    color: "text-green-600"
  },
  {
    icon: Trophy,
    title: "Industry Recognition",
    description: "Recognized by top tech companies and HR professionals worldwide",
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "Peer Validated",
    description: "Validated by industry experts and experienced professionals",
    color: "text-orange-600"
  }];


  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" data-id="1f4ay3mk6" data-path="src/components/CertificatePreview.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="3lp7le05f" data-path="src/components/CertificatePreview.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="ce9kz8u92" data-path="src/components/CertificatePreview.tsx">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="zec6hcgvw" data-path="src/components/CertificatePreview.tsx">
            Professional Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="1ygs4zq3h" data-path="src/components/CertificatePreview.tsx">
            Industry-recognized certificates to boost your professional portfolio and validate your expertise
          </p>
        </motion.div>

        {/* Certificate Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20" data-id="70na993s5" data-path="src/components/CertificatePreview.tsx">
          {certificates.map((cert, index) =>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group" data-id="mdt4sv125" data-path="src/components/CertificatePreview.tsx">

              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-100 hover:shadow-3xl transition-all duration-500 hover:scale-105" data-id="m7pw6138w" data-path="src/components/CertificatePreview.tsx">
                {/* Certificate Header */}
                <div className={`bg-gradient-to-r ${cert.gradient} p-6 text-white relative overflow-hidden`} data-id="t4xvosqqx" data-path="src/components/CertificatePreview.tsx">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" data-id="n1emcrxbh" data-path="src/components/CertificatePreview.tsx"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" data-id="8my0s42ca" data-path="src/components/CertificatePreview.tsx"></div>
                  
                  <div className="relative z-10" data-id="xyqzm4umd" data-path="src/components/CertificatePreview.tsx">
                    <div className="flex items-center justify-between mb-4" data-id="xow5qxtw3" data-path="src/components/CertificatePreview.tsx">
                      <div className="flex items-center space-x-2" data-id="c28m767b8" data-path="src/components/CertificatePreview.tsx">
                        <Award className="w-8 h-8" data-id="hpsm8lokk" data-path="src/components/CertificatePreview.tsx" />
                        <span className="text-xl font-bold" data-id="2v20344ib" data-path="src/components/CertificatePreview.tsx">INLIGHN TECH</span>
                      </div>
                      <div className="flex items-center space-x-1" data-id="s0h6uu5ss" data-path="src/components/CertificatePreview.tsx">
                        <Shield className="w-6 h-6" data-id="0wgk7plcd" data-path="src/components/CertificatePreview.tsx" />
                        <span className="text-sm font-semibold" data-id="mvqvkl3cn" data-path="src/components/CertificatePreview.tsx">ISO CERTIFIED</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2" data-id="ln10rxdcr" data-path="src/components/CertificatePreview.tsx">{cert.title}</h3>
                    <div className="flex items-center space-x-2" data-id="3bc62ovev" data-path="src/components/CertificatePreview.tsx">
                      <Star className="w-5 h-5" data-id="5stdd2603" data-path="src/components/CertificatePreview.tsx" />
                      <span className="text-sm opacity-90" data-id="w94d0k86h" data-path="src/components/CertificatePreview.tsx">Industry Standard Recognition</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Body */}
                <div className="p-8" data-id="hfnbzsyit" data-path="src/components/CertificatePreview.tsx">
                  <div className="flex flex-col lg:flex-row gap-6" data-id="5op8yky22" data-path="src/components/CertificatePreview.tsx">
                    {/* Certificate Text */}
                    <div className="flex-1" data-id="cohk9ogwc" data-path="src/components/CertificatePreview.tsx">
                      <div className="text-center mb-6" data-id="muvjdu8ug" data-path="src/components/CertificatePreview.tsx">
                        <p className="text-gray-600 text-lg mb-4" data-id="mcu7jax4z" data-path="src/components/CertificatePreview.tsx">This is to certify that</p>
                        <h4 className="text-3xl font-bold text-gray-800 mb-4" data-id="syr67o1fi" data-path="src/components/CertificatePreview.tsx">{cert.recipientName}</h4>
                        <p className="text-gray-600 text-lg mb-2" data-id="vf2ltw4c6" data-path="src/components/CertificatePreview.tsx">has successfully completed the</p>
                        <p className="text-xl font-semibold text-purple-600 mb-4" data-id="nwc8q9yi6" data-path="src/components/CertificatePreview.tsx">{cert.program}</p>
                        
                        {/* Additional Details */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-4" data-id="3725v0qm1" data-path="src/components/CertificatePreview.tsx">
                          <div className="grid grid-cols-2 gap-4 text-sm" data-id="h2klhq48g" data-path="src/components/CertificatePreview.tsx">
                            <div data-id="cc5ooka92" data-path="src/components/CertificatePreview.tsx">
                              <span className="text-gray-500" data-id="bxj6k04uh" data-path="src/components/CertificatePreview.tsx">Duration:</span>
                              <span className="ml-2 font-semibold text-gray-700" data-id="l85fhx7tm" data-path="src/components/CertificatePreview.tsx">{cert.hours}</span>
                            </div>
                            <div data-id="dbm0dtlai" data-path="src/components/CertificatePreview.tsx">
                              <span className="text-gray-500" data-id="957jq06vl" data-path="src/components/CertificatePreview.tsx">Grade:</span>
                              <span className="ml-2 font-semibold text-green-600" data-id="ae6at5c3p" data-path="src/components/CertificatePreview.tsx">{cert.grade}</span>
                            </div>
                          </div>
                        </div>

                        {/* Skills Badges */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4" data-id="dgti54tfq" data-path="src/components/CertificatePreview.tsx">
                          {cert.skills.map((skill, skillIndex) =>
                        <span
                          key={skillIndex}
                          className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium" data-id="30qnjusdj" data-path="src/components/CertificatePreview.tsx">
                              {skill}
                            </span>
                        )}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Image Preview */}
                    <div className="lg:w-1/3" data-id="pkpsfq38p" data-path="src/components/CertificatePreview.tsx">
                      <div className="relative" data-id="3jose2rkv" data-path="src/components/CertificatePreview.tsx">
                        <img
                        src={cert.image}
                        alt={`${cert.program} preview`}
                        className="w-full h-48 object-cover rounded-xl shadow-lg" data-id="o73mihcrn" data-path="src/components/CertificatePreview.tsx" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" data-id="8pzq2w0jy" data-path="src/components/CertificatePreview.tsx"></div>
                        <div className="absolute bottom-4 left-4 right-4" data-id="8gdk92po6" data-path="src/components/CertificatePreview.tsx">
                          <div className="flex justify-between items-center" data-id="gjjelyed0" data-path="src/components/CertificatePreview.tsx">
                            <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 hover:bg-white/30 transition-colors" data-id="07qykzv3q" data-path="src/components/CertificatePreview.tsx">
                              <Eye className="w-4 h-4" data-id="a5agehcz9" data-path="src/components/CertificatePreview.tsx" />
                              <span data-id="flea1fy1x" data-path="src/components/CertificatePreview.tsx">Preview</span>
                            </button>
                            <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1 hover:bg-white/30 transition-colors" data-id="b1n8qbvyn" data-path="src/components/CertificatePreview.tsx">
                              <Download className="w-4 h-4" data-id="2hpdyosy1" data-path="src/components/CertificatePreview.tsx" />
                              <span data-id="ixjy7tc7j" data-path="src/components/CertificatePreview.tsx">Download</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6" data-id="4ettvchl9" data-path="src/components/CertificatePreview.tsx">
                    <div className="flex justify-between items-center" data-id="4ixii7px9" data-path="src/components/CertificatePreview.tsx">
                      <div className="text-center" data-id="od6mioosa" data-path="src/components/CertificatePreview.tsx">
                        <div className="w-24 h-1 bg-gray-300 mb-2" data-id="j4d3eq6fn" data-path="src/components/CertificatePreview.tsx"></div>
                        <p className="text-sm text-gray-500" data-id="1fetdi9jg" data-path="src/components/CertificatePreview.tsx">Director Signature</p>
                      </div>
                      <div className="text-center" data-id="wes17465s" data-path="src/components/CertificatePreview.tsx">
                        <div className="flex items-center space-x-2 mb-2" data-id="b3huhbvu5" data-path="src/components/CertificatePreview.tsx">
                          <Calendar className="w-4 h-4 text-gray-500" data-id="8507t49to" data-path="src/components/CertificatePreview.tsx" />
                          <p className="text-lg font-semibold text-gray-700" data-id="j5glsyn65" data-path="src/components/CertificatePreview.tsx">{cert.date}</p>
                        </div>
                        <p className="text-sm text-gray-500" data-id="oeqp3qaju" data-path="src/components/CertificatePreview.tsx">Date of Completion</p>
                      </div>
                      <div className="text-center" data-id="qptemtotx" data-path="src/components/CertificatePreview.tsx">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-2" data-id="0fyd4wpkv" data-path="src/components/CertificatePreview.tsx">
                          <Shield className="w-8 h-8 text-white" data-id="ujs3gm2ut" data-path="src/components/CertificatePreview.tsx" />
                        </div>
                        <p className="text-xs text-gray-500" data-id="t8w0nlf84" data-path="src/components/CertificatePreview.tsx">Official Seal</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 via-teal-500 to-purple-500" data-id="ewcw3xlme" data-path="src/components/CertificatePreview.tsx"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center" data-id="e5aym7ff1" data-path="src/components/CertificatePreview.tsx">
                <Star className="w-4 h-4 text-white" data-id="zrjz8uezz" data-path="src/components/CertificatePreview.tsx" />
              </div>
            </motion.div>
          )}
        </div>

        {/* Certificate Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16" data-id="g9v85t6ym" data-path="src/components/CertificatePreview.tsx">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12" data-id="mv6t8dr0z" data-path="src/components/CertificatePreview.tsx">Certificate Features & Validation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-id="6fwrdzyeu" data-path="src/components/CertificatePreview.tsx">
            {certificateFeatures.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" data-id="17u26iqrn" data-path="src/components/CertificatePreview.tsx">
                  <div className={`w-16 h-16 ${feature.color} bg-current/10 rounded-2xl flex items-center justify-center mx-auto mb-4`} data-id="rdeps48yn" data-path="src/components/CertificatePreview.tsx">
                    <FeatureIcon className={`w-8 h-8 ${feature.color}`} data-id="ov8fa9awh" data-path="src/components/CertificatePreview.tsx" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2" data-id="b33ttyvnv" data-path="src/components/CertificatePreview.tsx">{feature.title}</h4>
                  <p className="text-gray-600 text-sm" data-id="sqblxrfr4" data-path="src/components/CertificatePreview.tsx">{feature.description}</p>
                </motion.div>);

            })}
          </div>
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center" data-id="ueuhftrfy" data-path="src/components/CertificatePreview.tsx">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto" data-id="j48sji49k" data-path="src/components/CertificatePreview.tsx">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8" data-id="gbqyyp40h" data-path="src/components/CertificatePreview.tsx">
              <div className="flex-1" data-id="puvry88jm" data-path="src/components/CertificatePreview.tsx">
                <div className="flex items-center justify-center md:justify-start space-x-4 mb-4" data-id="2xtnnj899" data-path="src/components/CertificatePreview.tsx">
                  <Shield className="w-12 h-12 text-purple-600" data-id="6l0vdj2l4" data-path="src/components/CertificatePreview.tsx" />
                  <div className="text-left" data-id="uf72nn21e" data-path="src/components/CertificatePreview.tsx">
                    <h3 className="text-xl font-bold text-gray-800" data-id="8euygjcb7" data-path="src/components/CertificatePreview.tsx">Global Recognition</h3>
                    <p className="text-purple-600 text-sm" data-id="qgjs1k3e1" data-path="src/components/CertificatePreview.tsx">Trusted by 500+ Companies</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-left" data-id="ajtfr0m58" data-path="src/components/CertificatePreview.tsx">
                  All our certificates are ISO certified and recognized by leading industry professionals, 
                  giving you the credibility you need to advance your career and stand out in the job market.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4" data-id="qa3t7kxmt" data-path="src/components/CertificatePreview.tsx">
                <div className="bg-white rounded-xl p-4 shadow-md" data-id="04xu7j7yj" data-path="src/components/CertificatePreview.tsx">
                  <div className="text-2xl font-bold text-purple-600" data-id="vguw0de7l" data-path="src/components/CertificatePreview.tsx">5000+</div>
                  <div className="text-xs text-gray-600" data-id="vwjybm8p1" data-path="src/components/CertificatePreview.tsx">Certificates Issued</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md" data-id="8423ba09n" data-path="src/components/CertificatePreview.tsx">
                  <div className="text-2xl font-bold text-blue-600" data-id="fmy27r0bg" data-path="src/components/CertificatePreview.tsx">95%</div>
                  <div className="text-xs text-gray-600" data-id="ftnw4frgl" data-path="src/components/CertificatePreview.tsx">HR Recognition Rate</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CertificatePreview;