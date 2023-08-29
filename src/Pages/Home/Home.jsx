import LatestPost from "./LatestPost";
import MobileProducts from "./MobileProducts";
import OfferSection from "./OfferSection";
import Service from "./Service";
import ShopInstagram from "./ShopInstagram";
import Slider from "./Slider";
import SmartWatch from "./SmartWatch";
import Subscribe from "./Subscribe";

const Home = () => {
    return (
        <div>
            <Slider/>
            <Service/>
            <MobileProducts/>
            <SmartWatch/>
            <OfferSection/>
            <LatestPost/>
            <Subscribe/>
            <ShopInstagram/>
        </div>
    );
};

export default Home;