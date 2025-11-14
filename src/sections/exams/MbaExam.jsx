import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const MbaExam = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    pincode: ''
  });

  const [expandedFaq, setExpandedFaq] = useState(null);

  const examData = [
    { exam: 'CAT 2025', questions: '68', time: '120 minutes', timeline: 'Last Sunday of November 2025', website: 'iimcat.ac.in' },
    { exam: 'XAT 2026', questions: '95', time: '180 minutes', timeline: 'January 4, 2026', website: 'https://bit.ly/3JlKjNd' },
    { exam: 'NMAT 2025', questions: '108', time: '120 minutes', timeline: 'For Phase 1: November 2025 - December 2025\nFor Phase 2: January 2026', website: 'https://bit.ly/4o9ej4x' },
    { exam: 'SNAP 2025', questions: '60', time: '60 minutes', timeline: 'December 2025', website: 'https://bit.ly/4llJ5pb' },
    { exam: 'MICAT 2026', questions: '234', time: '165 minutes', timeline: 'For Phase 1: December 2025\nFor Phase 2: January 2026', website: 'www.mica.ac.in/pgdm' },
    { exam: 'MAH MBA CET 2025', questions: '200', time: '150 minutes', timeline: 'April 1 - April 3, 2025', website: 'https://cetcell.mahacet.org/' },
    { exam: 'CMAT 2026', questions: '100', time: '180 minutes', timeline: 'January 2026', website: 'https://cmat.nta.nic.in/' },
    { exam: 'IBSAT 2025', questions: '140', time: '120 minutes', timeline: 'December 2025', website: 'https://admissions.ibsindia.org/ibsat/' },
    { exam: 'MAT 2025', questions: '150', time: '120 minutes', timeline: 'December 2025', website: 'https://mat.aima.in/' },
    { exam: 'TANCET 2025', questions: '100', time: '120 minutes', timeline: 'March 22, 2025', website: 'https://tancet.annauniv.edu/tancet/' },
    { exam: 'CUET PG 2025', questions: '75', time: '105 minutes', timeline: 'March 13, 2025, to March 31, 2025', website: 'https://nta.ac.in/' }
  ];

  const collegeData = [
    { exam: 'CAT', colleges: 'IIMs, IMI, FMS Delhi, JBIMS, SPJIMR, IIT, MDI' },
    { exam: 'XAT', colleges: 'XLRI, XIMB, XIME, TAPMI, MICA, IMT, GIM' },
    { exam: 'NMAT', colleges: 'NMIMS, XIMB, ISB Hyderabad, SPJIMR, TAPMI, IBS' },
    { exam: 'MICAT', colleges: 'MICA Ahmedabad' },
    { exam: 'CMAT', colleges: 'Great Lakes, GIM, VIT, BIMTECH' },
    { exam: 'SNAP', colleges: 'SIBM Pune, SCMHRD Pune +13 other Symbiosis Colleges' },
    { exam: 'MAH MBA CET', colleges: 'JBIMS, SIMSREE, PUMBA' },
    { exam: 'TANCET', colleges: 'Anna University, PPG Business School' }
  ];

  const faqs = [
    { question: 'Can I do MBA without cracking CAT?', answer: 'Yes, you can pursue an MBA without cracking CAT. There are numerous other entrance exams like XAT, NMAT, SNAP, MAT, CMAT, and state-level exams that provide admission to various MBA colleges across India.' },
    { question: 'Which is the top MBA entrance exam in India?', answer: 'CAT (Common Admission Test) is considered the top MBA entrance exam in India. It is conducted for admission to IIMs and other premier B-schools, with over 3 lakh students appearing for it annually.' }
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
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Top MBA Entrance Exams 2025-26 | Check The Latest Exam Dates Of MBA Entrance Exams
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                Updated on 14th July 2025 | 10:54 am | #TopMBAEntranceExams
              </p>
              
              <div className="space-y-4 text-gray-800">
                <p>
                  <span className="font-bold">Top MBA entrance exams in India</span>, such as CAT, XAT, MAT, SNAP, NMAT, and many others, will be held between November 2025 and March 2026. These <span className="font-bold">MBA entrance exams</span> open the doors to some of the most prestigious MBA colleges in India.
                </p>
                <p>
                  Out of India's <span className="font-bold">top MBA entrance exams</span>, CAT is the most popular and sought after as it is the only means to the IIMs. More than 3 lakh students register for CAT every year, competing for a few thousand seats in IIMs and other top B-schools, including FMS Delhi, SP Jain, etc. Apart from CAT, through a few other <span className="font-bold">MBA entrance exams</span> such as XAT, NMAT, SNAP, MAT, CMAT, and more.
                </p>
                <p>
                  The competition to secure a seat in these top MBA colleges is tough. Hence, to ensure your admission to at least one of these B-schools, every student should prepare to take 3 to 4 <span className="font-bold">MBA entrance exams</span>. In this article, learn more about some of the top <span className="font-bold">MBA entrance exams 2025</span>, their exam pattern, and the colleges that accept them.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-center mb-6">
                Get Your Hands On The Eligibility PDF For<br />Top MBA Entrance Exams
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="flex gap-2">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 text-lg"
                >
                  Download Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CAT Prep Banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-900 rounded-lg overflow-hidden shadow-lg">
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
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-900">CAT PREP</h3>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Access our <span className="text-yellow-300">FREE</span><br />learning portal now!
              </h2>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg">
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Dates Table */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Top MBA Entrance Exams 2025: Exam Dates
        </h2>
        <p className="text-gray-700 mb-6">
          There are numerous entrance exams for admissions to MBA programs across the country. However, the top MBA entrance exams ensure candidates an opportunity to get into a top B-school with a good reputation and high placements. Here is a list of the top MBA entrance exams in India:
        </p>

        <div className="bg-blue-100 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-center text-gray-900">
            Top MBA Entrance Exams 2025: Exam Dates & Paper Pattern
          </h3>
        </div>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Entrance Exam</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Number of Questions</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Time Allotted</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Exam Timeline (Tentative)</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Official website</th>
              </tr>
            </thead>
            <tbody>
              {examData.map((exam, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 font-semibold text-gray-900">{exam.exam}</td>
                  <td className="px-6 py-4 text-gray-700">{exam.questions}</td>
                  <td className="px-6 py-4 text-gray-700">{exam.time}</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-pre-line">{exam.timeline}</td>
                  <td className="px-6 py-4">
                    <a href={`https://${exam.website}`} className="text-blue-600 hover:underline">
                      {exam.website}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            About The Top MBA Entrance Exams In India
          </h2>
          
          <p className="text-gray-700 mb-6">
            Amongst the top MBA entrance exams in India, there are more than 50 entrance tests that will help you gain admission to some of the <a href="#" className="text-blue-600 hover:underline">top MBA colleges in India</a>. These MBA entrance exams 2025 will be conducted at three different levels.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="text-red-600 mr-3 mt-1">✓</div>
              <div>
                <span className="font-bold">National Level:</span> The most populated national-level MBA entrance exams include CAT, CMAT and MAT, which pave the way to top IIMs and other B-schools.
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-3 mt-1">✓</div>
              <div>
                <span className="font-bold">State Level:</span> The most asked state-level MBA entrance exams include MAH-CET, TSICET, APICET, KMAT and TANCET.
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-3 mt-1">✓</div>
              <div>
                <span className="font-bold">University/College Level:</span> Some of the prominent university-level MBA entrance exams include XAT, SNAP and MICAT.
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            Most of the MBA Entrance Exams have undergone severe changes in the academic year 2024. Let's learn about these entrance exams for MBA in India in detail, along with their exam patterns and the colleges that accept them.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-6">CAT</h3>
          
          <p className="text-gray-700 mb-6">
            The Common Admission Test or <a href="#" className="text-blue-600 hover:underline">CAT Exam</a> is the most popular entrance exam for MBA in India, with over 2 lakh applicants per year. Over 1,300 MBA colleges select candidates for admission based on marks obtained in this exam. It is a computer-based exam held across the country in the month of November every year. CAT is the only entrance test for admission to MBA programs in the IIMs, and over 150 B-schools accept the CAT score for admission to their programs.
          </p>

          <p className="text-gray-700 mb-6">
            The CAT is a computer-based test (CBT) comprised of 3 sections:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="text-red-600 mr-3 mt-1">✓</div>
              <div>
                <span className="font-bold">Verbal Ability and Reading Comprehension (VARC):</span> Assessing English language skills and comprehension
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-3 mt-1">✓</div>
              <div>
                <span className="font-bold">Data Interpretation and Logical Reasoning (DILR):</span> Testing analytical and problem-solving abilities
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-red-600 mr-3 mt-1">✓</div>
              <div>
                <span className="font-bold">Quantitative Ability (QA):</span> Dealing with mathematical skills
              </div>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            There are a total of 68 questions, as seen from the previous year's trends of CAT 2024 (24 VARC, 22 DILR, and 22 QA). The examination is held for a duration of 2 hours, with 40 minutes being allotted for each section, and it uses a +3 marking scheme for each correct response and a -1 for each incorrect response (for MCQs). The CAT 2024 exam pattern has undergone several changes; there were 5 sets instead of 4 sets in the CAT DILR section, and there were no parajumbles seen in the CAT VARC section.
          </p>

          <div className="bg-blue-100 rounded-lg p-6">
            <h4 className="text-xl font-bold text-center text-gray-900 mb-6">All About CAT</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#" className="text-blue-600 hover:underline text-center">CAT Syllabus</a>
              <a href="#" className="text-blue-600 hover:underline text-center">CAT Exam Pattern</a>
              <a href="#" className="text-blue-600 hover:underline text-center">CAT Eligibility</a>
              <a href="#" className="text-blue-600 hover:underline text-center">CAT Preparation</a>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Procedure */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          MBA Admission Procedure Through Top MBA Entrance Exams 2025
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="w-full bg-white">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Important Parameters</th>
                <th className="px-6 py-4 text-left font-bold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Eligibility Criteria</td>
                <td className="px-6 py-4 text-gray-700">At least 50% in graduation, final year students can register as well.</td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-semibold text-gray-900">Age limit</td>
                <td className="px-6 py-4 text-gray-700">none</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Selection of the Entrance exam based on targeted colleges</td>
                <td className="px-6 py-4 text-gray-700">
                  CAT scores: 20 IIMs, FMS, IMT, MDI, IMI, and IITs<br />
                  XAT scores: XLRI, GIM, IMT, MICA<br />
                  NMAT score: NMIMS, SP Jain, Great Lakes, KJ Sumaiya<br />
                  SNAP score: 16 Symbiosis member institutes
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-semibold text-gray-900">Selection of shortlisted students for further admission rounds (Group Discussion-Written Ability Test-Personal Interview)</td>
                <td className="px-6 py-4 text-gray-700">
                  Shortlisting is based on weightage given to several parameters, including exam score, academic background, professional work experience, and gender diversity. Top B-schools like IIMs, FMS, IMT, and MDI conduct mandatory batch-wise group discussion sessions for students who are shortlisted.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-semibold text-gray-900">Declaration of merit lists by the universities</td>
                <td className="px-6 py-4 text-gray-700">
                  The institutes announce the results of candidates in the form of merit lists. It can be downloaded from the institute's official website. The list usually contains the name of the selected student, registration number, roll number, entrance exam score, and entrance exam percentile.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-6 py-4 font-semibold text-gray-900">Accepting admission letter and payment of acceptance fees</td>
                <td className="px-6 py-4 text-gray-700">
                  The university/B-school sends an e-offer letter via an official email after the declaration of the result. A candidate needs to revert to the email by accepting the offer letter and paying the acceptance fees by the given date to confirm admission.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mt-8">
          The data/statistics formulated every year in the form of cut-offs, weightage, batch profile, gender diversity, academic diversity, summer placements, and final placements play a mandatory role in shaping the reputation of the institute. When talking about the topmost B-schools in our country, most of the institutes' admission procedures can be drawn along similar lines.
        </p>
      </div>

      {/* Colleges Accepting Exams */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Colleges Accepting MBA Entrance Exams 2025 in India
          </h2>
          
          <p className="text-gray-700 mb-6">
            When candidates choose the MBA entrance exams they wish to appear for, they must identify the B-schools of their choice. Based on the institutes and the entrance exams they accept, candidates should finalize their decision for the MBA entrance exams. Here are the top MBA entrance exams and the list of major universities that accept them for admission.
          </p>

          <div className="bg-blue-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-center text-gray-900">
              Top B-schools Accepting MBA Entrance Exams 2025
            </h3>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">MBA Entrance Exams</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Top B-schools Across India</th>
                </tr>
              </thead>
              <tbody>
                {collegeData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.exam}</td>
                    <td className="px-6 py-4 text-gray-700">{item.colleges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" />
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
  );
};

export default MbaExam;