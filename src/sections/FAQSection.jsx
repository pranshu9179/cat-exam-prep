import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faq = [
  {
    q: "Is We coaching sufficient to crack CAT?",
    a: "Yes. Our structured course, live classes & doubt solving helped 500+ students score above 99 percentile.",
  },
  {
    q: "Do I get recorded lectures?",
    a: "Yes. All live classes are recorded and available immediately after the session inside your dashboard.",
  },
  {
    q: "Is this course beginner-friendly?",
    a: "Yes. Our course starts from zero level and builds concept clarity through 24×7 mentor support.",
  },
  {
    q: "Do you provide mock tests?",
    a: "Absolutely! You get 30+ full-length mocks and sectional tests based on latest CAT pattern.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="space-y-6">
      <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>

      <div className="bg-white rounded-xl shadow-lg divide-y border">
        {faq.map((item, index) => (
          <div
            key={index}
            className="p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-lg">{item.q}</h4>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
