import { GoArrowRight } from "react-icons/go";

import ABOUT_IMAGE from "/public/images/about.png";
import B1 from "/public/images/b1.png";
import B2 from "/public/images/b2.png";
import B3 from "/public/images/b3.png";
import AuthorImg from "/public/images/logo.png";
// import USERPROFILE from "/public/images/user_profile.png";

import { useEffect } from "react";
import AOS from "aos";

import AboutTradingCard from "./AboutTradingCard";
import "aos/dist/aos.css";

const cards = [
  {
    image: B1,
    title: "Basic Trading For Beginners",
    authorImage: AuthorImg,
    authorName: "T-Stackz-Rackz",
    date: "Jan 10, 2025",
    readTime: "10 Min Read",
  },
  {
    image: B2,
    title: "Start Earning From Trading",
    authorImage: AuthorImg,
    authorName: "T-Stackz-Rackz",
    date: "Jan 20, 2025",
    readTime: "3 Min Read",
  },
  {
    image: B3,
    title: "How To Become A Pro Trader",
    authorImage: AuthorImg,
    authorName: "T-Stackz-Rackz",
    date: "february 19, 2025",
    readTime: "6 Min Read",
  },
];

export default function AboutTrading() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-[#0D0D0D]">
      <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
        <h1
          className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]"
          data-aos="fade-up"
        >
          Learn About Trading
        </h1>

        <div
          className="pb-6 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-5"
          data-aos="fade-up"
        >
          <img alt="" className="w-full" src={ABOUT_IMAGE} />
          <div className="flex-1">
            <h1
              className="font-medium text-xl lg:text-3xl text-[#00F5FF] pb-3 lg:pb-6"
              data-aos="fade-up"
            >
              Master the Markets: Trade Smarter with T-Stackz Rackz
            </h1>
            <p
              className="font-normal text-sm md:text-base text-[#C0C0C0] pb-5 lg:pb-8"
              data-aos="fade-up"
            >
              Unlock the secrets of successful trading with T-Stackz Rackz!
              Whether your new to stocks, options, or crypto, or an experienced
              trader looking for an edge, our platform provides AI-powered
              insights, real-time alerts, and expert strategies to help you
              trade smarter and profit faster. Watch this video to see how
              T-Stackz Rackz can transform your trading journey!
            </p>
            <button
              className="flex justify-center items-center gap-3 text-[#FFFFFF] text-xs md:text-base font-normal py-2 md:py-3 px-4 md:px-10 bg-[#FD5163] rounded-xl"
              data-aos="fade-up"
            >
              Watch Video <GoArrowRight />
            </button>
          </div>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 ">
          {cards.map((card, index) => (
            <div key={index} data-aos="fade-up">
              <AboutTradingCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
