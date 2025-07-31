import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'How can I become  a member?',
    answer: 'This will be the reply',
  },
  {
    question: 'How can I contact your team?',
    answer: 'You can contact us through our contact page or via email at contact@example.com.',
  },
  {
    question: 'What are the membership benefits?',
    answer: 'This will be the reply',
  },
  {
    question: 'What are the membership benefits?',
    answer: 'This will be the reply',
  },
  {
    question: 'What are the membership benefits?',
    answer: 'This will be the reply',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-10 md:px-20">
      <h2 className="mb-6 text-center font-bold" style={{fontSize: '28px'}}>Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-red-400 rounded-lg p-4 bg-white"
          >
            <button
              className="flex justify-between items-center w-full text-left font-medium focus:outline-none"
              style={{color:'#374151', fontSize: '16px'}}
              onClick={() => toggle(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <FaChevronUp className="text-red-500 cursor-pointer" />
              ) : (
                <FaChevronDown className="text-gray-500 cursor-pointer" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
