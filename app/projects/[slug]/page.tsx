import CaseStudyPage from "@/components/case-study/case-study-page";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project" };
  }

  return {
    title: `${project.title} · Case study`,
    description: project.tagline,
  };
}

export default function ProjectCaseStudyRoute({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}

export const dynamicParams = false;
