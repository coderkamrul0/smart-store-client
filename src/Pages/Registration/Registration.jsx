import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="min-h-[60vh] bg-[#EDF1F3]">
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
        <div>
          <h3 className="uppercase text-center text-2xl font-bold">
            Create an account
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <form className="md:w-2/5">
            <div className="mb-4 w-full">
              <label className="block text-sm text-black font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-black font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-black font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-black font-medium">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  className="mt-1 block w-full p-2 border rounded-md"
                />
                <span
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase cursor-pointer w-full"
              >
                Register
              </button>
            </div>
            <div className="text-center py-3">- or -</div>
            <div className="flex gap-5">
              <button className="bg-black text-white w-full flex items-center justify-center py-2 border border-black hover:bg-transparent hover:text-black transition-all duration-150 delay-150">
                <FaGoogle />
              </button>
              <button className="bg-black text-white w-full flex items-center justify-center py-2 border border-black hover:bg-transparent hover:text-black transition-all duration-150 delay-150">
                <FaFacebookF />
              </button>
            </div>
            <div className="text-center py-3 text-black">
              <p>
                Already have an account ?{" "}
                <span className="text-[#72AEC8]">
                  <Link to="/login">Login Now</Link>
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
