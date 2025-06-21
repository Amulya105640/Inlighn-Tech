import { Code, Shield, Brain, Smartphone, Database, Cloud, Award, Users, Clock, CheckCircle } from 'lucide-react';

export interface Program {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: any;
  bannerImage: string;
  duration: string;
  level: string;
  fee: string;
  technologies: string[];
  gradient: string;
  projects: string[];
  outcomes: string[];
  modules: string[];
  eligibility: string[];
  benefits: {
    certification: boolean;
    internship: boolean;
    placement: boolean;
    portfolio: boolean;
  };
  certificateImage: string;
  featured: boolean;
}

export const programs: Program[] = [
{
  id: 'web-development',
  title: 'Web Development Essentials',
  description: 'Master modern web development with React, Node.js, and cloud technologies. Build scalable applications from frontend to backend with hands-on projects and expert mentorship.',
  shortDescription: 'Master modern web development with React, Node.js, and cloud technologies.',
  icon: Code,
  bannerImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
  duration: '12 weeks',
  level: 'Beginner to Advanced',
  fee: '$2,499',
  technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'TypeScript'],
  gradient: 'from-brand-secondary to-brand-accent',
  projects: ['E-commerce Platform', 'Social Media App', 'Real-time Chat Application'],
  outcomes: ['Full-stack Developer', 'Frontend Specialist', 'Backend Engineer'],
  modules: [
  'HTML5 & CSS3 Fundamentals',
  'JavaScript ES6+ & TypeScript',
  'React.js & Component Architecture',
  'Node.js & Express Framework',
  'Database Design with MongoDB',
  'RESTful API Development',
  'Authentication & Security',
  'Cloud Deployment with AWS',
  'Testing & DevOps Practices'],

  eligibility: [
  'Basic computer literacy',
  'High school diploma or equivalent',
  'Passion for technology and problem-solving',
  'Commitment to 10-15 hours per week'],

  benefits: {
    certification: true,
    internship: true,
    placement: true,
    portfolio: true
  },
  certificateImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop',
  featured: true
},
{
  id: 'ai-introduction',
  title: 'Introduction to AI',
  description: 'Dive into artificial intelligence and machine learning fundamentals. Learn to build intelligent systems and understand the principles behind modern AI applications.',
  shortDescription: 'Dive into artificial intelligence and machine learning fundamentals.',
  icon: Brain,
  bannerImage: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop',
  duration: '8 weeks',
  level: 'Beginner to Intermediate',
  fee: '$1,899',
  technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
  gradient: 'from-brand-accent to-brand-primary',
  projects: ['Image Classification Model', 'Chatbot Development', 'Predictive Analytics Dashboard'],
  outcomes: ['AI Specialist', 'Data Analyst', 'ML Engineer'],
  modules: [
  'Introduction to AI & Machine Learning',
  'Python Programming for AI',
  'Data Processing with Pandas & NumPy',
  'Statistical Analysis & Visualization',
  'Supervised Learning Algorithms',
  'Unsupervised Learning Techniques',
  'Neural Networks Fundamentals',
  'Natural Language Processing',
  'Computer Vision Basics',
  'AI Ethics & Responsible AI'],

  eligibility: [
  'Basic programming experience (any language)',
  'High school level mathematics',
  'Interest in artificial intelligence',
  'Commitment to 8-12 hours per week'],

  benefits: {
    certification: true,
    internship: true,
    placement: true,
    portfolio: true
  },
  certificateImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop',
  featured: true
},
{
  id: 'ux-design-masterclass',
  title: 'UI/UX Design Masterclass',
  description: 'Learn user-centered design principles and create beautiful, functional interfaces. Master industry-standard tools and design thinking methodologies.',
  shortDescription: 'Learn user-centered design principles and create beautiful, functional interfaces.',
  icon: Smartphone,
  bannerImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop',
  duration: '10 weeks',
  level: 'Beginner to Advanced',
  fee: '$2,199',
  technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'],
  gradient: 'from-brand-primary to-brand-secondary',
  projects: ['Mobile App Design', 'Website Redesign', 'Design System Creation'],
  outcomes: ['UI/UX Designer', 'Product Designer', 'Visual Designer'],
  modules: [
  'Design Thinking & User Research',
  'Information Architecture',
  'Wireframing & Prototyping',
  'Visual Design Principles',
  'Typography & Color Theory',
  'User Interface Design',
  'Interaction Design',
  'Usability Testing',
  'Design Systems & Style Guides',
  'Responsive Design Principles'],

  eligibility: [
  'Creative mindset and attention to detail',
  'Basic computer skills',
  'Interest in user experience design',
  'Commitment to 8-12 hours per week'],

  benefits: {
    certification: true,
    internship: true,
    placement: true,
    portfolio: true
  },
  certificateImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop',
  featured: true
},
{
  id: 'cybersecurity-specialist',
  title: 'Cybersecurity Specialist',
  description: 'Learn ethical hacking, penetration testing, and security analysis. Protect digital assets and infrastructure with advanced security techniques.',
  shortDescription: 'Learn ethical hacking, penetration testing, and security analysis.',
  icon: Shield,
  bannerImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  duration: '16 weeks',
  level: 'Intermediate to Expert',
  fee: '$3,299',
  technologies: ['Kali Linux', 'Metasploit', 'Wireshark', 'Python', 'OWASP', 'Nmap'],
  gradient: 'from-brand-primary to-brand-secondary',
  projects: ['Vulnerability Assessment', 'Penetration Testing Lab', 'Security Audit Report'],
  outcomes: ['Ethical Hacker', 'Security Analyst', 'Penetration Tester'],
  modules: [
  'Cybersecurity Fundamentals',
  'Network Security Principles',
  'Linux Systems Administration',
  'Ethical Hacking Methodology',
  'Vulnerability Assessment',
  'Penetration Testing Techniques',
  'Web Application Security',
  'Malware Analysis',
  'Incident Response',
  'Security Compliance & Frameworks'],

  eligibility: [
  'Strong foundation in networking',
  'Basic Linux command line knowledge',
  'Bachelor\'s degree in IT or related field (preferred)',
  'Commitment to 15-20 hours per week'],

  benefits: {
    certification: true,
    internship: true,
    placement: true,
    portfolio: false
  },
  certificateImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop',
  featured: false
},
{
  id: 'data-science',
  title: 'Data Science & Analytics',
  description: 'Analyze complex datasets and extract valuable insights. Master statistical analysis, data visualization, and machine learning techniques.',
  shortDescription: 'Analyze complex datasets and extract valuable insights.',
  icon: Database,
  bannerImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  duration: '12 weeks',
  level: 'Beginner to Advanced',
  fee: '$2,799',
  technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Apache Spark'],
  gradient: 'from-brand-secondary to-brand-primary',
  projects: ['Business Intelligence Dashboard', 'Predictive Model', 'Data Pipeline'],
  outcomes: ['Data Scientist', 'Business Analyst', 'Data Engineer'],
  modules: [
  'Statistics & Probability',
  'Python for Data Science',
  'SQL & Database Management',
  'Data Cleaning & Preprocessing',
  'Exploratory Data Analysis',
  'Data Visualization',
  'Machine Learning Algorithms',
  'Big Data Technologies',
  'Business Intelligence Tools',
  'Data Storytelling'],

  eligibility: [
  'Strong analytical and mathematical skills',
  'Basic programming experience',
  'Bachelor\'s degree (any field)',
  'Commitment to 12-15 hours per week'],

  benefits: {
    certification: true,
    internship: true,
    placement: true,
    portfolio: true
  },
  certificateImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop',
  featured: false
},
{
  id: 'cloud-architecture',
  title: 'Cloud Architecture',
  description: 'Design and deploy scalable cloud solutions. Master AWS, Azure, and Google Cloud platforms with hands-on experience in cloud technologies.',
  shortDescription: 'Design and deploy scalable cloud solutions.',
  icon: Cloud,
  bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  duration: '8 weeks',
  level: 'Intermediate to Expert',
  fee: '$2,999',
  technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  gradient: 'from-brand-primary to-brand-accent',
  projects: ['Microservices Architecture', 'Serverless Application', 'CI/CD Pipeline'],
  outcomes: ['Cloud Architect', 'DevOps Engineer', 'Site Reliability Engineer'],
  modules: [
  'Cloud Computing Fundamentals',
  'AWS Core Services',
  'Azure Platform Overview',
  'Containerization with Docker',
  'Kubernetes Orchestration',
  'Infrastructure as Code',
  'CI/CD Pipeline Design',
  'Cloud Security & Compliance',
  'Monitoring & Logging',
  'Cost Optimization Strategies'],

  eligibility: [
  'Strong background in system administration',
  'Experience with Linux/Unix systems',
  'Understanding of networking concepts',
  'Commitment to 10-15 hours per week'],

  benefits: {
    certification: true,
    internship: true,
    placement: true,
    portfolio: false
  },
  certificateImage: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=2070&auto=format&fit=crop',
  featured: false
}];


export const getProgramById = (id: string): Program | undefined => {
  return programs.find((program) => program.id === id);
};

export const getFeaturedPrograms = (): Program[] => {
  return programs.filter((program) => program.featured);
};