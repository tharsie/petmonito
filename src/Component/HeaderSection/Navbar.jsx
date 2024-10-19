import React from 'react';
import Frame from '../../Assets/Frame.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-light">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={Frame} alt="Logo" className="h-12 ps-12" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-darkBlue font-medium">
  <li><Link to="/" className="hover:text-lightBlue">Home</Link></li>
  <li><Link to="/dog-marketplace" className="hover:text-lightBlue">Category</Link></li>
  <li><Link to="/about" className="hover:text-lightBlue">About</Link></li>
  <li><Link to="/contact" className="hover:text-lightBlue">Contact</Link></li>
</ul>

      {/* Search Bar and Buttons */}
      <div className="flex items-center space-x-4">
        <input 
          type="text" 
          placeholder="Search something here!" 
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lightBlue"
        />
        <button className="bg-lightBlue text-white px-4 py-2 rounded-full hover:bg-buttonHover">
          Join the community
        </button>
      </div>
    </nav>
  );
};
