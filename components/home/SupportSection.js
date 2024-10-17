"use client";
import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const SupportCard = ({ title, buttonText, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="w-full md:w-1/3 p-4"
  >
    <Card className={`${gradient} rounded-3xl shadow-lg overflow-hidden`}>
      <CardBody className="flex flex-col items-start p-6 space-y-4">
        <DocumentTextIcon className="h-8 w-8 text-gray-800" />
        <Typography variant="h5" color="gray" className="font-bold mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="font-normal">
          Well organized and up to date
        </Typography>
        <Button
          color="gray"
          size="lg"
          variant="filled"
          className="mt-4 bg-gray-900 text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-medium"
        >
          {buttonText}
        </Button>
      </CardBody>
    </Card>
  </motion.div>
);

const SupportSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch space-y-6 md:space-y-0 md:space-x-6 p-6 bg-gray-100">
      <SupportCard
        title="Online documentation"
        buttonText="View Documentation"
        gradient="bg-gradient-to-br from-green-200 via-green-100 to-cyan-200"
        delay={0}
      />
      <SupportCard
        title="Videos and Documentation"
        buttonText="Watch Videos"
        gradient="bg-gradient-to-br from-pink-200 via-pink-100 to-pink-200"
        delay={0.2}
      />
      <SupportCard
        title="Dedicated Customer Support"
        buttonText="Open Ticket"
        gradient="bg-gradient-to-br from-green-100 via-yellow-100 to-green-200"
        delay={0.4}
      />
    </div>
  );
};

export default SupportSection;
