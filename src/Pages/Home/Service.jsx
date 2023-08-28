import { FaShoppingCart,FaTag,FaShieldAlt,FaAward } from "react-icons/fa";


const Service = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto px-3 md:px-0 py-10 md:py-20'>
                <div className="grid gap-5 grid-cols-2 md:grid-cols-4">
                    <div className="flex gap-3">
                        <FaShoppingCart className="text-[#72AEC8]" size={30}/>
                        <div>
                            <p className="font-bold text-[#272727]">Free Delivery</p>
                            <p className="text-[#3A3A3A]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaAward className="text-[#72AEC8]" size={30}/>
                        <div>
                            <p className="font-bold text-[#272727]">Quality Grunted</p>
                            <p className="text-[#3A3A3A]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaTag className="text-[#72AEC8]" size={30}/>
                        <div>
                            <p className="font-bold text-[#272727]">Daily Offers</p>
                            <p className="text-[#3A3A3A]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <FaShieldAlt className="text-[#72AEC8]" size={30}/>
                        <div>
                            <p className="font-bold text-[#272727]">100% Secure</p>
                            <p className="text-[#3A3A3A]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;