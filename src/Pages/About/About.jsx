/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Service from "../../Components/Services/Service";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";
import aboutImg from "../../assets/aboutImg.png";

const About = () => {
  return (
    <div>
        <Helmet>
        <title>SmartStore | About</title>
      </Helmet>
      <PageHeader pageName={"About Us"} />
      <Service />
      <div className="pb-10">
        <div className="max-w-screen-xl mx-auto px-3 md:px-0">
          <div className="md:flex gap-10 justify-between items-center">
            <div className="md:w-1/2">
              <img className="md:w-[70%]" src={aboutImg} alt="" />
            </div>
            <div className="md:w-1/2">
              <h5 className="text-2xl font-semibold py-5 uppercase">Welcome to SmartStore</h5>
              <p className="text-[#3A3A3A]">
                your ultimate destination for all things tech! As a premier
                ecommerce website, SmartStore brings you a curated selection of
                the latest and greatest in the world of electronics, featuring
                an extensive range of smartphones, smartwatches, laptops, and
                more. <br /> <br /> At SmartStore, we understand the significance of staying
                connected in today's fast-paced world. Our collection of
                cutting-edge smartphones offers a wide spectrum of choices,
                catering to various preferences and budgets. Whether you're an
                Android enthusiast, an iOS aficionado, or a fan of other
                operating systems, you'll find the perfect device to suit your
                needs. From flagship models with stunning displays and powerful
                processors to budget-friendly options that don't compromise on
                quality, SmartStore ensures that you have access to the best
                that the market has to offer.
              </p>
              <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase">Shop our store</button>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
      <ShopInstagram/>
    </div>
  );
};

export default About;
