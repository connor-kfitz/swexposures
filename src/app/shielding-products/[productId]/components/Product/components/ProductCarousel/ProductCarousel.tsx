"use client";
import Image from "next/image";
import Arrow from "../../../../../../../../public/images/products/right-arrow.svg";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";
import "./ProductCarousel.scss";

type ProductCarouselProps = {
  images: ProductImage[]
}

export default function ProductCarousel({images}: ProductCarouselProps) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, index) => (
          <div className="embla__slide" key={index}>
            <img className="embla__image" src={image.src}/>
          </div>
        ))}
      </div>
      <button className="embla__arrow-button left" onClick={scrollPrev}>
        <Image className="embla__arrow-icon" src={Arrow} alt="Left Arrow"/>
      </button>
      <button className="embla__arrow-button right" onClick={scrollNext}>
        <Image className="embla__arrow-icon" src={Arrow} alt="Right Arrow"/>
      </button>
    </div>
  )
}
