import Image from "next/image"
import Contents from "../../../public/images/typaAPackage/swe-bag.webp";
import Bag from "../../../public/images/typaAPackage/swe-booth.webp";
import Thermometer from "../../../public/images/typaAPackage/cold.webp";
import "./TypeAPackagePage.scss";

export default function TypeAPackagePage() {
  return (
    <section className="type-a-package">
      <div className="type-a-package__content">
        <div className="specifications">
          <h3 className="specifications__header">Specifications:</h3>
          <ul className="specifications__image-container">
            <li className="specifications__image-item">
              <Image className="specifications__image" src={Contents} alt="Unpacked Container"/>
            </li>
            <li className="specifications__image-item">
              <Image className="specifications__image" src={Bag} alt="Container"/>
            </li>
            <li className="specifications__image-item">
              <Image className="specifications__image" src={Thermometer} alt="Thermometer"/>
            </li>         
          </ul>
          <ul className="specifications__text-list">
            <li className="specifications__text-item">100% Poly (methyl methacrylate)</li>
          </ul>
          <figure className="specifications__figure">
            <table className="specifications__table">
              <tbody className="specifications__table-body">
                <tr className="specifications__table-row gray-background">
                  <td className="specifications__table-item bold"></td>
                  <td className="specifications__table-item center">Type A transport bag</td>
                </tr>
                <tr className="specifications__table-row">
                  <td className="specifications__table-item bold">Weight</td>
                  <td className="specifications__table-item center">2.3 Kg (5 lbs)*</td>
                </tr>
                <tr className="specifications__table-row gray-background">
                  <td className="specifications__table-item bold">
                    Outer Dimensions
                    <br/>
                    (WxLxH)
                  </td>
                  <td className="specifications__table-item center">11.75×11.75×13.5”</td>
                </tr>
                <tr className="specifications__table-row">
                  <td className="specifications__table-item bold">Fabric Material</td>
                  <td className="specifications__table-item center">
                    <ul className="specifications__table-list">
                      <li className="specifications__table-list-item">Ballistic Nylon Exterior</li>
                      <li className="specifications__table-list-item">Metalized polyester insulation</li>
                    </ul>
                  </td>
                </tr>
                <tr className="specifications__table-row gray-background">
                  <td className="specifications__table-item bold">Foam insert</td>
                  <td className="specifications__table-item center">Cross-linked Polyethylene foam inserts (XLPE)</td>
                </tr>
              </tbody>
            </table>
            <figcaption className="specifications__figure-caption">* varies for a customized solution</figcaption>
          </figure>
        </div>
        <div className="features">
          <h2 className="features__sub-header">Type A | All Isotopes</h2>
          <div className="features__divider"></div>
          <h1 className="features__header">Type A Transport Bag</h1>
          <p className="features__text">Customizable Type-A transport bag for regular and temperature-controlled shipment of radiopharmaceuticals</p>
          <h3 className="features__sub-header-three">Features</h3>
          <ul className="features__text-list">
            <li className="features__text-item">Dot 7A certified (SWE shields), and certification services for customized configuration.</li>
            <li className="features__text-item">Robust construction, made of ballistic grade nylon material.</li>
            <li className="features__text-item">Lightweight solution, ergonomic design (eg.: {'<'} 20 lbs combined with SWE unit dose shield).</li>
            <li className="features__text-item">Customizable foam inserts to accommodate any commercial shields.</li>
            <li className="features__text-item">Foam inserts made of Cross-linked polyethylene, resistant to water.</li>
            <li className="features__text-item">
              Thermal Support:
              <ul className="features__sub-text-list">
                <li className="features__sub-text-item">Cool Shield: Built-in material, providing insulation from the atmospheric conditions</li>
                <li className="features__sub-text-item">Thermal foam inserts for the use of additional temperature control components (eg: dry ice /cold gel-packs).</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
