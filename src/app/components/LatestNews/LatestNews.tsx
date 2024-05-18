import Link from "next/link";
import Image from "next/image";
import ArticleOneImage from "../../../../public/images/home/article-one-image.webp"
import ArticleTwoImage from "../../../../public/images/home/article-two-image.webp"
import "./LatestNews.scss";

export default function LatestNews() {
  return (
    <section className="latest-news">
    <h2 className="latest-news__header">Latest News</h2>
    <ul className="latest-news__content-container">
      <li className="latest-news__item">
        <article className="latest-news__article">
          <Link className="latest-news__article-link" href="/">
            <Image className="latest-news__article-image" src={ArticleOneImage} alt ="Article"/>
            <h3 className="latest-news__article-header">South West will be presenting during the next CNIC event: “Exploring the Canadian Isotope Ecosystem”, Wednesday, July 14</h3>
          </Link>
          <time className="latest-news__article-date">12 August 2021</time>
          <p className="latest-news__article-text">South West will be presenting during the next CNIC event: “Exploring the Canadian Isotope Ecosystem”, Wednesday, July 14 Join CNIC partners and South West Exposures to explore in depth some of the critical companies changing the landscape of medical isotope production in Canada and their impact on improving patient care around the world. Shaun Rhamdany…</p>
          <Link className="latest-news__article-read-more" href="">Read More</Link>
        </article>
      </li>
      <li className="latest-news__item">
        <article className="latest-news__article">
          <Link className="latest-news__article-link" href="">
            <Image className="latest-news__article-image" src={ArticleTwoImage} alt ="Article"/>
            <h3 className="latest-news__article-header">South West Exposures signs a distribution agreement with Gamma Gurus</h3>
          </Link>
          <time className="latest-news__article-date">12 August 2021</time>
          <p className="latest-news__article-text">South West Exposures signs a distribution agreement with Gamma Gurus Toronto, Sydney, July 2 nd 2020 South West Exposures (Toronto, Canada) and Gamma Gurus (Sydney, Australia) have entered into adistribution agreement to bring South West Exposures’ (SWE) technologies into Australia and New-Zealand, including its break-through Theranostic products. “SWE is committed to developing products and solutions…</p>
          <Link className="latest-news__article-read-more" href="">Read More</Link>
        </article>
      </li>
    </ul>
  </section>
  )
}
