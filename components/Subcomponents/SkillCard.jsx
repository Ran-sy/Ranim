import React from "react";
import Image from "next/image";

function SkillCard(props) {
  return (
    <div className="p-6 bg-gray-200 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className=" m-auto">
          <Image
            src={props.imgSrc}
            alt={props.name}
            width="45"
            height="45"
            className="w-auto h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
