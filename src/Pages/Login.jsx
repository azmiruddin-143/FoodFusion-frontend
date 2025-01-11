import React, { useContext, useState } from 'react';
import { IoEyeOff, IoEye } from "react-icons/io5";
import googleImage from "../../src/assets/google-icon.png"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Fade } from 'react-awesome-reveal';
import { FaLeftLong } from 'react-icons/fa6';

const Login = () => {

    const { loginUser, googleRegister, setuser, userLogout, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [show, setHide] = useState(false)

    const userLogoutHandler = () => {
        userLogout()
            .then(() => {
                toast.success("Logout successful!", { autoClose: 3000 });
                navigate("/");
            })
            .catch((error) => {
                toast.error(`login failed: ${error.message}`, {
                    autoClose: 3000,
                });
            });

    };

    const eyeIconHandler = () => {
        setHide(!show)
    }
    const loginForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        const trams = event.target.trams.checked
        // register setup ///
        if (!trams) {
            toast.error("terms not checked ", {
                autoClose: 3000,

            });
            return
        }

        loginUser(email, password)
            .then((result) => {
                const user = result.user
                setuser(user);
                toast.success("Login successful!", {
                    autoClose: 3000,
                });

                navigate(location?.state ? location.state : "/")
                event.target.reset();
            })

            .catch((error) => {
                toast.error(`login failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })
    }


    const googleLoginHandler = () => {
        googleRegister()
            .then((result) => {
                setuser(result.user);
                toast.success("Login successful!", {
                    autoClose: 3000,
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                toast.error(`login failed: ${error.message}`, {
                    autoClose: 3000,
                });
            })
    }


    return (
        <Fade duration={3000} triggerOnce >

            <div>

                <Helmet>
                    <title>FoodFusion| Login </title>
                </Helmet>
                <div className="sm:mt-20 xl:mt-24 2xl:mt-40 my-5 ">
                    <Link to={'/'} ><button className='text-lg flex items-center gap-4 py-2 px-4 bg-primary-content rounded-md mx-auto text-white'> <FaLeftLong></FaLeftLong>  Home Page</button></Link>
                    <div className="hero-content flex-col mx-auto lg:flex-row-reverse">
                        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                            <form onSubmit={loginForm} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter your name email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={`${show ? "text" : "password"}`} name='password' placeholder=" Enter your name password" className="input input-bordered" required />
                                    <label className="label">

                                        {
                                            user ? <Link onClick={userLogoutHandler} className="label-text-alt link link-hover">Forgot password?</Link>
                                                : <Link to="/forgetpassword" className="label-text-alt link link-hover">Forgot password?</Link>
                                        }

                                    </label>

                                    <div onClick={eyeIconHandler}>
                                        {
                                            !show ? <IoEyeOff className='absolute right-6 top-[50px]' size={20} /> :
                                                <IoEye className='absolute right-6 top-[50px]' size={20} />
                                        }

                                    </div>
                                    <div className="form-control mt-3">
                                        <label className="cursor-pointer justify-start gap-4 label">
                                            <input type="checkbox" name='trams' className="checkbox checkbox-secondary" />
                                            <span className="label-text">Remember me</span>

                                        </label>
                                    </div>



                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-primary-content hover:bg-primary-content text-primary">Login</button>
                                </div>

                                <div className="divider">OR</div>
                                <div onClick={googleLoginHandler} className='mx-auto'>
                                    <img className='w-[30px]' src={googleImage} alt="" />
                                </div>
                                <h1 className='text-lg text-center'>Need an account ? <Link to="/register" className='text-[#e09d15]'>Register</Link></h1>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Login;