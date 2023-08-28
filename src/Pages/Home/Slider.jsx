import watch from "../../assets/watch4.png";
import phone from "../../assets/phone.png";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    subHeading: "CHECK YOUR BEST CHOICE",
    heading:"New Smartphone In Our Shop",
    image: phone,
  },
  {
    id: 2,
    subHeading: "CHECK YOUR BEST CHOICE",
    heading:
      "New Smartwatch In Our Shop",
    image: watch,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#EDF1F3] py-10">
      <div className="h-[60vh]">
        <div className="max-w-screen-xl mx-auto">
          <div className="md:flex items-center justify-between gap-10">
            {/* Text container */}
            <div className="md:w-2/3 text-center md:text-start">
              <p>{data[currentSlide].subHeading}</p>
              <h1 className=" text-4xl md:text-8xl font-bold">{data[currentSlide].heading}</h1>
              <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150">Explore More</button>
            </div>
            {/* Image container */}
            <div className="md:w-1/3">
              <img className="w-[50%] md:w-[100%] mx-auto md:mx-0" src={data[currentSlide].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
