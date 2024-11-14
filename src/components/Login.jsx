import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Using React Router for navigation
import { LoginImg } from "../assets";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", { email, password },
        { withCredentials: true });
      // Store the token in localStorage or any other appropriate place
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/");  // Redirect to home page upon successful login
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.", error);
    }
  };

  return (
      <div className=" w-full bg-yellow-50 h-screen">
        <div className="relative container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                Login to Your Account
              </h1>
              <form onSubmit={handleLogin} className="mt-12 space-y-6">
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

                {errorMessage && (
                  <div className="text-red-500 text-center">{errorMessage}</div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-3xl text-xl text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400">
                  Login
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-gray-700"> Do not have an account?</p>
                <button
                  onClick={() => navigate("/signup")}
                  className="text-yellow-600 font-semibold hover:underline">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="ml-auto hidden lg:block lg:w-6/12">
              <img
                src={LoginImg}
                alt="Cover tech image"
                className="max-w-[500px] animate-upDown mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Login;
