"use client";

import Button from "@/components/button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";
import Link from "next/link";
import { FC, MouseEvent, useEffect } from "react";
import ContactDrawer from "@/components/contact-drawer";

const navItems = [
  {
    href: "#intro",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];
const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [entranceAnimation, inView]);

  const handleClickItems = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer role='contentinfo' id="contact" className="bg-zinc-900 text-zinc-200">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 bg-green-300 rounded-full animate-pulse"></div>
            <span className="uppercase">One spot avaible for next month</span>
          </div>
          <div className="grid md:grid-cols-3 items-center">
            <div className="col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <ContactDrawer
                formspreeEndpoint={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`}
                redirectTo="/"
                triggerLabel="dbenavi.db@gmail.com"
                triggerVariant="secondary"
                triggerClassName="mt-8"
                subject="New Portfolio Inquiry"
                triggerIconAfter={
                  <div className="size-6 overflow-hidden">
                    <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
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
                  </div>
                }
              />
            </div>
            <div className="">
              <nav role='navigation' className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link href={href} key={label} onClick={handleClickItems}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </Link>
                ))}
                <Link
                  href="https://github.com/dbenavi5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="text" className="text-lg">
                    GitHub
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/80 text-sm">
          Copyright &copy; Diana Benavides &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
