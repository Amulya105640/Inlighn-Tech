import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CircuitBoard, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Menu: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Login To Portal', path: '/contact' }],

    'Quick Links': [
    { name: 'Privacy Policy', path: '/contact' },
    { name: 'Term & Conditions', path: '/contact' },
    { name: 'Disclaimer', path: '/contact' },
    { name: "FAQ's", path: '/contact' }]

  };

  const socialLinks = [
  { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
  { icon: Youtube, name: 'YouTube', url: 'https://youtube.com' }];


  const contactInfo = [
  { icon: Phone, text: '+91 9368842663' },
  { icon: Mail, text: 'info@inlightntech.com' }];


  return (
    <footer className="relative bg-gradient-to-br from-brand-dark via-brand-secondary to-brand-dark overflow-hidden" data-id="lh2z4umjo" data-path="src/components/Footer.tsx">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" data-id="e2te1fp4m" data-path="src/components/Footer.tsx" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl" data-id="un5vr5nc7" data-path="src/components/Footer.tsx" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-brand-secondary/5 to-brand-primary/5 rounded-full blur-3xl" data-id="86ceyi1jd" data-path="src/components/Footer.tsx" />

      <div className="container mx-auto px-6 relative z-10" data-id="r5l2zpiiu" data-path="src/components/Footer.tsx">
        {/* Main Footer Content */}
        <div className="py-16" data-id="v5uzop5kl" data-path="src/components/Footer.tsx">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12" data-id="kj6al13hr" data-path="src/components/Footer.tsx">
            {/* Company Info */}
            <div className="lg:col-span-1" data-id="pp2e6v19b" data-path="src/components/Footer.tsx">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }} data-id="4cpd3s4xu" data-path="src/components/Footer.tsx">

                {/* Logo */}
                <div className="mb-6" data-id="x6va0z30a" data-path="src/components/Footer.tsx">
                  <Logo
                    size="md"
                    variant="dark"
                    showText={true}
                    animated={true} data-id="4sxtcq3vz" data-path="src/components/Footer.tsx" />

                </div>

                <p className="text-gray-300 mb-6 leading-relaxed" data-id="c6chv3ers" data-path="src/components/Footer.tsx">
                  At InLightn Tech, we believe that the future of education lies in 
                  bridging the gap between academic learning and industry needs.
                </p>

                {/* Social Links */}
                <div className="flex gap-3" data-id="hwpbsgu5x" data-path="src/components/Footer.tsx">
                  {socialLinks.map((social, index) =>
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ transformStyle: 'preserve-3d' }} data-id="4cjrvisnk" data-path="src/components/Footer.tsx">

                      <social.icon className="w-5 h-5" data-id="zzmdrqy5w" data-path="src/components/Footer.tsx" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) =>
            <div key={category} data-id="dcwrwrwgu" data-path="src/components/Footer.tsx">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }} data-id="vq8ypi0q2" data-path="src/components/Footer.tsx">

                  <h3 className="text-lg font-semibold text-white mb-4" data-id="wj8cownfv" data-path="src/components/Footer.tsx">
                    {category}
                  </h3>
                  <ul className="space-y-3" data-id="qbp811uj5" data-path="src/components/Footer.tsx">
                    {links.map((link, index) =>
                  <li key={index} data-id="ch99an9zt" data-path="src/components/Footer.tsx">
                        <Link
                      to={link.path}
                      className="text-gray-300 hover:text-brand-primary transition-colors duration-200 text-sm" data-id="taiigc6h4" data-path="src/components/Footer.tsx">

                          <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block" data-id="e6if7pcas" data-path="src/components/Footer.tsx">

                            {link.name}
                          </motion.span>
                        </Link>
                      </li>
                  )}
                  </ul>
                </motion.div>
              </div>
            )}

            {/* Follow Us & Contact */}
            <div data-id="nps17q70q" data-path="src/components/Footer.tsx">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }} data-id="ifcgakjy8" data-path="src/components/Footer.tsx">

                <h3 className="text-lg font-semibold text-white mb-4" data-id="vq8ytd8tw" data-path="src/components/Footer.tsx">
                  Follow Us
                </h3>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6" data-id="hpowk1hkt" data-path="src/components/Footer.tsx">
                  {contactInfo.map((item, index) =>
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }} data-id="3htcesspb" data-path="src/components/Footer.tsx">

                      <item.icon className="w-4 h-4 text-brand-primary" data-id="gxokev75g" data-path="src/components/Footer.tsx" />
                      <span className="text-sm" data-id="eqv6seixx" data-path="src/components/Footer.tsx">{item.text}</span>
                    </motion.div>
                  )}
                </div>

                {/* Office Address */}
                <div className="mb-4" data-id="qovb2dj5c" data-path="src/components/Footer.tsx">
                  <motion.div
                    className="flex items-start gap-3 text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }} data-id="6ockpyhri" data-path="src/components/Footer.tsx">

                    <MapPin className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" data-id="uyllw8vh2" data-path="src/components/Footer.tsx" />
                    <div className="text-sm" data-id="a4dtbwo8r" data-path="src/components/Footer.tsx">
                      <div className="font-medium text-white mb-1" data-id="euc7ujj3z" data-path="src/components/Footer.tsx">Corporate Office- Office No: VO-301,</div>
                      <div data-id="crc6pwco9" data-path="src/components/Footer.tsx">WeWork Prestige Central, Ground Floor,</div>
                      <div data-id="ob28mm6mr" data-path="src/components/Footer.tsx">36, Infantry Rd, Tasker Town, Shivaji Nagar,</div>
                      <div data-id="med1yr1eh" data-path="src/components/Footer.tsx">Bengaluru, Karnataka 560001</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" data-id="ikczwlu6c" data-path="src/components/Footer.tsx" />

        {/* Bottom Footer */}
        <div className="py-8" data-id="8sikhmlqs" data-path="src/components/Footer.tsx">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" data-id="rc6hwd42v" data-path="src/components/Footer.tsx">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-sm text-center md:text-left" data-id="ihbs86usf" data-path="src/components/Footer.tsx">

              <div data-id="f3fxsr6wl" data-path="src/components/Footer.tsx">
                Copyright 2025{' '}
                <span className="text-brand-primary font-medium" data-id="i2ld9tozw" data-path="src/components/Footer.tsx">InLightn Tech</span>
                {' '}| All Rights Reserved | Design By{' '}
                <span className="text-brand-primary font-medium" data-id="e4s1t4pda" data-path="src/components/Footer.tsx">Gdscreatives</span>
              </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} data-id="ctvmagf4v" data-path="src/components/Footer.tsx">

              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 group" data-id="4frxz3o4i" data-path="src/components/Footer.tsx">

                <span className="mr-2 text-sm" data-id="l44vvjwgi" data-path="src/components/Footer.tsx">Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" data-id="f742id5w5" data-path="src/components/Footer.tsx" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-brand-primary rounded-full opacity-30"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-id="2o2oteu2k" data-path="src/components/Footer.tsx" />


        <motion.div
          className="absolute bottom-1/4 right-20 w-3 h-3 bg-brand-accent rounded-full opacity-40"
          animate={{
            y: [10, -10, 10],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} data-id="22g0b062x" data-path="src/components/Footer.tsx" />

      </div>
    </footer>);

};

export default Footer;