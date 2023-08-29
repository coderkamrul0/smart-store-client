import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";




const Login = () => {

  return (
    <div className="min-h-[60vh] bg-[#EDF1F3]">
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-20">
        <div>
            <h3 className="uppercase text-center text-2xl font-bold">Login you account</h3>
        </div>
        <div className="flex justify-center items-center">
        <form className="md:w-2/5">
            
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
              <input
                type="password"
                name="password"
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 mt-5 border border-black hover:text-black hover:bg-transparent transition-all duration-150 delay-150 uppercase cursor-pointer w-full"
              >
                Login
              </button>
            </div>
            <div className="text-center py-3">
                - or -
            </div>
            <div className="flex gap-5">
                <button className="bg-black text-white w-full flex items-center justify-center py-2 border border-black hover:bg-transparent hover:text-black transition-all duration-150 delay-150"><FaGoogle/></button>
                <button className="bg-black text-white w-full flex items-center justify-center py-2 border border-black hover:bg-transparent hover:text-black transition-all duration-150 delay-150"><FaFacebookF/></button>
              </div>
            <div className="text-center py-3 text-black">
              <p>
                Don't have an account ?{" "}
                <span className="text-[#72AEC8]">
                  <Link to="/register">Register Now</Link>
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;