import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll.jsx";
import information from "@/lib/details";
import { BackgroundBeams }  from "@/components/ui/background-beams.jsx";
import TextEncryptionEffect from "@/components/text-encryption-effect.jsx";


export default function Profile() {
  return (
    (<div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
    <BackgroundBeams />
      <MacbookScroll
        title={
          <p className="text-5xl text-center">
            <span className="font-bold "> {information.name}</span> 
            <br className="block md:hidden"/>
            <TextEncryptionEffect text={information.occupation} duration={500} customClasses={"md:pl-3 font-semibold text-gray-500"}/>
          </p>
        }
        personalWriteUp={information.introduction}
        src={`/vs-code.png`}
        alt="vscode image"
        showGradient={false} />
    </div>)
  );
}