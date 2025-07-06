import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CraditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pd-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          <div className="space-y-6 ">
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam debitis laudantium recusandae.
            </p>
            <div className="flex items-center gap-4 pb-5">
              <FaPhone />
              98989873xx
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex item-center gap-4"> 
              <FaFacebook className="text-2xl cursor-pointer hover:text-gray-300 transition duration-300" />
              <FaInstagram className="text-2xl cursor-pointer hover:text-gray-300 transition duration-300" />
              <FaGoogle className="text-2xl cursor-pointer hover:text-gray-300 transition duration-300" />
              <FaTelegram className="text-2xl cursor-pointer hover:text-gray-300 transition duration-300" />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Payment Methods</h1>
            <img src={CraditCards} alt="" className="w-[80%]" />
          </div>
        </div>
        <p className="text-white text-center pt-8 mt-8 border-t-2 ">
          Copyright &copy; 2024 Coders Cafe. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
