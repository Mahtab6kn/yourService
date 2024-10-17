"use client";
import React from "react";
import Image from "next/image";
import { Typography, Button } from "@material-tailwind/react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const features = [
  "SOC-2 Type II complaint",
  "Single sign-on",
  "Choice of hosting region",
  "Data encryption at rest",
];

const clients = [
  { name: "Sodexo", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Nike", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Decathlon", logo: "/placeholder.svg?height=50&width=100" },
  { name: "L'Oreal", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Accenture", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Southwest", logo: "/placeholder.svg?height=50&width=100" },
  { name: "NHS", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Pinnacle", logo: "/placeholder.svg?height=50&width=100" },
];

export default function LandingSection() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-4 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <Typography variant="h2" color="blue-gray" className="font-bold">
            Dependable by design
          </Typography>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-500" />
                <Typography color="blue-gray">{feature}</Typography>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <Typography variant="h1" color="blue-gray" className="font-bold">
              Empower Your Enterprise with Appy Pie
            </Typography>
            <Typography color="gray" className="text-lg">
              Drive service excellence that customers admire with Yourservice
              enterprise solutions. Start building your future today.
            </Typography>
          </div>
          <Link
            href="https://calendly.com/ghostingtech-y_rs/it-service-and-consulting"
            target="_blank"
          >
            <Button size="lg" color="blue" ripple={true} className="px-8 mt-5">
              Book a Demo
            </Button>
          </Link>
          <Image
            src="/sodexo.svg"
            alt="logo"
            width={700}
            height={260}
            className=" object-contain w-full max-h-96"
          />
        </div>
      </div>
    </div>
  );
}
