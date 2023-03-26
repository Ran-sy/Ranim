import React from "react";
import SkillCard from "./subcomponents/skillCard";

function Skills() {
  const skillItmes = [
    { id: 1, imgSrc: "/Ranim/assets/skills/html.png", name: "HTML" },
    { id: 2, imgSrc: "/Ranim/assets/skills/css.png", name: "CSS" },
    {
      id: 3,
      imgSrc: "/Ranim/assets/skills/tailwind.png",
      name: "Tailwind",
    },
    {
      id: 4,
      imgSrc: "/Ranim/assets/skills/bootstrap.png",
      name: "Bootstrap",
    },
    { id: 5, imgSrc: "/Ranim/assets/skills/flutter.png", name: "Flutter" },
    {
      id: 6,
      imgSrc: "/Ranim/assets/skills/firebase.png",
      name: "Firebase",
    },
    { id: 7, imgSrc: "/Ranim/assets/skills/jquery.png", name: "JQuery" },
    { id: 8, imgSrc: "/Ranim/assets/skills/js.png", name: "JavaScript" },
    { id: 9, imgSrc: "/Ranim/assets/skills/react.png", name: "React.JS" },
    { id: 10, imgSrc: "/Ranim/assets/skills/next.png", name: "Next.JS" },
    { id: 11, imgSrc: "/Ranim/assets/skills/nodejs.png", name: "Node.JS" },
    { id: 12, imgSrc: "/Ranim/assets/skills/github.png", name: "Github" },
    { id: 13, imgSrc: "/Ranim/assets/skills/uiux.png", name: "UI / UX" },
    { id: 14, imgSrc: "/Ranim/assets/skills/redux.png", name: "Redux" },
    {
      id: 15,
      imgSrc: "/Ranim/assets/skills/photoshop.png",
      name: "Photoshop",
    },
    {
      id: 16,
      imgSrc: "/Ranim/assets/skills/moffice.png",
      name: "M-Office",
    },
  ];
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#45a29e] font-bold">
          Skills
        </p>
        <h2 className="py-4 indent-2">What I Can Do...</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-4">
          {skillItmes.map((item) => (
            <SkillCard key={item.id} imgSrc={item.imgSrc} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
