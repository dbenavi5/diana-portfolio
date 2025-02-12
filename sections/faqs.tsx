"use client";

import { AnimatePresence, motion } from "motion/react";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you offer website maintenance after the project is complete?",
    answer:
      "Yes, I offer ongoing maintenance packages to ensure your website stays updated, secure, and running smoothly.",
  },
  {
    question: "Can you help redesign an existing website?",
    answer:
      "Absolutely! I can refresh your current website to improve its design, performance, and user experience.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="section">
      <div className="container text-stone-800">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQS</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className={`border-t border-stone-800 border-dotted py-6 
                md:py-8 lg:py-10 last:border-b relative isolate group/faq`}
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  `absolute h-0 w-full bottom-0 left-0 bg-stone-400 -z-10 group-hover/faq:h-full transition-all duration-700`,
                  faqIndex === selectedIndex && "h-full"
                )}
              ></div>
              {/* Question */}
              <div
                className={twMerge(
                  `flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8`,
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl">
                  {question}
                </div>
                <div
                  className={twMerge(
                    `inline-flex items-center justify-center size-11 
                    border border-stone-400 rounded-full shrink-0 transition duration-300
                    bg-stone-300`,
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              {/* Answers */}
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-xl mt-4">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
