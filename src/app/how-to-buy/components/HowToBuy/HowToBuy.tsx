import Image from "next/image";
import Link from "next/link";
import Sirona from "../../../../../public/images/howToBuy/sironalogo.webp";
import Gamma from "../../../../../public/images/howToBuy/gamma-gurus-logo.png";
import "./HowToBuy.scss";

export default function HowToBuy() {
  return (
    <section className="how-to-buy">
      <div className="how-to-buy__container">
        <h1 className="how-to-buy__header">How To Buy</h1>
        <p className="how-to-buy__text">SWE works with a dedicated network of distributors in order to enhance availability of shielding solutions across key markets.</p>
        <ul className="how-to-buy__link-container">
          <li className="how-to-buy__link-item">
            <h2 className="how-to-buy__link-header">For purchase in the USA:</h2>
            <Link className="how-to-buy__link" href="https://www.sironacc.com/product-category/theranostics/theranostics-syringe-vial-shields/">
              <Image className="how-to-buy__link-image" src={Sirona} alt="Sirona Logo" />
              <div className="how-to-buy__link-text">Click for the link to website.</div>
            </Link>
          </li>
          <li className="how-to-buy__link-item">
            <h2 className="how-to-buy__link-header">For purchase in Australia:</h2>
            <Link className="how-to-buy__link" href="https://gammagurus.com/">
              <Image className="how-to-buy__link-image" src={Gamma} alt="Gamma Gurus Logo" />
              <div className="how-to-buy__link-text">Click for the link to website.</div>
            </Link>
          </li>
        </ul>
        <p className="how-to-buy__contact-text">For <strong>Canada, EU</strong> and <strong>other regions</strong> contact us at <Link className="how-to-buy__contact-link" href="mailto:sales@swexposures.com">sales@swexposures.com</Link>.</p>
        <p className="how-to-buy__contact-text">For distribution, wholesales inquiries or licensing opportunities: <Link className="how-to-buy__contact-link" href="mailto:robert.kamen@swexposures.com">robert.kamen@swexposures.com</Link></p>
      </div>
    </section>
  )
}
