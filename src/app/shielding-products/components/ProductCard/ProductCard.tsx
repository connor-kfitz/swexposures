import Link from "next/link";
import "./ProductCard.scss";

type ProductCardProps = {
    image: ProductImage, 
    name: string,
    model: string,
    description: string,
    id: string
}

export default function ProductCard({ image, name, model, description, id}: ProductCardProps) {
  return (
    <li className="product-card">
      <Link className="product-card__link" href={`/shielding-products/${id}`}>
      <div className="product-card__image-container">
        <img className="product-card__image" src={image.src} alt={`${model} Product`}/>
      </div>
      <div className="product-card__content">
        <h2 className="product-card__name">{name}</h2>
        <div className="product-card__model">{model}</div>
        <p className="product-card__description">{description}</p>
      </div>
      </Link>
    </li>
  )
}
