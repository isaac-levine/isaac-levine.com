import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Blogs } from "@/components/Blogs";
import { HomeSection } from "@/components/HomeSection";
import { projects } from "@/constants/projects";
import { getAllBlogs } from "../../lib/getAllBlogs";
import Image from "next/image";

const POSTS_PREVIEW = 3;
const PROJECTS_PREVIEW = 4;

export default async function Home() {
  const blogs = (await getAllBlogs()).map(({ component, ...meta }) => meta);

  return (
    <Container>
      <Heading as="h1" className="font-black mb-4">
        Isaac Levine
      </Heading>
      <div className="flex justify-between items-center gap-8">
        <div className="flex-1">
          <Paragraph className="max-w-xl">
            I&apos;m a software engineer living in Boston, MA. I work at CarGurus, where I help build the product data platform, and I previously co-founded <a href="https://frontstep.ai" className="underline" target="_blank">frontstep.ai</a>, which was acquired by R&amp;M Capital in April 2026.
          </Paragraph>
          <Paragraph className="max-w-xl mt-4">
            I&apos;ve worked across the stack at both startups and large companies, but I&apos;m mainly focused on backend work and especially interested in distributed systems. You can find more of my work on my <a href="https://github.com/isaac-levine" className="underline" target="_blank">GitHub</a>.
          </Paragraph>
        </div>
        <Image
          src="/images/new-headshot.png"
          alt="Isaac Levine"
          width={160}
          height={160}
          className="hidden md:block rounded-full shadow-lg flex-shrink-0 mr-8 w-auto h-auto saturate-[0.8]"
        />
      </div>
      <HomeSection
        title="Recent posts"
        href="/blog"
        linkLabel="All posts"
        more={<Blogs blogs={blogs.slice(POSTS_PREVIEW)} />}
        moreCount={Math.max(blogs.length - POSTS_PREVIEW, 0)}
      >
        <Blogs blogs={blogs.slice(0, POSTS_PREVIEW)} />
      </HomeSection>
      <HomeSection
        title="Recent projects"
        href="/projects"
        linkLabel="All projects"
        more={<Projects start={PROJECTS_PREVIEW} />}
        moreCount={Math.max(projects.length - PROJECTS_PREVIEW, 0)}
      >
        <Projects end={PROJECTS_PREVIEW} />
      </HomeSection>
      <TechStack />
    </Container>
  );
}
