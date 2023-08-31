import iPhone14promax from "../../assets/Apple-iPhone-14-Pro-Max.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
const MobileProducts = () => {
  const [products] = useProducts();
  const mobileData = products.filter(product => product?.category === 'Smartphones')
  // const mobileData = [
  //   {
  //     id: 1,
  //     name: "iPhone 14 Pro",
  //     price: 1500,
  //     image: iPhone14promax,
  //   },
  //   {
  //     id: 1,
  //     name: "iPhone 13 Pro",
  //     price: 1500,
  //     image: iPhone14promax,
  //   },
  //   {
  //     id: 1,
  //     name: "iPhone 14 Pro",
  //     price: 1500,
  //     image: iPhone14promax,
  //   },
  //   {
  //     id: 1,
  //     name: "iPhone 14 Pro",
  //     price: 1500,
  //     image: iPhone14promax,
  //   },
  //   {
  //     id: 1,
  //     name: "iPhone 14 Pro",
  //     price: 1500,
  //     image: iPhone14promax,
  //   },
  //   {
  //     id: 1,
  //     name: "iPhone 14 Pro",
  //     price: 1500,
  //     image: iPhone14promax,
  //   },
  // ];

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
        <div className="flex justify-between py-5 uppercase">
        <h5 className="text-2xl font-semibold">Mobile Products</h5>
        <Link className="border-b-2 " to={'/shop'}>Go to Shop</Link>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}

          modules={[Pagination]}
          className="mySwiper"
        >
            {mobileData.map(product => (
                <SwiperSlide key={product?._id}>
                <div className="flex flex-col gap-3 border py-10 relative group">
                  <div className="relative cursor-pointer transition-transform transform-gpu hover:scale-110">
                    <img className="mx-auto w-[70%]" src={product?.image} alt="" />
                    <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex-col gap-2">
                          <Link to={`/products/${product._id}`}>
                          <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-2 rounded max-w-[120px]">View Detail <FaEye/></button>
                          </Link>
                          <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-1 rounded max-w-[120px]">Add Cart <FaShoppingCart/></button>
                        </div>
                  </div>
                  <div className="flex justify-around">
                    <p className="font-bold uppercase">{product?.name}</p>
                    <p className="text-[#72AEC8] font-bold">${product?.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobileProducts;
