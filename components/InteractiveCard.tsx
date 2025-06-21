
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface InteractiveCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  className?: string;
  onClick?: () => void;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  description,
  tags,
  image,
  className = '',
  onClick
}) => {
  return (
    <motion.div
      className={`group perspective-1000 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }} data-id="5i8eqjy2w" data-path="src/components/InteractiveCard.tsx">

      <motion.div
        className="relative w-full h-full preserve-3d"
        whileHover={{ rotateY: 5, rotateX: 5 }}
        transition={{ duration: 0.3 }} data-id="nki9ma687" data-path="src/components/InteractiveCard.tsx">

        <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300" data-id="01nvxkauz" data-path="src/components/InteractiveCard.tsx">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-id="mq7jls7eh" data-path="src/components/InteractiveCard.tsx" />
          
          {/* Animated border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" data-id="0tmamg537" data-path="src/components/InteractiveCard.tsx" />
          
          <CardHeader className="relative z-10" data-id="t5k8npipr" data-path="src/components/InteractiveCard.tsx">
            {image &&
            <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 overflow-hidden" data-id="oaee0j2nh" data-path="src/components/InteractiveCard.tsx">
                <motion.div
                className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }} data-id="4sn4lvt7c" data-path="src/components/InteractiveCard.tsx">

                  <div className="text-white/50 text-sm" data-id="tle2l1nw2" data-path="src/components/InteractiveCard.tsx">Preview Image</div>
                </motion.div>
              </div>
            }
            
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent" data-id="irbqfn75q" data-path="src/components/InteractiveCard.tsx">
              {title}
            </CardTitle>
            
            <CardDescription className="text-gray-300" data-id="6ry0v1bs6" data-path="src/components/InteractiveCard.tsx">
              {description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative z-10" data-id="0oipkvmkm" data-path="src/components/InteractiveCard.tsx">
            <div className="flex flex-wrap gap-2 mb-4" data-id="5xnoqf8wn" data-path="src/components/InteractiveCard.tsx">
              {tags.map((tag, index) =>
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20 transition-colors" data-id="a4a9d8pv5" data-path="src/components/InteractiveCard.tsx">

                  {tag}
                </Badge>
              )}
            </div>
            
            <Button
              onClick={onClick}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0" data-id="81j32wqcc" data-path="src/components/InteractiveCard.tsx">

              Explore Program
            </Button>
          </CardContent>
          
          {/* Floating particles */}
          {[...Array(3)].map((_, i) =>
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }} data-id="td9a5r3ll" data-path="src/components/InteractiveCard.tsx" />

          )}
        </Card>
      </motion.div>
    </motion.div>);

};

export default InteractiveCard;