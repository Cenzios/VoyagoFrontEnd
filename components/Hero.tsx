"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState<number>(0);

  const handleBookNow = () => {
    document.querySelector("#fleet")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-10 max-w-3xl">
        <h1 className="text-[42px] md:text-[48px] font-bold leading-tight mb-6">
          Safe And Fast Way <br />
          To <span className="text-[#EDA200]">Book</span> Your Vehicle
        </h1>

        <p className="text-[16px] text-gray-200 mb-8 leading-relaxed max-w-sm">
          We offer a wide range of rental vehicles to suit your needs, whether
          you&apos;re planning a weekend getaway, a business trip, or a long vacation.
        </p>

        <button
          onClick={handleBookNow}
          className="bg-[#EDA200] text-black font-semibold px-6 py-3 rounded-lg transition-all hover:bg-[#f8b835] w-fit"
        >
          Book ASAP
        </button>

        {/* Stats */}
        <div className="flex flex-wrap divide-x divide-gray-400 mt-10 text-center">
          <div className="pr-4">
            <p className="text-[24px] font-semibold text-[#EDA200]">4.8</p>
            <p className="text-[14px] text-gray-200">AVERAGE REVIEWS</p>
          </div>

          <div className="px-4">
            <p className="text-[24px] font-semibold text-[#EDA200]">10,000+</p>
            <p className="text-[14px] text-gray-200">TRUSTED TRAVELERS</p>
          </div>

          <div className="px-4">
            <p className="text-[24px] font-semibold text-[#EDA200]">24 / 7</p>
            <p className="text-[14px] text-gray-200">SERVICES</p>
          </div>
        </div>
      </div>

      {/* Video Slider */}
      <div className="relative z-10 w-full lg:w-[50%] flex flex-col justify-center items-center px-6 md:px-10">
        <div className="relative w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <video
              src={videos[currentVideo]}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[280px] object-cover rounded-3xl"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="w-14 h-14 text-white opacity-90 animate-pulse" />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 mt-5">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentVideo
                    ? "bg-[#EDA200] w-8"
                    : "bg-white/40 w-5 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
