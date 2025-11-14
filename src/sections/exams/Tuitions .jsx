import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Monitor, Users, Presentation } from 'lucide-react';

const Tuitions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const slides = [
    {
      image: "https://via.placeholder.com/900x400/ff6b35/ffffff?text=CL-SAT+Scholarship+Test",
      alt: "CL-SAT Scholarship Test"
    }
  ];

  const testimonials = [
    {
      name: "Shreyansh",
      image: "https://via.placeholder.com/100/cccccc/666666?text=S",
      text: "I joined Career Launcher in 10th standard and my experience was great. The faculty members were very supportive and the study material was very helpful. All these points helped me to score 96.2% in my 10th Board exams. Furthermore, the competitive environment motivated me to study hard.",
      enrollment: "60178586"
    },
    {
      name: "Adithys Krishna S",
      image: "https://via.placeholder.com/100/cccccc/666666?text=A",
      text: "I had a great experience with Career Launcher during my 9th and 10th standards. All the teachers are student-friendly and also helped me a lot to achieve my score of 94.4% in 10th. They always help us learn efficiently and also give many extra questions to study.",
      enrollment: "60178568"
    },
    {
      name: "Ansh Mehta",
      image: "https://via.placeholder.com/100/cccccc/666666?text=A",
      text: "Career Launcher has helped me a lot in my securing 95.2% in class X CBSE Board. I'd really like to extend special thanks to Gaurav sir, Maths faculty at my Indirapuram center, who helped me in every way possible- from clearing doubts on the phone to taking extra classes.",
      enrollment: "60266534"
    }
  ];

  const faqs = [
    {
      question: "What is the duration of the tuition program?",
      answer: "The tuition program runs throughout the academic year, aligned with the CBSE curriculum for classes 8-12."
    },
    {
      question: "Are the classes conducted online or offline?",
      answer: "We offer both online and offline modes of learning. Students can choose based on their convenience and preference."
    },
    {
      question: "What subjects are covered in the tuition program?",
      answer: "We cover all major subjects including Mathematics, Science, English, and Social Studies based on the CBSE curriculum."
    },
    {
      question: "How often are parent-mentor interactions scheduled?",
      answer: "Parent-mentor interactions are scheduled twice during the course span to discuss student progress and address concerns."
    },
    {
      question: "Is study material provided?",
      answer: "Yes, comprehensive study material including worksheets, practice questions, and recorded sessions are provided through our MyZone portal."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Image 1 */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Tuitions for Classes 8-12
          </h1>
          
          <div className="bg-black bg-opacity-40 rounded-full py-3 px-6 text-center mb-8">
            <p className="text-yellow-300 text-sm sm:text-base lg:text-lg font-semibold">
              Achieve academic excellence with our tuitions program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Side - Carousel and Description */}
            <div className="lg:col-span-2">
              {/* Carousel */}
              <div className="relative bg-white rounded-lg overflow-hidden mb-6">
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 z-10 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-purple-900" />
                </button>
                
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].alt}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 z-10 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-purple-900" />
                </button>
              </div>

              {/* Description */}
              <div className="text-white">
                <p className="text-sm sm:text-base leading-relaxed text-justify">
                  Welcome to Career Launcher Tuitions - Discover unparalleled online tutoring with Career Launcher Tuition, where personalized learning meets convenience. Our expert tutors are dedicated to elevating your academic journey through flexible, tailored online sessions.
                </p>
              </div>

              {/* Class Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                  Class 8
                </button>
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                  Class 9
                </button>
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                  Class 10
                </button>
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                  Class 11
                </button>
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                  Class 12
                </button>
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                  CL - Olympiad
                </button>
                <button className="bg-purple-400 bg-opacity-50 hover:bg-opacity-70 text-white font-semibold py-3 px-4 rounded-lg transition-all sm:col-span-3">
                  Free study Material
                </button>
              </div>

              {/* What's New Section */}
              <div className="mt-8">
                <div className="bg-gradient-to-r from-purple-900 to-purple-800 inline-block px-6 py-2 rounded-t-lg">
                  <h3 className="text-xl font-bold">What's New?</h3>
                </div>
                <div className="bg-white text-gray-800 p-4 rounded-b-lg rounded-tr-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-600 rounded-full p-2 flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm sm:text-base">
                      CL Aptitude Olympiad 2025 is live! <span className="text-orange-500 font-semibold cursor-pointer">Know More!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">
                Want to know more?
              </h3>
              <p className="text-center text-gray-600 mb-6">Let's connect!</p>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 font-semibold mb-3">Are you a</p>
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="userType" className="w-4 h-4 text-blue-600" defaultChecked />
                      <span className="ml-2 text-gray-700">Student</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="radio" name="userType" className="w-4 h-4 text-blue-600" />
                      <span className="ml-2 text-gray-700">Parent</span>
                    </label>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />

                <div className="flex gap-2">
                  <input
                    type="tel"
                    placeholder="Enter Mobile No."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                  <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all">
                    Send OTP
                  </button>
                </div>

                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-600">
                  <option>I'm looking for</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                </select>

                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-600">
                  <option>Preferred mode of learning</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Both</option>
                </select>

                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogy Section - Image 2 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">
            Tuition's unique student-centric pedagogy
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="flex justify-center">
              <img 
                src="https://via.placeholder.com/500x400/ffffff/333333?text=MyZone+Pedagogy+Diagram"
                alt="Student-centric pedagogy diagram"
                className="w-full max-w-md"
              />
            </div>
            <div className="space-y-6 text-gray-700 text-justify">
              <p className="text-sm sm:text-base leading-relaxed">
                At Career Launcher, we are committed to ensuring students receive the best education that goes beyond just improving performance in CBSE curriculum classes. Recognizing the importance of class 8-12 learning in shaping future career pursuits and preparing for national-level competitive exams, our mission is to empower students for success.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our tuition program prioritizes concept clarity, a crucial factor for students to excel in their chosen career paths. We offer a comprehensive range of effective learning tools and resources, as illustrated in the accompanying diagram. Additionally, our AI-enabled Career Launcher platform delivers personalized guidance, enabling students to navigate their educational journey with confidence and purpose.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Discover the Career Launcher advantage – where excellence meets personalized learning. Join us as we pave the way for your academic success and future career achievements.
              </p>
            </div>
          </div>

          {/* Comprehensive Preparation */}
          <div className="mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">
              Comprehensive Preparation
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {['Class 8th', 'Class 9th', 'Class 10th', 'Class 11th', 'Class 12th'].map((className, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-dashed border-purple-600 flex items-center justify-center">
                      <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-center text-lg sm:text-xl font-bold text-blue-900">{className}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Tuitions & What Makes Us Different - Image 3 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src="https://via.placeholder.com/400x400/ffffff/333333?text=Growth+Chart+Illustration"
                alt="Why Tuitions illustration"
                className="w-full max-w-sm"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
                Why Tuitions?
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <div className="space-y-4 text-gray-700 text-justify">
                <p className="text-sm sm:text-base leading-relaxed">
                  Since 1995, Career Launcher has played a pivotal role in shaping up the careers of students. Our commitment towards ensuring the success of students in class 8 to 12, is at the core of Tuitions.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  At Career Launcher, we are ensuring that students are equipped with all the fundamentals and concepts of subjects based on the CBSE curriculum. Along with NCERT material, we provide top-notch study material for students to practice which helps them in fetching excellent marks in exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What makes us different?
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Stay on Track with Career Launcher
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="leading-relaxed text-justify">
                  Every student gets access to our 24x7, artificial-intelligence-based, online learning portal to study, practise, take tests, and view their performance analysis.
                </p>
                <p className="leading-relaxed text-justify">
                  Stay updated on the latest class or webinar being held for you and your peers. You can also watch conceptual videos and strategy sessions that are uploaded on a regular basis.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <div className="mb-6">
                <img 
                  src="https://via.placeholder.com/200x60/ffffff/333333?text=Career+Launcher+Logo"
                  alt="Career Launcher Logo"
                  className="mx-auto h-12 sm:h-16"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">
                Your bridge to success
              </h3>
              <div className="flex justify-center gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all">
                  Sign In
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent's Journey - Image 4 */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            Parent's Journey in the Program
          </h2>
          <div className="w-20 h-1 bg-orange-500 mb-8"></div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-12 text-justify">
            Parents play a very important role in a student's academic journey. More importantly in this age where they are going near to making big decisions for their careers, parents and students both need to be clear about their interests and options available to them. So we have planned a parent journey as well along with students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-pink-50 rounded-lg p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                    Parent Mentor Interaction
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                We have scheduled 2 PMIs across the course span. Through this, parents can check on their kid's progress and discuss it directly with the faculties.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <Presentation className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2">
                    Seminar/Workshop for Parents
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                Various Seminar/Workshop for parents have also been scheduled across the duration of the course, having parenting tips and career options on agenda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Student Testimonials</h2>
            <div className="flex gap-2">
              <button 
                onClick={prevTestimonial}
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-orange-500 hover:bg-orange-600 p-2 rounded transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="w-20 h-1 bg-orange-500 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-gray-700 rounded-lg p-6 transition-all ${
                  index === currentTestimonial ? 'block' : 'hidden md:block'
                }`}
              >
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-3"
                  />
                  <h3 className="text-xl font-bold text-orange-400">{testimonial.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mb-4 text-justify">
                  {testimonial.text}
                </p>
                <p className="text-xs text-orange-400 italic">
                  Enrollment ID:- {testimonial.enrollment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all"
                >
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tuitions;