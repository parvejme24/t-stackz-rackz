import { useEffect } from "react";
import AOS from "aos";

import USERPROFILE from "../../../../public/images/user_profile.png";
import B1 from "../../../../public/images/b1.png";

import SuccessStoriesCard from "./SuccessStoriesCard";
import "aos/dist/aos.css";

interface SuccessStory {
  name: string;
  profilePic: string;
  image?: string;
  text: string;
}

const SuccessStoriesList1: SuccessStory[] = [
  {
    name: "James Anderson",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s",
    text: "TradeSync Pro has revolutionized my trading strategy. The AI-driven alerts are incredibly accurate, helping me secure a huge win on Ethereum and earn $15,000 in just a few days. The platform is user-friendly, making it perfect for both beginners and experienced traders. I love how it simplifies market analysis, providing real-time insights that give me a competitive edge. With TradeSync Pro, I trade with more confidence and precision than ever before. It’s truly a game-changer for anyone looking to maximize their profits effortlessly!",
  },
  {
    name: "Michael Johnson",
    profilePic: USERPROFILE,
    image:
      "https://images.pexels.com/photos/7567537/pexels-photo-7567537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I’ve never been so confident in my trades before! With TradeSync Pro, I get real-time signals that help me maximize profits. Within just one month, my portfolio saw a 40% increase, and I feel more in control than ever!",
  },
  {
    name: "William Thompson",
    profilePic:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    text: "I was skeptical at first, but TradeSync Pro proved me wrong. Their AI-generated trading insights allowed me to triple my investments within a short time. I no longer need to spend hours analyzing charts—it does all the hard work for me!",
  },
];

const SuccessStoriesList2: SuccessStory[] = [
  {
    name: "Henry Walker",
    profilePic:
      "https://media.istockphoto.com/id/1072686716/photo/portrait-of-a-mature-men-smiling-at-the-camera-at-home.jpg?s=612x612&w=0&k=20&c=xEANKEf4UfjuxVG1VxIv6z_hOv4siJ96KobEYGh4u1I=",
    text: "TradeSync Pro is a game-changer! I used to struggle with knowing when to enter and exit trades, but their alerts have made it incredibly simple. Now, my trading is much more efficient, and my profits have skyrocketed!",
  },
  {
    name: "Jacob Lewis",
    profilePic:
      "https://media.istockphoto.com/id/1080820568/photo/the-smile-to-beat-all-smiles.jpg?s=612x612&w=0&k=20&c=IR5NjAXCUH2a5lriy4NE5VLwbsOeU9MgYnf9YBqFO1E=",
    image:
      "https://images.pexels.com/photos/7567230/pexels-photo-7567230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "The accuracy of TradeSync Pro’s signals is unreal! I’ve been able to consistently make profitable trades without second-guessing myself. This platform has truly given me an edge in the market.",
  },
  {
    name: "Daniel Martinez",
    profilePic:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    image:
      "https://images.pexels.com/photos/7267598/pexels-photo-7267598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Since using TradeSync Pro, I’ve gained so much confidence in my trading decisions. The AI-driven alerts are incredibly precise, and the platform is easy to navigate. I highly recommend it to anyone serious about trading!",
  },
];

const SuccessStoriesList3: SuccessStory[] = [
  {
    name: "Matthew Roberts",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&s",
    image: B1,
    text: "TradeSync Pro delivers exactly what it promises. Their fast and accurate trading alerts allowed me to capitalize on market movements, making $20,000 in just a few weeks. If you want an edge in trading, this is the platform for you!",
  },
  {
    name: "Alexander Scott",
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4JV-OvetWmr2zyyepxjCxKu-mMGf8dGyPJHzmde1qf61KMJoaYXINVHMsRjuR6KBRsU&usqp=CAU",
    text: "I struggled with consistency in trading until I discovered TradeSync Pro. The AI-powered signals are highly accurate, eliminating wasted time on bad trades. Since using it, my profits have skyrocketed, and I feel more confident in my decisions. The platform’s real-time insights and easy-to-use interface make trading seamless, even for beginners. I no longer second-guess my moves, knowing I have a reliable system guiding me. TradeSync Pro has truly transformed my trading experience and helped me achieve consistent success!",
  },
  {
    name: "Olivia Bennett",
    profilePic:
      "https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg",
    text: "TradeSync Pro has made trading so much easier for me. The insights and alerts give me the confidence to execute trades at the perfect moment. My returns have never been better, and I finally feel in control of my investments!",
  },
];

export default function SuccessStories() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div>
      <div className="bg-[#0D0D0D]">
        <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
          <div data-aos="fade-up">
            <h1 className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]">
              Our Success Stories
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 ">
            <div className="space-y-3">
              {SuccessStoriesList1.map((item, index) => (
                <div key={index} data-aos="fade-up">
                  <SuccessStoriesCard {...item} />
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {SuccessStoriesList2.map((item, index) => (
                <div key={index} data-aos="fade-up">
                  <SuccessStoriesCard {...item} />
                </div>
              ))}
            </div>
            <div className="space-y-3 hidden md:block">
              {SuccessStoriesList3.map((item, index) => (
                <div key={index} data-aos="fade-up">
                  <SuccessStoriesCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
