import CompanyHistory from "./components/CompanyHistory/CompanyHistory";
import CompanyFounder from "./components/CompanyFounder/CompanyFounder";
import CompanyAffiliation from "./components/CompanyAffiliation/CompanyAffiliation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About South West Exposures"
};

export default function About() {
  return (
    <main>
      <CompanyHistory/>
      <CompanyFounder/>
      <CompanyAffiliation/>
    </main>
  )
}
