import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Registration = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { createUser, updateUserProfile,googleSignIn } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const validatePassword = (password) => {
      // At least 8 characters, with uppercase, lowercase, digit, and symbol
      const passwordPattern =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
      return passwordPattern.test(password);
    };

    if (!name) {
      setError("Name is Required.");
    } else if (!email) {
      setError("Email is Required.");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
    } else if (!validatePassword(password)) {
      setError(
        "Password must contain uppercase, lowercase, digit, and symbol."
      );
    } else if (password !== confirmPassword) {
      setError("Password not matched!");
    } else {
      setError("");

      // sign up
      createUser(email, password).then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(name)
          .then(() => {
            const saveUser = { name: name, email: email, role: "Customer" };
            fetch(`http://localhost:5000/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate(from, { replace: true });
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  };

  const handleGoogleLogin = () => {
    googleSignIn()
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = { name: loggedUser.displayName, email: loggedUser.email, role: "Customer" };
      fetch(`http://localhost:5000/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate(from, { replace: true });
                }
              });
    })
  }

  return (
    <div className="min-h-[60vh] bg-[#EDF1F3]">
      <div className="max-w-screen-xl mx-auto px-3 md:px-0 py-10">
        <div>
          <h3 className="uppercase text-center text-2xl font-bold">
            Create an account
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleRegister} className="md:w-2/5">
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
            <div className="text-red-800 text-center text-xs">{error}</div>
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
              <button onClick={handleGoogleLogin} className="bg-black text-white w-full flex items-center justify-center py-2 border border-black hover:bg-transparent hover:text-black transition-all duration-150 delay-150">
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
