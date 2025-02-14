/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import { AiOutlineSafety } from "react-icons/ai";
const SecurityAndPriorityCard = () => {
    return (
        <div className="bg-[#222629] rounded-3xl ">
            <div className="py-[39px] md:py-[42px] px-[16px] md:px-[32px] flex justify-center items-center space-x-4 md:space-x-7">
            <div>
            <AiOutlineSafety className="text-[#00F5FF] text-4xl md:text-6xl" />
            </div>
            <div>
                <h1 className="text-[#00F5FF] text-sm md:text-2xl font-medium">End-to-End Encryption</h1>
                <p className="text-[#C0C0C0] text-sm md:text-base font-normal">Transactions and personal data are fully encrypted.</p>
            </div>
            </div>
        </div>
    );
};

export default SecurityAndPriorityCard;