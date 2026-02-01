"use client";

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/testimonial";

const testimonials = [
  {
    name: "Simone Nicoles",
    company: "Hive Trio",
    role: "Project Manager & Lead Frontend Developer",
    quote:
      "Diana’s technical expertise and proactive problem-solving significantly elevated our project’s functionality and success.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Daniella",
    company: "Inject IVF",
    role: "Founder",
    quote:
      "Diana expertly delivered a beautiful, functional website that perfectly reflects Inject IVF’s mission.",
    image: image3,
    imagePositionY: 0.1,
  },
];
const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };
  const handleClickNext = () => {
    setTestimonialIndex((curr) => {
      if (curr === testimonials.length - 1) return 0;
      return curr + 1;
    });
  };

  return (
    <section id="testimonials" className="section">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap text-zinc-800" style={{ x: transformTop }}>
          See What Others Say About Working with Me
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-indigo-600"
          style={{ x: transformBottom }}
        >
          See What Others Say About Working with Me
        </motion.span>
      </h2>
      <div className="container">
        <div className="mt-20">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, company, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    key={name}
                    name={name}
                    company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                  />
                )
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10 text-zinc-800">
          <button
            className="border border-zinc-800 size-11 inline-flex 
            items-center justify-center rounded-full hover:bg-indigo-600 
            hover:text-white hover:border-indigo-600 transition-all duration-300"
            onClick={handleClickPrev}
            aria-label="Previous"
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-zinc-800 size-11 inline-flex 
            items-center justify-center rounded-full hover:bg-indigo-600 
            hover:text-white hover:border-indigo-600 transition-all duration-300"
            onClick={handleClickNext}
            aria-label="Previous"
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
