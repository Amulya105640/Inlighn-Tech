import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  DollarSign,
  Award,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  BookOpen,
  Target,
  Gift,
  Shield } from
'lucide-react';
import { Program } from '@/data/programs';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProgramDetailProps {
  program: Program;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ program }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleEnrollClick = () => {
    toast({
      title: "Enrollment Started! 🎉",
      description: `You're about to enroll in ${program.title}. Our team will contact you within 24 hours.`
    });
  };

  const IconComponent = program.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black" data-id="g85apldit" data-path="src/components/ProgramDetail.tsx">
      {/* Hero Banner */}
      <motion.div
        className="relative h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }} data-id="wl6hgbxsk" data-path="src/components/ProgramDetail.tsx">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${program.bannerImage})` }} data-id="pte1cct5x" data-path="src/components/ProgramDetail.tsx" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" data-id="ucc7eqbn7" data-path="src/components/ProgramDetail.tsx" />
        
        {/* Program Logo */}
        <div className="absolute top-6 left-6 flex items-center gap-4" data-id="e8jwm876x" data-path="src/components/ProgramDetail.tsx">
          <Button
            variant="ghost"
            onClick={() => navigate('/programs')}
            className="text-white hover:bg-white/10" data-id="x8idg3h2v" data-path="src/components/ProgramDetail.tsx">

            ← Back to Programs
          </Button>
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20" data-id="y291qqnsl" data-path="src/components/ProgramDetail.tsx">
            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/24343/c4f507a9-75c9-4a7d-a8c9-7654ef5a7090.png"
              alt="InLighn Logo"
              className="w-full h-full object-cover" data-id="1a5nor4np" data-path="src/components/ProgramDetail.tsx" />

          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center" data-id="ilreb3iwt" data-path="src/components/ProgramDetail.tsx">
          <div className="container mx-auto px-6" data-id="9qf9zcfym" data-path="src/components/ProgramDetail.tsx">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }} data-id="6ok1ey1dj" data-path="src/components/ProgramDetail.tsx">

              <div className="flex items-center gap-4 mb-6" data-id="20le6wseq" data-path="src/components/ProgramDetail.tsx">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${program.gradient}`} data-id="x67eynrp0" data-path="src/components/ProgramDetail.tsx">
                  <IconComponent className="w-12 h-12 text-white" data-id="z5g35tlgk" data-path="src/components/ProgramDetail.tsx" />
                </div>
                <div data-id="700pt98e5" data-path="src/components/ProgramDetail.tsx">
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white" data-id="7o7bxm2ra" data-path="src/components/ProgramDetail.tsx">
                    {program.level}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2" data-id="o4l5rvpap" data-path="src/components/ProgramDetail.tsx">
                    {program.title}
                  </h1>
                </div>
              </div>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed" data-id="hnmqanic4" data-path="src/components/ProgramDetail.tsx">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8" data-id="tilju4jaa" data-path="src/components/ProgramDetail.tsx">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2" data-id="nf4l151lw" data-path="src/components/ProgramDetail.tsx">
                  <Clock className="w-5 h-5 text-brand-accent" data-id="xo3dgxvck" data-path="src/components/ProgramDetail.tsx" />
                  <span className="text-white font-medium" data-id="7zi4xves4" data-path="src/components/ProgramDetail.tsx">{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2" data-id="mem4wpxfc" data-path="src/components/ProgramDetail.tsx">
                  <DollarSign className="w-5 h-5 text-brand-primary" data-id="wulv40qvc" data-path="src/components/ProgramDetail.tsx" />
                  <span className="text-white font-medium" data-id="qfb4ikcox" data-path="src/components/ProgramDetail.tsx">{program.fee}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2" data-id="kuh4qvwca" data-path="src/components/ProgramDetail.tsx">
                  <Users className="w-5 h-5 text-brand-secondary" data-id="k16kargcd" data-path="src/components/ProgramDetail.tsx" />
                  <span className="text-white font-medium" data-id="pdnd8qu0h" data-path="src/components/ProgramDetail.tsx">Expert Mentorship</span>
                </div>
              </div>

              <Button
                onClick={handleEnrollClick}
                className="brand-gradient border-0 text-white hover:brightness-110 px-8 py-6 text-lg font-semibold" data-id="63euxoavn" data-path="src/components/ProgramDetail.tsx">

                Enroll Now <ArrowRight className="w-5 h-5 ml-2" data-id="oqu2libnr" data-path="src/components/ProgramDetail.tsx" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-16" data-id="iz7pvixr8" data-path="src/components/ProgramDetail.tsx">
        <div className="grid lg:grid-cols-3 gap-12" data-id="6sdu8rhco" data-path="src/components/ProgramDetail.tsx">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12" data-id="5ucbsd4qw" data-path="src/components/ProgramDetail.tsx">
            {/* What You'll Learn */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }} data-id="yl1rwpbaa" data-path="src/components/ProgramDetail.tsx">

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="q4d6n0p9b" data-path="src/components/ProgramDetail.tsx">
                <CardHeader data-id="18qcn1aj4" data-path="src/components/ProgramDetail.tsx">
                  <div className="flex items-center gap-3" data-id="fche5hfos" data-path="src/components/ProgramDetail.tsx">
                    <BookOpen className="w-6 h-6 text-brand-accent" data-id="cliv6cb4k" data-path="src/components/ProgramDetail.tsx" />
                    <CardTitle className="text-2xl text-white" data-id="4uzfzwdq9" data-path="src/components/ProgramDetail.tsx">What You'll Learn</CardTitle>
                  </div>
                </CardHeader>
                <CardContent data-id="voi6mnisk" data-path="src/components/ProgramDetail.tsx">
                  <div className="grid md:grid-cols-2 gap-4" data-id="mxo2z98yn" data-path="src/components/ProgramDetail.tsx">
                    {program.modules.map((module, index) =>
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }} data-id="gbs7f78oa" data-path="src/components/ProgramDetail.tsx">

                        <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" data-id="jxgelgr7f" data-path="src/components/ProgramDetail.tsx" />
                        <span className="text-gray-200" data-id="p9uleszxj" data-path="src/components/ProgramDetail.tsx">{module}</span>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Key Projects */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} data-id="nqeaewl12" data-path="src/components/ProgramDetail.tsx">

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="0a7dqj0u2" data-path="src/components/ProgramDetail.tsx">
                <CardHeader data-id="n1vrvbpqi" data-path="src/components/ProgramDetail.tsx">
                  <div className="flex items-center gap-3" data-id="qutkurzp6" data-path="src/components/ProgramDetail.tsx">
                    <Target className="w-6 h-6 text-brand-secondary" data-id="96fl9x3ug" data-path="src/components/ProgramDetail.tsx" />
                    <CardTitle className="text-2xl text-white" data-id="vvphuz2ck" data-path="src/components/ProgramDetail.tsx">Key Projects</CardTitle>
                  </div>
                </CardHeader>
                <CardContent data-id="7thelhn1d" data-path="src/components/ProgramDetail.tsx">
                  <div className="grid gap-4" data-id="zm5etddgm" data-path="src/components/ProgramDetail.tsx">
                    {program.projects.map((project, index) =>
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }} data-id="p42m7apae" data-path="src/components/ProgramDetail.tsx">

                        <div className="flex items-center gap-3" data-id="b8bilta9g" data-path="src/components/ProgramDetail.tsx">
                          <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center text-white font-bold text-sm" data-id="1ppezhy8o" data-path="src/components/ProgramDetail.tsx">
                            {index + 1}
                          </div>
                          <h4 className="text-white font-semibold" data-id="titoh3cyx" data-path="src/components/ProgramDetail.tsx">{project}</h4>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Technologies */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }} data-id="2u1sxdqkl" data-path="src/components/ProgramDetail.tsx">

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="8bn0zo97x" data-path="src/components/ProgramDetail.tsx">
                <CardHeader data-id="1gvuqdajz" data-path="src/components/ProgramDetail.tsx">
                  <CardTitle className="text-2xl text-white" data-id="acgqxqutj" data-path="src/components/ProgramDetail.tsx">Technologies You'll Master</CardTitle>
                </CardHeader>
                <CardContent data-id="err2b60vk" data-path="src/components/ProgramDetail.tsx">
                  <div className="flex flex-wrap gap-3" data-id="h6zanhcwk" data-path="src/components/ProgramDetail.tsx">
                    {program.technologies.map((tech, index) =>
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }} data-id="qzyc9mqia" data-path="src/components/ProgramDetail.tsx">

                        <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-brand-accent/30 px-4 py-2 text-sm font-medium hover:bg-white/30 transition-colors" data-id="6906vnklj" data-path="src/components/ProgramDetail.tsx">

                          {tech}
                        </Badge>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8" data-id="5qapwbbwx" data-path="src/components/ProgramDetail.tsx">
            {/* Program Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }} data-id="fyru95bi1" data-path="src/components/ProgramDetail.tsx">

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="2i0effcrm" data-path="src/components/ProgramDetail.tsx">
                <CardHeader data-id="cntpql2ai" data-path="src/components/ProgramDetail.tsx">
                  <div className="flex items-center gap-3" data-id="kno5ex4bw" data-path="src/components/ProgramDetail.tsx">
                    <Gift className="w-6 h-6 text-brand-accent" data-id="1astczs1n" data-path="src/components/ProgramDetail.tsx" />
                    <CardTitle className="text-xl text-white" data-id="g6yy4kjea" data-path="src/components/ProgramDetail.tsx">What You Get</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4" data-id="6366fl2o3" data-path="src/components/ProgramDetail.tsx">
                  {program.benefits.certification &&
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5" data-id="7xea8x3d7" data-path="src/components/ProgramDetail.tsx">
                      <Award className="w-5 h-5 text-brand-primary" data-id="oovhu9tpk" data-path="src/components/ProgramDetail.tsx" />
                      <span className="text-gray-200" data-id="bf41afgd5" data-path="src/components/ProgramDetail.tsx">Industry Certification</span>
                    </div>
                  }
                  {program.benefits.internship &&
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5" data-id="n5evp00dc" data-path="src/components/ProgramDetail.tsx">
                      <Users className="w-5 h-5 text-brand-secondary" data-id="qsav7fsqz" data-path="src/components/ProgramDetail.tsx" />
                      <span className="text-gray-200" data-id="uwdiqpo99" data-path="src/components/ProgramDetail.tsx">Internship Opportunities</span>
                    </div>
                  }
                  {program.benefits.placement &&
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5" data-id="upsi47ksj" data-path="src/components/ProgramDetail.tsx">
                      <Target className="w-5 h-5 text-brand-accent" data-id="7rjtvbwns" data-path="src/components/ProgramDetail.tsx" />
                      <span className="text-gray-200" data-id="874t68isn" data-path="src/components/ProgramDetail.tsx">Placement Support</span>
                    </div>
                  }
                  {program.benefits.portfolio &&
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5" data-id="wpcky0g33" data-path="src/components/ProgramDetail.tsx">
                      <BookOpen className="w-5 h-5 text-brand-primary" data-id="d5db1slix" data-path="src/components/ProgramDetail.tsx" />
                      <span className="text-gray-200" data-id="h6barodly" data-path="src/components/ProgramDetail.tsx">Portfolio Development</span>
                    </div>
                  }
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificate Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} data-id="u5b1m1zcr" data-path="src/components/ProgramDetail.tsx">

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="wiwxf1j8o" data-path="src/components/ProgramDetail.tsx">
                <CardHeader data-id="wazxcpr7q" data-path="src/components/ProgramDetail.tsx">
                  <div className="flex items-center gap-3" data-id="ecdhohh9j" data-path="src/components/ProgramDetail.tsx">
                    <Award className="w-6 h-6 text-brand-primary" data-id="2xxdjwgp3" data-path="src/components/ProgramDetail.tsx" />
                    <CardTitle className="text-xl text-white" data-id="xh2975dqg" data-path="src/components/ProgramDetail.tsx">Your Certificate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent data-id="bmuyzp2gj" data-path="src/components/ProgramDetail.tsx">
                  <div className="relative group cursor-pointer" data-id="odfue5hkm" data-path="src/components/ProgramDetail.tsx">
                    <img
                      src={program.certificateImage}
                      alt="Sample Certificate"
                      className="w-full rounded-lg border border-white/20 group-hover:scale-105 transition-transform duration-300" data-id="n5x58j2k4" data-path="src/components/ProgramDetail.tsx" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-id="zy33lf248" data-path="src/components/ProgramDetail.tsx" />
                  </div>
                  <p className="text-gray-300 text-sm mt-3" data-id="d0p7inxz4" data-path="src/components/ProgramDetail.tsx">
                    Receive an industry-recognized certificate upon successful completion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }} data-id="0qnnambtp" data-path="src/components/ProgramDetail.tsx">

              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="vow1m5x5b" data-path="src/components/ProgramDetail.tsx">
                <CardHeader data-id="vn0ojg0k6" data-path="src/components/ProgramDetail.tsx">
                  <div className="flex items-center gap-3" data-id="dxi14v6a3" data-path="src/components/ProgramDetail.tsx">
                    <Shield className="w-6 h-6 text-brand-secondary" data-id="lzrekboe7" data-path="src/components/ProgramDetail.tsx" />
                    <CardTitle className="text-xl text-white" data-id="5iwiwtkyl" data-path="src/components/ProgramDetail.tsx">Eligibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent data-id="efhix6pdv" data-path="src/components/ProgramDetail.tsx">
                  <div className="space-y-3" data-id="3o11nud0n" data-path="src/components/ProgramDetail.tsx">
                    {program.eligibility.map((requirement, index) =>
                    <div key={index} className="flex items-start gap-3" data-id="4bfyoxwv7" data-path="src/components/ProgramDetail.tsx">
                        <CheckCircle className="w-4 h-4 text-brand-accent mt-1 flex-shrink-0" data-id="bo8eqhnaf" data-path="src/components/ProgramDetail.tsx" />
                        <span className="text-gray-200 text-sm" data-id="affdktp20" data-path="src/components/ProgramDetail.tsx">{requirement}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }} data-id="wpbap9jtq" data-path="src/components/ProgramDetail.tsx">

              <Button
                onClick={handleEnrollClick}
                className="w-full brand-gradient border-0 text-white hover:brightness-110 py-6 text-lg font-semibold" data-id="f6c6r7k81" data-path="src/components/ProgramDetail.tsx">

                Enroll Now - {program.fee}
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
                onClick={() => navigate('/contact')} data-id="5v6xn12ag" data-path="src/components/ProgramDetail.tsx">

                Contact Admissions
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Career Outcomes */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }} data-id="1aauc6zla" data-path="src/components/ProgramDetail.tsx">

          <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="qx7cu6lhx" data-path="src/components/ProgramDetail.tsx">
            <CardHeader data-id="pkyjlfzha" data-path="src/components/ProgramDetail.tsx">
              <div className="text-center" data-id="yi34e5n56" data-path="src/components/ProgramDetail.tsx">
                <Star className="w-8 h-8 text-brand-accent mx-auto mb-4" data-id="yc3zzzqra" data-path="src/components/ProgramDetail.tsx" />
                <CardTitle className="text-3xl text-white mb-2" data-id="0y8x017vb" data-path="src/components/ProgramDetail.tsx">Career Outcomes</CardTitle>
                <p className="text-gray-300" data-id="wxmmx93r3" data-path="src/components/ProgramDetail.tsx">Potential career paths after completing this program</p>
              </div>
            </CardHeader>
            <CardContent data-id="buqsj0x1q" data-path="src/components/ProgramDetail.tsx">
              <div className="grid md:grid-cols-3 gap-6" data-id="vu81xtu7c" data-path="src/components/ProgramDetail.tsx">
                {program.outcomes.map((outcome, index) =>
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 border border-brand-primary/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }} data-id="p05bdldjq" data-path="src/components/ProgramDetail.tsx">

                    <div className="w-16 h-16 rounded-full bg-brand-gradient mx-auto mb-4 flex items-center justify-center" data-id="r0tl473u6" data-path="src/components/ProgramDetail.tsx">
                      <Award className="w-8 h-8 text-white" data-id="d6w5lkt5o" data-path="src/components/ProgramDetail.tsx" />
                    </div>
                    <h4 className="text-white font-semibold text-lg" data-id="eai4npe0l" data-path="src/components/ProgramDetail.tsx">{outcome}</h4>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>);

};

export default ProgramDetail;