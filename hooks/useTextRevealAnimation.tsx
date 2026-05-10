import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const split = new SplitType(el, {
      types: "lines,words",
      tagName: "span",
    });
    return () => {
      split.revert();
    };
  }, [scope]);

  const entranceAnimation = () => {
    const el = scope.current;
    if (!el) return Promise.resolve();
    const words = el.querySelectorAll(".word");
    if (!words.length) return Promise.resolve();
    return animate(
      words,
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.15),
      },
    );
  };

  const exitAnimation = () => {
    const el = scope.current;
    if (!el) return Promise.resolve();
    const words = el.querySelectorAll(".word");
    const length = words.length;
    if (!length) return Promise.resolve();
    return animate(
      words,
      {
        transform: "translateY(100%)",
      },
      {
        duration: 0.3,
        delay: stagger(-0.025, {
          startDelay: length * 0.025,
        }),
      },
    );
  };

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  };
};

export default useTextRevealAnimation;
