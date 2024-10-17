"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function PromoSection() {
  const [activeImage, setActiveImage] = useState("/img-1.jpeg");

  useEffect(() => {
    const sections = document.querySelectorAll(".content-section div");

    // Callback for when sections intersect with the viewport
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target.getAttribute("data-image");
          if (image) {
            setActiveImage(image); // Update the image when section is in view
          }
        }
      });
    };

    // Options for intersection observer
    const observerOptions = {
      root: null, // relative to the viewport
      threshold: 0.2, // Trigger when 50% of the section is in view
    };

    // Create observer
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="relative bg-white  mb-10">
      <h1 className="sticky top-[50px] lg:top-[70px] z-50 bg-white text-xl font-bold text-center sm:text-2xl lg:text-4xl my-20 pt-5 pb-14">
        Admin, Service-Provider and User
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16">
        {/* Left Column - Scrollable Sections */}
        <div className="space-y-16 content-section">
          {/* Section 1 */}
          <div className="section-1" data-image="/admin.png">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 1: Admin Features
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-6">
              The Admin Dashboard provides full control over platform
              operations, ensuring smooth service delivery. Key functionalities
              include:
            </p>
            <p className="text-gray-600 mb-6">
              1. Service Management: Create, update, and delete service
              categories to keep offerings current.
            </p>
            <p className="text-gray-600 mb-6">
              2. User Management: Manage registered users and service providers,
              ensuring quality control.
            </p>
            <p className="text-gray-600 mb-6">
              3. Booking Management: View and manage all bookings made on the
              platform.
            </p>
            <p className="text-gray-600 mb-6">
              4. Blog Management: Create and manage blog posts to educate users
              and provide additional value.
            </p>
          </div>
          {/* Section 2 */}
          <div className="section-1" data-image="/service.png">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 1: Service-Provider Features
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Designed for professionals, the Service Provider Dashboard enables
              efficient management of services and bookings:
            </p>
            <p className="text-gray-600 mb-6">
              1. Service Creation: List specific services offered with detailed
              descriptions and pricing.
            </p>
            <p className="text-gray-600 mb-6">
              2. Location Management: Define and manage geographical areas
              served.
            </p>
            <p className="text-gray-600 mb-6">
              3. Booking Requests: View, accept, or reject booking requests
              based on availability.
            </p>
            <p className="text-gray-600 mb-6">
              4.Booking Status Management: Update booking statuses to keep users
              informed
            </p>
          </div>
          {/* Section 3 */}
          <div className="section-1" data-image="/user.png">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 1: User Features
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
            <p className="text-gray-600 mb-6">
              The User Dashboard is user-friendly, making it easy for customers
              to find and book services:
            </p>
            <p className="text-gray-600 mb-6">
              1. Browse Services: Explore a wide range of available services
              tailored to your needs.
            </p>
            <p className="text-gray-600 mb-6">
              2. Select Time Slots: Choose convenient time slots for service
              appointments between 8 AM and 8 PM.
            </p>
            <p className="text-gray-600 mb-6">
              3. Manage Bookings: View active bookings and cancel if necessary,
              adhering to cancellation policies.
            </p>
            <p className="text-gray-600 mb-6">
              4.Communication Options: Easily contact service providers via
              phone, email, or WhatsApp for quick coordination
            </p>
          </div>
          {/* Section 4 */}
          <div className="section-1" data-image="/logo.png">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 1: Why Choose YourServiceApp?
              </span>
            </div>
            {/* <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2> */}
            <p className="text-gray-600 mb-6">
              The User Dashboard is user-friendly, making it easy for customers
              to find and book services:
            </p>
            <p className="text-gray-600 mb-6">
              1. Trusted Providers: Our platform verifies all service providers
              to ensure quality and reliability.
            </p>
            <p className="text-gray-600 mb-6">
              2. User-Friendly Interface: Navigate seamlessly through our
              intuitive dashboards designed for admins, providers, and users
              alike.
            </p>
            <p className="text-gray-600 mb-6">
              3. Real-Time Updates: Stay informed with real-time notifications
              about booking statuses and provider communications.
            </p>
          </div>
        </div>

        {/* Right Column - Fixed Image */}
        <div className="sticky top-48 bg-gray-200 w-full h-96 rounded-3xl flex items-center justify-center">
          <Image src={activeImage} alt="App Preview" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
