
import Welcome from "./components/Welcome/Welcome";
import Testimonials from "./components/Testimonials/Testimonials";
import LatestNews from "./components/LatestNews/LatestNews";
import "./styles/home.scss";

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
