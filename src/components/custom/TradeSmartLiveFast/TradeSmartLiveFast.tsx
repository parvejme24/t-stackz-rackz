import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import CarImage from "../../../../public/images/car.png";

export default function TradeSmartLiveFast() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="relative">
      <div className="bg-[#0B393B] pt-10 pb-10 md:pb-16 relative overflow-hidden">
        {/* Title with Animation */}
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#00F5FF] font-extrabold text-center"
        >
          Trade Smart Live Fast.
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#00F5FF] font-extrabold text-center"
        >
          <span className="ft1">Trade Smart Live Fast.</span>
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#00F5FF] font-extrabold text-center"
        >
          <span className="ft1">Trade Smart Live Fast.</span>
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-[#00F5FF] font-extrabold text-center"
        >
          <span className="ft1">Trade Smart Live Fast.</span>
        </h1>

        {/* Image with Animation */}
        <img
          alt="Smart Trading"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           w-[70%] sm:max-w-lg md:max-w-xl lg:max-w-4xl"
          draggable={false}
          src={CarImage}
        />
      </div>
    </div>
  );
}
