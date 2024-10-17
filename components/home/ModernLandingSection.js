"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typography, Button, Card, CardBody } from "@material-tailwind/react";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "No-Code Solution",
    description: "Build powerful apps without writing a single line of code.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Create and deploy your apps in minutes, not months.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with industry-leading security measures.",
  },
];

export default function ModernLandingSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              The Future of <span className="text-blue-600">No-Code</span> App
              Development
            </Typography>
            <Typography variant="lead" color="gray" className="mb-8">
              Experience the power of YourService. Build custom business
              solutions without coding expertise.
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://calendly.com/ghostingtech-y_rs/it-service-and-consulting"
                target="_blank"
              >
                <Button
                  size="lg"
                  color="blue"
                  variant="gradient"
                  className="flex items-center gap-2 px-6 py-3"
                  ripple={true}
                >
                  Book Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Appy Pie Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-lg" />
          </motion.div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardBody>
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-500/10 text-blue-500">
                    {feature.icon}
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {feature.title}
                  </Typography>
                  <Typography color="gray">{feature.description}</Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
