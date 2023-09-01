import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { FaLongArrowAltRight, FaRegEye, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useCartContext } from "../../hooks/useCartContext";
const MobileProducts = () => {
  const [products] = useProducts();
  const mobileData = products.filter(product => product?.category === 'Smartphones')
  const {addToCart} = useCartContext();
  

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
        <div className="flex justify-between py-5 px-5 uppercase">
        <h5 className="text-2xl font-semibold">Smartphones</h5>
        <Link className=" text-xs transition-all border border-black gap-1 py-1 px-2 rounded inline-flex items-center hover:bg-black hover:text-white hover:border-white" to={'/shop'}>Go to Shop <FaLongArrowAltRight/></Link>
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
                <SwiperSlide key={product?._id} className="py-10 px-5">
                <div className="flex flex-col rounded relative group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <div className="relative pt-3 pb-3 ">
                          <img
                            className="mx-auto w-[80%]"
                            src={product.image}
                            alt=""
                          />
                          <div className="absolute bottom-16 right-2 gap-2 flex flex-col  justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                            <Link to={`/products/${product._id}`}>
                              <button className="flex text-xs border  items-center gap-1 bg-white text-slate-600 hover:bg-black hover:text-white justify-center w-8 h-8 rounded-full">
                                <FaRegEye size={16} />
                              </button>
                            </Link>
                            <button
                              onClick={() => addToCart(product._id)}
                              className="flex text-xs border  items-center gap-1 bg-white text-slate-600 hover:bg-black hover:text-white justify-center w-8 h-8 rounded-full"
                            >
                              <FaShoppingCart size={16} />
                            </button>
                          </div>
                          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"></div>
                        </div>

                        <div className=" border-t-2  px-2 py-3">
                          <div className="flex justify-between items-center pb-1">
                            <Link
                              to={`/products/${product._id}`}
                              className="hover:underline"
                            >
                              <p className="font-bold text-xs uppercase">
                                {product.name}
                              </p>
                            </Link>
                            <p className="text-[#48a7cf] font-bold">
                              ${product.price}
                            </p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="font-bold text-xs uppercase">
                              Brand: {product.brand}
                            </p>
                            <p className="font-bold text-xs uppercase flex items-center gap-1">
                              <FaStar /> {product.rating}
                            </p>
                          </div>
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
