import Link from "next/link";
import "./Products.scss";

type ProductProps = {
  products: Product[]
}

export default function Products({ products }: ProductProps) {
  return (
    <section className="products">
      <div className="products__container">
        <h1 className="products__title">All Products</h1>
        <ul className="products__products-container">
          {products.map((product, index) => (
            <ProductCard image={product.images[0]} name={product.name} model={product.model} description={product.description} id={product.id} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

type ProductCardProps = {
  image: ProductImage,
  name: string,
  model: string,
  description: string,
  id: string
}

function ProductCard({ image, name, model, description, id }: ProductCardProps) {
  return (
    <li className="product-card">
      <Link className="product-card__link" href={`/shielding-products/${id}`}>
        <div className="product-card__image-container">
          <img className="product-card__image" src={image.src} alt={`${model} Product`} />
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
