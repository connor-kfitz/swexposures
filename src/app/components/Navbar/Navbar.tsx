"use client";
import Image from "next/image";
import Logo from "../../../../public/images/swe-logo.png";
import Menu from "../../../../public/images/menu-icon.png";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/app/common/constants";
import "./Navbar.scss";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  const pathname = usePathname();
  const pathArray = pathname.split("/");
  pathArray.splice(0, 1)

  function isActiveNavItem(path: string): boolean {
    if (!pathArray[0]) return pathname === path;
    return `/${pathArray[0]}` === path;
  }

  function getActiveName(path: string): string {
    const activeItem = navItems.find(item => item.path === path);
    return activeItem ? activeItem.name : "";
  }

  function toggleMobileMenu(): void {
    setMobileMenu((previous) => !previous);
  }

  return (
    <nav className="nav">
      <div className="nav__upper"></div>
      <div className="nav__container">
        <Link className="nav__logo-link" href="/">
            <Image className="nav__logo" src={Logo} alt="South West Exposures Logo"/>
          <img className="nav__logo"/>
        </Link>
        <ul className="nav__link-container">
          {navItems.map((item, index) => (
            <li className="nav__link-item" key={index}>
              <Link className={isActiveNavItem(item.path) ? "nav__link active": "nav__link"} href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button className="nav__mobile-menu-button" onClick={() => toggleMobileMenu()}>
          <Image className="nav__mobile-menu-icon" src={Menu} alt="Mobile Menu Icon"/>
        </button>
      </div>
      {mobileMenu && <div className="nav__mobile-link-section">
        <ul className="nav__mobile-link-container">
            {navItems.map((item, index) => (
                <li className="nav__mobile-link-item" key={index}>
                <Link className="nav__mobile-link" href={item.path}>{item.name}</Link>
                </li>
            ))}
        </ul>
      </div>}
      <div className="nav__lower">
        {pathArray[0] && 
          <div className="nav__lower-path">
            <span className="nav__lower-text">Home</span>
            {pathArray.map((section, index) => (
              <div key={index}>
                <span className="nav__lower-arrow">{'>'}</span>
                <span className="nav__lower-text-bold">{index === 0 ? getActiveName(`/${section}`) : section}</span>
              </div>
            ))}

        </div>}
      </div>
    </nav>
  )
}
