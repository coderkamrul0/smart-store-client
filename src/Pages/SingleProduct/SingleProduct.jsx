import { FaEye, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { FaShoppingCart } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import Subscribe from "../../Components/Subscribe/Subscribe";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import { useContext, useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { useCartContext } from "../../hooks/useCartContext";
import { AuthContext } from "../../Providers/AuthProviders";
import { loadStripe } from "@stripe/stripe-js";
const SingleProduct = () => {
  const [products] = useProducts();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  // Inside your SingleProduct component
  const paymentProductData = [
    {
      id: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.image,
      quantity: quantity,
    },
  ];

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  const relatedData = products.filter(
    (item) => item?.category === product?.category
  );
  const { addItemToCart } = useCartContext();

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    if (product) {
      addItemToCart(product._id, quantity);
    }
  };
  
  


  


  // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE);

    const body = {
      products: paymentProductData,
    };
    const headers = {
      "content-type": "application/json",
    };
    const response = await fetch(
      "http://localhost:5000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };

  const handleProceedToCheckout = async () => {
    if(user?.email){
      makePayment();
    }else{
      navigate('/login')
      
    }
  }




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
            <p>{product?.stock} in stock</p>
            <div className="flex gap-5">
              <button
                onClick={handleDecrement}
                className="w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border"
              >
                -
              </button>
              <div className="w-20 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                {quantity}
              </div>
              <button
                onClick={handleIncrement}
                className="w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border"
              >
                +
              </button>
            </div>
            <div className="flex gap-5">
              <button onClick={handleProceedToCheckout} className="bg-[#72AEC8] text-white px-5 py-2 mt-5 border border-[#72AEC8] hover:text-black hover:bg-transparent transition-all duration-150 delay-150">
                BUY NOW
              </button>
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150"
              >
                ADD TO CART
              </button>
            </div>
            <p>Category: {product?.category}</p>
            <p>Brand: {product?.brand}</p>
          </div>
          ?
        </div>
        <hr />
        <div className="py-5">
          <h5 className="text-2xl pb-3 font-semibold">
            Product Details & Description
          </h5>
          <p>{product?.description}</p>
        </div>
        <hr />
        <div className="py-10">
          <div className="flex justify-between py-5 uppercase">
            <h5 className="text-2xl font-semibold">Related Products</h5>
            <Link className="border-b-2 " to={"/shop"}>
              Go to Shop
            </Link>
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
            {relatedData.map((product) => (
              <SwiperSlide key={product._id}>
                {" "}
                {/* Use a unique key */}
                <div className="flex flex-col gap-3 border py-10 relative group">
                  <div className="relative cursor-pointer transition-transform transform-gpu hover:scale-110">
                    <img className="mx-auto" src={product.image} alt="" />
                    <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex-col gap-2">
                      <Link to={`/products/${product._id}`}>
                        <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-2 rounded max-w-[120px]">
                          View Detail <FaEye />
                        </button>
                      </Link>
                      <button
                        className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-1 rounded max-w-[120px]"
                        onClick={() => handleAddToCart(product._id)}
                      >
                        Add Cart <FaShoppingCart />
                      </button>
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
      <Subscribe />
      <ShopInstagram />
    </div>
  );
};

export default SingleProduct;
