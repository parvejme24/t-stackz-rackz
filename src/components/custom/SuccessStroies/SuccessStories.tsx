import SuccessStoriesCard from "./SuccessStoriesCard";

import USERPROFILE from "../../../../public/images/user_profile.png";
import B1 from "../../../../public/images/b1.png";

interface SuccessStory {
  name: string;
  profilePic: string;
  image?: string;
  text: string;
}

const SuccessStoriesList1: SuccessStory[] = [
  {
    name: "Alex Carter",
    profilePic: USERPROFILE,
    // image: B1,
    text: "T-Stackz Rackz gives me the speed and precision I need. Their real-time alerts helped me catch a breakout trade on Bitcoin at just the right moment, allowing me to make $12,000 in just two days. The best part? It’s all in one sleek platform that simplifies trading for both beginners and pros!",
  },
  {
    name: "Samantha Lee",
    profilePic: USERPROFILE,
    image:
      "https://images.pexels.com/photos/7567537/pexels-photo-7567537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I’ve never seen such accuracy in trading alerts before! T-Stackz Rackz provided me with real-time insights that helped me optimize my trading strategy. Within a week, my portfolio grew by 35%, and I finally feel confident making trades on my own. Highly recommended!",
  },
  {
    name: "David Brown",
    profilePic: USERPROFILE,
    // image: B1,
    text: "I doubled my investments in just a week with the help of T-Stackz Rackz. Their AI-powered trading signals were spot on, and I was able to execute profitable trades without spending hours analyzing charts. If you're serious about trading, this platform is a must-have.",
  },
];

const SuccessStoriesList2: SuccessStory[] = [
  {
    name: "Samantha Lee",
    profilePic: USERPROFILE,
    // image: B1,
    text: "I’ve never seen such accuracy in trading alerts before! T-Stackz Rackz provided me with real-time insights that helped me optimize my trading strategy. Within a week, my portfolio grew by 35%, and I finally feel confident making trades on my own. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    profilePic: USERPROFILE,
    image:
      "https://images.pexels.com/photos/7567230/pexels-photo-7567230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "This platform is a game-changer for crypto traders. I used to struggle with making the right trade at the right time, but T-Stackz Rackz changed everything. Their detailed analytics, real-time alerts, and user-friendly interface made it easy for me to navigate the crypto market with confidence.",
  },
  {
    name: "Jessica White",
    profilePic: USERPROFILE,
    image:
      "https://images.pexels.com/photos/7267598/pexels-photo-7267598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "",
  },
];

const SuccessStoriesList3: SuccessStory[] = [
  {
    name: "Alex Carter",
    profilePic: USERPROFILE,
    image: B1,
    text: "T-Stackz Rackz gives me the speed and precision I need. Their real-time alerts helped me catch a breakout trade on Bitcoin at just the right moment, allowing me to make $12,000 in just two days. The best part? It’s all in one sleek platform that simplifies trading for both beginners and pros!",
  },
  {
    name: "David Brown",
    profilePic: USERPROFILE,
    // image: B1,
    text: "I doubled my investments in just a week with the help of T-Stackz Rackz. Their AI-powered trading signals were spot on, and I was able to execute profitable trades without spending hours analyzing charts. If you're serious about trading, this platform is a must-have.",
  },
  {
    name: "Samantha Lee",
    profilePic: USERPROFILE,
    // image: B1,
    text: "I’ve never seen such accuracy in trading alerts before! T-Stackz Rackz provided me with real-time insights that helped me optimize my trading strategy. Within a week, my portfolio grew by 35%, and I finally feel confident making trades on my own. Highly recommended!",
  },
];

export default function SuccessStories() {
  return (
    <div>
      <div className="bg-[#0D0D0D]">
        <div className="container mx-auto max-w-7xl px-6 py-5 md:py-20">
          <h1 className="text-center font-semibold text-base md:text-4xl pb-6 md:pb-10 text-[#C0C0C0]">
            Our Success Stories
          </h1>
          <div className="flex justify-between items-center gap-3 ">
            <div className="space-y-3">
              {SuccessStoriesList1.map((item, index) => (
                <SuccessStoriesCard key={index} {...item} />
              ))}
            </div>

            <div className="space-y-3">
              {SuccessStoriesList2.map((item, index) => (
                <SuccessStoriesCard key={index} {...item} />
              ))}
            </div>
            <div className="space-y-3 hidden md:block">
              {SuccessStoriesList3.map((item, index) => (
                <SuccessStoriesCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
