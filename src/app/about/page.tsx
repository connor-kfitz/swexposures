import CompanyHistory from "./components/CompanyHistory/CompanyHistory";
import CompanyFounder from "./components/CompanyFounder/CompanyFounder";
import CompanyAffiliation from "./components/CompanyAffiliation/CompanyAffiliation";

export default function About() {
  return (
    <main>
      <CompanyHistory/>
      <CompanyFounder/>
      <CompanyAffiliation/>
    </main>
  )
}
