import ArticleSearchBy from "@/app/components/ArticleSearchBy/ArticleSearchBy";
import getArticleByTag from "@/app/lib/getArticleByTag";
import { Metadata } from "next";
import "./TagPage.scss";

type Params = {
  params: {
    tag: string
  }
}

export async function generateMetadata({ params: { tag } }: Params): Promise<Metadata> {
  return {
    title: tag,
    description: `This is the page of ${tag}`
  }
}

export default async function TagPage({ params: { tag } }: Params) {

  const articles = await getArticleByTag(tag);

  return (
    <main>
      <ArticleSearchBy searchType="Tag" searchValue={tag} articles={articles}/>
    </main>
  )
}
