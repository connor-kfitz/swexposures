import getAllProducts from "@/app/lib/getAllProducts";
import getFilteredProducts from "@/app/lib/getFilteredProducts";
import Image from "next/image";
import DropdownArrow from "../../../../../../../public/images/products/dropdown-arrow.svg";
import Checkmark from "../../../../../../../public/images/products/checkmark.svg";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SortDirection } from "@/app/common/enums";
import { capitalizeFirstLetter } from "@/app/common/utils";
import { sortDirectionOptions } from "@/app/common/constants";
import "./ProductFilters.scss";

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

export default function ProductFilters({ productCategories, setProductList, setLoadingProducts }: ProductFiltersProps) {

  const [filterOptions, setFilterOptions] = useState(new FilterOptions("", SortDirection.None));

  useEffect(() => {
    setProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOptions])

  async function setProducts() {
    setLoadingProducts(true);
    if (Object.values(filterOptions).every(value => value === "")) { setProductList(await getAllProducts()) }
    else { setProductList(await getFilteredProducts(filterOptions.category, filterOptions.sortBy)) }
    setLoadingProducts(false);
  }

  async function filterByCategory(value: string) {
    const selectedOption = value;
    setFilterOptions((previous) => ({ ...previous, "category": selectedOption.toLowerCase() }));
  }

  async function filterBySortDirection(value: SortDirection) {
    const selectedOption = value;
    setFilterOptions((previous) => ({ ...previous, "sortBy": selectedOption }));
  }

  return (
    <ul className="filters">
      <li className="filters__item">
        <Dropdown options={productCategories.map(category => category.name)} field="Select Category" action={filterByCategory} activeItem={filterOptions.category} zIndex={85}/>
      </li>
      <li className="filters__item">
        <Dropdown options={sortDirectionOptions} field="Sort By" action={filterBySortDirection} activeItem={filterOptions.sortBy} zIndex={80}/>
      </li>
    </ul>
  )
}

type DropdownProps = {
    options: string[] | SortDirection[],
    field: string,
    action: Function,
    activeItem: string,
    zIndex: number
}

function Dropdown({ options, field, action, activeItem, zIndex }: DropdownProps) {

  const [dropdown, setDropdown] = useState(false);

  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeDropdownEvent(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", (event) => closeDropdownEvent(event));

    return () => {
      document.removeEventListener("mousedown", closeDropdownEvent);
    }
  });

  return (
    <button className="dropdown" onClick={() => setDropdown((previous) => !previous)} ref={dropdownRef} style={{zIndex: zIndex}}>
      <span className="dropdown__selected">{!activeItem ? field : capitalizeFirstLetter(activeItem)}</span>
      <Image className="dropdown__arrow-icon" src={DropdownArrow} alt="Down Arrow"/>
      <ul className={`dropdown__options-container` + (dropdown ? " active" : "")}>
        <li className="dropdown__option" value={0} onClick={() => action("")}>
          {capitalizeFirstLetter(field)}
          {activeItem === "" && <Image className="dropdown__checkmark" src={Checkmark} alt="Checkmark"/>}
        </li>
        {options?.map((option, index) => (
          <li className="dropdown__option" value={index + 1} key={index} onClick={() => action(option)}>
            {capitalizeFirstLetter(option)}
            {activeItem === option && <Image className="dropdown__checkmark" src={Checkmark} alt="Checkmark"/>}
          </li>
        ))}
      </ul>
    </button>
  )
}
