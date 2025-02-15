/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { Accordion, AccordionItem } from "@heroui/accordion";

const faqs = [
  {
    question: <h1 className="font-medium text-sm md:text-xl text-[#00f5ff] ">What is T-Stackz Rackz?</h1>,
    answer:
      <p className=" text-xs md:text-base font-medium text-[#C0C0C0]">T-Stackz Rackz is a high-performance trading platform designed for stocks, options, and crypto (BTC/ETH), offering real-time alerts, AI-driven insights, and advanced trading tools to help traders maximize profits.,</p>
  },
  {
    question: <h1 className="font-medium text-sm md:text-xl text-[#00f5ff] ">Is T-Stackz Rackz suitable for beginners?</h1>,
    answer:
    <p className="text-xs md:text-base font-medium text-[#C0C0C0]">Yes, it provides intuitive tools and learning resources to help beginners.</p>
  },
  {
    question: <h1 className="font-medium text-sm md:text-xl text-[#00f5ff] ">Is it safe to use?</h1>,
    answer:
    <p className="text-xs md:text-base font-medium text-[#C0C0C0]">Yes, our platform is built with top-notch security measures to protect users' data and assets.</p>
  },
  {
    question: <h1 className="font-medium text-sm md:text-xl text-[#00f5ff] ">How can I learn Trading?</h1>,
    answer:
    <p className="text-xs md:text-base font-medium text-[#C0C0C0]">We offer tutorials, webinars, and AI-driven insights to help you learn trading efficiently.</p>
  },
  {

    question: <h1 className="font-medium text-sm md:text-xl text-[#00f5ff] ">How do I sign up?</h1>,
    answer:
    <p className="text-xs md:text-base font-medium text-[#C0C0C0]">Click the 'Join Now' button and complete the registration process. You'll get access to trading tools, real-time alerts, and market insights right away.</p>
  },
  {
    question: <h1 className="font-medium text-sm md:text-xl text-[#00f5ff] ">How do I sign up?</h1>,
    answer:
    <p className="text-xs md:text-base font-medium text-[#C0C0C0]">Click the 'Join Now' button and complete the registration process. You'll get access to trading tools, real-time alerts, and market insights right away.</p>
  },
];

export default function FAQSection() {
  return (
    <div className=" md:bg-gradient-to-br from-[#0D1515] to-[#0C1B1B]">
    <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
      <h1 className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {faqs.slice(0, 3).map((faq, index) => (
            <Accordion key={index} className="bg-[#222629] py-3 pl-4 rounded-xl  border-[0.5px] border-[#05abb1]">
              <AccordionItem title={faq.question}  >
                <p className="text-gray-300 p-2">{faq.answer}</p>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="space-y-4">
          {faqs.slice(3).map((faq, index) => (
            <Accordion key={index + 3} className="bg-[#222629] py-3 pl-4 rounded-xl  border-[0.5px] border-[#05abb1]">
              <AccordionItem title={faq.question} >
                
                <p className=" p-3">{faq.answer}</p>
                
                
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
