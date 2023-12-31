import { useState } from "react";
import { FaBars,FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useCartContext } from "../../hooks/useCartContext";



const Header = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SHOP", link: "/shop" },
    { name: "ABOUT", link: "/about" },
    { name: "BLOG'S", link: "/blogs" },
    { name: "CONTACT", link: "/contact" },
  ];
  const [open, setOpen] = useState(false)
  const {cartItemCount} = useCartContext();

  return (
    <nav className="bg-black">
      <div className="max-w-screen-xl mx-auto">
      <div className='md:flex items-center justify-between bg-black py-4 px-3 md:px-0'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-white '>
        SmartStore.
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-4 top-4 cursor-pointer md:hidden'>
      <FaBars/>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-18 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8  md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <div className="flex justify-end  gap-3 pe-5 md:pe-0 md:ms-8 text-white">
            <Link to={'/cart'}><button className="flex items-center gap-1"><FaShoppingCart/>{cartItemCount}</button></Link>
            <ProfileDropdown/>
        </div>
      </ul>
      </div>
      </div>
    </nav>
  );
};

export default Header;
