import React from 'react';
import logo from '../../src/assets/foods-logo.png'
import payment from '../../src/assets/foods-payment.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { AiFillTikTok } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="2xl:mx-32 xl:mx-24 lg:mx-5  px-4">
                {/* Top Navigation Links */}
                <div className="flex flex-wrap justify-center md:justify-between items-center border-b border-gray-700 pb-4 mb-4">
                    <img src={logo} alt="Basilico Fastfood Logo" className="sm:w-36 w-20 mb-4 md:mb-0" />
                    <nav className="flex sm:space-x-6 space-x-2  text-sm font-semibold">
                        <Link to={'/'} className="hover:underline">Home</Link>
                        <Link to={'/allfoods'} className="hover:underline">All Foods</Link>
                        <Link to={'/gallery'} className="hover:underline">Gallery</Link>
                        <Link to={'aboutus'} className="hover:underline">About Us</Link>
                        <Link to={'contactus'} className="hover:underline">Contact</Link>
                    </nav>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Information Section */}
                    <div className="text-center md:text-left">
                        <h4 className="font-bold text-lg mb-4">INFORMATION</h4>
                        <p>Dhaka,Bangladesh, 1440</p>
                        <p className="mt-2">customer_support: freelancerazmir143@gmail.com</p>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                            <li><a href="#" className="hover:underline">Warranty and Services</a></li>
                        </ul>
                    </div>

                    {/* Contact & Order Section */}
                    <div className="text-center">
                        <h4 className="font-bold text-lg mb-4">CONTACT & ORDER</h4>
                        <p>Call Us To Order or Order Online</p>
                        <p className="text-red-500 text-2xl font-bold mt-2">+8801933946077</p>
                        <Link to={'/allfoods'}>
                            <button className="bg-secondary text-black font-bold py-2 px-4 mt-4 rounded ">
                                ORDER ONLINE NOW
                            </button></Link>
                    </div>

                    {/* Hour Time Open Section */}
                    <div className="text-center md:text-center">
                        <h4 className="font-bold text-lg mb-4">HOUR TIME OPEN</h4>
                        <ul className="space-y-2">
                            <li>Monday – Thursday: 8.00am – 21.00pm</li>
                            <li>Friday – Saturday: 9.00am – 22.00pm</li>
                            <li>Sunday: 8.00am – 23.00pm</li>
                            <li>Holiday: <span className="text-red-500">Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="mt-4 md:mt-0 text-gray-400 text-sm">&copy; Copyright © 2025 FoodFusion. All Right Reserved</p>


                    {/* Payment Methods */}
                    <div className="mt-4 md:mt-0">
                        <img src={payment} className="" />
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 text-3xl">
                    
                        <Link to={'https://www.linkedin.com/in/azmiruddin05/'} > <FaLinkedin /> </Link>
                        <Link to={'https://www.facebook.com/azmiruddin143/'} > <FaFacebook /> </Link>
                        <Link to={'http://wa.me/8801933946077'} > <FaWhatsappSquare /> </Link>

                        
                        {/* <AiFillTikTok /> */}
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;