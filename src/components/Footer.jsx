"use client";
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
          reiciendis nihil qui odio optio animi reprehenderit exercitationem,
          aut rem repellendus fuga! A nihil corporis vitae at ullam id
          laudantium est?
        </p>
        <div className="flex justify-between py-4 md:w-[75%] ">
          <FaDribbbleSquare size={30} className="hover:text-[#ea4c89] transition-colors duration-300" />
          <FaFacebookSquare size={30} className="hover:text-[#3b5998] transition-colors duration-300" />
          <FaGithubSquare size={30} className="hover:text-[#333] transition-colors duration-300" />
          <FaInstagram size={30} className="hover:text-[#e4405f] transition-colors duration-300" />
          <FaTwitterSquare size={30} className="hover:text-[#1da1f2] transition-colors duration-300" />
        </div>
      </div>
      <div className="xl:col-span-2 flex justify-between mt-6 ">
        <div>
          <h6 className="font-medium text-[#00fd9a]"> Solution</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00fd9a]"> Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing </li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00fd9a]"> Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm" > Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium  text-[#00fd9a]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
