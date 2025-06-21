
import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Eye, ThumbsUp } from 'lucide-react';

const videosData = [
{
  id: 1,
  title: "Getting Started with React Development",
  description: "Learn the fundamentals of React and build your first component",
  thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop",
  duration: "24:15",
  views: "15.2K",
  likes: "892",
  category: "Frontend",
  level: "Beginner"
},
{
  id: 2,
  title: "Node.js Backend Architecture Best Practices",
  description: "Build scalable backend applications with Node.js and Express",
  thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop",
  duration: "31:42",
  views: "12.8K",
  likes: "756",
  category: "Backend",
  level: "Intermediate"
},
{
  id: 3,
  title: "Database Design and Optimization",
  description: "Master database design principles and optimization techniques",
  thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=225&fit=crop",
  duration: "28:30",
  views: "9.1K",
  likes: "623",
  category: "Database",
  level: "Advanced"
},
{
  id: 4,
  title: "DevOps Fundamentals: CI/CD Pipeline",
  description: "Learn how to set up continuous integration and deployment",
  thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=225&fit=crop",
  duration: "35:18",
  views: "18.5K",
  likes: "1.2K",
  category: "DevOps",
  level: "Intermediate"
}];


const VideosSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" data-id="c2rr6sag5" data-path="src/components/WhatsSpecial/VideosSection.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="6w54ljwal" data-path="src/components/WhatsSpecial/VideosSection.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12" data-id="i8sw8v640" data-path="src/components/WhatsSpecial/VideosSection.tsx">

          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="699fe6u4s" data-path="src/components/WhatsSpecial/VideosSection.tsx">
            Knowledge from Videos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-id="39f7l3b6v" data-path="src/components/WhatsSpecial/VideosSection.tsx">
            Access our curated collection of educational videos covering essential topics for modern developers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="heg9ybutt" data-path="src/components/WhatsSpecial/VideosSection.tsx">
          {videosData.map((video, index) =>
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }} data-id="yegallxlt" data-path="src/components/WhatsSpecial/VideosSection.tsx">

              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden" data-id="5phpaxzra" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                <div className="relative" data-id="c8oc99tje" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                  <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" data-id="l87b1f8tf" data-path="src/components/WhatsSpecial/VideosSection.tsx" />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" data-id="r2amk0rdh" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center" data-id="3p1jqdlt5" data-path="src/components/WhatsSpecial/VideosSection.tsx">

                      <Play className="w-6 h-6 text-blue-600 ml-1" data-id="zr265sbyo" data-path="src/components/WhatsSpecial/VideosSection.tsx" />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 left-4" data-id="g8m92jv24" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    <Badge variant="secondary" className="bg-black/70 text-white border-0" data-id="nhejzhf1j" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                      {video.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4" data-id="bwtmiuklf" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    <div className="flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded text-sm" data-id="6rnhazni6" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                      <Clock className="w-3 h-3" data-id="32unx9asp" data-path="src/components/WhatsSpecial/VideosSection.tsx" />
                      <span data-id="kybvkad2e" data-path="src/components/WhatsSpecial/VideosSection.tsx">{video.duration}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4" data-id="jex4n1kn4" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    <Badge
                    variant={video.level === 'Beginner' ? 'default' : video.level === 'Intermediate' ? 'secondary' : 'destructive'}
                    className="text-xs" data-id="8p3bvswrh" data-path="src/components/WhatsSpecial/VideosSection.tsx">

                      {video.level}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6" data-id="omm005d2l" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors" data-id="uqnhojul5" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2" data-id="i1eh8pdoz" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500" data-id="oo9k70nm9" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                    <div className="flex items-center space-x-4" data-id="1tzyhyuzz" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                      <div className="flex items-center space-x-1" data-id="hy6c3uvjo" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                        <Eye className="w-4 h-4" data-id="tei6kozu6" data-path="src/components/WhatsSpecial/VideosSection.tsx" />
                        <span data-id="bfb884szh" data-path="src/components/WhatsSpecial/VideosSection.tsx">{video.views}</span>
                      </div>
                      <div className="flex items-center space-x-1" data-id="ugahqzilf" data-path="src/components/WhatsSpecial/VideosSection.tsx">
                        <ThumbsUp className="w-4 h-4" data-id="smbxbdsfq" data-path="src/components/WhatsSpecial/VideosSection.tsx" />
                        <span data-id="8llf6h7so" data-path="src/components/WhatsSpecial/VideosSection.tsx">{video.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12" data-id="nkpjuh089" data-path="src/components/WhatsSpecial/VideosSection.tsx">

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-2xl mx-auto" data-id="hc489ll5e" data-path="src/components/WhatsSpecial/VideosSection.tsx">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="4ieulmdli" data-path="src/components/WhatsSpecial/VideosSection.tsx">
              More Videos Coming Soon
            </h3>
            <p className="text-gray-600" data-id="zxq9er7lz" data-path="src/components/WhatsSpecial/VideosSection.tsx">
              We're constantly adding new educational content to help you stay up-to-date with the latest technologies and best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default VideosSection;