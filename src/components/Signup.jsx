import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Using React Router for navigation
import { Register } from "../assets";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userData = { name, email, password, phone, address };
      const response = await axios.post("https://test1.populardiagnostic.org/api/users/register", userData);
      if (response.status === 200) {
        navigate("/login");  // Redirect to login page upon successful signup
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage("This email is already registered. Please log in or use another email.");
      } else {
        setErrorMessage("Error during registration. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <div className="w-full bg-[#d8dce3] h-full">
      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative w-full lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Create Your Account
              </h1>
              <form onSubmit={handleSignup} className="mt-12 space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address" className="text-gray-700 mb-2">Address (optional)</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {errorMessage && (
                  <div className="text-red-500 text-center">{errorMessage}</div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-3xl text-xl text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400">
                  Sign Up
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-gray-700">Already have an account?</p>
                <button
                  onClick={() => navigate("/login")}
                  className="text-yellow-600 font-semibold hover:underline">
                  Login
                </button>
              </div>
            </div>
            <div className="ml-auto hidden md:block lg:w-6/12">
              <img
                src={Register}
                alt="Register image"
                className="max-w-[300px] animate-upDown mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
