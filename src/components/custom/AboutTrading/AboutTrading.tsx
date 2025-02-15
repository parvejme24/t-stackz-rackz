/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { GoArrowRight } from "react-icons/go";

const AboutTrading = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-5 md:py-20">
     <h1 className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]">
     Learn About Trading
      </h1>
      <div className="pb-6 md:pb-10 md:flex justify-center items-center gap-6">
        <img className="flex-1" src="../../../../public/Rectangle 20.png" alt="" />
        <div className="flex-1">
          <h1 className="font-medium text-xl md:text-3xl text-[#00F5FF] pb-6">Master the Markets: Trade Smarter with T-Stackz Rackz</h1>
          <p className="font-normal text-sm md:text-base text-[#C0C0C0] pb-8">Unlock the secrets of successful trading with T-Stackz Rackz!  Whether you're new to stocks, options, or crypto, or an experienced trader looking for an edge, our platform provides AI-powered insights, real-time alerts, and expert strategies to help you trade smarter and profit faster. Watch this video to see how T-Stackz Rackz can transform your trading journey!</p>
          <button className="flex justify-center items-center gap-3 text-[#FFFFFF] text-xs md:text-base font-normal py-2 md:py-3 px-4 md:px-10 bg-[#FD5163] rounded-xl">Watch Video <GoArrowRight  /></button>
        </div>
      </div>
    </div>
  );
};

export default AboutTrading;