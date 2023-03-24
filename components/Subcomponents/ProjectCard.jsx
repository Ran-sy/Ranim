import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard(props) {
  return (
    <div className="relative h-auto max-h-56 max-w-sm flex items-center justify-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#1f2833] to-[#0b0c10] ease-linear duration-150">
      <Image
        src={props.imgSrc}
        alt={props.name}
        priority={true}
        width={400}
        height={200}
        className="rounded-xl max-h-52 p-4 group-hover:opacity-10 ease-linear duration-150 max-w-full"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#fff] tracking-wider text-center">
          {props.name}
        </h3>
        <p className="pb-4 pt-2 text-[#fff] text-center">{props.using}</p>
        <Link href={props.infoLink}>
          <p className="text-center py-3 rounded-lg bg-[#66fcf1] text-[#1f2833] shadow-md shadow-black font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
