import PageHeader from "../../Components/PageHeader/PageHeader";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Contact = () => {
  const inputStyle = {
    width: "100%",
    outline: "none",
    border: "1px solid black",
    padding: "5px",
  };

  return (
    <div>
      <PageHeader pageName={"Contact"} />
      <div>
        <div className="max-w-screen-xl mx-auto px-3 md:px-0">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="py-5">
              <h5 className="uppercase text-2xl">Contact Info</h5>
              <p className="text-[#3A3A3A]">If any query! Please contact us</p>
              </div>
              <div className="flex gap-5">
                <div>
                  <h5 className="uppercase underline mb-2">Office</h5>
                  <p>730 Glenstone Ave 65802, Springfield, US</p>
                  <p>+123 222 333 44</p>
                  <p>+123 222 333 44</p>
                  <p>smartstore@gmail.com</p>
                </div>
                <div>
                  <h5 className="uppercase underline mb-2">Management</h5>
                  <p>730 Glenstone Ave 65802, Springfield, US</p>
                  <p>+123 222 333 44</p>
                  <p>+123 222 333 44</p>
                  <p>smartstore@gmail.com</p>
                </div>
              </div>
            </div>
            <div  className="md:w-1/2">
                <div className="py-5 ">
                <h5 className="uppercase text-2xl">Any Questions?</h5>
                <p className="text-[#3A3A3A]">Use the form below to get in touch with us.</p>
                </div>
              <form className="flex flex-col gap-3">
                <div>
                  <label htmlFor="name">Full Name</label> <br />
                  <input style={inputStyle} type="text" name="" id="name" />
                </div>
                <div>
                  <label htmlFor="email">Email</label> <br />
                  <input style={inputStyle} type="text" name="" id="email" />
                </div>
                <div>
                  <label htmlFor="subject">Subject</label> <br />
                  <input
                    style={inputStyle}
                    type="text"
                    name=""
                    id="subject"
                  />
                </div>
                <div>
                <label htmlFor="message">Message</label> <br />
                <textarea style={inputStyle} name="" id="message"  rows="1"></textarea>
              </div>
                <input className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase cursor-pointer w-44" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
      <ShopInstagram/>
    </div>
  );
};

export default Contact;
