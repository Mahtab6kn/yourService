"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const tiers = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals",
    features: [
      "1 user",
      "5GB storage",
      "Basic support",
      "Limited integrations",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for professionals",
    features: [
      "5 users",
      "50GB storage",
      "Priority support",
      "Advanced integrations",
      "Analytics",
    ],
  },
  {
    name: "Team",
    price: "$79",
    description: "Great for small teams",
    features: [
      "20 users",
      "200GB storage",
      "24/7 support",
      "Advanced integrations",
      "Analytics",
      "Team collaboration tools",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Unlimited storage",
      "Dedicated support",
      "Custom integrations",
      "Advanced analytics",
      "Enterprise-grade security",
    ],
  },
];

export default function PriceCard() {
  const [hoveredCard, setHoveredCard] = useState();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onHoverStart={() => setHoveredCard(tier.name)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="overflow-hidden shadow-md h-[450px] hover:shadow-xl transition-shadow duration-300">
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none bg-gray-100 p-6 h-14"
                >
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    {tier.name}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal mt-1"
                  >
                    {tier.description}
                  </Typography>
                </CardHeader>
                <CardBody className="p-6 h-80">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mt-1 mb-2 font-semibold"
                  >
                    {tier.price}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    {tier.price === "Custom"
                      ? "Contact us for pricing"
                      : "per user/month"}
                  </Typography>
                  <ul className="mt-6 space-y-2">
                    {tier.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <Typography variant="small" className="font-normal">
                          {feature}
                        </Typography>
                      </motion.li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter className="pt-0 px-6 pb-6">
                  <Button
                    size="lg"
                    fullWidth={true}
                    className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
                    color="blue"
                  >
                    <motion.span
                      animate={{
                        scale: hoveredCard === tier.name ? [1, 1.03, 1] : 1,
                      }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      {tier.price === "Custom"
                        ? "Contact Sales"
                        : "Get Started"}
                    </motion.span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
