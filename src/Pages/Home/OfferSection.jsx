import offerImg from "../../assets/offerImg.png";

const OfferSection = () => {
  return (
    <div
      className="bg-[#EDF1F3] pt-10 md:pt-0 h-[75vh] md:h-[60vh] my-10 bg-right-bottom bg-no-repeat bg-contain"
      style={{
        backgroundImage: `url(${offerImg})`,
        backgroundPosition: "right bottom -40px",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-3 md:px-0">
        <div className=" w-[100%] h-[50vh] md:flex items-center">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-10 bg-black"></div>
              <p className="text-xl uppercase">10% off</p>
            </div>
            <h2 className="uppercase text-7xl py-5">new year sale</h2>
            <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150">
              SHOP SALE
            </button>
          </div>
          <div className="md:w-1/2">
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
