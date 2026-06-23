"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  isTyping?: boolean;
};

const INITIAL_MESSAGES: Message[] = [
  { id: "1", text: "Hi there! 👋 Welcome to NexiOG Technologies.", sender: "bot" },
  { id: "2", text: "How can we help you engineer your next big idea today?", sender: "bot" }
];

const QUICK_REPLIES = [
  "Our Services",
  "Pricing & Cost",
  "Contact Sales"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const generateBotResponse = (userText: string) => {
    const text = userText.toLowerCase();
    
    setTimeout(() => {
      // Remove typing indicator
      setMessages((prev) => prev.filter((msg) => !msg.isTyping));

      let botReply = "I'm still learning! For detailed inquiries, please email us at nexiogtechnologies@gmail.com or call +91 79808 88810.";
      
      // Greeting
      if (/\b(hi|hello|hey|greetings|morning|afternoon)\b/.test(text)) {
        botReply = "Hello! How can I help you today?";
      } 
      // About NexiOG
      else if (text.includes("who are you") || text.includes("what is nexiog") || text.includes("about you") || text.includes("what do you do") || text.includes("company")) {
        botReply = "NexiOG Technologies is an innovative digital agency. We design, build, rank, and automate enterprise systems. We specialize in Web & App Development, Custom Software, and Digital Marketing.";
      } 
      // Services
      else if (text.includes("service") || text.includes("what do you offer")) {
        botReply = "Our core services include: 1. Premium Web Development (Next.js/React)\n2. Mobile App Development\n3. Custom Enterprise Software (ERP/CRM)\n4. SEO & Digital Marketing.";
      } 
      // Web Development
      else if (text.includes("web") || text.includes("website") || text.includes("site")) {
        botReply = "We build lightning-fast, high-converting websites using modern tech like Next.js, React, and TailwindCSS. Do you have a web project in mind?";
      }
      // App Development
      else if (text.includes("app") || text.includes("mobile") || text.includes("ios") || text.includes("android")) {
        botReply = "We develop scalable, user-friendly mobile applications for both iOS and Android platforms to help your business reach customers anywhere.";
      }
      // Founders / Team
      else if (text.includes("team") || text.includes("founder") || text.includes("shounak") || text.includes("koustav") || text.includes("owner")) {
        botReply = "NexiOG is led by Shounak Bhattacharya (Co-Founder & Lead Engineer) and Koustav Biswas (Co-Founder & Design Lead). We have a dedicated team of experts ready to engineer your vision.";
      }
      // Contact / Reach
      else if (text.includes("contact") || text.includes("reach") || text.includes("email") || text.includes("phone") || text.includes("call") || text.includes("whatsapp")) {
        botReply = "You can easily reach us via email at nexiogtechnologies@gmail.com or call/WhatsApp us directly at +91 79808 88810.";
      } 
      // Location
      else if (text.includes("where") || text.includes("location") || text.includes("address") || text.includes("office") || text.includes("based")) {
        botReply = "We are a global team! Our HQ is in Kolkata, India (Sector V, Salt Lake City), and we also have a branch office in Dubai Silicon Oasis, UAE.";
      }
      // Pricing
      else if (text.includes("price") || text.includes("cost") || text.includes("pricing") || text.includes("budget") || text.includes("charge")) {
        botReply = "Every project is unique, so our pricing depends on your specific requirements. We offer flexible engagement models. Contact us at nexiogtechnologies@gmail.com for a custom quote!";
      }
      // Hiring / Jobs
      else if (text.includes("hire") || text.includes("job") || text.includes("career") || text.includes("internship") || text.includes("vacancy")) {
        botReply = "We are always looking for top talent! Please send your resume to our email at nexiogtechnologies@gmail.com and we'll get back to you if there's a fit.";
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), text: botReply, sender: "bot" }]);
    }, 1200); // 1.2s typing delay
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), text, sender: "user" };
    
    // Add temporary typing message
    const typingMsg: Message = { id: "typing", text: "Typing...", sender: "bot", isTyping: true };
    
    setMessages((prev) => [...prev, userMsg, typingMsg]);
    setInputValue("");
    
    generateBotResponse(text);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1, y: [0, -8, 0] }}
        transition={{ 
          scale: { type: "spring", stiffness: 260, damping: 20 },
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 text-white rounded-full flex items-center justify-center cursor-pointer 
                   bg-gradient-to-br from-[#d8b4fe] via-[#814ac8] to-[#4c1d95]
                   shadow-[inset_0_4px_10px_rgba(255,255,255,0.5),0_10px_20px_rgba(129,74,200,0.6),0_0_40px_rgba(129,74,200,0.4)]
                   border border-[#d8b4fe]/30 backdrop-blur-lg"
        aria-label="Toggle Chatbot"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 animate-[pulse_2s_ease-in-out_infinite]" />
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-lg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] bg-[#0a0514] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary to-[#4a1c7d] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-2 relative text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#4a1c7d] rounded-full" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Nexi</h3>
                <p className="text-white/70 text-xs">Usually replies instantly</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-white rounded-bl-sm"
                    }`}
                  >
                    {msg.isTyping ? (
                      <div className="flex gap-1.5 items-center h-5">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs font-bold text-primary border border-primary/30 bg-primary/5 hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-11 h-11 rounded-xl bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
