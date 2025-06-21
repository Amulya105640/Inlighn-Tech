import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Lock, Check, X, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResetPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const { toast } = useToast();

  const passwordRequirements = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[A-Z]/, text: 'One uppercase letter' },
  { regex: /[a-z]/, text: 'One lowercase letter' },
  { regex: /\d/, text: 'One number' }];


  useEffect(() => {
    const tokenParam = searchParams.get('token');
    if (!tokenParam) {
      toast({
        title: "Invalid Reset Link",
        description: "The password reset link is invalid or has expired.",
        variant: "destructive"
      });
      navigate('/forgot-password');
    } else {
      setToken(tokenParam);
    }
  }, [searchParams, navigate, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
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
      const error = await resetPassword(token, password);
      if (error) {
        toast({
          title: "Reset Failed",
          description: error,
          variant: "destructive"
        });
      } else {
        setResetSuccess(true);
        toast({
          title: "Password Reset Successful",
          description: "Your password has been updated successfully.",
          variant: "default"
        });
      }
    } catch (error) {
      toast({
        title: "Reset Failed",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (resetSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="i66p976f9" data-path="src/pages/ResetPasswordPage.tsx">
        <Header data-id="ccf6wxavm" data-path="src/pages/ResetPasswordPage.tsx" />
        
        <div className="container mx-auto px-4 py-8 pt-24" data-id="b1klntot5" data-path="src/pages/ResetPasswordPage.tsx">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto" data-id="drb2wdze2" data-path="src/pages/ResetPasswordPage.tsx">

            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" data-id="io7s4qeoz" data-path="src/pages/ResetPasswordPage.tsx">
              <CardContent className="pt-6" data-id="svn1i3o41" data-path="src/pages/ResetPasswordPage.tsx">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center space-y-4" data-id="zikinvw46" data-path="src/pages/ResetPasswordPage.tsx">

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }} data-id="65pjarsi6" data-path="src/pages/ResetPasswordPage.tsx">

                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" data-id="t26fndm7g" data-path="src/pages/ResetPasswordPage.tsx" />
                  </motion.div>
                  
                  <div className="space-y-2" data-id="dtavtrdls" data-path="src/pages/ResetPasswordPage.tsx">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100" data-id="d4mc8cdc5" data-path="src/pages/ResetPasswordPage.tsx">
                      Password Reset Complete
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400" data-id="j0u8sl66s" data-path="src/pages/ResetPasswordPage.tsx">
                      Your password has been successfully updated. You can now log in with your new password.
                    </p>
                  </div>
                  
                  <div className="pt-4" data-id="37gzjqwgb" data-path="src/pages/ResetPasswordPage.tsx">
                    <Button
                      onClick={() => navigate('/login')}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="4k948dkyr" data-path="src/pages/ResetPasswordPage.tsx">

                      Continue to Login
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <Footer data-id="w3czsdqko" data-path="src/pages/ResetPasswordPage.tsx" />
      </div>);

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="pto8f4lrx" data-path="src/pages/ResetPasswordPage.tsx">
      <Header data-id="ntu5pzh40" data-path="src/pages/ResetPasswordPage.tsx" />
      
      <div className="container mx-auto px-4 py-8 pt-24" data-id="daytkj2ze" data-path="src/pages/ResetPasswordPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto" data-id="85e0ezloq" data-path="src/pages/ResetPasswordPage.tsx">

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" data-id="8igatm02d" data-path="src/pages/ResetPasswordPage.tsx">
            <CardHeader className="space-y-1 text-center" data-id="v89bbyqt5" data-path="src/pages/ResetPasswordPage.tsx">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="tjl1wreze" data-path="src/pages/ResetPasswordPage.tsx">
                Set New Password
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400" data-id="snwm4ekap" data-path="src/pages/ResetPasswordPage.tsx">
                Choose a strong password for your account
              </CardDescription>
            </CardHeader>
            
            <CardContent data-id="1y0hr8ozp" data-path="src/pages/ResetPasswordPage.tsx">
              <form onSubmit={handleSubmit} className="space-y-4" data-id="i0anoqzfc" data-path="src/pages/ResetPasswordPage.tsx">
                <div className="space-y-2" data-id="itr5p69eu" data-path="src/pages/ResetPasswordPage.tsx">
                  <Label htmlFor="password" className="text-sm font-medium" data-id="oe17dm4rz" data-path="src/pages/ResetPasswordPage.tsx">
                    New Password
                  </Label>
                  <div className="relative" data-id="p8a0z7z5k" data-path="src/pages/ResetPasswordPage.tsx">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="7blu5jps0" data-path="src/pages/ResetPasswordPage.tsx" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="jldh9wviq" data-path="src/pages/ResetPasswordPage.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)} data-id="yq6w3ivmj" data-path="src/pages/ResetPasswordPage.tsx">

                      {showPassword ?
                      <EyeOff className="h-4 w-4 text-gray-400" data-id="tj7v2nltr" data-path="src/pages/ResetPasswordPage.tsx" /> :

                      <Eye className="h-4 w-4 text-gray-400" data-id="58a50ncq1" data-path="src/pages/ResetPasswordPage.tsx" />
                      }
                    </Button>
                  </div>
                  
                  {password &&
                  <div className="mt-2 space-y-1" data-id="05rb7jy95" data-path="src/pages/ResetPasswordPage.tsx">
                      {passwordRequirements.map((requirement, index) => {
                      const isValid = requirement.regex.test(password);
                      return (
                        <div key={index} className="flex items-center gap-2 text-xs" data-id="eis3eykqb" data-path="src/pages/ResetPasswordPage.tsx">
                            {isValid ?
                          <Check className="w-3 h-3 text-green-500" data-id="jl15jtmxk" data-path="src/pages/ResetPasswordPage.tsx" /> :

                          <X className="w-3 h-3 text-red-500" data-id="74bwuyp0a" data-path="src/pages/ResetPasswordPage.tsx" />
                          }
                            <span className={isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} data-id="x79nfa3ii" data-path="src/pages/ResetPasswordPage.tsx">
                              {requirement.text}
                            </span>
                          </div>);

                    })}
                    </div>
                  }
                </div>

                <div className="space-y-2" data-id="j23md1prp" data-path="src/pages/ResetPasswordPage.tsx">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium" data-id="isjkb4c2z" data-path="src/pages/ResetPasswordPage.tsx">
                    Confirm New Password
                  </Label>
                  <div className="relative" data-id="ybel0on83" data-path="src/pages/ResetPasswordPage.tsx">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" data-id="9dvgipkmp" data-path="src/pages/ResetPasswordPage.tsx" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-10 pr-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      required data-id="jxb5rb1ia" data-path="src/pages/ResetPasswordPage.tsx" />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)} data-id="fcr2hztds" data-path="src/pages/ResetPasswordPage.tsx">

                      {showConfirmPassword ?
                      <EyeOff className="h-4 w-4 text-gray-400" data-id="plep46q58" data-path="src/pages/ResetPasswordPage.tsx" /> :

                      <Eye className="h-4 w-4 text-gray-400" data-id="zqn3y76it" data-path="src/pages/ResetPasswordPage.tsx" />
                      }
                    </Button>
                  </div>
                  {confirmPassword && password !== confirmPassword &&
                  <div className="flex items-center gap-2 text-xs text-red-600 dark:text-red-400" data-id="4l6j4r4vs" data-path="src/pages/ResetPasswordPage.tsx">
                      <X className="w-3 h-3" data-id="7zkbir9ci" data-path="src/pages/ResetPasswordPage.tsx" />
                      <span data-id="c6py5h87z" data-path="src/pages/ResetPasswordPage.tsx">Passwords do not match</span>
                    </div>
                  }
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300"
                  disabled={isLoading} data-id="baztd49z2" data-path="src/pages/ResetPasswordPage.tsx">

                  {isLoading ?
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" data-id="j0t4ynlbs" data-path="src/pages/ResetPasswordPage.tsx" /> :


                  "Update Password"
                  }
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer data-id="9uswv6anu" data-path="src/pages/ResetPasswordPage.tsx" />
    </div>);

};

export default ResetPasswordPage;