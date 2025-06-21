
import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} data-id="uulkimutd" data-path="src/components/ThemeToggle.tsx">

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }} data-id="09glwqhdu" data-path="src/components/ThemeToggle.tsx">

        {theme === 'dark' ?
        <Moon className="w-5 h-5 text-yellow-300" data-id="vq4l4jnff" data-path="src/components/ThemeToggle.tsx" /> :

        <Sun className="w-5 h-5 text-yellow-500" data-id="iomg2kn0p" data-path="src/components/ThemeToggle.tsx" />
        }
      </motion.div>
      
      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-purple-600/20 blur-md -z-10" data-id="3trs309u4" data-path="src/components/ThemeToggle.tsx" />
    </motion.button>);

};

export default ThemeToggle;