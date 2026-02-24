"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Car, MapPin, CheckCircle } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Choose Your Vehicle",
    description:
      "Browse our full collection and pick the car, van, or SUV that suits your trip.",
    image: "/step1.png",
    icon: Car,
  },
  {
    id: 2,
    title: "Select Date & Location",
    description:
      "Set your pickup and return dates and choose your preferred location.",
    image: "/step2.png",
    icon: MapPin,
  },
  {
    id: 3,
    title: "Confirm Your Booking",
    description: "Submit your request and receive instant confirmation.",
    image: "/step3.png",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto change steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section id="steps" className="py-20 bg-white scroll-mt-5">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          How <span className="text-[#EDA200]">It</span> Works
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          Explore the following steps and we will help you find the vehicle you
          need.
        </p>
      </div>

      {/* Container */}
      <div className="relative bg-[#FFFBF0] rounded-2xl shadow-sm w-full max-w-6xl mx-auto overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
        {/* Left Content */}
        <div className="flex-1 transition-all duration-500">
          <div className="flex items-center gap-2 font-semibold mb-3">
            <div className="bg-[#EDA200] text-white w-10 h-10 flex items-center justify-center rounded-full">
              <ActiveIcon size={20} />
            </div>

            <span className="uppercase tracking-wide text-[#EDA200]">
              Step 0{steps[activeStep].id}
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-4">{steps[activeStep].title}</h3>

          <p className="text-lg text-gray-600 leading-relaxed">
            {steps[activeStep].description}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex items-center gap-4 mt-10 md:mt-0 md:ml-12 transition-all duration-500">
          <Image
            key={activeStep}
            src={steps[activeStep].image}
            alt={steps[activeStep].title}
            width={300}
            height={300}
            className="rounded-2xl object-contain"
          />

          {/* Dots */}
          <div className="flex flex-col gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  index === activeStep
                    ? "bg-[#EDA200] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
