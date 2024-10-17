"use client";
import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [count300k, setCount300k] = useState(0);
  const [count25, setCount25] = useState(0);
  const [count3, setCount3] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after detecting
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Counting function
    if (isVisible) {
      const duration = 2000; // Animation duration in ms

      const startCount = (start, end, setter, duration) => {
        let startTime = null;

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const currentValue = Math.floor(progress * (end - start) + start);
          setter(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      };

      startCount(0, 300000, setCount300k, duration);
      startCount(0, 25, setCount25, duration);
      startCount(0, 3, setCount3, duration);
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Apps That Shape the World Are Built on Appy Pie
            </h1>
            <div className="text-blue-600 text-5xl sm:text-6xl lg:text-7xl font-bold mb-2">
              {count300k.toLocaleString()}+
            </div>
            <p className="text-gray-600 text-lg">
              companies drive transformation with Appy Pie
            </p>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Statistic Block 1 */}
            <div className="flex-1 gap-5 border-l-2 border-gray-300 pl-10 pt-14">
              <div className="text-blue-600 text-5xl font-bold">{count25}+</div>
              <p className="text-gray-600 text-lg">
                Countries have companies that build effective apps using Appy
                Pie
              </p>
            </div>

            {/* Statistic Block 2 */}
            <div className="flex-1 gap-5 border-l-2 border-gray-300 pl-10 pt-14">
              <div className="text-blue-600 text-5xl font-bold">{count3}%</div>
              <p className="text-gray-600 text-lg">
                Fortune 500 companies create apps with Appy Pie
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
