import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const error = await login(email, password);
      if (error) {
        toast({
          title: "Login Failed",
          description: error,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
          variant: "default"
        });
        navigate('/');
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="f0x4va6ka" data-path="src/pages/LoginPage.tsx">
      <Header data-id="4ndii6lu3" data-path="src/pages/LoginPage.tsx" />
      
      <div className="container mx-auto px-4 py-8 pt-24" data-id="uclbsmodt" data-path="src/pages/LoginPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto" data-id="phvpy1ms7" data-path="src/pages/LoginPage.tsx">

          <Button
            variant="ghost"
            className="mb-6 hover:bg-blue-50 dark:hover:bg-gray-800"
            onClick={() => navigate(-1)} data-id="b9mi5iked" data-path="src/pages/LoginPage.tsx">

            <ArrowLeft className="w-4 h-4 mr-2" data-id="te0dd5vxq" data-path="src/pages/LoginPage.tsx" />
            Back
          </Button>

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" data-id="984l8bt8u" data-path="src/pages/LoginPage.tsx">
            <CardHeader className="space-y-1 text-center" data-id="byi68fzzf" data-path="src/pages/LoginPage.tsx">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="zek41n2b2" data-path="src/pages/LoginPage.tsx">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400" data-id="51zf4d9mt" data-path="src/pages/LoginPage.tsx">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            
            <CardContent data-id="cxo36nfey" data-path="src/pages/LoginPage.tsx">
              <form onSubmit={handleSubmit} className="space-y-4" data-id="zcvswulcy" data-path="src/pages/LoginPage.tsx">
                <div className="space-y-2" data-id="zh4povmc3" data-path="src/pages/LoginPage.tsx">
                  <Label htmlFor="email" className="text-sm font-medium" data-id="0xfw30ch4" data-path="src/pages/LoginPage.tsx">
                    Email Address
                  </Label>
                  <div className="relative" data-id="z8s27lpnb" data-path="src/pages/LoginPage.tsx">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="n55r4euv4" data-path="src/pages/LoginPage.tsx" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="ols1yg9zd" data-path="src/pages/LoginPage.tsx" />

                  </div>
                </div>

                <div className="space-y-2" data-id="ja1wmb14s" data-path="src/pages/LoginPage.tsx">
                  <Label htmlFor="password" className="text-sm font-medium" data-id="oeftjq9yf" data-path="src/pages/LoginPage.tsx">
                    Password
                  </Label>
                  <div className="relative" data-id="7acq3vmlc" data-path="src/pages/LoginPage.tsx">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="q2hzgmx6q" data-path="src/pages/LoginPage.tsx" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="n35rd73yn" data-path="src/pages/LoginPage.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)} data-id="6jle0jkpu" data-path="src/pages/LoginPage.tsx">

                      {showPassword ?
                      <EyeOff className="h-4 w-4 text-gray-400" data-id="qbxmgl6jg" data-path="src/pages/LoginPage.tsx" /> :

                      <Eye className="h-4 w-4 text-gray-400" data-id="pdu0lp614" data-path="src/pages/LoginPage.tsx" />
                      }
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end" data-id="xl0xfyq4s" data-path="src/pages/LoginPage.tsx">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" data-id="a5ddadfwa" data-path="src/pages/LoginPage.tsx">

                    Forgot your password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300"
                  disabled={isLoading} data-id="xc8vozd18" data-path="src/pages/LoginPage.tsx">

                  {isLoading ?
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" data-id="5anil0g7j" data-path="src/pages/LoginPage.tsx" /> :


                  "Sign In"
                  }
                </Button>
              </form>

              <div className="mt-6" data-id="gykf0r5i4" data-path="src/pages/LoginPage.tsx">
                <Separator className="my-4" data-id="pnxbwuzqh" data-path="src/pages/LoginPage.tsx" />
                <p className="text-center text-sm text-gray-600 dark:text-gray-400" data-id="z5d89mdu2" data-path="src/pages/LoginPage.tsx">
                  Don't have an account?{' '}
                  <Link
                    to="/register"
                    className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300" data-id="evmo6bgji" data-path="src/pages/LoginPage.tsx">

                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer data-id="eonny3xum" data-path="src/pages/LoginPage.tsx" />
    </div>);

};

export default LoginPage;