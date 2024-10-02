
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return(
    <div id="profile" className="bg-gray-500">
    <section className="text-white body-font bg-fixed bg-cover bg-center custom-image font-semibold">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-purple-800">I am Rameen Rashid</h1>
        <h2 className="title-font sm:text-3xl text-3xl mb-4 font-bold text-white">Future Cloud Applied Gen-AI Engineer</h2>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto"
            alt="profile-pic"
            width={300}
            height={400}
            src="/girl-removebg-preview-1.png"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Profile;