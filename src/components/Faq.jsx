import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import for animation effects
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy. Please keep the item in its original condition.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 5-7 business days, depending on your location.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You can track your order using the tracking link sent to your email.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship internationally to select countries.',
  },
  {
    question: 'Can I change my order after placing it?',
    answer: 'You can change your order within 24 hours by contacting our support team.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-[40px] text-[#00192E] font-bold text-center mb-[20px]  ">Frequently Asked Questions</h2>
      <h3 className=" text-[16px ] font-[500] text-[#667085] text-center mb-[30px] ">Everything you need to know about the FuelNow.</h3>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left font-medium text-lg hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              <span className=' text-[#00192E] ' >{item.question}</span>
              <span className="text-[12px] text-[#00192E] border-[3px] border-[#00192E] rounded-full ">
                {activeIndex === index ? (
                  <FaMinus size={20} className=" text-[#00192E]  font-[400]" />
                ) : (
                  <FaPlus size={20} className=" text-[#00192E] font-[400] " />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600 px-3"
              >
                {item.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
