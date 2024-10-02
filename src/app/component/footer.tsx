import Image from "next/image";
import Link from "next/link";
import React from "react";


const Footer = () => {
  return (
    <div className=" bg-slate-700">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-extrabold items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">Rameen</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
            © 2024 Rameen.net.pk
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;