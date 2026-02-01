import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { usePresence, motion } from "motion/react";

const Testimonial = (
  props: {
    name: string;
    quote: string;
    role: string;
    company: string;
    image: string | StaticImport;
    imagePositionY: number;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const {
    name,
    quote,
    role,
    company,
    image,
    imagePositionY,
    className,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimate,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();
  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimate,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimate().then(() => {
        citeEntranceAnimate();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    isPresent,
    citeEntranceAnimate,
    citeExitAnimation,
    quoteEntranceAnimate,
    quoteExitAnimation,
    safeToRemove,
  ]);
  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center text-zinc-800",
        className
      )}
      {...rest}
    >
      <div className="relative aspect-square md:aspect-[9/16] md:col-span-2">
        <motion.div
          className="absolute h-full bg-zinc-900 rounded-lg"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="size-full object-cover rounded-lg"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>

        <cite
          className="block mt-4 md:mt-8 not-italic md:text-lg lg:text-xl"
          ref={citeScope}
        >
          {name?.trim()}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
