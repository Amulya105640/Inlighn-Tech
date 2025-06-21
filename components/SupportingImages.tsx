import { motion } from "motion/react";
import { Code, Video, Award } from "lucide-react";

const SupportingImages = () => {
  const images = [
  {
    title: "Hands-on Learning",
    description: "Students working on real-world projects",
    icon: Code,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    title: "Expert Mentorship",
    description: "Virtual meetings with industry professionals",
    icon: Video,
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-teal-500 to-green-500"
  },
  {
    title: "Achievement Recognition",
    description: "Celebrating successful completion",
    icon: Award,
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-orange-500 to-red-500"
  }];


  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" data-id="ewc99ydcm" data-path="src/components/SupportingImages.tsx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="rwoqr5fyh" data-path="src/components/SupportingImages.tsx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16" data-id="sq4tp8i53" data-path="src/components/SupportingImages.tsx">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-id="91tm4ejdp" data-path="src/components/SupportingImages.tsx">
            Experience InLighn Tech
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="mu7ivrs0t" data-path="src/components/SupportingImages.tsx">
            See how our students thrive in a collaborative learning environment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="3bcig1jr3" data-path="src/components/SupportingImages.tsx">
          {images.map((image, index) => {
            const Icon = image.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2" data-id="iqabnu9ui" data-path="src/components/SupportingImages.tsx">

                <div className="relative h-80 overflow-hidden" data-id="ee944xaoo" data-path="src/components/SupportingImages.tsx">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-id="pb79sjg5p" data-path="src/components/SupportingImages.tsx" />

                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-id="ct3eb0vnv" data-path="src/components/SupportingImages.tsx"></div>
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${image.gradient} rounded-full flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500`} data-id="wj3mn63ob" data-path="src/components/SupportingImages.tsx">
                    <Icon className="w-6 h-6 text-white" data-id="6zhpx9rw1" data-path="src/components/SupportingImages.tsx" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" data-id="ggyqojnms" data-path="src/components/SupportingImages.tsx">
                  <h3 className="text-xl font-bold mb-2" data-id="u38b3pa62" data-path="src/components/SupportingImages.tsx">{image.title}</h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" data-id="dw7sbya9i" data-path="src/components/SupportingImages.tsx">
                    {image.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" data-id="zle03mcqm" data-path="src/components/SupportingImages.tsx"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" data-id="b0c7wk1gc" data-path="src/components/SupportingImages.tsx"></div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

};

export default SupportingImages;