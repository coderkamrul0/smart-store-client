import PageHeader from "../../Components/PageHeader/PageHeader";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";
import iPhone from "../../assets/Apple-iPhone-14-Pro-Max.jpg";
import watch from "../../assets/smartWatch.jpg";
const Cart = () => {
  const cartData = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      price: 1500,
      image: iPhone,
    },
    {
      id: 2,
      name: "Apple Watch",
      price: 900,
      image: watch,
    },
  ];
  return (
    <div>
      <PageHeader pageName={"Cart"} />
      <div>
        <div className="max-w-screen-xl mx-auto px-3 md:px-0">
          <div className="overflow-x-auto py-10">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-start">Product</th>
                  <th className="text-start">Quantity</th>
                  <th className="text-start">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item.id} className="border-b border-t">
                    <td className="md:flex gap-3 items-center">
                      <img className="w-20" src={item.image} alt="" />
                      <div>
                        <p className="uppercase font-semibold">{item.name}</p>
                        <p className="text-[#72AEC8]">${item.price}</p>
                      </div>
                    </td>
                    <td className="">
                      <div className="flex gap-3">
                        <button className=" w-6 md:w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                          -
                        </button>
                        <div className=" px-3 md:px-0 md:w-20 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                          {1}
                        </div>
                        <button className=" w-6 md:w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-[#72AEC8] font-bold">${item.price}</td>
                    <td><button>X</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="uppercase">
            <h5 className="text-xl">Cart Totals</h5>
            <div className="flex justify-between md:justify-normal md:gap-56 border-t-2 pt-3 pb-3">
                <p className="underline">Subtotal</p>
                <p>$1500</p>
            </div>
            <div className="flex justify-between md:justify-normal md:gap-60 border-t-2 pt-3 border-b-2 pb-3">
                <p className="underline">Total</p>
                <p>$1500</p>
            </div>
          </div>

          <div className="flex gap-3 pb-10">
            <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase">Continut shopping</button>
            <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase">Proceed to checkout</button>
          </div>
        </div>
      </div>
      <Subscribe />
      <ShopInstagram />
    </div>
  );
};

export default Cart;
