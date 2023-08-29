import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import image1 from '../../assets/Rectangle 172.png';
import image2 from '../../assets/Rectangle 174.png';
import image3 from '../../assets/Rectangle 175.png';
import image4 from '../../assets/Rectangle 176.png';
import image5 from '../../assets/Rectangle 174.png';

const ShopInstagram = () => {
    const instaData = [
        {
            id: 1,
            image: image1,
        },
        {
            id: 2,
            image: image2,
        },
        {
            id: 3,
            image: image3,
        },
        {
            id: 4,
            image: image4,
        },
        {
            id: 5,
            image: image5,
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
            <div>
                <h4 className="uppercase text-center py-5">shop our insta</h4>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
                {instaData.map(item => (
                    <div key={item.id} className="relative overflow-hidden group">
                        <img src={item.image} alt="" className="w-full h-auto" />
                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100">
                            <div className="bg-black bg-opacity-50 cursor-pointer p-4 rounded-full">
                                <FaInstagram className="text-white text-3xl" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopInstagram;
