
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ stats, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 100;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 20);
      });
    }
  }, [isInView, stats]);

  return (
    <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`} data-id="pweyeh09n" data-path="src/components/StatsCounter.tsx">
      {stats.map((stat, index) =>
      <motion.div
        key={index}
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }} data-id="d5u4v2829" data-path="src/components/StatsCounter.tsx">

          <motion.div
          className="relative mb-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }} data-id="94uz8f3h4" data-path="src/components/StatsCounter.tsx">

            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent" data-id="tnsgky6iz" data-path="src/components/StatsCounter.tsx">
              {stat.prefix}{counters[index]}{stat.suffix}
            </div>
            
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-lg rounded-lg -z-10" data-id="u8kv9faxd" data-path="src/components/StatsCounter.tsx" />
          </motion.div>
          
          <div className="text-gray-300 font-medium uppercase tracking-wide text-sm" data-id="jiq8wsj3c" data-path="src/components/StatsCounter.tsx">
            {stat.label}
          </div>
          
          {/* Animated underline */}
          <motion.div
          className="h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mt-2"
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }} data-id="vuz6bgr2h" data-path="src/components/StatsCounter.tsx" />

        </motion.div>
      )}
    </div>);

};

export default StatsCounter;