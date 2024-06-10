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
    title: `Search Articles by Tag: Explore a Curated Collection of Articles by ${tag}`
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
