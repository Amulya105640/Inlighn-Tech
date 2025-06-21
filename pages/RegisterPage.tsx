import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Check, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();
  const { toast } = useToast();

  const passwordRequirements = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[A-Z]/, text: 'One uppercase letter' },
  { regex: /[a-z]/, text: 'One lowercase letter' },
  { regex: /\d/, text: 'One number' }];


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    const failedRequirements = passwordRequirements.filter((req) => !req.regex.test(password));
    if (failedRequirements.length > 0) {
      toast({
        title: "Password Requirements",
        description: "Please meet all password requirements.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const error = await register(email, password, name);
      if (error) {
        toast({
          title: "Registration Failed",
          description: error,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Registration Successful",
          description: "Please check your email to verify your account.",
          variant: "default"
        });
        navigate('/login');
      }
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="w4jeq4g22" data-path="src/pages/RegisterPage.tsx">
      <Header data-id="jaekmvcc0" data-path="src/pages/RegisterPage.tsx" />
      
      <div className="container mx-auto px-4 py-8 pt-24" data-id="xz2jipai4" data-path="src/pages/RegisterPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto" data-id="vuxnfe55e" data-path="src/pages/RegisterPage.tsx">

          <Button
            variant="ghost"
            className="mb-6 hover:bg-blue-50 dark:hover:bg-gray-800"
            onClick={() => navigate(-1)} data-id="da18m7o1e" data-path="src/pages/RegisterPage.tsx">

            <ArrowLeft className="w-4 h-4 mr-2" data-id="rzmh648zs" data-path="src/pages/RegisterPage.tsx" />
            Back
          </Button>

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" data-id="2afclbfd8" data-path="src/pages/RegisterPage.tsx">
            <CardHeader className="space-y-1 text-center" data-id="niv7rzalm" data-path="src/pages/RegisterPage.tsx">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="wwqwnghpe" data-path="src/pages/RegisterPage.tsx">
                Create Account
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400" data-id="y7ycxix90" data-path="src/pages/RegisterPage.tsx">
                Join us today and get started
              </CardDescription>
            </CardHeader>
            
            <CardContent data-id="hsqlha8rx" data-path="src/pages/RegisterPage.tsx">
              <form onSubmit={handleSubmit} className="space-y-4" data-id="91b9lszbo" data-path="src/pages/RegisterPage.tsx">
                <div className="space-y-2" data-id="dmmwnf7qr" data-path="src/pages/RegisterPage.tsx">
                  <Label htmlFor="name" className="text-sm font-medium" data-id="u9am1o96v" data-path="src/pages/RegisterPage.tsx">
                    Full Name
                  </Label>
                  <div className="relative" data-id="qzdx3ybhl" data-path="src/pages/RegisterPage.tsx">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="gv614zbva" data-path="src/pages/RegisterPage.tsx" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="uxjapaw87" data-path="src/pages/RegisterPage.tsx" />

                  </div>
                </div>

                <div className="space-y-2" data-id="vfj731mch" data-path="src/pages/RegisterPage.tsx">
                  <Label htmlFor="email" className="text-sm font-medium" data-id="n946ynuwn" data-path="src/pages/RegisterPage.tsx">
                    Email Address
                  </Label>
                  <div className="relative" data-id="7zviuihey" data-path="src/pages/RegisterPage.tsx">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="shna32296" data-path="src/pages/RegisterPage.tsx" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="14v2iy1x5" data-path="src/pages/RegisterPage.tsx" />

                  </div>
                </div>

                <div className="space-y-2" data-id="hcb9bju7k" data-path="src/pages/RegisterPage.tsx">
                  <Label htmlFor="password" className="text-sm font-medium" data-id="yi6hu2ebv" data-path="src/pages/RegisterPage.tsx">
                    Password
                  </Label>
                  <div className="relative" data-id="aoo91jrir" data-path="src/pages/RegisterPage.tsx">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="m5d8ynyt8" data-path="src/pages/RegisterPage.tsx" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="6y733m2bg" data-path="src/pages/RegisterPage.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)} data-id="wz7cmi3lk" data-path="src/pages/RegisterPage.tsx">

                      {showPassword ?
                      <EyeOff className="h-4 w-4 text-gray-400" data-id="yaalu1znt" data-path="src/pages/RegisterPage.tsx" /> :

                      <Eye className="h-4 w-4 text-gray-400" data-id="8xeku48k2" data-path="src/pages/RegisterPage.tsx" />
                      }
                    </Button>
                  </div>
                  
                  {formData.password &&
                  <div className="mt-2 space-y-1" data-id="nty9ddx88" data-path="src/pages/RegisterPage.tsx">
                      {passwordRequirements.map((requirement, index) => {
                      const isValid = requirement.regex.test(formData.password);
                      return (
                        <div key={index} className="flex items-center gap-2 text-xs" data-id="yx593bbl8" data-path="src/pages/RegisterPage.tsx">
                            {isValid ?
                          <Check className="w-3 h-3 text-green-500" data-id="rcmi63tob" data-path="src/pages/RegisterPage.tsx" /> :

                          <X className="w-3 h-3 text-red-500" data-id="ggor7kjoo" data-path="src/pages/RegisterPage.tsx" />
                          }
                            <span className={isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} data-id="na7kg7vnm" data-path="src/pages/RegisterPage.tsx">
                              {requirement.text}
                            </span>
                          </div>);

                    })}
                    </div>
                  }
                </div>

                <div className="space-y-2" data-id="d2eoiniwy" data-path="src/pages/RegisterPage.tsx">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium" data-id="j5xse31jm" data-path="src/pages/RegisterPage.tsx">
                    Confirm Password
                  </Label>
                  <div className="relative" data-id="i2894hsxv" data-path="src/pages/RegisterPage.tsx">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="a6splwr88" data-path="src/pages/RegisterPage.tsx" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="zfwaut8re" data-path="src/pages/RegisterPage.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} data-id="ghu8s7yqm" data-path="src/pages/RegisterPage.tsx">

                      {showConfirmPassword ?
                      <EyeOff className="h-4 w-4 text-gray-400" data-id="0hjtrg3fb" data-path="src/pages/RegisterPage.tsx" /> :

                      <Eye className="h-4 w-4 text-gray-400" data-id="9ngyy52gh" data-path="src/pages/RegisterPage.tsx" />
                      }
                    </Button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword &&
                  <div className="flex items-center gap-2 text-xs text-red-600 dark:text-red-400" data-id="wq7vz1huw" data-path="src/pages/RegisterPage.tsx">
                      <X className="w-3 h-3" data-id="xsu9rgr6s" data-path="src/pages/RegisterPage.tsx" />
                      <span data-id="t8gozfdws" data-path="src/pages/RegisterPage.tsx">Passwords do not match</span>
                    </div>
                  }
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300"
                  disabled={isLoading} data-id="ov26nbesf" data-path="src/pages/RegisterPage.tsx">

                  {isLoading ?
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" data-id="h4284bsno" data-path="src/pages/RegisterPage.tsx" /> :


                  "Create Account"
                  }
                </Button>
              </form>

              <div className="mt-6" data-id="an5nz2m2q" data-path="src/pages/RegisterPage.tsx">
                <Separator className="my-4" data-id="5jbwl0sf8" data-path="src/pages/RegisterPage.tsx" />
                <p className="text-center text-sm text-gray-600 dark:text-gray-400" data-id="kvj2xdbkq" data-path="src/pages/RegisterPage.tsx">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300" data-id="eupnrxcg0" data-path="src/pages/RegisterPage.tsx">

                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer data-id="sswmppddz" data-path="src/pages/RegisterPage.tsx" />
    </div>);

};

export default RegisterPage;