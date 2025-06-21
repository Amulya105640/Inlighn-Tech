
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import UserMenu from './UserMenu';
import { useAuth } from '@/contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { user } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  {
    name: 'Company',
    path: '#',
    dropdown: [
    { name: 'Our Mission', path: '/mission' },
    { name: 'Our Team', path: '/team' },
    { name: 'Our Story', path: '/story' },
    { name: 'Our Vision', path: '/vision' },
    { name: 'About Us', path: '/aboutus' }]

  },
  {
    name: 'What\'s Special',
    path: '/whats-special',
    highlight: true,
    icon: Sparkles
  },
  { name: 'Verify', path: '/verify' },
  { name: 'Contact', path: '/contact' }];


  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  const isDropdownActive = (dropdown: any[]) => {
    return dropdown.some((item) => location.pathname === item.path);
  };

  // Get header styling based on current page
  const getHeaderStyle = () => {
    const isHomePage = location.pathname === '/' || location.pathname === '/home';

    if (isHomePage) {
      return {
        bg: isScrolled ?
        'bg-black/80 backdrop-blur-md border-white/10' :
        'bg-transparent',
        text: 'text-white',
        border: 'border-white/20'
      };
    } else {
      return {
        bg: isScrolled ?
        'bg-white/95 backdrop-blur-md border-gray-200' :
        'bg-white/90 backdrop-blur-sm',
        text: 'text-gray-900',
        border: 'border-gray-200'
      };
    }
  };

  const headerStyle = getHeaderStyle();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle.bg} ${
      isScrolled ? 'shadow-lg border-b' : ''} ${
      headerStyle.border}`} data-id="g8glfwx2v" data-path="src/components/Header.tsx">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="pissccyao" data-path="src/components/Header.tsx">
        <div className="flex items-center justify-between h-16 lg:h-20" data-id="y4lcidfpo" data-path="src/components/Header.tsx">
          {/* Logo */}
          <div className="flex-shrink-0" data-id="3tgjsumdl" data-path="src/components/Header.tsx">
            <Logo data-id="va5ckeykt" data-path="src/components/Header.tsx" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" data-id="895jcw41a" data-path="src/components/Header.tsx">
            {navigationItems.map((item) =>
            <div key={item.name} className="relative" data-id="8o6yb7mah" data-path="src/components/Header.tsx">
                {item.dropdown ?
              <div className="relative" data-id="vocpnztb5" data-path="src/components/Header.tsx">
                    <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isDropdownActive(item.dropdown) ?
                  'bg-blue-500/20 text-blue-400' :
                  `${headerStyle.text} hover:bg-white/10`}`
                  } data-id="na19vhyia" data-path="src/components/Header.tsx">

                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === item.name ? 'rotate-180' : ''}`
                  } data-id="zgh87jesx" data-path="src/components/Header.tsx" />
                    </button>

                    <AnimatePresence data-id="o7z8l66d2" data-path="src/components/Header.tsx">
                      {activeDropdown === item.name &&
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-hidden" data-id="vvaard3ns" data-path="src/components/Header.tsx">

                          {item.dropdown.map((dropdownItem) =>
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.path}
                      className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActivePath(dropdownItem.path) ?
                      'bg-blue-50 text-blue-600 border-r-2 border-blue-600' :
                      'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`
                      }
                      onClick={() => setActiveDropdown(null)} data-id="am3dx7c39" data-path="src/components/Header.tsx">

                              {dropdownItem.name}
                            </Link>
                    )}
                        </motion.div>
                  }
                    </AnimatePresence>
                  </div> :

              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                item.highlight ?
                'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl' :
                isActivePath(item.path) ?
                'bg-blue-500/20 text-blue-400' :
                `${headerStyle.text} hover:bg-white/10`}`
                } data-id="qe5iha8mo" data-path="src/components/Header.tsx">

                    {item.icon && <item.icon className="w-4 h-4 mr-2" data-id="pi6zsz9zh" data-path="src/components/Header.tsx" />}
                    {item.name}
                  </Link>
              }
              </div>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4" data-id="ibam7x97p" data-path="src/components/Header.tsx">
            <ThemeToggle data-id="niwontxyd" data-path="src/components/Header.tsx" />
            {user ?
            <UserMenu data-id="7twphl2p4" data-path="src/components/Header.tsx" /> :

            <div className="flex items-center space-x-2" data-id="r7iffzm3c" data-path="src/components/Header.tsx">
                <Link to="/login" data-id="vnmd8h45r" data-path="src/components/Header.tsx">
                  <Button
                  variant="ghost"
                  size="sm"
                  className={`${headerStyle.text} hover:bg-white/10 border-transparent`} data-id="p0db0cjoz" data-path="src/components/Header.tsx">

                    Login
                  </Button>
                </Link>
                <Link to="/register" data-id="9711ad6de" data-path="src/components/Header.tsx">
                  <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0 shadow-lg hover:shadow-xl" data-id="gm8f5s6ty" data-path="src/components/Header.tsx">

                    Sign Up
                  </Button>
                </Link>
              </div>
            }
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2" data-id="vr8290r4f" data-path="src/components/Header.tsx">
            <ThemeToggle data-id="za2xzzstr" data-path="src/components/Header.tsx" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${headerStyle.text} hover:bg-white/10 transition-colors duration-200`}
              aria-label="Toggle menu" data-id="uhij0rtnb" data-path="src/components/Header.tsx">

              {isMenuOpen ? <X className="w-6 h-6" data-id="jksv5sjzc" data-path="src/components/Header.tsx" /> : <Menu className="w-6 h-6" data-id="nokz8oayd" data-path="src/components/Header.tsx" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence data-id="pizr1atjx" data-path="src/components/Header.tsx">
          {isMenuOpen &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden" data-id="n55plh4wm" data-path="src/components/Header.tsx">

              <div className="py-4 space-y-2 border-t border-white/10" data-id="0gk4ti1cx" data-path="src/components/Header.tsx">
                {navigationItems.map((item) =>
              <div key={item.name} data-id="hshj6rgn1" data-path="src/components/Header.tsx">
                    {item.dropdown ?
                <div data-id="covu2lcak" data-path="src/components/Header.tsx">
                        <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left font-medium transition-colors duration-200 ${
                    isDropdownActive(item.dropdown) ?
                    'bg-blue-500/20 text-blue-400' :
                    `${headerStyle.text} hover:bg-white/5`}`
                    } data-id="t8tix5jma" data-path="src/components/Header.tsx">

                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''}`
                    } data-id="6qtuamwe3" data-path="src/components/Header.tsx" />
                        </button>

                        <AnimatePresence data-id="6xp8k4095" data-path="src/components/Header.tsx">
                          {activeDropdown === item.name &&
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-1 overflow-hidden" data-id="xwv8yq4zs" data-path="src/components/Header.tsx">

                              {item.dropdown.map((dropdownItem) =>
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.path}
                        className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActivePath(dropdownItem.path) ?
                        'bg-blue-500/20 text-blue-400' :
                        `${headerStyle.text} hover:bg-white/5`}`
                        } data-id="g7f6qsp70" data-path="src/components/Header.tsx">

                                  {dropdownItem.name}
                                </Link>
                      )}
                            </motion.div>
                    }
                        </AnimatePresence>
                      </div> :

                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  item.highlight ?
                  'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' :
                  isActivePath(item.path) ?
                  'bg-blue-500/20 text-blue-400' :
                  `${headerStyle.text} hover:bg-white/5`}`
                  } data-id="j19d2ggkk" data-path="src/components/Header.tsx">

                        {item.icon && <item.icon className="w-4 h-4 mr-2" data-id="6n5hqwrmp" data-path="src/components/Header.tsx" />}
                        {item.name}
                      </Link>
                }
                  </div>
              )}

                {/* Mobile Auth Buttons */}
                {!user &&
              <div className="pt-4 border-t border-white/10 space-y-2" data-id="64uyxv55n" data-path="src/components/Header.tsx">
                    <Link to="/login" className="block" data-id="vqfgwfpw1" data-path="src/components/Header.tsx">
                      <Button
                    variant="ghost"
                    className={`w-full justify-start ${headerStyle.text} hover:bg-white/5 border-transparent`} data-id="3i9sso4sl" data-path="src/components/Header.tsx">

                        Login
                      </Button>
                    </Link>
                    <Link to="/register" className="block" data-id="rlfwyugwa" data-path="src/components/Header.tsx">
                      <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0" data-id="b2blyby9j" data-path="src/components/Header.tsx">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
              }

                {user &&
              <div className="pt-4 border-t border-white/10" data-id="aaup1ec8y" data-path="src/components/Header.tsx">
                    <UserMenu data-id="y9qfkpk4s" data-path="src/components/Header.tsx" />
                  </div>
              }
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

};

export default Header;