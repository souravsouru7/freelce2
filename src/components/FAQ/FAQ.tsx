import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQ.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of tires do you offer?",
    answer: "We offer a comprehensive range of tires including all-season, winter, summer, performance, and all-terrain tires from leading brands. Our selection caters to cars, SUVs, trucks, and specialty vehicles."
  },
  {
    question: "Do you provide tire installation services?",
    answer: "Yes, we provide professional tire installation services with state-of-the-art equipment. Our certified technicians ensure proper mounting, balancing, and alignment for optimal performance and safety."
  },
  {
    question: "What is your warranty policy?",
    answer: "We offer manufacturer warranties on all our tires, plus an additional service warranty on installations. Coverage includes defects in materials and workmanship. Specific terms vary by product and brand."
  },
  {
    question: "How often should I rotate my tires?",
    answer: "We recommend rotating your tires every 5,000-8,000 miles or as specified in your vehicle's owner manual. Regular rotation ensures even wear and extends tire life."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we provide flexible financing options through our partners. We offer various payment plans to fit different budgets, including 0% interest for qualified customers."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="faq-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="faq-header">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Find answers to common questions about our services and products
        </motion.p>
      </div>

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <motion.span
                className="icon"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ; 