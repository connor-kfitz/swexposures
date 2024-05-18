import Link from "next/link";
import "./Welcome.scss";

export default function Welcome() {
  return (
    <section className="welcome">
    <div className="welcome__content">
      <h1 className="welcome__header">Welcome to South West Exposures</h1>
      <ul className="welcome__content-list">
        <li className="welcome__list-item">Adaptive shielding solutions to compliment user’s practices</li>
        <li className="welcome__list-item">Innovations in compounding and transportation of radioisotopes</li>
        <li className="welcome__list-item">Type A certified packaging solutions for syringes and vials</li>
        <li className="welcome__list-item">Wide range of isotopes and clinical applications covered</li>
      </ul>
      <Link className="welcome__about-link" href="/about">About South West Exposures</Link>
    </div>
  </section>
  )
}
