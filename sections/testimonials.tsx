"use client";

import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import jose from "@/assets/images/jose.png";
import image3 from "@/assets/images/testimonial-3.jpg";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/testimonial";

const testimonials = [
  {
    name: "Edith Henriquez",
    company: "Inject IVF, Concierge Services",
    role: "Founder & Business Owner",
    quote:
      "Diana expertly delivered a beautiful, functional website that perfectly reflects Inject IVF’s mission.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Jose Paredes",
    company: "AA City Electric, Solar Company",
    role: "Business Owner",
    quote:
      "Diana was able to create a website that is easy to use and navigate. She was able to capture the essence of our business and present it in a way that is both professional and engaging.",
    image: {
      src: 'https://res.cloudinary.com/dpj6rkbus/image/upload/v1778315309/IMG_5408_jozx0j.heic',
      width: 1000,
      height: 1000,
    },
    imagePositionY: 0.1,
  },
  {
    name: "Dolores Ruiz & Vanessa Porras",
    company: "Born Again Thrift Store",
    role: "Store Owners",
    quote:
      "Diana was able to create a website that is visually appealing. She created a gallery of items that showcases the vibe of the store.",
    image: {
      src: 'https://res.cloudinary.com/dpj6rkbus/image/upload/v1778316838/dolo_van_vjrkpr.tiff',
      width: 1000,
      height: 1000,
    },
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
        className="relative text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={titleRef}
      >
        <motion.span
          className="whitespace-nowrap text-zinc-800"
          style={{ x: transformTop }}
        >
          See What Others Say About Working with Me
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-indigo-500"
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
                ),
            )}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10 text-zinc-800">
          <button
            className="border border-zinc-800 size-11 inline-flex 
            items-center justify-center rounded-full hover:bg-indigo-500 
            hover:text-white hover:border-indigo-500 transition-all duration-300"
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
            items-center justify-center rounded-full hover:bg-indigo-500 
            hover:text-white hover:border-indigo-500 transition-all duration-300"
            onClick={handleClickNext}
            aria-label="Next"
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
