import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import ProductTable from "./components/ProductTable/ProductTable";
import "./Product.scss";

type ProductProps = {
  name: string,
  model: string,
  description: string,
  images: ProductImage[],
  features: string[],
  specifications: string[],
  table: any
}

export default function Product({name, model, description, images, features, specifications, table}: ProductProps ) {

  return (
    <section className="product">
      <div className="product__content">
        <div className="product-specifications">
          <ProductCarousel images={images}/>
          <h3 className="product-specifications__header">Specifications:</h3>
          <ul className="product-specifications__text-list">
            {specifications.map((specifiction, index) => (
              <li className="product-specifications__text-item" key={index}>{specifiction}</li>
            ))}
          </ul>
          <ProductTable table={table}/>
        </div>
        <div className="product-features">
          <h2 className="product-features__sub-header">{model}</h2>
          <div className="product-features__divider"></div>
          <h1 className="product-features__header">{name}</h1>
          <p className="product-features__text">{description}</p>
          <h3 className="product-features__sub-header-three">Features</h3>
          <ul className="product-features__text-list">
            {features.map((feature, index) => (
              <li className="product-features__text-item" key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
