import React, { useContext, useState } from 'react';
import google from "../../src/assets/google-icon.png";
import registerImage from "../../src/assets/Sign up-pana.png";
import { IoEyeOff, IoEye } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { Fade } from 'react-awesome-reveal';
import { FaLeftLong } from 'react-icons/fa6';

const Register = () => {
    const { registerUser, myProfileUpdate, googleRegister, setuser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const eyeIconHandler = () => {
        setShow(!show);
    };

    const registerForm = (event) => {
        event.preventDefault();
        const terms = event.target.terms.checked;
        const name = event.target.name.value;
        const photourl = event.target.photourl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain an uppercase letter", { autoClose: 3000 });
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain a lowercase letter", { autoClose: 3000 });
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters", { autoClose: 3000 });
            return;
        }
        if (!terms) {
            toast.error("Please agree to the terms", { autoClose: 3000 });
            return;
        }

        registerUser(email, password)
            .then((result) => {
                const user = result.user;
                setuser(user);
                // Update Profile with name and photoURL
                myProfileUpdate({ displayName: name, photoURL: photourl })
                    .then(() => {
                        setuser({ ...result.user, displayName: name, photoURL: photourl });
                        toast.success("Registration successful!", { autoClose: 3000 });
                        event.target.reset();
                        navigate("/");
                    })
                    .catch((error) => {
                        toast.error(`Registration failed: ${error.message}`, { autoClose: 3000 });
                    });
            })
            .catch((error) => {
                toast.error(`Registration failed: ${error.message}`, { autoClose: 3000 });
            });
    };

    const googleRegisterHandler = () => {
        googleRegister()
            .then((result) => {
                const user = result.user;
                setuser(user);
                toast.success("Registration successful!", { autoClose: 3000 });
                navigate("/");
            })
            .catch((error) => {
                toast.error(`Registration failed: ${error.message}`, { autoClose: 3000 });
            });
    };

    return (
        <Fade duration={3000} triggerOnce>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Helmet>
                    <title>FoodFusion | Register</title>
                </Helmet>
                {/* Main Container: Two sections without any gap */}
                <div className="flex flex-col md:flex-row w-full max-w-5xl gap-0">
                    {/* Left Side - Register Image */}
                    <div className="hidden md:flex md:w-1/2 items-center justify-center">
                        <img
                            className="w-full h-full object-cover"
                            src={registerImage}
                            alt="Register Illustration"
                        />
                    </div>
                    {/* Right Side - Registration Form */}
                    <div className="flex flex-col md:w-1/2 items-center justify-center">
                        <Link to="/">
                            <button className="text-lg flex items-center gap-2 py-2 px-4 bg-primary-content rounded-md text-white mb-5">
                                <FaLeftLong /> Home Page
                            </button>
                        </Link>
                        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                            <form onSubmit={registerForm}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Photo URL</label>
                                    <input
                                        type="text"
                                        name="photourl"
                                        placeholder="Enter your photo URL"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
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
                                    <span className="text-gray-600">Agree to terms</span>
                                </div>
                                <button type="submit" className="w-full bg-primary-content text-white py-2 rounded-lg hover:bg-primary">
                                    Register
                                </button>
                                <div className="text-center my-4 text-gray-600">OR</div>
                                <div
                                    onClick={googleRegisterHandler}
                                    className="flex items-center justify-center gap-3 border py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-100"
                                >
                                    <img className="w-[30px]" src={google} alt="Google Icon" />
                                    <span>Sign in with Google</span>
                                </div>
                                <p className="text-center mt-4 text-gray-600">
                                    Already a user?{" "}
                                    <Link to="/login" className="text-[#e3ab61]">
                                        Login
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

export default Register;
