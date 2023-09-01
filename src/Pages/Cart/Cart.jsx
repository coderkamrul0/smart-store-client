import PageHeader from "../../Components/PageHeader/PageHeader";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";
import useProducts from "../../hooks/useProducts";
import { useCartContext } from "../../hooks/useCartContext";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [products, loading] = useProducts();
  const {user} = useContext(AuthContext);
  const { cartItems, increaseQuantity, decreaseQuantity, deleteItem } =
    useCartContext();
    const navigate = useNavigate();

  const calculateSubtotal = (product, quantity) => {
    return product.price * quantity;
  };

  const calculateTotal = () => {
    let total = 0;
    for (const product_id in cartItems) {
      const product = products.find((p) => p._id === product_id);
      const quantity = cartItems[product_id];
      if (product) {
        total += calculateSubtotal(product, quantity);
      }
    }
    return total;
  };

  // payment data
  const paymentProductData = Object.keys(cartItems)
    .map((product_id) => {
      const cartItem = cartItems[product_id];
      const product = products.find((p) => p._id === product_id);

      if (!product) {
        return null;
      }

      return {
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: cartItem,
      };
    })
    .filter((product) => product !== null);

  console.log(paymentProductData);

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
      <PageHeader pageName={"Cart"} />
      <div>
        <div className="max-w-screen-xl mx-auto px-3 md:px-0">
          <div className="overflow-x-auto py-10">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-start">Product</th>
                  <th className="text-start">Quantity</th>
                  <th className="text-start">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4">Loading products...</td>
                  </tr>
                ) : (
                  cartItems &&
                  Object.keys(cartItems).map((product_id) => {
                    const cartItem = cartItems[product_id];
                    const product = products.find((p) => p._id === product_id);

                    if (!product) {
                      return null; // Skip if product not found
                    }

                    return (
                      <tr key={product._id} className="border-b border-t">
                        <td className="md:flex gap-3 items-center">
                          <img className="w-20" src={product.image} alt="" />
                          <div>
                            <p className="uppercase font-semibold">
                              {product.name}
                            </p>
                            <p className="text-[#72AEC8]">${product.price}</p>
                          </div>
                        </td>
                        <td className="">
                          <div className="flex gap-3">
                            <button
                              onClick={() => decreaseQuantity(product._id)}
                              className=" w-6 md:w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border"
                            >
                              -
                            </button>
                            <div className=" px-3 md:px-0 md:w-20 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border">
                              {cartItem}
                            </div>
                            <button
                              onClick={() => increaseQuantity(product._id)}
                              className=" w-6 md:w-10 flex items-center justify-center text-2xl shadow-[0_8px_30px_rgb(0,0,0,0.20)] border"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="text-[#72AEC8] font-bold">
                          ${(product.price * cartItem).toFixed(2)}
                        </td>
                        <td>
                          <button onClick={() => deleteItem(product._id)}>
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="uppercase">
            <h5 className="text-xl">Cart Totals</h5>
            <div className="flex justify-between md:justify-normal md:gap-56 border-t-2 pt-3 pb-3">
              <p className="underline">Subtotal</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between md:justify-normal md:gap-60 border-t-2 pt-3 border-b-2 pb-3">
              <p className="underline">Total</p>
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
          </div>

          <div className="flex gap-3 pb-10">
            <Link to="/shop">
              <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase">
                Continue shopping
              </button>
            </Link>
            <button
              onClick={handleProceedToCheckout}
              type="button"
              className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <Subscribe />
      <ShopInstagram />
    </div>
  );
};

export default Cart;
