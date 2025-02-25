"use client";

// import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import {  useScroll, useTransform } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Building responsive websites with clean code, thoughtful design, and seamless user experiences for individuals and small businesses.`;
const words = text.split(" ");

const Intro: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section
      id="intro"
      className="section mt-12 md:mt-16 lg:mt-20"
      ref={sectionRef}
    >
      <div className="container">
        <div className="sticky top-44">
          <h2
            className="text-4xl md:text-7xl lg:w-[80%]"
            // ref={scope}
          >
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className={twMerge('transition duration-700 text-white/15',wordIndex < currentWord && "text-white")}
              >{`${word} `}</span>
            ))}
          </h2>
        </div>
        <div className="h-[120vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Intro;
