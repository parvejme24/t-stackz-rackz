import { GoArrowRight } from "react-icons/go";

export default function Banner() {
  return (
    <div
      className="text- md:text-center bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center px-6 space-y-8"
      style={{ backgroundImage: "url('/images/banner-bg.png')" }}
    >
      <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-extrabold">
        <span className="text-[#C0C0C0]">Unleash</span>{" "}
        <span className="ft">Your</span>
        <br />
        <span className="text-[#D72638]">Trading</span>{" "}
        <span className="text-[#C0C0C0]">Power.</span>
      </h1>

      <p className="text-lg text-gray-200 max-w-2xl">
        T-Stackz Rackz is a high-performance trading platform for stocks,
        options, and BTC/ETH, offering real-time alerts, AI-driven insights, and
        personalized strategies. Designed for power, precision, and success, it
        blends cutting-edge tools with a luxury trading experience. Unleash your
        trading power today.
      </p>

      <button className="bg-gradient-to-r from-[#FA4E60] to-[#DA293B] text-white font-semibold py-3 px-6 flex items-center gap-2 rounded-lg mt-6 hover:scale-105 transition duration-300 self-start md:self-center">
        Start Trading <GoArrowRight />
      </button>
    </div>
  );
}
