import BottomHero from "../../components/bottomHero/BottomHero";
import Card from "../../components/card/Card";
import Search from "../../components/search/Search";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        padding: "15px",
      }}
    >
      <Search />
      <Slider />
      <Services />
      <Card />
      <BottomHero />
    </div>
  );
};

export default Home;
