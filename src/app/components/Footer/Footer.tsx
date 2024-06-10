import ScrollButton from "./ScrollButton/ScrollButton";
import Image from "next/image"
import Logo from "../../../../public/images/footer/footer-logo.webp";
import Linkedin from "../../../../public/images/footer/linkedin-icon.svg";
import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <ScrollButton />
      <div className="footer__upper">
        <div className="footer__upper-container">
          <Image className="footer__logo" src={Logo} alt="South West Exposures Company Logo"/>
        </div>
      </div>
      <div className="footer__lower">
        <ul className="footer__socials-container">
          <li className="footer__socials-item">
            <Link className="footer__socials-link" href="https://www.linkedin.com/in/swexposures/?originalSubdomain=ca" target="_blank">
              <Image className="footer__socials-image" src={Linkedin} alt="Linkedin Icon"/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
