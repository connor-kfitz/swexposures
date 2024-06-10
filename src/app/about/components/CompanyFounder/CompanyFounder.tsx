import Image from "next/image"
import Profile from "@/../public/images/companyFounder/founder-image.webp";
import "./CompanyFounder.scss";

export default function CompanyFounder() {
  return (
    <section className="company-founder">
      <div className="company-founder__container">
        <h2 className="company-founder__header">Company Founder</h2>
        <Image className="company-founder__profile-image" src={Profile} alt="Robert Kamen Headshot"/>
        <div className="company-founder__content">
          <h3 className="company-founder__name"><strong>Robert Kamen</strong>, (B.A.Economics,MRT(N))</h3>
          <h4 className="company-founder__position">CEO</h4>
          <p className="company-founder__text">Robert has more than 20 years clinical and academic expertise in Nuclear Medicine Technology, Radiation Safety and Business Administration.  He also served on numerous advisory boards for the CAMRT and CPSO. Robert was a Radiation Safety Specialist on the Emergency Decontamination Unit at UHN.</p>
        </div>
      </div>
    </section>
  )
}
