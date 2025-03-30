import React from "react";

interface CardProps {
  image: string;
  title: string;
  authorImage: string;
  authorName: string;
  date: string;
  readTime: string;
}

const AboutTradingCard: React.FC<CardProps> = ({
  image,
  title,
  authorImage,
  authorName,
  // date,
  // readTime,
}) => {
  return (
    <div className="">
      <img
        alt={title}
        className="rounded-xl w-full "
        src={image}
        draggable="false"
      />
      <div className="bg-[#222629] p-4 -mt-5 rounded-lg">
        <h2 className="text-lg font-semibold mt-5 text-[#00F5FF]">{title}</h2>

        <div className="flex items-center mt-3">
          <img
            alt={authorName}
            className="w-10 h-10 rounded-full"
            src={authorImage}
            draggable="false"
          />
          <div className="ml-3">
            <p className="font-semibold text-[#00F5FF]">{authorName}</p>
            <div className=" flex items-center gap-5">
              {/* <p className="text-[#C0C0C0] text-sm ">{date} </p> */}
              <div className="flex items-center gap-1">
                {/* <p className="text-[#C0C0C0] text-xl ">• </p> */}
                {/* <p className="text-[#C0C0C0] text-sm ">{readTime}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTradingCard;
