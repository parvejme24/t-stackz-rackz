import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoArrowRight } from "react-icons/go";

export default function Banner() {
  // Initialize AOS for animations on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
      id="banner"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/video/dragon1.webm" type="video/webm" />
        <source src="/video/dragon1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Container with Opacity */}
      <div className="bg-[#000] bg-opacity-60 py-10  px-6 space-y-8 w-full min-h-screen flex flex-col items-center justify-center">
        {/* Main Heading */}
        <h1
          className="text-4xl md:text-7xl lg:text-8xl text-white font-extrabold"
          data-aos="fade-up"
        >
          <span className="text-[#C0C0C0]">Unleash</span>{" "}
          <span className="ft">Your</span>
          <br />
          <span className="text-[#D72638]">Trading</span>{" "}
          <span className="text-[#C0C0C0]">Power.</span>
        </h1>

        {/* Description */}
        <p
          className="text-lg text-gray-200 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          T-Stackz Rackz is a high-performance trading platform for stocks,
          options, and BTC/ETH, offering real-time alerts, AI-driven insights,
          and personalized strategies. Designed for power, precision, and
          success, it blends cutting-edge tools with a luxury trading
          experience. Unleash your trading power today.
        </p>

        {/* Call-to-Action Button */}
        <a
          className="bg-gradient-to-r from-[#FA4E60] to-[#DA293B] text-white font-semibold py-3 px-6 flex items-center gap-2 rounded-lg mt-6 hover:scale-105 transition duration-300"
          // href="https://dashboard.mailerlite.com/forms/1447765/151869386929473502/share"
          href="https://discord.gg/S2jPeJfXR4"
          target="_blank"
        >
          Yes, I Want Free Trades <GoArrowRight />
        </a>
      </div>
    </div>
  );
}
