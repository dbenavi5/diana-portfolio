import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import Image from "next/image";

const testimonials = [
  {
    name: "Simone Nicoles",
    company: "Hive Trio",
    role: "Project Manager & Frontend Developer",
    quote:
      "Diana's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Chris",
    company: "Hive Trio",
    role: "Web Design",
    quote:
      "Diana transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Edith Benavides",
    company: "Inject IVF",
    role: "Founder",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];
const Testimonials: FC = () => {
  const testimonialIndex = 0;
  return (
    <section className="section">
      <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
        <span className="whitespace-nowrap">
          See What Others Say About Working with Me
        </span>
        <span className="whitespace-nowrap self-end text-red-orange-500">
          See What Others Say About Working with Me
        </span>
      </h2>
      <div className="container">
        <div className="mt-20">
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }, index) =>
              index === testimonialIndex && (
                <div key={name} className="grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center">
                  <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                    <Image
                      src={image}
                      alt={name}
                      className="size-full object-cover"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                    />
                  </div>
                  <blockquote className="md:col-span-3">
                    <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0">
                      <span>&ldquo;</span>
                      <span>{quote}</span>
                      <span>&rdquo;</span>
                    </div>

                    <cite className="block mt-4 md:mt-8 not-italic md:text-lg lg:text-xl">
                      {name}, {role}, at {company}
                    </cite>
                  </blockquote>
                </div>
              )
          )}
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10 text-stone-200">
          <button className="border border-stone-200 size-11 inline-flex items-center justify-center rounded-full">
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
          <button className="border border-stone-200 size-11 inline-flex items-center justify-center rounded-full">
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
