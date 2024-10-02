import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <div className="bg-purple-600 z-50 sticky top-0">
      <header className="text-white body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#profile"} className="mr-5 hover:text-red-500 font-bold">
              Profile
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-red-500 font-bold">
              About
            </Link>
            <Link href={"#contact"} className="mr-5 hover:text-red-500 font-bold">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;