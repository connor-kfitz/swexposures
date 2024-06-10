import Image from "next/image";
import History from "@/../public/images/companyHistory/history-image.png";
import "./CompanyHistory.scss";

export default function CompanyHistory() {
  return (
    <section className="company-history">
      <div className="company-history__container">
        <Image className="company-history__image" src={History} alt="Gloved Hand Holding a Petri Dish"/>
        <div className="company-history__content">
          <h1 className="company-history__header">Company History</h1>
          <Image className="company-history__image-lower" src={History} alt="Gloved Hand Holding a Petri Dish"/>
          <p className="company-history__text">South West Exposures is a firm specializing in the design and fabrication of disruptive shielding technology.</p>
          <p className="company-history__text">It was founded by a select team of experts in radiopharmacy, radiation safety, technologist, and radiochemistry, collecting more than 50+ years of experience in the radiopharmaceutical industry.</p>
          <p className="company-history__text">With years of insights, research and collaboration, South West Exposures has now brought the revolutionary South West Shielding to market. South West Shielding is a proprietary design of customizable Theranostic, Nuclear Medicine and Molecular Imaging shielding solutions, which outperforms existing shielding devices by offering enhancements in key performance indices: radiation safety, package weight/size (EHS), transportation efficiencies and ROI.</p>
        </div>
      </div>
    </section>
  )
}
