import bgImage from "../../../../public/images/whyChoose.png";

export default function WhyChoose() {
  return (
    <div id="features" className="bg-[#0D0D0D]">
      <div className="container mx-auto max-w-7xl px-6 flex-grow">
        <div
          className="w-full h-[500px] sm:h-[700px] md:h-[900px] lg:h-[1000px] bg-cover sm:bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
      </div>
    </div>
  );
}
