import React from "react";
import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="flex gap-10 justify-center">
      <div className="border-white border-2 rounded-full h-[14vh] w-[26vw] flex items-center justify-center hover:border-[#D3FD50] hover:text-[#D3FD50] text-white pt-3">
        <Link
          to="/products"
          className="font-[font-2] text-[7rem]"
        >
          WORK
        </Link>
      </div>
      <div className="border-white border-2 rounded-full h-[14vh] w-[35vw] flex items-center justify-center text-white hover:border-[#D3FD50] hover:text-[#D3FD50] pt-3">
         <Link
        to="/agency"
        className="font-[font-2] text-[7rem]"
      >
        AGENCY
      </Link>
      </div>
     
    </div>
  );
};

export default BottomText;
