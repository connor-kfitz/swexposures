import Markdown from "react-markdown";
import Image from "next/image";
import TagIcon from "../../../../../../public/images/news/tag-icon.svg";
import Link from "next/link";
import "./Article.scss";

type ArticleProps = {
  image: string,
  title: string,
  body: string,
  tags: string[]
}

export default function Article({ image, title, body, tags }: ArticleProps) {
  return (
    <section className="article">
      <article className="article__container">
        <img className="article__image" src={image} alt="Article Header"/>
        <h1 className="article__header">{title}</h1>
        <Markdown className="markdown">{body}</Markdown>
        <div className="article__info-container">
          <div className="article__tags-container">
            <div className="article__tag-label">
              <Image className="article__tag-icon" src={TagIcon} alt="Tag Icon" />
              Tagged:
            </div>
            <ul className="article__tag-container">
              {tags?.map((tag, index) => (
                <Tag tag={tag} key={index}/>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  )
}

type TagProps = {
  tag: string
}

function Tag({ tag }: TagProps) {
  return (
    <li className="tag">
      <Link className="tag__link" href={`/news/tag/${tag.toLowerCase().replace(/ /g, "-")}`}>{tag}</Link>
    </li>
  )
}