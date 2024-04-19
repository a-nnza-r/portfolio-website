import React from "react";
import information from "@/lib/details.js";

function PersonalWriteUp() {
  return (
    <div className="flex flex-col items-center m-5 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full bg-gray-100 flex flex-col items-center rounded-lg overflow-hidden shadow-lg p-3 sm:p-1">
        <h1 className="text-3xl md:text-2xl sm:text-xl text-center text-gray-800 mb-1">
          Hello! I'm {information.name}
        </h1>
        <p className="text-center text-gray-600 text-lg md:text-base sm:text-sm w-2/3 md:w-3/4 sm:w-5/6">
          {information.introduction}
        </p>
      </div>
    </div>
  );
}

export default PersonalWriteUp;
