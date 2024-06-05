import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/projects/pfeApp.png";
import project2 from "../assets/projects/startUps.png";
import project3 from "../assets/projects/creon.png";
import project_person from "../assets/projects/project_person.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "PFE managment App",
      github_link: "https://github.com/ouassimaELYAKOUBI/springboot-angular-pfe-app",
      live_link: "https://springboot-angular-pfe-app.vercel.app",
    },
    {
      img: project2,
      name: "Start-ups App",
      github_link: "",
      live_link: "https://digital-front-iota.vercel.app",
    },
    {
      img: project3,
      name: "frontend Assignment App",
      github_link: "https://github.com/ouassimaELYAKOUBI/front-end-assignment-app",
      live_link: "https://front-end-assignment-app.vercel.app",
    }
    
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-[#E08FBA]">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex  max-w-6xl  gap-9 gap-y-9 px-5 mx-auto items-center relative">
      <div className="imageProject lg:w-96 lg:block hidden h-full relative sm:w-10/12 w-11/12 max-w-sm">
          <img src={project_person} alt="" className="bg-[#E08FBA] rounded-xl -rotate-12"/>
        </div>
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg " />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-[#E08FBA] bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-[#E08FBA] bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </div>
    </section>
  );
};

export default Project;