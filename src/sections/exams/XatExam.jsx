import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';

const XatExam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    pincode: ''
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const xatSections = [
    { 
      section: 'Decision Making (DM)', 
      questions: '21', 
      time: '165 minutes total',
      description: 'Caselets, ethical dilemmas, analytical reasoning, situational judgment'
    },
    { 
      section: 'Verbal and Logical Ability (VLA)', 
      questions: '24', 
      time: '165 minutes total',
      description: 'Reading comprehension, grammar, vocabulary, para jumbles, critical reasoning'
    },
    { 
      section: 'Quantitative Ability & Data Interpretation (QADI)', 
      questions: '27', 
      time: '165 minutes total',
      description: 'Arithmetic, algebra, geometry, modern math, data interpretation, data sufficiency'
    },
    { 
      section: 'General Knowledge (GK)', 
      questions: '25', 
      time: '15 minutes',
      description: 'Current affairs, business, economics, politics, sports, awards, static GK'
    }
  ];

  const importantDates = [
    { event: 'XAT 2025 Notification', date: 'July 2024' },
    { event: 'XAT 2025 Registration Start', date: 'August 2024' },
    { event: 'XAT 2025 Registration End', date: 'November 2024' },
    { event: 'XAT 2025 Admit Card', date: 'December 2024' },
    { event: 'XAT 2025 Exam Date', date: 'First Sunday of January 2025' },
    { event: 'XAT 2025 Answer Key', date: 'January 2025' },
    { event: 'XAT 2025 Result', date: 'January 2025' }
  ];

  const topColleges = [
    { name: 'XLRI Jamshedpur', cutoff: '95+' },
    { name: 'SP Jain Mumbai', cutoff: '90+' },
    { name: 'IMI Delhi', cutoff: '85+' },
    { name: 'XIM Bhubaneswar', cutoff: '85+' },
    { name: 'TAPMI Manipal', cutoff: '80+' },
    { name: 'Great Lakes Chennai', cutoff: '80+' },
    { name: 'LIBA Chennai', cutoff: '75+' },
    { name: 'XIME Bangalore', cutoff: '70+' },
    { name: 'IFIM Bangalore', cutoff: '70+' },
    { name: 'IMT Ghaziabad', cutoff: '85+' }
  ];

  const faqs = [
    { 
      question: 'What is unique about XAT exam pattern?', 
      answer: 'XAT has a unique Decision Making section and includes General Knowledge as a separate scored section. The exam also features an essay writing component and has negative marking for all sections including 0.10 negative marks for GK.' 
    },
    { 
      question: 'What is the minimum percentile required for XLRI?', 
      answer: 'For XLRI, the minimum XAT percentile varies by program. For HRM, typically 95+ percentile is required, while for BM, 97+ percentile is expected. XLRI also considers academic background, work experience, and performance in GD-PI.' 
    },
    { 
      question: 'Is work experience mandatory for XAT?', 
      answer: 'No, work experience is not mandatory for XAT. Both freshers and experienced candidates can apply. However, some institutes like XLRI give weightage to work experience during the selection process.' 
    },
    { 
      question: 'How is XAT different from CAT?', 
      answer: 'XAT has Decision Making section, includes GK as scored section, has essay writing, and is conducted by XLRI. CAT is conducted by IIMs and focuses more on traditional sections without GK. XAT also has different marking scheme and exam pattern.' 
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
      <div className="bg-gradient-to-r from-purple-50 to-blue-100 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                XAT 2025: Complete Guide to Xavier Aptitude Test | Exam Date, Pattern, Syllabus & Preparation
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                Updated on 14th November 2024 | 10:54 am | #XAT2025
              </p>
              
              <div className="space-y-4 text-gray-800">
                <p>
                  <span className="font-bold">XAT 2025 (Xavier Aptitude Test)</span> is one of the most prestigious MBA entrance exams in India, conducted by XLRI Jamshedpur on behalf of XAMI. XAT 2025 will be held on the <span className="font-bold">first Sunday of January 2025</span>, opening doors to 160+ top B-schools including XLRI, SP Jain, IMI, XIMB, and many more.
                </p>
                <p>
                  With over <span className="font-bold">1 lakh candidates</span> appearing annually, XAT is known for its unique Decision Making section and includes General Knowledge as a scored component. The exam tests candidates' aptitude in four key areas: Decision Making, Verbal and Logical Ability, Quantitative Ability & Data Interpretation, and General Knowledge.
                </p>
                <p>
                  XAT 2025 will be a <span className="font-bold">computer-based test (CBT)</span> of 180 minutes duration with 97 questions plus an essay. The exam is particularly famous for its Decision Making section which tests ethical judgment and analytical thinking - skills crucial for future managers and leaders.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-center mb-6">
                Get Free XAT 2025<br />Preparation Material
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 text-lg"
                >
                  Download Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* XAT Prep Banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-100 via-blue-50 to-blue-800 rounded-lg overflow-hidden shadow-lg">
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
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-800">XAT PREP</h3>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Access our <span className="text-yellow-300">FREE</span><br />learning portal now!
              </h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* XAT 2025 Courses Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              XAT 2025 Courses Curated By XAT Experts
            </h2>
            <p className="text-gray-700 text-lg">
              Ace XAT 2025, with a focused 3-month plan to master Decision Making, strengthen key areas, and boost preparation for XAT 2025.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Test Series Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600 mb-1">XAT 2025</h3>
                  <p className="text-2xl font-bold text-blue-700">Test Series</p>
                  <div className="mt-4 text-sm text-gray-700">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-blue-700 font-bold text-lg">Feb. 10, 2025</p>
                    <p className="text-xs text-gray-600 mt-1">Closest to the actual XAT</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b-2 border-blue-200">
                  <span className="text-xl text-gray-500 line-through">₹ 5,000</span>
                  <span className="text-3xl font-bold text-blue-600">₹ 2,650</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">(47% off)</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">25 XAT Full-Length Mocks (10 FLEXI + 15 PRO)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">1800+ additional practice questions in Topic Tests</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Include 15 PYQ mocks with Decision Making focus</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Video & Text Solutions with GK updates</p>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition-colors">
                  Enroll now
                </button>
              </div>
            </div>

            {/* Comprehensive Course Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600 mb-1">XAT 2025</h3>
                  <p className="text-2xl font-bold text-blue-700">Test Series</p>
                  <p className="text-xl font-semibold text-blue-600">Comprehensive</p>
                  <div className="mt-2 text-sm text-gray-700">
                    <p className="font-semibold">Validity till</p>
                    <p className="text-blue-700 font-bold text-lg">Feb. 10, 2025</p>
                    <p className="text-xs text-gray-600 mt-1">Closest to the actual XAT</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center gap-4 mb-6 pb-4 border-b-2 border-blue-200">
                  <span className="text-xl text-gray-500 line-through">₹ 6,500</span>
                  <span className="text-3xl font-bold text-blue-600">₹ 3,400</span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">(48% off)</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">25 XAT Full-Length Mocks (10 FLEXI + 15 PRO)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">2500+ Additional Practice Questions in Sectional Tests</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Include 15 PYQ mocks with Essay Evaluation</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">Video & Text Solutions + Monthly GK Updates</p>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-lg transition-colors">
                  Enroll now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* XAT Exam Pattern */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          XAT 2025 Exam Pattern
        </h2>
        <p className="text-gray-700 mb-6">
          XAT 2025 follows a unique pattern with four sections tested over 180 minutes plus an additional 15 minutes for essay writing. The Decision Making section is exclusive to XAT and tests crucial managerial abilities. Here's the detailed breakdown:
        </p>

        <div className="bg-purple-100 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-center text-gray-900">
            XAT 2025 Section-wise Details
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
              {xatSections.map((section, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{section.section}</td>
                  <td className="px-6 py-4 text-gray-700">{section.questions}</td>
                  <td className="px-6 py-4 text-gray-700">{section.time}</td>
                  <td className="px-6 py-4 text-gray-700">{section.description}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-bold">
                <td className="px-6 py-4 text-gray-900">Essay Writing</td>
                <td className="px-6 py-4 text-gray-900">1 topic</td>
                <td className="px-6 py-4 text-gray-900">15 minutes</td>
                <td className="px-6 py-4 text-gray-900">-</td>
              </tr>
              <tr className="bg-purple-50 font-bold">
                <td className="px-6 py-4 text-gray-900">Total</td>
                <td className="px-6 py-4 text-gray-900">97 + Essay</td>
                <td className="px-6 py-4 text-gray-900">195 minutes</td>
                <td className="px-6 py-4 text-gray-900">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Marking Scheme:</h4>
          <ul className="space-y-2 text-gray-700">
            <li>• <span className="font-semibold">+1 mark</span> for each correct answer</li>
            <li>• <span className="font-semibold">-0.25 marks</span> for each incorrect answer in first 3 sections</li>
            <li>• <span className="font-semibold">-0.10 marks</span> for each incorrect answer in GK section</li>
            <li>• <span className="font-semibold">No negative marking</span> for Essay writing</li>
            <li>• No sectional time limit (except GK - 15 minutes)</li>
          </ul>
        </div>
      </div>

      {/* Important Dates */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            XAT 2025 Important Dates
          </h2>

          <div className="bg-purple-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-center text-gray-900">
              XAT 2025 Schedule (Tentative)
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

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <span className="font-bold">Note:</span> The dates mentioned above are tentative based on previous year trends. Official dates will be announced by XLRI on the official XAT website <a href="https://xatonline.in" className="text-blue-600 hover:underline">xatonline.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* Eligibility Criteria */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          XAT 2025 Eligibility Criteria
        </h2>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Qualification</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>Bachelor's degree of minimum 3 years duration with <span className="font-bold">50% marks</span> or equivalent CGPA</div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>Final year students can also apply (subject to completion of degree with required percentage)</div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 mr-3 mt-1">✓</div>
                  <div>No percentage bar for SC/ST candidates</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Age Limit</h3>
              <p className="text-gray-700">There is <span className="font-bold">no age limit</span> to appear for XAT exam.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Number of Attempts</h3>
              <p className="text-gray-700">There is <span className="font-bold">no restriction</span> on the number of attempts for XAT.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nationality</h3>
              <p className="text-gray-700">Indian nationals as well as <span className="font-bold">foreign nationals</span> can appear for XAT. NRIs can apply through XAT or GMAT scores.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Colleges */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Top MBA Colleges Accepting XAT 2025 Score
          </h2>
          
          <p className="text-gray-700 mb-6">
            XAT score is accepted by 160+ premier B-schools across India. Here are some of the top MBA colleges that accept XAT scores along with their expected cutoff percentiles:
          </p>

          <div className="bg-purple-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-center text-gray-900">
              Top B-schools and Expected XAT Cutoffs
            </h3>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">B-School Name</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Expected XAT Cutoff (Percentile)</th>
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
              <h4 className="font-bold text-gray-900 mb-3">XLRI Programs through XAT:</h4>
              <p className="text-gray-700 text-sm">Business Management (BM), Human Resource Management (HRM), General Management Program (GMP), Fellow Program in Management (FPM)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-bold text-gray-900 mb-3">Other Premier XAT Colleges:</h4>
              <p className="text-gray-700 text-sm">XIM Bhubaneswar, LIBA Chennai, TAPMI Manipal, Great Lakes Chennai, XIME Bangalore, IFIM Bangalore, Welingkar Mumbai, Christ University Bangalore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          XAT 2025 Preparation Strategy
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Decision Making Section</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Practice caselets and ethical dilemma scenarios regularly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Develop strong analytical and logical reasoning skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Focus on situational judgment and managerial decision making</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Read business case studies and management principles</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For VLA Section</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Read extensively - editorials, business magazines, quality fiction</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Practice RC passages from diverse and complex topics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Work on grammar rules and vocabulary building</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Practice critical reasoning and para jumbles</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For QADI Section</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Master fundamental mathematical concepts thoroughly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Practice data interpretation sets with various chart types</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Focus on arithmetic, algebra, and modern mathematics</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Learn time-saving calculation techniques</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For GK & Essay Writing</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Read newspapers daily for current affairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Follow business news, economics, and corporate updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Practice essay writing on diverse topics regularly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Develop structured thinking and coherent writing style</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h4 className="font-bold text-gray-900 mb-2">Pro Tip:</h4>
          <p className="text-gray-700">
            Start your XAT preparation at least 4-6 months before the exam. Focus particularly on Decision Making as it's unique to XAT. Regular reading for GK and essay writing practice is crucial. Take mock tests that simulate the actual XAT pattern including the essay component.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions About XAT 2025
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
      <div className="bg-gradient-to-r from-blue-700 to-purple-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your XAT 2025 Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of aspirants and get access to expert guidance, study materials, and mock tests with focus on Decision Making
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg transition-colors">
            Start Preparation Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default XatExam;