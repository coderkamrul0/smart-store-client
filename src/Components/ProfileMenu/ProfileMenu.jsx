
import { Link, Navigate } from 'react-router-dom';
import useAdmin from './../../hooks/useAdmin';
import { Menu } from "@headlessui/react";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const ProfileMenu = () => {
    const [isAdmin] = useAdmin();
    const {logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=>{
          Navigate('/')
        })
      }
    return (
        <>
          {
            isAdmin ? <div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/dashboard"}>
                        <button
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Admin Panel
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                        <button
                          onClick={handleLogOut}
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                    )}
                  </Menu.Item>
                </div>
            </div> : <div>
            <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/cart"}>
                        <button
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          My Account
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/"}>
                        <button
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          My Orders
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to={"/"}>
                        <button
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          My Carts
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                        <button
                        onClick={handleLogOut}
                          className={`${
                            active ? "bg-black  text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                    )}
                  </Menu.Item>
                </div>
            </div>
          }  
        </>
    );
};

export default ProfileMenu;