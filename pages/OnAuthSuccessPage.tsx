import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Timer } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OnAuthSuccessPage: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/login');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" data-id="sj3djhhz9" data-path="src/pages/OnAuthSuccessPage.tsx">
      <Header data-id="3budaszs9" data-path="src/pages/OnAuthSuccessPage.tsx" />
      
      <div className="container mx-auto px-4 py-8 pt-24" data-id="py09jl7su" data-path="src/pages/OnAuthSuccessPage.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto" data-id="az288zl2d" data-path="src/pages/OnAuthSuccessPage.tsx">

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm" data-id="pdtymkgdj" data-path="src/pages/OnAuthSuccessPage.tsx">
            <CardContent className="pt-8 pb-8" data-id="v602aj0aa" data-path="src/pages/OnAuthSuccessPage.tsx">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6" data-id="znfb4vboh" data-path="src/pages/OnAuthSuccessPage.tsx">

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }} data-id="qruv0rg0t" data-path="src/pages/OnAuthSuccessPage.tsx">

                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto" data-id="nfowtsnxc" data-path="src/pages/OnAuthSuccessPage.tsx" />
                </motion.div>
                
                <div className="space-y-3" data-id="1pyidshen" data-path="src/pages/OnAuthSuccessPage.tsx">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-id="yj47z2f9c" data-path="src/pages/OnAuthSuccessPage.tsx">
                    Email Verified!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg" data-id="ktrf8ewe5" data-path="src/pages/OnAuthSuccessPage.tsx">
                    Your account has been successfully verified and activated.
                  </p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 space-y-2" data-id="8c93rbvx7" data-path="src/pages/OnAuthSuccessPage.tsx">

                  <div className="flex items-center justify-center gap-2 text-blue-700 dark:text-blue-300" data-id="wa6snuy2b" data-path="src/pages/OnAuthSuccessPage.tsx">
                    <Timer className="w-5 h-5" data-id="7fgnqo0zh" data-path="src/pages/OnAuthSuccessPage.tsx" />
                    <span className="font-medium" data-id="fxgbyi8t1" data-path="src/pages/OnAuthSuccessPage.tsx">Auto-redirect in {countdown} seconds</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400" data-id="s88lkpv0f" data-path="src/pages/OnAuthSuccessPage.tsx">
                    You will be automatically redirected to the login page
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2 text-sm text-gray-500 dark:text-gray-400" data-id="nk4wrof3r" data-path="src/pages/OnAuthSuccessPage.tsx">

                  <p data-id="r822pq117" data-path="src/pages/OnAuthSuccessPage.tsx">Welcome to our platform!</p>
                  <p data-id="ei01mhsvw" data-path="src/pages/OnAuthSuccessPage.tsx">You can now log in and start exploring our features.</p>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer data-id="5l24let96" data-path="src/pages/OnAuthSuccessPage.tsx" />
    </div>);

};

export default OnAuthSuccessPage;