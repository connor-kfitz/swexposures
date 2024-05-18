import "./Testimonials.scss";

export default function Testimonials() {
  return (
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
  )
}
