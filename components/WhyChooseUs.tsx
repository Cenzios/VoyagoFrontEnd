"use client";

import {
  CalendarCheck,
  Car,
  DollarSign,
  HeartHandshake,
  Map,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: Car,
      title: "Wide vehicle selection",
      description:
        "Choose from a diverse fleet of cars, SUVs, vans, and more, ensuring you find the perfect vehicle for your need.",
    },
    {
      id: 2,
      icon: CalendarCheck,
      title: "Flexible Booking",
      description:
        "Easily set your pickup and return dates and choose the location that works best for you, making planning your trip simple.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Reliable & Safe",
      description:
        "All vehicles are regularly inspected and maintained to ensure a safe and worry-free journey.",
    },
    {
      id: 4,
      icon: DollarSign,
      title: "Affordable Options",
      description:
        "Competitive pricing for every budget, from economy cars to premium vehicles for extra comfort.",
    },
    {
      id: 5,
      icon: HeartHandshake,
      title: "Safe-to-Face Support",
      description:
        "Friendly staff ready to assist you in person, with smooth communication and on-site payment.",
    },
    {
      id: 6,
      icon: Map,
      title: "Comfortable Travel",
      description:
        "Enjoy clean, cozy, and well-equipped vehicles designed for a comfortable and pleasant ride.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 px-4 bg-white overflow-hidden scroll-mt-7"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold mb-3 text-black">
            Why <span className="text-[#EDA200]">Choose</span> Us
          </h2>
          <p className="text-xl font-regular text-[#838383] mt-2">
            Your journey made simple, safe, and enjoyable.
          </p>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="flex flex-col items-center text-center p-6 rounded-lg shadow-md bg-white "
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#F6D080] flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-medium text-black mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[16px] font-regular text-black leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
