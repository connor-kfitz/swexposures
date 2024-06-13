"use client";
import Link from "next/link";
import getAllProducts from "@/app/lib/getAllProducts";
import getFilteredProducts from "@/app/lib/getFilteredProducts";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { capitalizeFirstLetter } from "@/app/common/utils";
import { SortDirection } from "@/app/common/enums";
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
        </ul>
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
          <img className="product-card__image" src={image.src} alt={`${model} Product`} />
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

type ProductFiltersProps = {
  productCategories: ProductCategory[],
  setProductList: Dispatch<SetStateAction<Product[]>>,
  setLoadingProducts: Dispatch<SetStateAction<boolean>>
}

class FilterOptions {
  constructor(category: string, sortBy: SortDirection) {
    this.category = category
    this.sortBy = sortBy;
  }
  category: string;
  sortBy: SortDirection
}

function ProductFilters({ productCategories, setProductList, setLoadingProducts }: ProductFiltersProps) {

  const [filterOptions, setFilterOptions] = useState(new FilterOptions("", SortDirection.None));

  useEffect(() => {
    setProducts();
  }, [filterOptions])

  async function setProducts() {
    setLoadingProducts(true);
    if (Object.values(filterOptions).every(value => value === "")) { setProductList(await getAllProducts()) }
    else { setProductList(await getFilteredProducts(filterOptions.category, filterOptions.sortBy)) }
    setLoadingProducts(false);
  }

  async function filterByCategory(event: React.ChangeEvent<HTMLSelectElement>) {
    let selectedOption = event.target.options[event.target.selectedIndex].text;
    if (event.target.value === "0") selectedOption = "";
    setFilterOptions((previous) => ({ ...previous, "category": selectedOption.toLowerCase() }));
  }

  async function filterBySortDirection(event: React.ChangeEvent<HTMLSelectElement>) {
    let options = [SortDirection.None, SortDirection.Ascending, SortDirection.Descending];
    let selectedOption = options[parseInt(event.target.value)];
    setFilterOptions((previous) => ({ ...previous, "sortBy": selectedOption }));
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
        <select className="filters__dropdown" onChange={filterBySortDirection}>
          <option className="filters__dropdown-option" value={0}>Sort By</option>
          <option className="filters__dropdown-option" value={1}>A-Z</option>
          <option className="filters__dropdown-option" value={2}>Z-A</option>
        </select>
      </li>
    </ul>
  )
}
