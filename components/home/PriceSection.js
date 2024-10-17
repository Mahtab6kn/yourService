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
    name: "Basic",
    price: "₹25,000",
    description: "Perfect for individuals",
    pricing: {
      quarterly: "₹25,000",
      halfYearly: "₹45,000",
      yearly: "₹80,000",
    },
    features: [
      "5 Services Creation",
      "25,000 Intakes/Server Capacity",
      "Basic Customization Options",
      "Email Support Only (Ticket-based)",
      "No Call/Chat Support",
    ],
  },
  {
    name: "Intermediate",
    price: "₹50,000",
    description: "Ideal for growing businesses",
    pricing: {
      quarterly: "₹50,000",
      halfYearly: "₹90,000",
      yearly: "₹1,60,000",
    },
    features: [
      " 20 Services Creation",
      "50,000 Intakes/Server Capacity",
      "Moderate Customization Options (UI Changes)",
      "Email Support and Chat Support (Business Hours)",
      "Basic Reports and Analytics",
    ],
  },
  {
    name: "Pro",
    price: "₹1,00,000",
    description: "Ideal for professionals",
    pricing: {
      quarterly: "₹1,00,000",
      halfYearly: "₹1,80,000",
      yearly: "₹3,50,000",
    },
    features: [
      "Unlimited Services Creation",
      "1,00,000+ Intakes/Server Capacity",
      "No Branding (White-label)",
      "Priority Support: Call, Chat, Email (24/7)",
      "SLA Response Time: 8 hours",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    pricing: {
      quarterly: "₹2,50,000",
      halfYearly: "₹4,75,000",
      yearly: "₹9,00,000",
    },
    features: [
      "Fully Customised for Specific Business Needs",
      " Dedicated Server and Cloud Management",
      "White-label with Dedicated Account Manager",
      "SLA Response Time: 4 hours",
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
                  <div className="flex gap-2 justify-around">
                    <div>
                      <Typography
                        variant="p"
                        color="blue-gray"
                        className="mt-1 mb-2 font-semibold"
                      >
                        {tier.pricing.quarterly}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Quarterly
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="p"
                        color="blue-gray"
                        className="mt-1 mb-2 font-semibold"
                      >
                        {tier.pricing.halfYearly}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Half-Yearly
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="p"
                        color="blue-gray"
                        className="mt-1 mb-2 font-semibold"
                      >
                        {tier.pricing.yearly}
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Yearly
                      </Typography>
                    </div>
                  </div>
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
