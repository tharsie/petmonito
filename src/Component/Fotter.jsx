import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import header_img from '../Assets/Frame.png'

export const Footer = () => {
    return (
        <footer className="bg-MonYellow py-4 mb-3">

            <footer className="bg-MonYellow pt-5 mx-12">
                <div className="container max-w-7xl mx-auto px-4 mb-12 w-90">

                    {/* Call to Action Section */}
                    <div className="bg-Footerblue rounded-xl p-6 mx-auto flex flex-col md:flex-row justify-between items-center">
                        <h2 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-0">
                            Register Now So You Don't Miss Our Programs
                        </h2>

                        <form className="flex w-full md:w-auto bg-white p-2 rounded-lg">
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="p-3 border border-gray-200 flex-grow md:flex-grow-0 w-full md:w-64 mr-4"
                            />
                            <button className="bg-Footerblue text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-100">
                                Subscribe Now
                            </button>
                        </form>
                    </div>

                    {/* Navigation and Social Section */}
                    <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4 mt-8">
                        {/* Navigation Links */}
                        <div className="flex space-x-8 text-gray-700">
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Category</a>
                            <a href="#" className="hover:underline">About</a>
                            <a href="#" className="hover:underline">Contact</a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4 text-gray-600">
                            <a href="https://www.facebook.com" aria-label="Facebook">
                                <FaFacebook className="w-5 h-5 hover:text-blue-600" />
                            </a>
                            <a href="https://www.twitter.com" aria-label="Twitter">
                                <FaTwitter className="w-5 h-5 hover:text-blue-400" />
                            </a>
                            <a href="https://www.instagram.com" aria-label="Instagram">
                                <IoLogoInstagram className="w-5 h-5 hover:text-pink-500" />
                            </a>
                            <a href="https://www.youtube.com" aria-label="YouTube">
                                <FaYoutube className="w-5 h-5 hover:text-red-500" />
                            </a>
                        </div>
                    </div>

                    <div className="container px-4 ">

                        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">

                            <p className="text-sm">&copy; 2022 Monito. All rights reserved.</p>


                            <div className="text-blue-900 font-bold text-lg">
                               <img src={header_img } alt="Logo" />
                            </div>


                            <div className="flex space-x-4 text-sm mt-4 md:mt-0">
                                <a href="#" className="hover:underline">Terms of Service</a>
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>



        </footer>
    );
};
