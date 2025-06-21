import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Phone,
  Mail } from
'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  quickReplies?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setTimeout(() => {
        addBotMessage(
          "Hi there! 👋 I'm your virtual assistant at Inlighn Tech. How can I help you today?",
          ['View Programs', 'Admission Info', 'Contact Details', 'Verify Certificate']
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, quickReplies?: string[]) => {
    const botMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      quickReplies
    };
    setMessages((prev) => [...prev, botMessage]);
  };

  const addUserMessage = (text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    processUserMessage(inputValue);
    setInputValue('');
  };

  const handleQuickReply = (reply: string) => {
    addUserMessage(reply);
    processUserMessage(reply);
  };

  const processUserMessage = (message: string) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lowerMessage = message.toLowerCase();

      if (lowerMessage.includes('program') || lowerMessage.includes('course')) {
        addBotMessage(
          "We offer 4 comprehensive internship programs:\n\n🔒 Cybersecurity (6 months)\n💻 Full Stack Development (8 months)\n📊 Data Science (10 months)\n📈 Data Analysis (5 months)\n\nWhich program interests you most?",
          ['Cybersecurity', 'Full Stack', 'Data Science', 'Data Analysis']
        );
      } else if (lowerMessage.includes('cybersecurity') || lowerMessage.includes('security')) {
        addBotMessage(
          "Great choice! Our Cybersecurity program covers:\n\n• Ethical Hacking\n• Network Security\n• Malware Analysis\n• SIEM Tools\n• Penetration Testing\n\nDuration: 6 months\nLevel: Intermediate\n\nWould you like to know about admission requirements or fees?",
          ['Admission Requirements', 'Fees', 'Apply Now']
        );
      } else if (lowerMessage.includes('full stack') || lowerMessage.includes('development')) {
        addBotMessage(
          "Excellent! Our Full Stack Development program includes:\n\n• React & Angular\n• Node.js & Express\n• MongoDB & SQL\n• Cloud Deployment\n• API Development\n\nDuration: 8 months\nLevel: Beginner to Advanced\n\nWhat would you like to know more about?",
          ['Prerequisites', 'Job Prospects', 'Apply Now']
        );
      } else if (lowerMessage.includes('data science')) {
        addBotMessage(
          "Perfect! Our Data Science program covers:\n\n• Python Programming\n• Machine Learning\n• Deep Learning\n• MLOps\n• Big Data Analytics\n\nDuration: 10 months\nLevel: Advanced\n\nInterested in learning more?",
          ['Career Opportunities', 'Prerequisites', 'Apply Now']
        );
      } else if (lowerMessage.includes('data analysis')) {
        addBotMessage(
          "Great! Our Data Analysis program includes:\n\n• SQL Mastery\n• Power BI\n• Advanced Excel\n• Tableau\n• Statistical Analysis\n\nDuration: 5 months\nLevel: Beginner\n\nHow can I help you further?",
          ['Job Market', 'Certification', 'Apply Now']
        );
      } else if (lowerMessage.includes('admission') || lowerMessage.includes('apply')) {
        addBotMessage(
          "Admission Process:\n\n1. Fill out application form\n2. Submit required documents\n3. Technical assessment\n4. Personal interview\n5. Program enrollment\n\nRequirements:\n• High school diploma\n• Basic computer skills\n• Passion for technology\n\nReady to start your application?",
          ['Start Application', 'Required Documents', 'Contact Admissions']
        );
      } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
        addBotMessage(
          "Program Fees:\n\n🔒 Cybersecurity: $2,999\n💻 Full Stack: $3,499\n📊 Data Science: $3,999\n📈 Data Analysis: $2,499\n\n✅ Includes:\n• All course materials\n• Industry certifications\n• Career support\n• Job placement assistance\n\nFlexible payment plans available!",
          ['Payment Plans', 'Scholarships', 'Apply Now']
        );
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
        addBotMessage(
          "Contact Information:\n\n📧 Email: info@inlightech.com\n📞 Phone: +1 (555) 123-4567\n📍 Address: 123 Tech Street, Innovation City\n\n🕐 Hours: Mon-Fri, 9:00 AM - 6:00 PM\n\nWould you like to schedule a call or visit our campus?",
          ['Schedule Call', 'Campus Visit', 'Send Email']
        );
      } else if (lowerMessage.includes('verify') || lowerMessage.includes('certificate')) {
        addBotMessage(
          "Certificate Verification:\n\nYou can verify any certificate issued by Inlighn Tech using our online verification system.\n\nSimply enter the certificate ID (format: INLT-XX-YYYY-###) to authenticate its validity.\n\nWould you like to verify a certificate now?",
          ['Verify Certificate', 'Lost Certificate', 'Contact Support']
        );
      } else if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('placement')) {
        addBotMessage(
          "Career Support:\n\n✅ 95% job placement rate\n✅ Average salary increase: 150%\n✅ Industry partnerships with 50+ companies\n✅ Dedicated career counselors\n✅ Interview preparation\n✅ Resume building workshops\n\nOur graduates work at top companies like Google, Microsoft, and Amazon!",
          ['Success Stories', 'Partner Companies', 'Career Services']
        );
      } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        addBotMessage(
          "Hello! Welcome to Inlighn Tech! 🚀\n\nI'm here to help you with:\n• Program information\n• Admission process\n• Fees and scholarships\n• Career opportunities\n• Technical support\n\nWhat would you like to know?",
          ['View Programs', 'Admission Info', 'Career Support', 'Contact Us']
        );
      } else {
        addBotMessage(
          "I understand you're looking for information. Here are some things I can help you with:\n\n• Program details and curriculum\n• Admission requirements\n• Fees and payment options\n• Career opportunities\n• Certificate verification\n• Contact information\n\nWhat specifically would you like to know?",
          ['Programs', 'Admissions', 'Careers', 'Support']
        );
      }
    }, 1000 + Math.random() * 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence data-id="mgt7kcp5f" data-path="src/components/Chatbot.tsx">
        {!isOpen &&
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} data-id="s6m05lqwi" data-path="src/components/Chatbot.tsx">

            <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300" data-id="t6872evfi" data-path="src/components/Chatbot.tsx">

              <MessageCircle size={28} className="text-white" data-id="581nhyfm5" data-path="src/components/Chatbot.tsx" />
            </Button>
            <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }} data-id="tnwltysb2" data-path="src/components/Chatbot.tsx">

              1
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence data-id="bhrgc6ss0" data-path="src/components/Chatbot.tsx">
        {isOpen &&
        <motion.div
          className={`fixed bottom-6 right-6 z-50 ${
          isMinimized ? 'w-80' : 'w-96'} ${
          isMinimized ? 'h-16' : 'h-[600px]'} max-h-[90vh]`}
          initial={{ scale: 0, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }} data-id="nj5v5et8z" data-path="src/components/Chatbot.tsx">

            <Card className="h-full bg-slate-900/95 backdrop-blur-lg border-slate-700 shadow-2xl overflow-hidden" data-id="jf8j6x541" data-path="src/components/Chatbot.tsx">
              {/* Header */}
              <CardHeader className="p-4 bg-gradient-to-r from-cyan-600 to-purple-700" data-id="uu03bbkej" data-path="src/components/Chatbot.tsx">
                <div className="flex items-center justify-between" data-id="hd8er6qqd" data-path="src/components/Chatbot.tsx">
                  <div className="flex items-center space-x-3" data-id="i15sx8dcw" data-path="src/components/Chatbot.tsx">
                    <Avatar className="w-10 h-10" data-id="jorfieaqv" data-path="src/components/Chatbot.tsx">
                      <AvatarFallback className="bg-white text-purple-600" data-id="py5alz8ab" data-path="src/components/Chatbot.tsx">
                        <Bot size={20} data-id="cftmvpsfu" data-path="src/components/Chatbot.tsx" />
                      </AvatarFallback>
                    </Avatar>
                    <div data-id="3o7e1lck4" data-path="src/components/Chatbot.tsx">
                      <CardTitle className="text-white text-lg" data-id="erlc2t2qx" data-path="src/components/Chatbot.tsx">Inlighn Assistant</CardTitle>
                      <div className="flex items-center space-x-1" data-id="uwsjj6id5" data-path="src/components/Chatbot.tsx">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" data-id="b5oh57y9o" data-path="src/components/Chatbot.tsx" />
                        <span className="text-purple-100 text-sm" data-id="dmtynk565" data-path="src/components/Chatbot.tsx">Online</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2" data-id="lvekb8srz" data-path="src/components/Chatbot.tsx">
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20" data-id="xp9jvpcp5" data-path="src/components/Chatbot.tsx">

                      {isMinimized ? <Maximize2 size={18} data-id="the0sj2ok" data-path="src/components/Chatbot.tsx" /> : <Minimize2 size={18} data-id="l006t3fg7" data-path="src/components/Chatbot.tsx" />}
                    </Button>
                    <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20" data-id="nkbi6uwdv" data-path="src/components/Chatbot.tsx">

                      <X size={18} data-id="71hzqy2y5" data-path="src/components/Chatbot.tsx" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {!isMinimized &&
            <>
                  {/* Messages */}
                  <CardContent className="flex-1 p-0 overflow-hidden" data-id="7adg1r53u" data-path="src/components/Chatbot.tsx">
                    <div className="h-96 overflow-y-auto p-4 space-y-4" data-id="vofgz29o5" data-path="src/components/Chatbot.tsx">
                      {messages.map((message) =>
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }} data-id="tsr4vizdn" data-path="src/components/Chatbot.tsx">

                          <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`} data-id="xvmn48zxa" data-path="src/components/Chatbot.tsx">
                            <div
                        className={`p-3 rounded-2xl ${
                        message.sender === 'user' ?
                        'bg-gradient-to-r from-cyan-500 to-purple-600 text-white ml-auto' :
                        'bg-slate-800 text-white'}`
                        } data-id="xg5gaxyxr" data-path="src/components/Chatbot.tsx">

                              <div className="whitespace-pre-line text-sm" data-id="rwl100n38" data-path="src/components/Chatbot.tsx">{message.text}</div>
                            </div>
                            <div className={`text-xs text-gray-400 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`} data-id="uxkzjkgrb" data-path="src/components/Chatbot.tsx">
                              {formatTime(message.timestamp)}
                            </div>
                            
                            {/* Quick Replies */}
                            {message.quickReplies &&
                      <div className="flex flex-wrap gap-2 mt-2" data-id="lfa6pl27z" data-path="src/components/Chatbot.tsx">
                                {message.quickReplies.map((reply, index) =>
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white" data-id="wkydgwlu3" data-path="src/components/Chatbot.tsx">

                                    {reply}
                                  </Button>
                        )}
                              </div>
                      }
                          </div>
                          
                          <div className={`flex items-end ${message.sender === 'user' ? 'order-1 mr-2' : 'order-2 ml-2'}`} data-id="djk4ax6ba" data-path="src/components/Chatbot.tsx">
                            <Avatar className="w-8 h-8" data-id="e9iezowr4" data-path="src/components/Chatbot.tsx">
                              <AvatarFallback className={message.sender === 'user' ? 'bg-cyan-500' : 'bg-purple-600'} data-id="jgp8cgtym" data-path="src/components/Chatbot.tsx">
                                {message.sender === 'user' ? <User size={16} data-id="056ld1jgr" data-path="src/components/Chatbot.tsx" /> : <Bot size={16} data-id="h5e590f8l" data-path="src/components/Chatbot.tsx" />}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </motion.div>
                  )}
                      
                      {/* Typing Indicator */}
                      {isTyping &&
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }} data-id="qo7bwss4k" data-path="src/components/Chatbot.tsx">

                          <div className="flex items-end space-x-2" data-id="07526we42" data-path="src/components/Chatbot.tsx">
                            <Avatar className="w-8 h-8" data-id="zyszwmjus" data-path="src/components/Chatbot.tsx">
                              <AvatarFallback className="bg-purple-600" data-id="3e73ed56o" data-path="src/components/Chatbot.tsx">
                                <Bot size={16} data-id="ayow9j3xp" data-path="src/components/Chatbot.tsx" />
                              </AvatarFallback>
                            </Avatar>
                            <div className="bg-slate-800 p-3 rounded-2xl" data-id="rfkgoaa2u" data-path="src/components/Chatbot.tsx">
                              <div className="flex space-x-1" data-id="m3ygzsots" data-path="src/components/Chatbot.tsx">
                                {[0, 1, 2].map((i) =>
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: i * 0.2
                            }} data-id="5kq8512ag" data-path="src/components/Chatbot.tsx" />

                          )}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                  }
                      <div ref={messagesEndRef} data-id="qy6fcanq9" data-path="src/components/Chatbot.tsx" />
                    </div>
                  </CardContent>

                  {/* Input */}
                  <div className="p-4 border-t border-slate-700" data-id="xm9szdc38" data-path="src/components/Chatbot.tsx">
                    <div className="flex space-x-2" data-id="e9nzhdey6" data-path="src/components/Chatbot.tsx">
                      <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} data-id="et7gzctnv" data-path="src/components/Chatbot.tsx" />

                      <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700" data-id="tx0mvjy8f" data-path="src/components/Chatbot.tsx">

                        <Send size={18} data-id="2q6e1mkxz" data-path="src/components/Chatbot.tsx" />
                      </Button>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="flex justify-center space-x-2 mt-3" data-id="32andx3vx" data-path="src/components/Chatbot.tsx">
                      <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                    onClick={() => handleQuickReply('Contact Details')} data-id="z3r0uxw83" data-path="src/components/Chatbot.tsx">

                        <Phone size={14} className="mr-1" data-id="sait8dcck" data-path="src/components/Chatbot.tsx" />
                        Call
                      </Button>
                      <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white"
                    onClick={() => handleQuickReply('Send Email')} data-id="y4hya6y6r" data-path="src/components/Chatbot.tsx">

                        <Mail size={14} className="mr-1" data-id="h0ljaybpo" data-path="src/components/Chatbot.tsx" />
                        Email
                      </Button>
                    </div>
                  </div>
                </>
            }
            </Card>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};

export default Chatbot;