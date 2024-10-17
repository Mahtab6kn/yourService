import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center my-40 bg-white">
      <h1 className="text-4xl font-bold text-center sm:text-5xl lg:text-4xl">
        Streamline Your Service Management with Our Powerful App
      </h1>
      <p className="mt-4 text-lg text-gray-600 text-center">
        Manage, validate, and track services effortlessly, all from one platform
      </p>
      <Link
        href="https://calendly.com/ghostingtech-y_rs/it-service-and-consulting"
        target="_blank"
      >
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
          Request a Demo
        </button>
      </Link>

      <p className="mt-4 text-sm text-gray-500">
        Empower Your Business with Our Platform
      </p>
    </div>
  );
};

export default HeroSection;
