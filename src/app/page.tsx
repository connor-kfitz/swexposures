import Link from "next/link";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="home">
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
      <section className="testimonials">
        <h2 className="testimonials__header">Testimonial</h2>
        <blockquote className="testimonials__quote-container">
          <p className="testimonials__text">“When researching online, though all of the major manufacturers had vial shields that were advertised for PET use, the majority of those shields had a tungsten thickness of between 0.19” and 0.23″. With the half value layer of 511kev at ~0.1″ of tungsten, the thickness of these shields would not be at all sufficient for our use.  We finally found the South West Exposures (SWE) Ga-68 Vial shield that has a tungsten thickness of .89″ which was exactly what we needed to decrease the exposure to our technologists.  The SWE Ga-68 Vial shield is not only well shielded, it also has great functionality.</p>
          <p className="testimonials__text">Rob from SWE followed up promptly when we had questions about his product.</p>
          <p className="testimonials__text">The SWE Ga-68 Vial shield is not only well shielded, it also has great functionality”</p>
          <footer className="testimonials__footer">
            <cite className="testimonials__author">Imaging Center,Seattle (WA)</cite>
          </footer>
        </blockquote>
      </section>
    </main>
  );
}
