import Button from "@/components/button";
import { projectHomeBadgeTech, projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const Projects: FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl text-zinc-200">
          Selected Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Deep-dives on product work—each study covers problem framing, build decisions, and
          outcomes.
        </p>
        <div className="mt-10 md:mt-16 lg:mt-20 flex flex-col">
          {projects.map((project, index) => {
            const badges = projectHomeBadgeTech(project, 5);
            const isLast = index === projects.length - 1;

            return (
              <article
                key={project.slug}
                className={twMerge(
                  "group border-t border-dotted border-zinc-500/50 py-10 md:py-12 lg:py-14",
                  isLast && "border-b border-dotted border-zinc-500/50",
                )}
              >
                <div
                  className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 md:items-center"
                >
                  <div
                    className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1024px) 46vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <p className="text-xs font-medium uppercase tracking-wider text-indigo-400">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl md:text-3xl lg:text-4xl text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base text-zinc-400 leading-relaxed max-w-xl">
                      {project.tagline}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {badges.map((tech) => (
                        <span
                          key={`${project.slug}-${tech}`}
                          className="rounded-full border border-zinc-600/60 px-2.5 py-1 text-xs text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link href={`/projects/${project.slug}`}>
                        <Button variant="primary" className="normal-case">
                          View Case Study
                        </Button>
                      </Link>
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          <Button variant="secondary" className="normal-case">
                            Live Site
                          </Button>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
