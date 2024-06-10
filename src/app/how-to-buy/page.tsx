import HowToBuy from "./components/HowToBuy/HowToBuy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purchase Nuclear Medical Shielding Products"
}

export default function HowToBuyPage() {
  return (
    <main>
      <HowToBuy/>
    </main>
  )
}
