/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { AiOutlineSafety } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { IoFingerPrint } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

import SecurityAndPriorityCard from "./SecurityAndPriorityCard";
const securityData = [
  {
    id: 1,
    title: "End-to-End Encryption",
    description: "Transactions and personal data are fully encrypted.",
    icon: <AiOutlineSafety className="text-[#00F5FF] text-5xl md:text-6xl" />,
  },
  {
    id: 2,
    title: "Real-Time Fraud Detection",
    description: "AI-powered security monitors for suspicious activity.",
    icon: <FaUserShield className="text-[#00F5FF] text-5xl md:text-6xl" />,
  },
  {
    id: 3,
    title: "Two-Factor Authentication",
    description: "Extra security for login and withdrawals.",
    icon: <IoFingerPrint className="text-[#00F5FF] text-5xl md:text-6xl" />,
  },
  {
    id: 4,
    title: "Regular Security Audits",
    description: "Continuous audits ensure platform safety.",
    icon: <MdOutlineSecurity className="text-[#00F5FF] text-5xl md:text-6xl" />,
  },
];

const SecurityAndPriority = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
        {/* security and priority  Hading */}
        <div>
          <h1 className="text-center font-semibold text-base md:text-4xl  text-[#C0C0C0] pb-4 md:pb-6">
            Your Security, Our Priority
          </h1>
          <p className=" text-xs md:text-base font-normal text-center pb-6 md:pb-10 text-[#B3B3B3]">
            We use cutting-edge technology to keep your funds and data safe.
            Trade with confidence knowing your assets are fully protected.
          </p>
        </div>
        {/* security and priority  Card */}
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {securityData.map((item) => (
            <SecurityAndPriorityCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecurityAndPriority;
