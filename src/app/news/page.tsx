import NewsArticle from "./NewsArticle/NewsArticle";
import getLatestArticles from "../lib/getLatestArticles";
import "./News.scss";

export default async function News() {

  let newsArticles: NewsArticle[] = await getLatestArticles();

  return (
    <main className="news-page">
      <section className="news-section">
        <div className="news-section__header-background">
          <h1 className="news-section__header">Latest News</h1>
        </div>
        <div className="news-section__content">
          {newsArticles.map((article, index) => (
            <NewsArticle
              key={index}
              id={article.id} title={article.title} author={article.author} 
              body={article.body} datePublished={article.datePublished}
              image={article.image.src}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
