import PageHeader from "../../Components/PageHeader/PageHeader";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import smartWatch from "../../assets/smartWatch.jpg";
import phone from "../../assets/Apple-iPhone-14-Pro-Max.jpg";
import { Helmet } from "react-helmet";

const Shop = () => {
  const productData = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: smartWatch,
    },
    {
      id: 1,
      name: "iPhone 13 Pro",
      price: 1500,
      image: smartWatch,
    },
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: smartWatch,
    },
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: phone,
    },
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: phone,
    },
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: phone,
    },
  ];
  return (
    <div>
        <Helmet>
            <title>SmartStore | Shop</title>
        </Helmet>
      <PageHeader pageName={"Shop"} />
      <div>
        <div className="max-w-screen-xl mx-auto px-3 md:px-0 pt-5">
          <div className="md:flex gap-10">
            <div className="md:w-1/6 flex flex-col gap-10">
              <div>
                <input
                  className="shadow-[0_8px_30px_rgb(0,0,0,0.20)] outline-none p-1 w-[90%] md:w-[80%]"
                  type="search"
                />
                <button className="bg-black text-white p-2">
                  <FaSearch />
                </button>
              </div>
              <div>
                <h5 className="uppercase underline font-semibold">
                  Categories
                </h5>
                <div className="flex flex-col">
                  <ul>
                    <li>Phone</li>
                    <li>Accessories</li>
                    <li>Tablets</li>
                    <li>Watches</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="uppercase underline font-semibold">Brand</h5>
                <div className="flex flex-col">
                  <ul>
                    <li>Apple</li>
                    <li>Samsung</li>
                    <li>Tesla</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="uppercase underline font-semibold">
                  Filter by Price
                </h5>
                <div className="flex flex-col">
                  <ul>
                    <li>Less then 500</li>
                    <li>$501 - $1000</li>
                    <li>$1001 - $2000</li>
                    <li>$2001 - $3000</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-5/6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {productData.map((product) => (
                <div key={product.id}>
                  <div className="flex flex-col gap-3 border py-10 relative group">
                    <div className="relative cursor-pointer transition-transform transform-gpu hover:scale-110">
                      <img className="mx-auto" src={product.image} alt="" />
                      <button className="items-center uppercase text-xs text-white bg-black px-3 py-1 mx-20 absolute bottom-5 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        cart <FaShoppingCart />
                      </button>
                    </div>
                    <div className="flex justify-around">
                      <p className="font-bold uppercase">{product.name}</p>
                      <p className="text-[#72AEC8] font-bold">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <ShopInstagram />
    </div>
  );
};

export default Shop;
