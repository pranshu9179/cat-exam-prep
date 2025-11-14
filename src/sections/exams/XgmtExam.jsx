import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';

const XgmtExam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    pincode: ''
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const xgmtSections = [
    { 
      section: 'Business Analytics & Data Interpretation', 
      questions: '25', 
      time: '45 minutes',
      description: 'Data interpretation, statistical analysis, business case studies, data sufficiency'
    },
    { 
      section: 'Quantitative Ability & Reasoning', 
      questions: '22', 
      time: '45 minutes',
      description: 'Advanced mathematics, logical reasoning, quantitative comparison, problem solving'
    },
    { 
      section: 'Verbal Ability & Critical Reasoning', 
      questions: '23', 
      time: '45 minutes',
      description: 'Reading comprehension, critical reasoning, vocabulary in context, argument analysis'
    },
    { 
      section: 'General Awareness & Business Fundamentals', 
      questions: '20', 
      time: '30 minutes',
      description: 'Current business trends, economics, corporate world, management principles'
    }
  ];

  const importantDates = [
    { event: 'X-GMT 2025 Notification', date: 'December 2024' },
    { event: 'X-GMT 2025 Registration Start', date: 'January 2025' },
    { event: 'X-GMT 2025 Registration End', date: 'March 2025' },
    { event: 'X-GMT 2025 Admit Card', date: 'April 2025' },
    { event: 'X-GMT 2025 Exam Date', date: 'April 2025' },
    { event: 'X-GMT 2025 Answer Key', date: 'May 2025' },
    { event: 'X-GMT 2025 Result', date: 'May 2025' }
  ];

  const topColleges = [
    { name: 'XLRI Jamshedpur (Business Analytics)', cutoff: '85+' },
    { name: 'SP Jain Mumbai (Global Business)', cutoff: '80+' },
    { name: 'IMI Delhi (Analytics Program)', cutoff: '78+' },
    { name: 'XIM Bhubaneswar (Business Analytics)', cutoff: '75+' },
    { name: 'Great Lakes Chennai (Analytics)', cutoff: '75+' },
    { name: 'TAPMI Manipal (Analytics)', cutoff: '70+' },
    { name: 'LIBA Chennai (Analytics)', cutoff: '68+' },
    { name: 'IFIM Bangalore (Business Analytics)', cutoff: '65+' },
    { name: 'XIME Bangalore (Analytics)', cutoff: '65+' },
    { name: 'Christ University (Analytics)', cutoff: '60+' }
  ];

  const faqs = [
    { 
      question: 'What is X-GMT and who conducts it?', 
      answer: 'X-GMT (Xavier General Management Aptitude Test) is a specialized management aptitude test conducted by XLRI Jamshedpur for admission to various general management and business analytics programs offered by XLRI and other participating institutes.' 
    },
    { 
      question: 'What programs can I get through X-GMT?', 
      answer: 'X-GMT is primarily for XLRI\'s General Management Program (GMP), Business Analytics programs, and other specialized management courses at XLRI and other participating B-schools that focus on working professionals and analytics domains.' 
    },
    { 
      question: 'Is work experience required for X-GMT?', 
      answer: 'Yes, for most programs through X-GMT, especially XLRI\'s GMP, significant work experience is required (typically 3+ years). However, some analytics programs may accept fresh graduates.' 
    },
    { 
      question: 'How is X-GMT different from XAT?', 
      answer: 'X-GMT focuses more on business analytics, data interpretation, and is designed for experienced professionals, while XAT is for regular MBA programs. X-GMT has stronger emphasis on analytical skills and business fundamentals.' 
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-100 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                X-GMT 2025: Complete Guide to Xavier General Management Test | Exam Date, Pattern, Syllabus & Preparation
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                Updated on 14th November 2024 | 10:54 am | #XGMT2025
              </p>
              
              <div className="space-y-4 text-gray-800">
                <p>
                  <span className="font-bold">X-GMT 2025 (Xavier General Management Aptitude Test)</span> is a specialized management entrance exam conducted by XLRI Jamshedpur for admission to General Management and Business Analytics programs. X-GMT 2025 will be held in <span className="font-bold">April 2025</span>, targeting working professionals and candidates interested in analytics roles.
                </p>
                <p>
                  With a focus on <span className="font-bold">business analytics and data-driven decision making</span>, X-GMT is designed for candidates seeking specialized management education. The exam tests candidates' aptitude in four key areas: Business Analytics & Data Interpretation, Quantitative Ability & Reasoning, Verbal Ability & Critical Reasoning, and General Awareness & Business Fundamentals.
                </p>
                <p>
                  X-GMT 2025 will be a <span className="font-bold">computer-based test (CBT)</span> of 165 minutes duration with 90 questions. The exam is particularly known for its strong emphasis on analytical skills, data interpretation, and business fundamentals - making it ideal for professionals looking to transition into analytics or leadership roles.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-center mb-6">
                Get Free X-GMT 2025<br />Preparation Material
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
                  >
                    Send OTP
                  </button>
                </div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 text-lg"
                >
                  Download Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* X-GMT Prep Banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-green-100 via-blue-50 to-green-800 rounded-lg overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="space-y-2">
                <div className="bg-white inline-block px-6 py-3 rounded-lg shadow-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">KICKSTART</h3>
                </div>
                <div className="bg-white inline-block px-6 py-3 rounded-lg shadow-md ml-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">YOUR</h3>
                </div>
                <div className="bg-white inline-block px-6 py-3 rounded-lg shadow-md">
                  <h3 className="text-3xl md:text-4xl font-bold text-green-800">X-GMT PREP</h3>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Access our <span className="text-yellow-300">FREE</span><br />analytics portal now!
              </h2>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* X-GMT 2025 Courses Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              X-GMT 2025 Courses Curated By Analytics Experts
            </h2>
            <p className="text-gray-700 text-lg">
              Ace X-GMT 2025 with a specialized 3-month plan focusing on business analytics, data interpretation, and management aptitude for working professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Test Series Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-600 mb-1">X-GMT 2025</h3>
                  <p className="text-2xl font-bold text-green-700">Test Series</p>
                  <div className="mt-4 text-sm text-gray-700">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-green-700 font-bold text-lg">May 30, 2025</p>
                    <p className="text-xs text-gray-600 mt-1">Focus on Business Analytics</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b-2 border-green-200">
                  <span className="text-xl text-gray-500 line-through">₹ 5,500</span>
                  <span className="text-3xl font-bold text-green-600">₹ 2,850</span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">(48% off)</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">20 X-GMT Full-Length Mocks (8 FLEXI + 12 PRO)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">1500+ business analytics practice questions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Include 12 PYQ mocks with data interpretation focus</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Video solutions with analytics approach</p>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-lg transition-colors">
                  Enroll now
                </button>
              </div>
            </div>

            {/* Comprehensive Course Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-green-600 mb-1">X-GMT 2025</h3>
                  <p className="text-2xl font-bold text-green-700">Analytics Pro</p>
                  <p className="text-xl font-semibold text-green-600">Comprehensive</p>
                  <div className="mt-2 text-sm text-gray-700">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-green-700 font-bold text-lg">May 30, 2025</p>
                    <p className="text-xs text-gray-600 mt-1">Advanced Analytics Focus</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b-2 border-green-200">
                  <span className="text-xl text-gray-500 line-through">₹ 7,000</span>
                  <span className="text-3xl font-bold text-green-600">₹ 3,650</span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">(48% off)</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">20 X-GMT Full-Length Mocks (8 FLEXI + 12 PRO)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">2200+ Advanced Analytics Practice Questions</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Include 12 PYQ mocks with Case Study Analysis</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Video Solutions + Business Analytics Toolkit</p>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-lg transition-colors">
                  Enroll now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* X-GMT Exam Pattern */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          X-GMT 2025 Exam Pattern
        </h2>
        <p className="text-gray-700 mb-6">
          X-GMT 2025 follows a specialized pattern with four sections tested over 165 minutes, with strong emphasis on business analytics and data interpretation skills essential for modern management roles. Here's the detailed breakdown:
        </p>

        <div className="bg-green-100 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-center text-gray-900">
            X-GMT 2025 Section-wise Details
          </h3>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
          <table className="w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Section</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">No. of Questions</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Time Allotted</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Topics Covered</th>
              </tr>
            </thead>
            <tbody>
              {xgmtSections.map((section, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{section.section}</td>
                  <td className="px-6 py-4 text-gray-700">{section.questions}</td>
                  <td className="px-6 py-4 text-gray-700">{section.time}</td>
                  <td className="px-6 py-4 text-gray-700">{section.description}</td>
                </tr>
              ))}
              <tr className="bg-green-50 font-bold">
                <td className="px-6 py-4 text-gray-900">Total</td>
                <td className="px-6 py-4 text-gray-900">90</td>
                <td className="px-6 py-4 text-gray-900">165 minutes</td>
                <td className="px-6 py-4 text-gray-900">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Marking Scheme:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• <span className="font-semibold">+1 mark</span> for each correct answer</li>
            <li>• <span className="font-semibold">-0.25 marks</span> for each incorrect answer</li>
            <li>• <span className="font-semibold">No negative marking</span> for unattempted questions</li>
            <li>• Sectional time limits with no switching between sections</li>
            <li>• Strong emphasis on application-based and analytical questions</li>
          </ul>
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            X-GMT 2025 Important Dates
          </h2>

          <div className="bg-green-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-center text-gray-900">
              X-GMT 2025 Schedule (Tentative)
            </h3>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Event</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Date (Tentative)</th>
                </tr>
              </thead>
              <tbody>
                {importantDates.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.event}</td>
                    <td className="px-6 py-4 text-gray-700">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Note:</span> The dates mentioned above are tentative based on previous year trends. Official dates will be announced by XLRI on the official X-GMT website <a href="https://xlri.ac.in" className="text-green-600 hover:underline">xlri.ac.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          X-GMT 2025 Eligibility Criteria
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Qualification</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">✓</div>
                  <div>Bachelor's degree of minimum 3 years duration with <span className="font-bold">50% marks</span> or equivalent CGPA</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">✓</div>
                  <div>Degree must be from a recognized university or institution</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">✓</div>
                  <div>Professional qualifications like CA/CS/ICWA are also eligible</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Work Experience</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">✓</div>
                  <div>For General Management Program: Minimum <span className="font-bold">3 years</span> of work experience required</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">✓</div>
                  <div>For Business Analytics programs: Work experience preferred but not mandatory</div>
                </div>
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">✓</div>
                  <div>Internships and training periods not counted as work experience</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Age Limit</h3>
              <p className="text-gray-700">There is <span className="font-bold">no upper age limit</span> for X-GMT, but candidates must meet the work experience criteria for specific programs.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nationality</h3>
              <p className="text-gray-700">Indian nationals as well as <span className="font-bold">foreign nationals</span> can appear for X-GMT.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Colleges */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Top Colleges Accepting X-GMT 2025 Score
          </h2>
          
          <p className="text-gray-700 mb-6">
            X-GMT score is accepted by premier B-schools for their General Management and Business Analytics programs. Here are the top colleges that accept X-GMT scores along with their expected cutoff percentiles:
          </p>

          <div className="bg-green-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-center text-gray-900">
              Top B-schools and Expected X-GMT Cutoffs
            </h3>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">B-School Name</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Expected X-GMT Cutoff (Percentile)</th>
                </tr>
              </thead>
              <tbody>
                {topColleges.map((college, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{college.name}</td>
                    <td className="px-6 py-4 text-gray-700">{college.cutoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-gray-900 mb-3">XLRI Programs through X-GMT:</h4>
              <p className="text-gray-700 text-sm">General Management Program (GMP) - 15 months, Executive Diploma in Business Management, Certificate Programs in Business Analytics, Advanced Management Programs for working professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-gray-900 mb-3">Other Analytics Programs:</h4>
              <p className="text-gray-700 text-sm">Business Analytics, Data Science Management, Analytics & Data-driven Decision Making, Digital Business Management, and other specialized management programs for experienced professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          X-GMT 2025 Preparation Strategy
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Business Analytics & DI</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Practice complex data interpretation sets regularly</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Learn statistical tools and analytical techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Work on business case studies and scenario analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Focus on data sufficiency and logical data analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Quantitative Ability</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Master advanced mathematical concepts and applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Practice quantitative comparison and problem solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Focus on business mathematics and financial calculations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Develop speed and accuracy in calculations</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Verbal & Critical Reasoning</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Read business publications and analytical reports</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Practice critical reasoning and argument analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Work on reading comprehension with complex passages</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Develop vocabulary in business context</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-green-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For General Awareness</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Follow current business trends and economic updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Read about corporate world and management principles</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Stay updated with industry analysis and market trends</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Focus on business fundamentals and corporate governance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h4 className="font-bold text-gray-900 mb-2">Pro Tip for Working Professionals:</h4>
          <p className="text-gray-700">
            As X-GMT targets experienced professionals, leverage your work experience in preparation. Relate analytical concepts to real business scenarios you've encountered. Focus on time management and take weekend mock tests to simulate actual exam conditions. Balance your preparation with work commitments through structured planning.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About X-GMT 2025
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-green-700 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Advance Your Management Career with X-GMT 2025?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join experienced professionals and get access to specialized analytics preparation, industry-relevant study materials, and professional mock tests
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-colors">
            Start Preparation Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default XgmtExam;