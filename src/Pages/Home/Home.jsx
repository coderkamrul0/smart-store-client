import Subscribe from "../../Components/Subscribe/Subscribe";
import LatestPost from "./LatestPost";
import MobileProducts from "./MobileProducts";
import OfferSection from "./OfferSection";
import Service from "../../Components/Services/Service";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Slider from "./Slider";
import SmartWatch from "./SmartWatch";

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