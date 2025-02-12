import React, { useContext, useState } from 'react';
import { IoEyeOff, IoEye } from "react-icons/io5";
import googleImage from "../../src/assets/google-icon.png";
import loginImage from "../../src/assets/Login-rafiki.png";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';
import { FaLeftLong } from 'react-icons/fa6';

const Login = () => {
    const { loginUser, googleRegister, setuser, userLogout, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [show, setHide] = useState(false);

    const userLogoutHandler = () => {
        userLogout()
            .then(() => {
                toast.success("Logout successful!", { autoClose: 3000 });
                navigate("/");
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`, { autoClose: 3000 });
            });
    };

    const eyeIconHandler = () => {
        setHide(!show);
    };

    const loginForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        if (!terms) {
            toast.error("Terms not checked", { autoClose: 3000 });
            return;
        }

        loginUser(email, password)
            .then((result) => {
                setuser(result.user);
                toast.success("Login successful!", { autoClose: 3000 });
                navigate(location?.state ? location.state : "/");
                event.target.reset();
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`, { autoClose: 3000 });
            });
    };

    const googleLoginHandler = () => {
        googleRegister()
            .then((result) => {
                setuser(result.user);
                toast.success("Login successful!", { autoClose: 3000 });
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(`Login failed: ${error.message}`, { autoClose: 3000 });
            });
    };

    return (
        <Fade duration={3000} triggerOnce>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Helmet>
                    <title>FoodFusion | Login</title>
                </Helmet>

                {/* Main Container with no gap between children */}
                <div className="flex flex-col md:flex-row w-full max-w-5xl gap-0">
                    {/* Left Side - Image */}
                    <div className="hidden md:flex md:w-1/2 items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src={loginImage}
                            alt="Login Illustration"
                        />
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex flex-col md:w-1/2 items-center justify-center">
                        <Link to="/">
                            <button className="text-lg flex items-center gap-2 py-2 px-4 bg-primary-content rounded-md text-white mb-5">
                                <FaLeftLong /> Home Page
                            </button>
                        </Link>
                        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                            <form onSubmit={loginForm}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div className="mb-4 relative">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type={show ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                    <div onClick={eyeIconHandler} className="absolute top-10 right-4 cursor-pointer">
                                        {show ? <IoEye size={20} /> : <IoEyeOff size={20} />}
                                    </div>
                                </div>

                                <div className="flex items-center mb-4">
                                    <input type="checkbox" name="terms" className="mr-2" />
                                    <span className="text-gray-600">Remember me</span>
                                </div>

                                <button className="w-full bg-primary-content text-white py-2 rounded-lg ">
                                    Login
                                </button>

                                <div className="text-center my-4 text-gray-600">OR</div>

                                <div
                                    onClick={googleLoginHandler}
                                    className="flex items-center justify-center gap-3 border py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-100"
                                >
                                    <img className="w-[30px]" src={googleImage} alt="Google Icon" />
                                    <span>Sign in with Google</span>
                                </div>

                                <p className="text-center mt-4 text-gray-600">
                                    Need an account?{" "}
                                    <Link to="/register" className="text-[#e09d15]">
                                        Register
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>

                    
                </div>
            </div>
        </Fade>
    );
};

export default Login;
