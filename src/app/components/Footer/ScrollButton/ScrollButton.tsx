"use client";
import Image from "next/image"
import UpArrow from "../../../../../public/images/footer/up-arrow.svg";
import "./ScrollButton.scss";

export default function ScrollButton() {

  function scrollToTop(): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  return (
    <button className="scroll-button" onClick={() => scrollToTop()}>
      <Image className="scroll-button__image" src={UpArrow} alt="Up Arrow"/>
    </button>
  )
}
