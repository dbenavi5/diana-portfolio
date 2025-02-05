import Button from "@/components/button";
import Link from "next/link";
import { FC } from "react";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Projects",
  },
  {
    href: "#",
    label: "Testimonials",
  },
  {
    href: "#",
    label: "FAQs",
  },
  {
    href: "#",
    label: "Contact",
  },
];
const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 bg-green-400 rounded-full"></div>
            <span className="uppercase">One spot avaible for next month</span>
          </div>
          <div className="grid md:grid-cols-3 items-center">
            <div className="col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                variant="secondary"
                className="mt-8"
                iconAfter={
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
                }
              >
                dbenavi.db@gmail.com
              </Button>
            </div>
            <div className="">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Diana Benavides &bull; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
