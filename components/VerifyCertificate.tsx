import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, Shield, Award, Calendar, User, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VerifyCertificate = () => {
  const { toast } = useToast();
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certificateId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a certificate ID",
        variant: "destructive"
      });
      return;
    }

    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      // Mock verification result
      const isValid = certificateId.toLowerCase().includes('valid') || certificateId.length > 8;

      if (isValid) {
        setVerificationResult({
          status: 'valid',
          studentName: 'John Doe',
          program: 'Full Stack Development',
          issueDate: '2024-01-15',
          certificateId: certificateId,
          grade: 'A+',
          skills: ['React', 'Node.js', 'MongoDB', 'AWS']
        });
        toast({
          title: "Certificate Verified!",
          description: "This certificate is valid and authentic."
        });
      } else {
        setVerificationResult({
          status: 'invalid'
        });
        toast({
          title: "Verification Failed",
          description: "Certificate ID not found or invalid.",
          variant: "destructive"
        });
      }
      setIsVerifying(false);
    }, 2000);
  };

  const sampleCertificates = [
  {
    id: 'VALID123456789',
    student: 'Sarah Johnson',
    program: 'Cybersecurity Specialist',
    date: '2024-02-20'
  },
  {
    id: 'VALID987654321',
    student: 'Mike Chen',
    program: 'AI & Machine Learning',
    date: '2024-01-30'
  },
  {
    id: 'VALID456789123',
    student: 'Emily Davis',
    program: 'Data Science & Analytics',
    date: '2024-03-10'
  }];


  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden" data-id="vludvqmfh" data-path="src/components/VerifyCertificate.tsx">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" data-id="0c5imjap1" data-path="src/components/VerifyCertificate.tsx" />

      <div className="container mx-auto px-6 relative z-10" data-id="izx7zlm7t" data-path="src/components/VerifyCertificate.tsx">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }} data-id="xqnw6wgp0" data-path="src/components/VerifyCertificate.tsx">

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 brand-text-gradient glow-text"
            animate={{
              backgroundPosition: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-id="nepsl0thy" data-path="src/components/VerifyCertificate.tsx">

            Verify Certificate
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-id="pgi39wieq" data-path="src/components/VerifyCertificate.tsx">
            Verify the authenticity of INLIGHTN TECH certificates. Enter the certificate ID 
            to check its validity and view details.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12" data-id="b5kag5uki" data-path="src/components/VerifyCertificate.tsx">
          {/* Verification Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="1k2ejjlpr" data-path="src/components/VerifyCertificate.tsx">

            <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20" data-id="d3nn1xqwh" data-path="src/components/VerifyCertificate.tsx">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5" data-id="5vq7dzp10" data-path="src/components/VerifyCertificate.tsx" />
              
              <CardHeader className="relative z-10" data-id="v69b63s4f" data-path="src/components/VerifyCertificate.tsx">
                <CardTitle className="text-2xl font-bold text-white flex items-center gap-3" data-id="hq29zefbl" data-path="src/components/VerifyCertificate.tsx">
                  <Shield className="w-6 h-6 text-brand-primary" data-id="urbeovqvr" data-path="src/components/VerifyCertificate.tsx" />
                  Certificate Verification
                </CardTitle>
                <CardDescription className="text-gray-300" data-id="p42iiscld" data-path="src/components/VerifyCertificate.tsx">
                  Enter the certificate ID to verify its authenticity
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10" data-id="exa2yj171" data-path="src/components/VerifyCertificate.tsx">
                <form onSubmit={handleVerify} className="space-y-6" data-id="b6utzgc29" data-path="src/components/VerifyCertificate.tsx">
                  <div data-id="npskxaung" data-path="src/components/VerifyCertificate.tsx">
                    <Label htmlFor="certificateId" className="text-white" data-id="gdvjr5pdg" data-path="src/components/VerifyCertificate.tsx">Certificate ID</Label>
                    <Input
                      id="certificateId"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-brand-accent"
                      placeholder="Enter certificate ID (e.g., VALID123456789)"
                      required data-id="7beglpmna" data-path="src/components/VerifyCertificate.tsx" />

                  </div>

                  <Button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full brand-gradient hover:brightness-110 text-white font-semibold py-3 transition-all duration-300 btn-glow" data-id="ft3lphirg" data-path="src/components/VerifyCertificate.tsx">
                    <Search className="w-4 h-4 mr-2" data-id="cmalh7t1r" data-path="src/components/VerifyCertificate.tsx" />
                    {isVerifying ? 'Verifying...' : 'Verify Certificate'}
                  </Button>
                </form>

                {/* Verification Result */}
                {verificationResult &&
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6" data-id="b0v3sdtga" data-path="src/components/VerifyCertificate.tsx">

                    {verificationResult.status === 'valid' ?
                  <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20" data-id="br8p48el9" data-path="src/components/VerifyCertificate.tsx">
                        <CardContent className="p-6" data-id="7zwzhfrx3" data-path="src/components/VerifyCertificate.tsx">
                          <div className="flex items-center gap-3 mb-4" data-id="ir1dwq00z" data-path="src/components/VerifyCertificate.tsx">
                            <CheckCircle className="w-6 h-6 text-green-400" data-id="6w37cjp7v" data-path="src/components/VerifyCertificate.tsx" />
                            <h3 className="text-xl font-bold text-white" data-id="kmovn5ctk" data-path="src/components/VerifyCertificate.tsx">Certificate Verified</h3>
                          </div>
                          
                          <div className="space-y-3" data-id="jh6ts46q0" data-path="src/components/VerifyCertificate.tsx">
                            <div className="flex items-center gap-2" data-id="up2ro9tb4" data-path="src/components/VerifyCertificate.tsx">
                              <User className="w-4 h-4 text-brand-accent" data-id="14qmmb4c5" data-path="src/components/VerifyCertificate.tsx" />
                              <span className="text-gray-300" data-id="s1cf060cq" data-path="src/components/VerifyCertificate.tsx">Student:</span>
                              <span className="text-white font-semibold" data-id="0r1joqykr" data-path="src/components/VerifyCertificate.tsx">{verificationResult.studentName}</span>
                            </div>
                            
                            <div className="flex items-center gap-2" data-id="9wwx0k5cj" data-path="src/components/VerifyCertificate.tsx">
                              <Award className="w-4 h-4 text-brand-accent" data-id="3m5rj22bx" data-path="src/components/VerifyCertificate.tsx" />
                              <span className="text-gray-300" data-id="llr8tocyd" data-path="src/components/VerifyCertificate.tsx">Program:</span>
                              <span className="text-white font-semibold" data-id="zzdtedf33" data-path="src/components/VerifyCertificate.tsx">{verificationResult.program}</span>
                            </div>
                            
                            <div className="flex items-center gap-2" data-id="odcx7w0so" data-path="src/components/VerifyCertificate.tsx">
                              <Calendar className="w-4 h-4 text-brand-accent" data-id="tgn92tztg" data-path="src/components/VerifyCertificate.tsx" />
                              <span className="text-gray-300" data-id="3bmoy8j63" data-path="src/components/VerifyCertificate.tsx">Issue Date:</span>
                              <span className="text-white font-semibold" data-id="zizu6tyvc" data-path="src/components/VerifyCertificate.tsx">{verificationResult.issueDate}</span>
                            </div>
                            
                            <div className="flex items-center gap-2" data-id="4gc55scoj" data-path="src/components/VerifyCertificate.tsx">
                              <Badge variant="secondary" className="bg-brand-primary/20 text-brand-primary border-brand-primary/30" data-id="zy8dfsu9o" data-path="src/components/VerifyCertificate.tsx">
                                Grade: {verificationResult.grade}
                              </Badge>
                            </div>
                            
                            <div className="pt-2" data-id="bftzbqtv1" data-path="src/components/VerifyCertificate.tsx">
                              <span className="text-gray-300 text-sm" data-id="ph5x2etnf" data-path="src/components/VerifyCertificate.tsx">Skills Certified:</span>
                              <div className="flex flex-wrap gap-2 mt-1" data-id="ehafopbnf" data-path="src/components/VerifyCertificate.tsx">
                                {verificationResult.skills.map((skill: string) =>
                            <Badge key={skill} variant="outline" className="text-white border-brand-accent/30" data-id="cyy52b3bp" data-path="src/components/VerifyCertificate.tsx">
                                    {skill}
                                  </Badge>
                            )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card> :

                  <Card className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20" data-id="5nftl6512" data-path="src/components/VerifyCertificate.tsx">
                        <CardContent className="p-6" data-id="p7mw2mexa" data-path="src/components/VerifyCertificate.tsx">
                          <div className="flex items-center gap-3" data-id="8sdrldzd2" data-path="src/components/VerifyCertificate.tsx">
                            <XCircle className="w-6 h-6 text-red-400" data-id="xdpnupkhc" data-path="src/components/VerifyCertificate.tsx" />
                            <div data-id="e3x36l63t" data-path="src/components/VerifyCertificate.tsx">
                              <h3 className="text-xl font-bold text-white" data-id="zrdv713xp" data-path="src/components/VerifyCertificate.tsx">Certificate Not Found</h3>
                              <p className="text-gray-300 text-sm mt-1" data-id="vnm6xj9si" data-path="src/components/VerifyCertificate.tsx">
                                The certificate ID you entered is not valid or does not exist in our records.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  }
                  </motion.div>
                }
              </CardContent>

              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 via-brand-primary/20 to-brand-secondary/20 rounded-lg blur-xl -z-10" data-id="fuu93mjak" data-path="src/components/VerifyCertificate.tsx" />
            </Card>
          </motion.div>

          {/* Sample Certificates & Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }} data-id="n0m6unl17" data-path="src/components/VerifyCertificate.tsx">

            <div className="space-y-6" data-id="vsjdfxknv" data-path="src/components/VerifyCertificate.tsx">
              {/* Certificate Features */}
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10" data-id="4ux2czmpm" data-path="src/components/VerifyCertificate.tsx">
                <CardHeader data-id="7nip4l6c8" data-path="src/components/VerifyCertificate.tsx">
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-3" data-id="0ns1kk8xy" data-path="src/components/VerifyCertificate.tsx">
                    <Award className="w-5 h-5 text-brand-primary" data-id="fvql6eyeo" data-path="src/components/VerifyCertificate.tsx" />
                    Certificate Features
                  </CardTitle>
                </CardHeader>
                <CardContent data-id="qm3q8snk1" data-path="src/components/VerifyCertificate.tsx">
                  <div className="space-y-4" data-id="yxjsfruk6" data-path="src/components/VerifyCertificate.tsx">
                    {[
                    {
                      icon: Shield,
                      title: "Blockchain Secured",
                      description: "All certificates are secured using blockchain technology for immutable verification."
                    },
                    {
                      icon: CheckCircle,
                      title: "Industry Recognized",
                      description: "Our certificates are recognized by leading tech companies worldwide."
                    },
                    {
                      icon: Award,
                      title: "Skill Validation",
                      description: "Each certificate validates specific technical skills and competencies."
                    }].
                    map((feature, index) =>
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }} data-id="bqwwsx88c" data-path="src/components/VerifyCertificate.tsx">

                        <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1" data-id="i6rzxuzo2" data-path="src/components/VerifyCertificate.tsx">
                          <feature.icon className="w-4 h-4 text-white" data-id="7eqlvooc3" data-path="src/components/VerifyCertificate.tsx" />
                        </div>
                        <div data-id="j2dkxproe" data-path="src/components/VerifyCertificate.tsx">
                          <h4 className="font-semibold text-white mb-1" data-id="poze2tllr" data-path="src/components/VerifyCertificate.tsx">{feature.title}</h4>
                          <p className="text-gray-300 text-sm" data-id="xrc2n2xs2" data-path="src/components/VerifyCertificate.tsx">{feature.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Sample Valid Certificates */}
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10" data-id="28vtacdm9" data-path="src/components/VerifyCertificate.tsx">
                <CardHeader data-id="86hqtmtag" data-path="src/components/VerifyCertificate.tsx">
                  <CardTitle className="text-xl font-bold text-white" data-id="l4iqswc08" data-path="src/components/VerifyCertificate.tsx">Sample Valid Certificates</CardTitle>
                  <CardDescription className="text-gray-300" data-id="v0pp7xk2p" data-path="src/components/VerifyCertificate.tsx">
                    Try these certificate IDs to see verification in action
                  </CardDescription>
                </CardHeader>
                <CardContent data-id="iuqqap4dh" data-path="src/components/VerifyCertificate.tsx">
                  <div className="space-y-3" data-id="x11temyg8" data-path="src/components/VerifyCertificate.tsx">
                    {sampleCertificates.map((cert, index) =>
                    <motion.div
                      key={index}
                      className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-brand-accent/30 transition-all duration-300 cursor-pointer group"
                      onClick={() => setCertificateId(cert.id)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }} data-id="0j13i5e47" data-path="src/components/VerifyCertificate.tsx">

                        <div className="flex items-center justify-between" data-id="ntfckos53" data-path="src/components/VerifyCertificate.tsx">
                          <div data-id="j3qa3ye4g" data-path="src/components/VerifyCertificate.tsx">
                            <p className="font-semibold text-white group-hover:text-brand-accent transition-colors" data-id="ku3edop6n" data-path="src/components/VerifyCertificate.tsx">
                              {cert.id}
                            </p>
                            <p className="text-gray-300 text-sm" data-id="wxwvof195" data-path="src/components/VerifyCertificate.tsx">
                              {cert.student} • {cert.program}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-brand-accent border-brand-accent/30" data-id="67amv0pif" data-path="src/components/VerifyCertificate.tsx">
                            {cert.date}
                          </Badge>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* How it Works */}
              <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10" data-id="mehhxldv8" data-path="src/components/VerifyCertificate.tsx">
                <CardHeader data-id="3msgihe53" data-path="src/components/VerifyCertificate.tsx">
                  <CardTitle className="text-xl font-bold text-white" data-id="kvyvzletf" data-path="src/components/VerifyCertificate.tsx">How Verification Works</CardTitle>
                </CardHeader>
                <CardContent data-id="2flzl2ays" data-path="src/components/VerifyCertificate.tsx">
                  <div className="space-y-3" data-id="lyxvymczh" data-path="src/components/VerifyCertificate.tsx">
                    {[
                    "Enter the certificate ID from your certificate",
                    "Our system checks the blockchain database",
                    "Instant verification with complete details",
                    "Share verified results with employers"].
                    map((step, index) =>
                    <div key={index} className="flex items-center gap-3" data-id="ljdjlsk1o" data-path="src/components/VerifyCertificate.tsx">
                        <div className="w-6 h-6 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm" data-id="ylyzv2245" data-path="src/components/VerifyCertificate.tsx">
                          {index + 1}
                        </div>
                        <p className="text-gray-300 text-sm" data-id="59xl36zt9" data-path="src/components/VerifyCertificate.tsx">{step}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background parallax elements */}
      <div className="absolute inset-0 -z-10" data-id="lijufxgky" data-path="src/components/VerifyCertificate.tsx">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-full blur-3xl" data-id="hwna90ati" data-path="src/components/VerifyCertificate.tsx" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-secondary/10 to-brand-accent/10 rounded-full blur-3xl" data-id="tki8v15gz" data-path="src/components/VerifyCertificate.tsx" />
      </div>
    </section>);

};

export default VerifyCertificate;