"use client";

import Button from "@/components/button";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { type MouseEvent } from "react";
import { motion } from "motion/react";

type Props = {
  project: Project;
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function CaseStudyPage({ project }: Props) {
  const { navigateToSection } = useSectionNavigation();

  const goToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateToSection("projects");
  };

  return (
    <div className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-zinc-900/80 via-zinc-800/40 to-transparent" />

      {/* Hero */}
      <section className="section pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16">
        <div className="container">
          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-wider text-indigo-400 font-medium">
              {project.category}
            </p>
            <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl text-zinc-100 font-semibold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-zinc-300 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-zinc-600/80 bg-zinc-900/40 px-3 py-1">
                {project.role}
              </span>
              <span className="rounded-full border border-zinc-600/80 bg-zinc-900/40 px-3 py-1">
                {project.year}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/"
                aria-label="Back to projects section"
                onClick={goToProjects}
              >
                <Button variant="secondary" className="normal-case">
                  Back to Projects
                </Button>
              </Link>
              {project.liveUrl ? (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="normal-case">
                    Live Site
                  </Button>
                </Link>
              ) : null}
              {project.githubUrl ? (
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="text" className="normal-case">
                    GitHub
                  </Button>
                </Link>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-12 md:mt-16"
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-600/40 bg-zinc-900/30 shadow-xl shadow-black/20">
              <div className="aspect-video w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="size-full object-cover"
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <motion.h2
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-5xl text-zinc-100"
          >
            Overview
          </motion.h2>
          <motion.p
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed"
          >
            {project.summary}
          </motion.p>
          <div className="mt-8">
            <p className="text-sm font-medium text-zinc-400 uppercase tracking-wide">
              Role
            </p>
            <p className="mt-2 text-zinc-200 text-lg">{project.role}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-zinc-600/50 bg-zinc-900/25 p-6 md:p-8 hover:border-zinc-500/60 transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl text-zinc-100 font-medium">Problem</h3>
              <p className="mt-4 text-zinc-300 leading-relaxed">{project.problem}</p>
            </motion.div>
            <motion.div
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.06 }}
              className="rounded-2xl border border-zinc-600/50 bg-zinc-900/25 p-6 md:p-8 hover:border-zinc-500/60 transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl text-zinc-100 font-medium">Solution</h3>
              <p className="mt-4 text-zinc-300 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <h2 className="text-3xl md:text-5xl text-zinc-100">Key features</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.keyFeatures.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-600/40 bg-zinc-900/20 p-5 md:p-6 hover:border-indigo-500/30 hover:bg-zinc-900/35 transition-all duration-300"
              >
                <p className="text-zinc-200 leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical highlights */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <h2 className="text-3xl md:text-5xl text-zinc-100">Technical highlights</h2>
          <ul className="mt-10 space-y-4 max-w-3xl">
            {project.technicalHighlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex gap-3 text-zinc-300 leading-relaxed"
              >
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-indigo-500" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Challenges */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <h2 className="text-3xl md:text-5xl text-zinc-100">Challenges &amp; mitigations</h2>
          <div className="mt-10 space-y-6 max-w-4xl">
            {project.challenges.map(({ challenge, solution }, i) => (
              <motion.div
                key={challenge}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-600/40 bg-zinc-900/20 p-6 md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300/90">
                  Challenge
                </p>
                <p className="mt-2 text-zinc-200 leading-relaxed">{challenge}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-400">
                  How we approached it
                </p>
                <p className="mt-2 text-zinc-300 leading-relaxed">{solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <h2 className="text-3xl md:text-5xl text-zinc-100">Results &amp; impact</h2>
          <p className="mt-4 text-sm text-zinc-500 max-w-2xl">
            Framing below stays qualitative on purpose—swap in concrete numbers only when you
            can cite them.
          </p>
          <ul className="mt-8 space-y-3 max-w-3xl">
            {project.results.map((r, i) => (
              <motion.li
                key={r}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="flex gap-3 text-zinc-300 leading-relaxed border-l-2 border-indigo-500/50 pl-4"
              >
                {r}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lessons */}
      <section className="section py-16 md:py-20 border-t border-zinc-700/40">
        <div className="container">
          <h2 className="text-3xl md:text-5xl text-zinc-100">Lessons learned</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {project.lessonsLearned.map((lesson, i) => (
              <motion.div
                key={lesson}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-dotted border-zinc-600/60 bg-zinc-900/15 p-5 text-zinc-300 leading-relaxed"
              >
                {lesson}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section py-20 md:py-28 border-t border-zinc-700/40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-zinc-600/50 bg-gradient-to-br from-zinc-900/60 to-zinc-800/30 p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-4xl text-zinc-100">Next steps</h2>
            <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
              Explore another case study or visit the live product.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/" onClick={goToProjects}>
                <Button variant="primary" className="normal-case">
                  All projects
                </Button>
              </Link>
              {project.liveUrl ? (
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="normal-case">
                    Open live site
                  </Button>
                </Link>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
