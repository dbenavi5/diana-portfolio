import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Link
        href="https://github.com/dbenavi5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="hover:text-indigo-600 transition duration-300"
      >
        <FaGithub className="size-8" aria-hidden="true" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/diana-c-benavides/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="hover:text-indigo-600 transition duration-300"
      >
        <FaLinkedin className="size-8" aria-hidden="true" />
      </Link>
    </div>
  );
};
