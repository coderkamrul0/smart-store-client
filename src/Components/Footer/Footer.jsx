import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import payment from "../../assets/visa-mastercard-paypal.png"
import { Link } from "react-router-dom";

const Footer = () => {
    const linkOne = [
        { name: "HOME", link: "/" },
        { name: "SHOP", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" }, 
    ]
    const linkTwo = [
        { name: "Track your order", link: "/" },
        { name: "return policies", link: "/" },
        { name: "shopping", link: "/" },
        { name: "contact us", link: "/" },
        { name: "faqs", link: "/" }, 
    ]

    return (
        <footer>
            <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
                <div>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                        <div>
                            <h5 className="text-3xl font-bold mb-3">SmartStore.</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, temporibus?</p>
                            <div className="flex gap-5 mt-3">
                                <Link className="hover:text-[#72AEC8]" to={'/'}><FaFacebookF/></Link>
                                <Link className="hover:text-[#72AEC8]" to={'/'}><FaInstagram/></Link>
                                <Link className="hover:text-[#72AEC8]" to={'/'}><FaTwitter/></Link>
                                <Link className="hover:text-[#72AEC8]" to={'/'}><FaLinkedinIn/></Link>
                                <Link className="hover:text-[#72AEC8]" to={'/'}><FaYoutube/></Link>
                            </div>
                        </div>
                        <div>
                            <h5 className="uppercase font-bold mb-3">Quick links</h5>
                            <div className="flex flex-col uppercase">
                                {
                                    linkOne.map(link => (
                                        <Link className="hover:text-[#72AEC8]" key={link.name} to={'/'}>{link.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h5 className="uppercase font-bold mb-3">Help & info</h5>
                            <div className="flex flex-col uppercase">
                                {
                                    linkTwo.map(link => (
                                        <Link className="hover:text-[#72AEC8]" key={link.name} to={'/'}>{link.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h5 className="uppercase font-bold mb-3">Contact us</h5>
                            <p>Do you have any queries or suggestion?</p>
                            <p>smartshop@gmail.com</p>
                            <p>if you need support? Just give us a call</p>
                            <p>+88 111 222 333</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="max-w-screen-xl mx-auto px-3 md:px-0 md:flex justify-between py-5">
                <div className="flex items-center gap-1">
                    <p className="text-xl">Payment options: </p>
                    <img className="h-7" src={payment} alt="" />
                </div>
                <p>© Copyright all right reserved by <span className="underline">SmartShop</span> 2023</p>
            </div>
        </footer>
    );
};

export default Footer;