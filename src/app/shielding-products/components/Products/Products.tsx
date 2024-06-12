"use client";
import Link from "next/link";
import getAllProducts from "@/app/lib/getAllProducts";
import getFilteredProducts from "@/app/lib/getFilteredProducts";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { capitalizeFirstLetter } from "@/app/common/utils";
import "./Products.scss";

type ProductProps = {
  productCategories: ProductCategory[],
  products: Product[]
}

export default function Products({ productCategories, products }: ProductProps) {

  const [productList, setProductList] = useState(products);

  return (
    <section className="products">
      <div className="products__container">
        <h1 className="products__title">Shielding Products</h1>
        <ProductFilters productCategories={productCategories} setProductList={setProductList}/>
        <ul className="products__products-container">
          {productList.map((product, index) => (
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

type ProductFiltersProps = {
  productCategories: ProductCategory[],
  setProductList: Dispatch<SetStateAction<Product[]>>
}

class FilterOptions {
  constructor(category: string) {
    this.category = category
  }
  category: string;
}

function ProductFilters({ productCategories, setProductList }: ProductFiltersProps) {

  const [filterOptions, setFilterOptions] = useState(new FilterOptions(""));

  useEffect(() => {
    setProducts();
  }, [filterOptions])

  async function setProducts() {
    if (Object.values(filterOptions).every(value => value === "")) { setProductList(await getAllProducts()) }
    else { setProductList(await getFilteredProducts(filterOptions.category)) }
  }

  async function filterByCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    let selectedOption = event.target.options[event.target.selectedIndex].text;
    if (event.target.value === "0") selectedOption = "";
    setFilterOptions((previous) => ({ ...previous, "category": selectedOption.toLowerCase() }));
  }

  return (
    <ul className="filters">
      <li className="filters__item">
        <select className="filters__dropdown" onChange={filterByCategory}>
          <option className="filters__dropdown-option" value={0}>Select Category</option>
          {productCategories?.map((categoy, index) => (
            <option className="filters__dropdown-option" value={index + 1} key={index}>{capitalizeFirstLetter(categoy.name)}</option>
          ))}
        </select>
      </li>
    </ul>
  )
}
