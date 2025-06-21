import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const { sendResetPasswordEmail } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const error = await sendResetPasswordEmail(email);
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive"
        });
      } else {
        setEmailSent(true);
        toast({
          title: "Email Sent",
          description: "Check your email for password reset instructions.",
          variant: "default"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="8vv9a4d9l" data-path="src/pages/ForgotPasswordPage.tsx">
      <Header data-id="39y0s5umy" data-path="src/pages/ForgotPasswordPage.tsx" />
      
      <div className="container mx-auto px-4 py-8 pt-24" data-id="967ykqd2q" data-path="src/pages/ForgotPasswordPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto" data-id="ibhhcrlee" data-path="src/pages/ForgotPasswordPage.tsx">

          <Button
            variant="ghost"
            className="mb-6 hover:bg-blue-50 dark:hover:bg-gray-800"
            onClick={() => navigate(-1)} data-id="09akxqqbm" data-path="src/pages/ForgotPasswordPage.tsx">

            <ArrowLeft className="w-4 h-4 mr-2" data-id="61g0kspbg" data-path="src/pages/ForgotPasswordPage.tsx" />
            Back
          </Button>

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" data-id="2k8pvlfom" data-path="src/pages/ForgotPasswordPage.tsx">
            <CardHeader className="space-y-1 text-center" data-id="jdl7toino" data-path="src/pages/ForgotPasswordPage.tsx">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="395qyrj0p" data-path="src/pages/ForgotPasswordPage.tsx">
                {emailSent ? 'Check Your Email' : 'Reset Password'}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400" data-id="j9rsbossy" data-path="src/pages/ForgotPasswordPage.tsx">
                {emailSent ?
                'We have sent you password reset instructions' :
                'Enter your email address and we will send you reset instructions'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent data-id="we9y2mtdm" data-path="src/pages/ForgotPasswordPage.tsx">
              {emailSent ?
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-4" data-id="2ndfia2bh" data-path="src/pages/ForgotPasswordPage.tsx">

                  <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }} data-id="zrtquzgz2" data-path="src/pages/ForgotPasswordPage.tsx">

                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" data-id="yhumo2why" data-path="src/pages/ForgotPasswordPage.tsx" />
                  </motion.div>
                  
                  <div className="space-y-2" data-id="itsr2hktt" data-path="src/pages/ForgotPasswordPage.tsx">
                    <p className="text-sm text-gray-600 dark:text-gray-400" data-id="etm6tlro4" data-path="src/pages/ForgotPasswordPage.tsx">
                      We've sent password reset instructions to:
                    </p>
                    <p className="font-medium text-gray-900 dark:text-gray-100" data-id="pel7jskzp" data-path="src/pages/ForgotPasswordPage.tsx">
                      {email}
                    </p>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400" data-id="6hnsqmh8q" data-path="src/pages/ForgotPasswordPage.tsx">
                    <p data-id="6pqjhunf6" data-path="src/pages/ForgotPasswordPage.tsx">Check your spam folder if you don't see the email.</p>
                    <p data-id="o8onri5vq" data-path="src/pages/ForgotPasswordPage.tsx">The reset link will expire in 24 hours.</p>
                  </div>
                  
                  <div className="pt-4 space-y-3" data-id="l3edga9st" data-path="src/pages/ForgotPasswordPage.tsx">
                    <Button
                    onClick={() => setEmailSent(false)}
                    variant="outline"
                    className="w-full" data-id="bbua2stp5" data-path="src/pages/ForgotPasswordPage.tsx">

                      Send Another Email
                    </Button>
                    <Link to="/login" data-id="ya0b2lh20" data-path="src/pages/ForgotPasswordPage.tsx">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="8ck92590x" data-path="src/pages/ForgotPasswordPage.tsx">
                        Back to Login
                      </Button>
                    </Link>
                  </div>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-4" data-id="qc0htukkj" data-path="src/pages/ForgotPasswordPage.tsx">
                  <div className="space-y-2" data-id="itdy5sq05" data-path="src/pages/ForgotPasswordPage.tsx">
                    <Label htmlFor="email" className="text-sm font-medium" data-id="v6rlk2g0n" data-path="src/pages/ForgotPasswordPage.tsx">
                      Email Address
                    </Label>
                    <div className="relative" data-id="l8glso8lw" data-path="src/pages/ForgotPasswordPage.tsx">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="66s4ixp9k" data-path="src/pages/ForgotPasswordPage.tsx" />
                      <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="da1rygzd2" data-path="src/pages/ForgotPasswordPage.tsx" />

                    </div>
                  </div>

                  <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300"
                  disabled={isLoading} data-id="vp08r8w5n" data-path="src/pages/ForgotPasswordPage.tsx">

                    {isLoading ?
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" data-id="dqqy5u08l" data-path="src/pages/ForgotPasswordPage.tsx" /> :


                  "Send Reset Instructions"
                  }
                  </Button>

                  <div className="text-center pt-4" data-id="qy1eds3rx" data-path="src/pages/ForgotPasswordPage.tsx">
                    <Link
                    to="/login"
                    className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300" data-id="7fxk0zj5x" data-path="src/pages/ForgotPasswordPage.tsx">

                      Back to Login
                    </Link>
                  </div>
                </form>
              }
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer data-id="n9gg652u5" data-path="src/pages/ForgotPasswordPage.tsx" />
    </div>);

};

export default ForgotPasswordPage;