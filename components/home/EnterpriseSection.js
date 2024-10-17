"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const awards = [
  {
    name: "Capterra",
    image: "/img-1.jpeg",
    year: "2021",
    title: "Best Ease of Use",
  },
  {
    name: "GetApp",
    image: "/img-4.jpeg",
    year: "2021",
    title: "Category Leaders",
  },
  {
    name: "Momentum",
    image: "/img-5.jpeg",
    year: "2024",
    title: "Leader",
  },
  {
    name: "G2",
    image: "/img-3.jpeg",
    year: "2024",
    title: "Leader Summer",
  },
  {
    name: "G2",
    image: "/img-2.jpeg",
    year: "2024",
    title: "Leader Enterprise Summer",
  },
  {
    name: "G2",
    image: "/img-1.jpeg",
    year: "2024",
    title: "Fastest Implementation Enterprise Summer",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function EnterpriseSection() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center p-4 mt-5 md:mt-0">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div initial="initial" animate="animate" variants={fadeInUp}>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-12 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Built to Exceed Enterprise Standards in{" "}
            <span className="text-blue-600">Scalability</span>,{" "}
            <span className="text-green-600">Security</span>, and{" "}
            <span className="text-orange-600">Reliability</span>
          </Typography>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <Image
                src={award.image}
                alt={`${award.name} ${award.title}`}
                width={80}
                height={80}
                className="mb-2 h-16 w-16"
              />
              <Typography
                variant="small"
                color="blue-gray"
                className="font-semibold text-center"
              >
                {award.title}
              </Typography>
              <Typography variant="small" color="gray" className="text-center">
                {award.year}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
