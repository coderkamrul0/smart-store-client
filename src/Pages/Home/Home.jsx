import LatestPost from "./LatestPost";
import MobileProducts from "./MobileProducts";
import OfferSection from "./OfferSection";
import Service from "./Service";
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
        </div>
    );
};

export default Home;