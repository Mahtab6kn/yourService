"use client";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const FeatureCard = ({ title, subtitle, content, footer }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="w-full md:w-1/3 p-4"
  >
    <Card className="h-full border">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
        <div className="my-4 h-48 flex items-center justify-center">
          {content}
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-center py-3">
        <Typography variant="small">{footer}</Typography>
      </CardFooter>
    </Card>
  </motion.div>
);

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Exclusive features Included
      </motion.h2>
      <div className="flex flex-wrap -mx-4">
        <FeatureCard
          title="Service Creation and Management
"
          subtitle="List Your Services easily."
          content={
            <img
              src="https://cdn.pixabay.com/photo/2015/11/03/08/56/service-1019821_1280.jpg"
              alt="Online Services"
              className="max-w-full h-60"
            />
          }
          footer={
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                CREATION
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                UPDATION
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                DELETION
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                VALIDATION
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                & MORE...
              </span>
            </div>
          }
        />
        <FeatureCard
          title="Efficient Booking Management
"
          subtitle="You have full control over your schedule."
          content={
            <img
              src="https://cdn.pixabay.com/photo/2015/10/30/12/23/teacher-1014048_1280.jpg"
              alt="Amazing Features"
              className="max-w-full h-60"
            />
          }
          footer={
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                VIEW BOOKING REQUESTS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                ACCEPT REQUESTS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                REJECT REQUESTS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                UPDATE BOOKING REQUESTS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                & MORE...
              </span>
            </div>
          }
        />
        <FeatureCard
          title="Communication Made Easy"
          subtitle="Once a booking is confirmed, communicate directly with users through various channels."
          content={
            <img
              src="https://cdn.pixabay.com/photo/2024/03/28/19/43/customer-service-8661577_1280.png"
              alt="Service Website"
              className="max-w-full h-60"
            />
          }
          footer={
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                PHONE CALL
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                EMAIL SUPPORT
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                WHATSAPP SUPPORT
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                CHAT SUPPORT
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                & MORE...
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default FeatureSection;
