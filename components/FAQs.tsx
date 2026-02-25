"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      id: 1,
      question: "How do I book a vehicle?",
      answer:
        "Browse our collection, select your preferred vehicle, set the pickup and return dates, and submit your booking request. Payment is made in person when you collect the vehicle.",
    },
    {
      id: 2,
      question: "What types of vehicles are available?",
      answer:
        "We offer a range of vehicles to suit your needs, including vans, cars, SUVs, jeeps, and scooties.",
    },
    {
      id: 3,
      question: "How do I pay for my booking?",
      answer:
        "Payment is done face-to-face on site when you pick up the vehicle.",
    },
    {
      id: 4,
      question: "How can I contact you for assistance?",
      answer:
        "You can reach us anytime through the “Contact Us” button in the Get in Touch section. When you click it, you’ll be automatically redirected to our WhatsApp chat to talk directly with our support team.",
    },
  ];
  return (
    <section
      id="faq"
      className="py-16 px-4 bg-white overflow-hidden scroll-mt-7"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold mb-3 text-black">
            Got <span className="text-[#EDA200]">Questions?</span> We’ve Got
            Answers!
          </h2>
          <p className="text-xl font-regular text-[#838383] mt-2">
            Find solutions to common queries fast
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/cuate.png"
              alt="FAQ Illustration"
              className="w-full max-w-md h-auto "
              width={400}
              height={400}
            />
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-white">
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-[24px] font-regular text-black pr-4">
                    {faq.question}
                  </span>

                  <div className="transition-transform duration-300">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-gray-700" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-700" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <div className="border-l-4 pl-4 py-2 border-[#EDA200]">
                      <p className="text-[20px] text-[#838383] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
