import React from "react";
import ProjectCard from "./subcomponents/ProjectCard";

function Projects() {
  const projectItems = [
    {
      id: 1,
      imgSrc: "/../public/assets/projects/student-store.jpg",
      name: "Student Store",
      description:
        "I worked on this app as a QA Engineer as well as a flutter developer, I've helped fix bugs and adding new features to inhance the ux of the site, I also contribute in the onboarding process of the fresh employee",
      using: "Flutter / MVVM / QA",
      infoLink: "/studentStore",
      codeLink:
        "https://play.google.com/store/apps/details?id=com.nbs.StudentStore",
      demoLink:
        "https://play.google.com/store/apps/details?id=com.nbs.StudentStore",
    },
    {
      id: 2,
      imgSrc: "/../public/assets/projects/ultimate-chat.jpg",
      name: "Ultimate Chat",
      description:
        "Online chat where the user can sign in and enter the chat using his google email address, It was made using firebase, firestore, and javascript, with simple design that is compatable with mobiles",
      using: "Javascript / Firebase",
      infoLink: "/ultimateChat",
      codeLink: "https://github.com/Ran-sy/ultimate-chat/",
      demoLink: "https://ran-sy.github.io/ultimate-chat/",
    },
    {
      id: 3,
      imgSrc: "/../public/assets/projects/simple-calculator.jpg",
      name: "Simple Calculator",
      description:
        "Enter the first value on the top, and the second on the bottom, and then press the wanted operation, this will result that the bottom box will have the result of the operation, and it will be shown as will in the result place, and the top box to be empty and ready for the next operation",
      using: "React-JS",
      infoLink: "/simpleCalculator",
      codeLink: "https://github.com/Ran-sy/extremely-simple-calculator",
      demoLink: "https://ran-sy.github.io/extremely-simple-calculator/",
    },
    {
      id: 4,
      imgSrc: "/../public/assets/projects/game-center.jpg",
      name: "Game Center",
      description:
        "Number of games that you can try to play them now, they are simple games, like: memory, and they were fun to make and test",
      using: "Javascript",
      infoLink: "/gameCenter",
      codeLink: "https://github.com/Ran-sy/game-center",
      demoLink: "https://ran-sy.github.io/game-center/",
    },
    {
      id: 5,
      imgSrc: "/../public/assets/projects/mini-store.jpg",
      name: "Mini Store",
      description:
        "Mini store will show you products with pagination, You can add products to the cart, as well as removing them, you can also confirm the shopping process, it was made only html, css, and js ",
      using: "Javascript",
      infoLink: "/miniStore",
      codeLink: "https://github.com/Ran-sy/mini-store",
      demoLink: "https://ran-sy.github.io/mini-store/",
    },
    {
      id: 6,
      imgSrc: "/../public/assets/projects/website1.jpg",
      name: "First Website",
      description:
        "It was my first project that i made while attending the web design online course",
      using: "HTML - CSS",
      infoLink: "/website1",
      codeLink: "https://github.com/Ran-sy/website1",
      demoLink: "https://ran-sy.github.io/website1/",
    },
    {
      id: 7,
      imgSrc: "/../public/assets/projects/website2.jpg",
      name: "Second Website",
      description:
        "It was my second project that i made while attending the web design online course",
      using: "HTML - CSS - BOOTSTRAP",
      infoLink: "/website2",
      codeLink: "https://github.com/Ran-sy/website2",
      demoLink: "https://ran-sy.github.io/website2/",
    },
    {
      id: 8,
      imgSrc: "/../public/assets/projects/website3.jpg",
      name: "Third Website",
      description:
        "It was my third project that i made while attending the web design online course",
      using: "HTML - CSS - BOOTSTRAP",
      infoLink: "/webstie3",
      codeLink: "https://github.com/Ran-sy/website3",
      demoLink: "https://ran-sy.github.io/website3/",
    },
    {
      id: 9,
      imgSrc: "/../public/assets/projects/animal-race.jpg",
      name: "Animal Race",
      description:
        "I've made this during a course i took and it was a lot of fun to make it and watch it, i know i could have done other interesting patterns but i wanted something unique and joyfull",
      using: "CSS / Animation",
      infoLink: "/animalRace",
      codeLink: "https://github.com/Ran-sy/animals-race-animation",
      demoLink: "https://ran-sy.github.io/animals-race-animation/",
    },
  ];
  return (
    <div id="projects" className="w-full">
      <div className="max-w-6xl mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase font-bold text-[#45a29e]">
          projects
        </p>
        <h2 className="py-4 indent-2">What I've Built...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectItems.map((item) => (
            <ProjectCard
              key={item.id}
              imgSrc={item.imgSrc}
              name={item.name}
              description={item.description}
              using={item.using}
              infoLink={item.infoLink}
              demoLink={item.demoLink}
              codeLink={item.codeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
