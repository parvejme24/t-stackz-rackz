import { GoArrowRight } from "react-icons/go";
import AboutTradingCard from "./AboutTradingCard";

const cards = [
  {
    image: "../../../../public/Article_Image.png",
    title: "Basic Trading For Beginners",
    authorImage: "../../../../public/Ellipse 80.png",
    authorName: "Dasteen",
    date: "Jan 10, 2022",
    readTime: "3 Min Read",
  },
  {
    image: "../../../../public/Article_Image (1).png",
    title: "Start Earning From Trading",
    authorImage: "../../../../public/Ellipse 80.png",
    authorName: "Dasteen",
    date: "Jan 10, 2022",
    readTime: "3 Min Read",
  },
  {
    image: "../../../../public/Article_Image (2).png",
    title: "How To Become A Pro Trader",
    authorImage: "../../../../public/Ellipse 80.png",
    authorName: "Dasteen",
    date: "Jan 10, 2022",
    readTime: "3 Min Read",
  },
];

export default function AboutTrading() {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
        <h1 className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]">
          Learn About Trading
        </h1>
        <div className="pb-6 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <img
            className="w-full"
            src="../../../../public/Rectangle 20.png"
            alt=""
          />
          <div className="flex-1">
            <h1 className="font-medium text-xl lg:text-3xl text-[#00F5FF] pb-3 lg:pb-6">
              Master the Markets: Trade Smarter with T-Stackz Rackz
            </h1>
            <p className="font-normal text-sm md:text-base text-[#C0C0C0] pb-5 lg:pb-8">
              Unlock the secrets of successful trading with T-Stackz Rackz!
              Whether you're new to stocks, options, or crypto, or an
              experienced trader looking for an edge, our platform provides
              AI-powered insights, real-time alerts, and expert strategies to
              help you trade smarter and profit faster. Watch this video to see
              how T-Stackz Rackz can transform your trading journey!
            </p>
            <button className="flex justify-center items-center gap-3 text-[#FFFFFF] text-xs md:text-base font-normal py-2 md:py-3 px-4 md:px-10 bg-[#FD5163] rounded-xl">
              Watch Video <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 ">
          {cards.map((card, index) => (
            <AboutTradingCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
