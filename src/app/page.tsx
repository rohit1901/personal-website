import { Hero } from "@website/components/Home/Hero";
import { SelectedWork } from "@website/components/Home/SelectedWork";
import { Capabilities } from "@website/components/Home/Capabilities";
import { Writing } from "@website/components/Home/Writing";
import { ContactCta } from "@website/components/Home/ContactCta";
import { getFeaturedProjects } from "@website/content/projects";
import { getArticles } from "@website/lib/server/articles";
import { getEnglishResume } from "@website/lib/server/resume";
import { toArticle } from "@website/types/article";

export default async function Home() {
  const featuredProjects = getFeaturedProjects();
  const [articles, resume] = await Promise.all([
    getArticles(),
    getEnglishResume(),
  ]);
  const topArticles = articles.map(toArticle).slice(0, 3);

  return (
    <>
      <Hero image={resume?.basicInformation?.image} />
      <SelectedWork projects={featuredProjects} />
      <Capabilities />
      <Writing articles={topArticles} />
      <ContactCta />
    </>
  );
}
