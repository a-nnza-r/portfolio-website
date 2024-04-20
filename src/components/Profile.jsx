import React from "react";
import information from "@/lib/details";
import Socials from "@/components/Socials.jsx";

function Profile() {
  return (
    <div className="overflow-hidden shadow-lg justify-center gap-0 m-0 b-0 p-0">
      <div className="bg-gray-100 flex flex-col md:flex-row w-full">
        <img
          src="me.png"
          alt={information.name}
          className="max-w-full max-h-96 object-cover object-bottom block mx-auto"
        />

        <div className="flex-grow flex-shrink-0 p-10 flex flex-col justify-between">
          <div>
            <div className="text-3xl text-gray-800 font-bold">
              {information.name}
            </div>
            <div className="text-xl text-gray-600 mt-2 mb-5">
              {information.occupation}
            </div>
          </div>
          <div className="flex-grow flex-shrink flex flex-col justify-between">
            <div className="text-lg text-gray-800">
              <span className="font-bold">Student Email: </span>
              {information.studentEmail}
            </div>
            <div className="text-lg text-gray-800">
              <span className="font-bold">Email: </span>
              {information.email}
            </div>
            <div className="text-lg text-gray-800">
              <span className="font-bold">Date of Birth: </span>
              {information.dob}
            </div>
          </div>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Profile;
