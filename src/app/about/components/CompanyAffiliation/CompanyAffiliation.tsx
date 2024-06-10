import Image from "next/image";
import Link from "next/link";
import HealthHub from "@/../public/images/companyAffiliation/health_innovation_hub_colourlogo.webp";
import Nuclear from "@/../public/images/companyAffiliation/cnic-logo.jpeg";
import "./CompanyAffiliation.scss";

export default function CompanyAffiliation() {
  return (
    <section className="company-affiliation">
      <div className="company-affiliation__container">
        <h2 className="company-affiliation__header">Company Recognition and Affiliation</h2>
        <ul className="company-affiliation__content">
          <li className="company-affiliation__item">
            <Image className="company-affiliation__image" src={HealthHub} alt="Health Innovation Hub Company Logo"/>
            <p className="company-affiliation__text">South West Exposures became a member of the University of Toronto H2i incubator in 2019. That same year, SWE was awarded the prestigious Ontario Center of Excellence Grant.</p>
          </li>
          <li className="company-affiliation__item">
            <Image className="company-affiliation__image" src={Nuclear} alt="Canadian Nuclear Isotope Council Company Logo"/>
            <p className="company-affiliation__text">South West Exposures is a member of the Canadian Nuclear Isotope Council, an independent organization consisting of representatives from various levels within the Canadian health sector, nuclear industry and research bodies, convened specifically to advocate for our country’s role in the production of the world’s isotope supply.</p>
            <p className="company-affiliation__link-text">For more information, consult: <Link className="company-affiliation__link" href="http://www.canadianisotopes.ca/">http://www.canadianisotopes.ca/</Link></p>
          </li>
        </ul>
      </div>
    </section>
  )
}
