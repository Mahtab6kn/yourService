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
      <h1 className="sticky top-[70px] z-50 bg-white text-xl font-bold text-center sm:text-2xl lg:text-4xl my-20 pt-5 pb-14">
        Transform Your Business with Our No-Code Solutions
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16">
        {/* Left Column - Scrollable Sections */}
        <div className="space-y-16 content-section">
          {/* Section 1 */}
          <div className="section-1" data-image="/img-1.jpeg">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 1: Create Apps Instantly
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Without Any Coding
            </h2>
            <p className="text-gray-600 mb-6">
              Design professional Android and iOS apps with our no-code app
              builder... Design professional Android and iOS apps with our
              no-code app builder... Design professional Android and iOS apps
              with our no-code app builder... Design professional Android and
              iOS apps with our no-code app builder... Design professional
              Android and iOS apps with our no-code app builder... Design
              professional Android and iOS apps with our no-code app builder...
              Design professional Android and iOS apps with our no-code app
              builder... Design professional Android and iOS apps with our
              no-code app builder... Design professional Android and iOS apps
              with our no-code app builder... Design professional Android and
              iOS apps with our no-code app builder...
            </p>
          </div>
          {/* Section 2 */}
          <div className="section-2" data-image="/img-2.jpeg">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 2: Premium Templates
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Customize Features
            </h2>
            <p className="text-gray-600 mb-6">
              Select from premium templates, adjust features to fit your
              needs... Select from premium templates, adjust features to fit
              your needs... Select from premium templates, adjust features to
              fit your needs... Select from premium templates, adjust features
              to fit your needs... Select from premium templates, adjust
              features to fit your needs... Select from premium templates,
              adjust features to fit your needs... Select from premium
              templates, adjust features to fit your needs... Select from
              premium templates, adjust features to fit your needs... Select
              from premium templates, adjust features to fit your needs...
              Select from premium templates, adjust features to fit your
              needs...
            </p>
          </div>
          {/* Section 3 */}
          <div className="section-3" data-image="/img-3.jpeg">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 3: Publish Your App
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Without Writing Code
            </h2>
            <p className="text-gray-600 mb-6">
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
            </p>
          </div>
          {/* Section 4 */}
          <div className="section-3" data-image="/img-4.jpeg">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 3: Publish Your App
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Without Writing Code
            </h2>
            <p className="text-gray-600 mb-6">
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
            </p>
          </div>
          {/* Section 5 */}
          <div className="section-3" data-image="/img-5.jpeg">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-gray-800">
                Section 3: Publish Your App
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Without Writing Code
            </h2>
            <p className="text-gray-600 mb-6">
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
              Publish your app smoothly without writing a single line of code...
            </p>
          </div>
        </div>

        {/* Right Column - Fixed Image */}
        <div className="sticky top-48 bg-gray-200 w-full h-96 rounded-3xl flex items-center justify-center">
          <Image src={activeImage} alt="App Preview" width={300} height={300} />
        </div>
      </div>
    </div>
  );
}
