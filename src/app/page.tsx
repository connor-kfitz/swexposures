import Link from "next/link";
import "./styles/home.scss";

export default function Home() {
  return (
    <main>
      <section className="home">
        <div className="home__content">
          <h1 className="home__header">Welcome to South West Exposures</h1>
          <ul className="home__content-list">
            <li className="home__list-item">Adaptive shielding solutions to compliment user’s practices</li>
            <li className="home__list-item">Innovations in compounding and transportation of radioisotopes</li>
            <li className="home__list-item">Type A certified packaging solutions for syringes and vials</li>
            <li className="home__list-item">Wide range of isotopes and clinical applications covered</li>
          </ul>
          <Link className="home__about-link" href="/about">About South West Exposures</Link>
        </div>
      </section>
    </main>
  );
}
