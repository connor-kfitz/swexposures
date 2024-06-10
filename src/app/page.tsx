
import Welcome from "./components/Welcome/Welcome";
import Testimonials from "./components/Testimonials/Testimonials";
import LatestNews from "./components/LatestNews/LatestNews";
import { Metadata } from "next";
import "./styles/home.scss";

export const metadata: Metadata = {
  title: "South West Exposures - Nuclear Medical Shielding"
};

export default function Home() {
  return (
    <main className="home">
      <Welcome/>
      <Testimonials/>
      <LatestNews/>
      <div className="home__filler"></div>
    </main>
  );
}
