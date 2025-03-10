"use client";

import Button from "@/components/button";
import Link from "next/link";
import { FC, MouseEvent, useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);

      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      navAnimate(navScope.current, { height: 0 });
    }
  }, [
    bottomLineAnimate,
    bottomLineScope,
    isOpen,
    navAnimate,
    navScope,
    topLineAnimate,
    topLineScope,
  ]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      {/* Nav Menu */}
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-800 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-700 
              py-8 group/nav-item relative isolate"
              onClick={handleClickMobileNavItem}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div
                className="absolute w-full h-0 bg-stone-700 group-hover/nav-item:h-full 
              transition-all duration-500 bottom-0 -z-10"
              ></div>
            </Link>
          ))}
        </nav>
      </div>
      {/* Portfolio Name */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <Link href="/">
                <span className="text-xl uppercase font-bold">
                  Diana&nbsp; Benavides
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Menu and Contact Me Button */}
      <div className="fixed top-0 right-0 w-[1/2] z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                className="size-11 bg-stone-300 text-stone-800 
              rounded-full inline-flex justify-center items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              <Button variant="primary" className="hidden md:inline-flex">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
