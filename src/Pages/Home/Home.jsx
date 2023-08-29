import Subscribe from "../../Components/Subscribe/Subscribe";
import LatestPost from "./LatestPost";
import MobileProducts from "./MobileProducts";
import OfferSection from "./OfferSection";
import Service from "../../Components/Services/Service";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Slider from "./Slider";
import SmartWatch from "./SmartWatch";
import { Helmet } from "react-helmet";
import Laptop from "./Laptop";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SmartStore | Home</title>
      </Helmet>
      <Slider />
      <Service />
      <MobileProducts />
      <SmartWatch />
      <Laptop/>
      <OfferSection />
      <LatestPost />
      <Subscribe />
      <ShopInstagram />
    </div>
  );
};

export default Home;
