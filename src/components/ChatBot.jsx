import React, { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  User,
  Bot,
  Clock,
  CheckCheck,
  GraduationCap,
  Scale,
  BookOpen,
  Briefcase,
  Building2,
  Plane,
  BookMarked,
} from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [showOptions, setShowOptions] = useState(true);
  const [selectedExam, setSelectedExam] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hey! I'm CLara 😊",
      timestamp: new Date(),
    },
    {
      id: 2,
      type: "bot",
      text: "Your prep buddy from Career Launcher - here to make your journey smarter, simpler and stress-free.",
      timestamp: new Date(),
    },
    {
      id: 3,
      type: "bot",
      text: "Ready to begin? Let's Go! 💪",
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef(null);

  const examOptions = [
    { id: "mba", label: "MBA", Icon: GraduationCap },
    { id: "law", label: "Law", Icon: Scale },
    { id: "cuet", label: "CUET", Icon: BookOpen },
    { id: "ipm", label: "IPM/BBA", Icon: Briefcase },
    { id: "civil", label: "Civil Service", Icon: Building2 },
    { id: "abroad", label: "Study Abroad", Icon: Plane },
    { id: "tuitions", label: "Tuitions-Class 8-12", Icon: BookMarked },
  ];

  const quickReplies = [
    "Course details",
    "Fee structure",
    "Batch timings",
    "Study materials",
    "Success stories",
    "Book a demo class",
  ];

  const responses = {
    greeting: [
      "Hello! How can I assist you today?",
      "Hi there! What would you like to know about our programs?",
      "Welcome! I'm here to help with all your queries.",
    ],
    courseDetails:
      "Our comprehensive programs are designed by industry experts with 25+ years of experience. We offer:\n\n✓ Live interactive classes\n✓ Recorded lectures for revision\n✓ Regular mock tests\n✓ Personalized doubt clearing\n✓ Study material (print + digital)\n\nWould you like to know about a specific course?",
    feeStructure:
      "Our fee structure is transparent and competitive:\n\n• Flexible payment plans available\n• EMI options with 0% interest\n• Early bird discounts\n• Scholarship opportunities\n\nI can share detailed fee information via email or call. Would you prefer that?",
    batchTimings:
      "We offer flexible batch timings to suit your schedule:\n\n🌅 Morning: 6:00 AM - 9:00 AM\n🌞 Day: 10:00 AM - 1:00 PM\n🌆 Evening: 4:00 PM - 7:00 PM\n🌙 Night: 7:30 PM - 10:30 PM\n\nWeekend batches also available!\n\nWhich timing works best for you?",
    studyMaterial:
      "Our study materials include:\n\n📚 Comprehensive textbooks\n💻 Online learning portal access\n📝 Practice worksheets & tests\n🎥 Video lectures library\n📱 Mobile app for on-the-go learning\n\nAll materials are regularly updated as per latest exam patterns!",
    demo: "Excellent! I'd love to book a demo class for you.\n\nPlease share:\n1. Your name\n2. Contact number\n3. Preferred date & time\n\nOr click 'Schedule Demo' button below!",
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 3) {
      setTimeout(() => {
        addBotMessage(
          "How can I help you? Please type your query or select from the options below..."
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "bot",
          text: text,
          timestamp: new Date(),
          read: false,
        },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: inputMessage,
      timestamp: new Date(),
      read: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    const query = inputMessage.toLowerCase();
    setInputMessage("");

    // Smart response logic
    setTimeout(() => {
      let response = "";

      if (
        query.includes("hello") ||
        query.includes("hi") ||
        query.includes("hey")
      ) {
        response =
          responses.greeting[
            Math.floor(Math.random() * responses.greeting.length)
          ];
      } else if (query.includes("course") || query.includes("program")) {
        response = responses.courseDetails;
      } else if (
        query.includes("fee") ||
        query.includes("cost") ||
        query.includes("price")
      ) {
        response = responses.feeStructure;
      } else if (
        query.includes("batch") ||
        query.includes("timing") ||
        query.includes("schedule")
      ) {
        response = responses.batchTimings;
      } else if (query.includes("material") || query.includes("book")) {
        response = responses.studyMaterial;
      } else if (query.includes("demo") || query.includes("trial")) {
        response = responses.demo;
      } else {
        response =
          "Thank you for your query! I understand you're asking about " +
          inputMessage +
          ".\n\nOur expert counselors can provide detailed information. Would you like me to:\n\n1. Connect you with a counselor\n2. Send detailed information via email\n3. Schedule a callback\n\nPlease let me know your preference!";
      }

      addBotMessage(response);
    }, 800);
  };

  const handleOptionClick = (option) => {
    setSelectedExam(option.id);
    const userMessage = {
      id: Date.now(),
      type: "user",
      text: option.label,
      timestamp: new Date(),
      read: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setShowOptions(false);

    addBotMessage(
      `Great choice! You're interested in ${option.label} preparation.\n\nI can help you with:\n\n✅ Course curriculum & structure\n✅ Admission requirements\n✅ Fee details & payment plans\n✅ Batch schedules & timings\n✅ Study materials & resources\n✅ Success rate & testimonials\n\nWhat specific information would you like to know?`,
      1200
    );

    setTimeout(() => {
      setShowOptions(false);
    }, 1300);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* Floating Chat Button with notification badge */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full p-4 shadow-2xl hover:shadow-orange-300 hover:scale-110 transition-all duration-300"
            aria-label="Open chat"
          >
            <MessageCircle className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              1
            </span>
          </button>
          <div className="absolute bottom-20 right-0 bg-white px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap animate-bounce">
            Need help? Chat with CLara! 👋
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-2rem)] h-[650px] max-h-[calc(100vh-2rem)] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-slideUp border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white p-5 rounded-t-2xl flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-10 animate-shimmer"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-orange-500" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">CLara</h3>
                <p className="text-xs text-orange-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Responds instantly
                </p>
              </div>
            </div>
            <div className="flex gap-2 relative z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-orange-50 px-4 py-2.5 text-xs text-gray-600 border-b border-orange-100 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
            <span>Powered by AI • Responses should be verified</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                } animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {message.type === "bot" && (
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-orange-600" />
                  </div>
                )}
                <div
                  className={`flex flex-col ${
                    message.type === "user" ? "items-end" : "items-start"
                  } max-w-[75%]`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-br-none shadow-md"
                        : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 mt-1 px-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-400">
                      {formatTime(message.timestamp)}
                    </span>
                    {message.type === "user" && (
                      <CheckCheck className="w-3 h-3 text-orange-500" />
                    )}
                  </div>
                </div>
                {message.type === "user" && (
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2 items-start animate-fadeIn">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-orange-600" />
                </div>
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Exam Options */}
            {showOptions && messages.length >= 4 && (
              <div className="space-y-3 animate-fadeIn">
                <div className="flex gap-2 items-start">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-100 max-w-[75%]">
                    <p className="text-sm text-gray-800 font-medium">
                      To help you better, which exam/program are you exploring?
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pl-10">
                  {examOptions.map((option) => {
                    const IconComponent = option.Icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionClick(option)}
                        className="group px-4 py-2.5 border-2 border-orange-500 text-orange-600 rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-200 hover:shadow-md hover:scale-105 flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        <span>{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quick Replies */}
            {!showOptions && messages.length > 4 && !isTyping && (
              <div className="space-y-2 animate-fadeIn">
                <p className="text-xs text-gray-500 font-medium px-2">
                  Quick replies:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-orange-100 hover:text-orange-600 transition-all duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex gap-2 items-end">
              <div className="flex-1 relative">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  rows="1"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-orange-500 text-sm resize-none transition-all duration-200"
                  style={{ maxHeight: "100px" }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3.5 rounded-full hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 disabled:hover:scale-100"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
