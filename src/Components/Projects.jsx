import React from "react";
import portfolio from "../assets/portfolio.png";
import hackernews from "../assets/hackernews.png";
import fitnessclub from "../assets/fitnessclub.png";
import mui from "../assets/mui.png";
import bshadow from "../assets/bshadow.png";
import redwine from "../assets/redwine.png";
// import counter from "../assets/counter.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: portfolio,
      demoLink: "#",
    },
    {
      id: 2,
      image: hackernews,
      demoLink: "#",
    },
    {
      id: 3,
      image: fitnessclub,
      demoLink: "https://tuljabhavanifitnessclub.netlify.app/",
    },
    {
      id: 4,
      image: redwine,
      demoLink: "https://tailwindthemechanger.netlify.app/",
    },
    {
      id: 5,
      image: mui,
      demoLink: "https://reactmuidesign.netlify.app",
    },
    {
      id: 6,
      image: bshadow,
      demoLink: "https://bshadowgenerator.netlify.app/",
    },
    // {
    //   id: 7,
    //   image: counter,
    //   demoLink: "https://pranavcounter.netlify.app/",
    //   codeLink: "https://github.com/p-sabnis07/counter_app"
    // }
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demoLink, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={demoLink} target="_blank">
                  <img
                    src={image}
                    alt="project-images"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    {" "}
                    <a href={demoLink} target="_blank">
                      Demo
                    </a>
                  </button>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    <a href={codeLink} target="_blank">
                      Code
                    </a>
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
