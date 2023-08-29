import PageHeader from "../../Components/PageHeader/PageHeader";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";

const CheckOut = () => {
        const inputStyle = {
            width: '100%',
            outline: 'none',
            border: '1px solid black',
            padding: '5px'
        }
  return (
    <div>
      <PageHeader pageName={"Checkout"} />
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
        <h5 className="uppercase text-xl py-5">Billing details</h5>
        <div>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name">Full Name</label> <br />
                <input style={inputStyle} type="text" name="" id="name" />
              </div>
              <div>
                <label htmlFor="country">Country/Region</label> <br />
                <input style={inputStyle} type="text" name="" id="country" />
              </div>
              <div>
                <label htmlFor="streetAddress">Street Address</label> <br />
                <input style={inputStyle} type="text" name="" id="streetAddress" />
              </div>
              <div>
                <label htmlFor="city">Town/City</label> <br />
                <input style={inputStyle} type="text" name="" id="city" />
              </div>
              <div>
                <label htmlFor="zipCode">ZIP Code</label> <br />
                <input style={inputStyle} type="number" name="" id="zipCode" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label> <br />
                <input style={inputStyle} type="number" name="" id="phone" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label> <br />
                <input style={inputStyle} type="number" name="" id="email" />
              </div>
              <div>
                <label htmlFor="note">Order Notes (Optional)</label> <br />
                <textarea style={inputStyle} name="" id="note"  rows="1"></textarea>
              </div>
            </div>
          </form>
          <div className="uppercase pt-10 pb-5">
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
          <div>
          <button className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase">Confirm payment</button>
          </div>
        </div>
      </div>
      <Subscribe/>
      <ShopInstagram/>
    </div>
  );
};

export default CheckOut;
