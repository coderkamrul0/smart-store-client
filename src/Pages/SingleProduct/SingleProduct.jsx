import { FaEye, FaStar } from "react-icons/fa";
import iphone from "../../assets/Apple-iPhone-14-Pro-Max.jpg";
import iPhone14promax from '../../assets/Apple-iPhone-14-Pro-Max.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
import Subscribe from "../../Components/Subscribe/Subscribe";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
const SingleProduct = () => {
  const [products] = useProducts();
  const [product,setProduct] = useState();
  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:5000/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
  },[id])
  const relatedData = products.filter(item => item?.category === product?.category)
  console.log(product);
  // const product = [
  //   {
  //     id: 1,
  //     name: "iPhone 14 pro max",
  //     image: iphone,
  //     price: 1300,
  //     rating: "5.0",
  //     stock: 5,
  //     category: "phone",
  //     brand: "Apple",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo eligendi possimus. Natus cum sequi sunt cumque consequatur eveniet impedit expedita unde, delectus aliquid, quod incidunt enim nisi maiores excepturi quidem nam tempore totam doloremque at esse quia veniam dignissimos! Adipisci cupiditate, doloribus neque repudiandae natus quibusdam inventore magni, in incidunt quia iure. Eius eligendi exercitationem sapiente consectetur, voluptatum ab voluptatibus aliquam nulla beatae rerum fugit repellendus quia veniam corporis ipsam quae vero nesciunt cum perferendis deleniti odio in dolore tenetur saepe? Rem, repellat quisquam. Soluta, dolores in unde praesentium blanditiis nemo illo beatae consequatur veritatis! Nisi delectus exercitationem ipsam",
  //   },
  // ];
  const mobileData = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: iPhone14promax,
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      price: 1500,
      image: iPhone14promax,
    },
    {
      id: 3,
      name: "iPhone 14 Pro",
      price: 1500,
      image: iPhone14promax,
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      price: 1500,
      image: iPhone14promax,
    },
    {
      id: 5,
      name: "iPhone 14 Pro",
      price: 1500,
      image: iPhone14promax,
    },
    {
      id: 6,
      name: "iPhone 14 Pro",
      price: 1500,
      image: iPhone14promax,
    },
  ];
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-3 md:px-0">
        <div className="md:flex gap-10 justify-between items-center">
          <div className="md:w-1/3 py-5">
            <img className="w-full" src={product?.image} alt="" />
          </div>
          <div className="md:w-2/3 flex flex-col gap-3">
            <h4 className="text-2xl uppercase font-semibold">
              {product?.name}
            </h4>
            <div className="flex items-center gap-1">
              <FaStar /> {product?.rating}
            </div>
            <h3 className="text-3xl font-bold text-[#72AEC8]">
              ${product?.price}
            </h3>
            {/* <p>{product.details}</p> */}
            <p>{product?.stock} in stock</p>
            <div className="flex gap-5">
              <button className="w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                -
              </button>
              <div className="w-20 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                {1}
              </div>
              <button className="w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                +
              </button>
            </div>
            <div className="flex gap-5">
              <button className="bg-[#72AEC8] text-white px-5 py-2 mt-5 border border-[#72AEC8] hover:text-black hover:bg-transparent transition-all duration-150 delay-150">
                BUY NOW
              </button>
              <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150">
                ADD TO CART
              </button>
            </div>
            <p>Category: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
          </div>?
        </div>
        <hr />
        <div className="py-5">
          <h5 className="text-2xl pb-3 font-semibold">Product Details & Description</h5>
          <p>{product?.description}</p>
        </div>
        <hr />
        <div className="py-10">
        <div className="flex justify-between py-5 uppercase">
        <h5 className="text-2xl font-semibold">Related Products</h5>
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
            {relatedData.map(product => (
                <SwiperSlide key={product.id}>
                <div className="flex flex-col gap-3 border py-10 relative group">
                  <div className="relative cursor-pointer transition-transform transform-gpu hover:scale-110">
                    <img className="mx-auto" src={product.image} alt="" />
                    <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex-col gap-2">
                          <Link to={`/products/${product._id}`}>
                          <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-2 rounded max-w-[120px]">View Detail <FaEye/></button>
                          </Link>
                          <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-1 rounded max-w-[120px]">Add Cart <FaShoppingCart/></button>
                        </div>
                  </div>
                  <div className="flex justify-around">
                    <p className="font-bold uppercase">{product.name}</p>
                    <p className="text-[#72AEC8] font-bold">${product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
      </div>
      <Subscribe/>
      <ShopInstagram/>
    </div>
  );
};

export default SingleProduct;
