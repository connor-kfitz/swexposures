import ArticleSearchBy from "@/app/components/ArticleSearchBy/ArticleSearchBy";
import getArticlesByTag from "@/app/lib/getArticlesByTag";
import { Metadata } from "next";

type Params = {
  params: {
    tag: string
  }
}

export const revalidate = 60;

export async function generateMetadata({ params: { tag } }: Params): Promise<Metadata> {
  return {
    title: `Search Articles by Tag: Explore a Curated Collection of Articles by ${tag}`,
    description: `Discover curated news articles tagged with ${tag}. Our intuitive search feature delivers 
    up-to-date and insightful updates, keeping you informed with the latest stories directly related to the tag you're interested in. 
    Explore now for a seamless news reading experience!`
  }
}

export default async function TagPage({ params: { tag } }: Params) {

  tag = tag.replace(/-/g, ' ');
  const articles = await getArticlesByTag(tag);

  return (
    <main>
      <ArticleSearchBy searchType="Tag" searchValue={tag} articles={articles}/>
    </main>
  )
}
