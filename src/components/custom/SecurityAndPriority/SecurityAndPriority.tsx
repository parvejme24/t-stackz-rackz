/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import SecurityAndPriorityCard from "./SecurityAndPriorityCard";

const SecurityAndPriority = () => {
  return (
      <div className="w-11/12 md:w-10/12 mx-auto py-10">
         {/* security and priority  Hading */}
         <div>
          <h1 className="text-center font-semibold text-base md:text-4xl  text-[#C0C0C0] pb-4 md:pb-6">
          Your Security, Our Priority
        </h1>
        <p className=" text-xs md:text-base font-normal text-center pb-6 md:pb-10">We use cutting-edge technology to keep your funds and data safe. Trade with confidence knowing your assets are fully protected.</p>
         </div>
         {/* security and priority  Card */}
         <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
           <SecurityAndPriorityCard/>
           <SecurityAndPriorityCard/>
           <SecurityAndPriorityCard/>
           <SecurityAndPriorityCard/>
         </div>
      </div>
    
  );
};

export default SecurityAndPriority;