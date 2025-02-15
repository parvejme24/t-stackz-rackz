import { ReactNode } from "react";

interface SecurityAndPriorityCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function SecurityAndPriorityCard({
  title,
  description,
  icon,
}: SecurityAndPriorityCardProps) {
  return (
    <div className="bg-[#222629] rounded-3xl">
      <div className="py-[39px] md:py-[42px] px-[16px] md:px-[32px] flex items-start space-x-4 md:space-x-7">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex flex-col">
          <h1 className="text-[#00F5FF] text-sm md:text-2xl font-medium">
            {title}
          </h1>
          <p className="text-[#C0C0C0] text-sm md:text-base font-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
