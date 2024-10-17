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
          title="FOR ONLINE SERVICES"
          subtitle="Make Your Services Online."
          content={
            <img
              src="/img-2.jpeg"
              alt="Online Services"
              className="max-w-full h-auto"
            />
          }
          footer={
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                WEB APPS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                MOBILE APPS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                DASHBOARD
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                LIKE URBANCLAPS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                & MORE...
              </span>
            </div>
          }
        />
        <FeatureCard
          title="Amazing Features"
          subtitle="Have a lots of Features, layout options for creating a online service website."
          content={
            <img
              src="/img-3.jpeg"
              alt="Amazing Features"
              className="max-w-full h-auto"
            />
          }
          footer={
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                WEB APPS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                MOBILE APPS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                DASHBOARD
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                LIKE URBANCLAPS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                & MORE...
              </span>
            </div>
          }
        />
        <FeatureCard
          title="FOR SERVICES OR HOME SERVICES"
          subtitle="Create Your Own Service Website."
          content={
            <img
              src="/img-4.jpeg"
              alt="Service Website"
              className="max-w-full h-auto"
            />
          }
          footer={
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                PEST CONTROLS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                AC REPAIR
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                ELECTRICIANS
              </span>
              <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                PLUMBER
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
