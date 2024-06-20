"use client";
import ProductFilters from "./components/ProductFilters/ProductFilters";
import Link from "next/link";
import { useState } from "react";
import { capitalizeFirstLetter } from "@/app/common/utils";
import "./Products.scss";

type ProductProps = {
  productCategories: ProductCategory[],
  products: Product[]
}

export default function Products({ productCategories, products }: ProductProps) {

  const [productList, setProductList] = useState(products);
  const [loadingProducts, setLoadingProducts] = useState(false);

  return (
    <section className="products">
      <div className="products__container">
        <h1 className="products__title">Shielding Products</h1>
        <ProductFilters productCategories={productCategories} setProductList={setProductList} setLoadingProducts={setLoadingProducts}/>
        {products ? 
        <ul className="products__products-container">
        {!loadingProducts ? 
        <>
          {productList.map((product, index) => (
            <ProductCard image={product.images[0]} name={product.name} model={product.model} category={product.category} id={product.id} key={index} />
          ))}
        </>
          :
          <ul className="loading">
            <li className="loading__item">
              <div className="loading__animation"></div>
            </li>
            <li className="loading__item">
              <div className="loading__animation"></div>
            </li>
            <li className="loading__item">
              <div className="loading__animation"></div>
            </li>
            <li className="loading__item">
              <div className="loading__animation"></div>
            </li>
          </ul>
        }
        </ul> : <div className="products__text">Sorry, no products are currently available.</div>}
      </div>
    </section>
  )
}

type ProductCardProps = {
  image: ProductImage,
  name: string,
  model: string,
  category: string,
  id: string
}

function ProductCard({ image, name, model, category, id }: ProductCardProps) {
  return (
    <li className="product-card">
      <Link className="product-card__link" href={`/shielding-products/${id}`}>
        <div className="product-card__image-container">
          <img className="product-card__image" src={image.src} alt="Product Image"/>
        </div>
        <div className="product-card__content">
          <h2 className="product-card__name">{name}</h2>
          <div className="product-card__info">{model}</div>
          <div className="product-card__info">{capitalizeFirstLetter(category)}</div>
        </div>
      </Link>
    </li>
  )
}
