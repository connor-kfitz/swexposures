
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import Testimonials from "./components/Testimonials/testimonials";
import LatestNews from "./components/LatestNews/LatestNews";
import "./styles/home.scss";

export default function Home() {
  return (
    <main className="home">
      <Welcome/>
      <Testimonials/>
      <LatestNews/>
      <div className="home__filler"></div>
      <Footer/>
    </main>
  );
}
