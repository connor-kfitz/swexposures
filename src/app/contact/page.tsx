import Contact from "./components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect with South West Exposures"
};

export default function ContactPage() {
  return (
    <main>
      <Contact/>
    </main>
  )
}
