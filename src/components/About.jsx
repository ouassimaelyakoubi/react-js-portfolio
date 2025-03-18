import React from 'react';
import imageAbout from '../assets/imageInfo.png';
import cv from '../assets/Ouassima El Yakoubi.pdf';
const About = () => {
  const info=[
    {text:"Years experience",count:"01"},
    {text:"Completed Projects",count:"09"},
    {text:"Companies",count:"01"},

  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-[#E08FBA]'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
        <div className="p-2 ">
          <div className='text-gray-400 my-3'>
          <p className="text-justify leading-7 w-11/12 mx-auto">
          As a Frontend Developer I take great pride in building pixel-perfect web applications. Drawing has always been a personal passion of mine, and I find the process of translating Figma designs into functional, beautifully crafted apps to be incredibly rewarding. The attention to detail and the joy of seeing a design come to life in code excites me every time. I’m committed to creating intuitive, user-centric experiences that not only look great but also perform seamlessly across devices. Eager to contribute to a collaborative team, I continuously seek opportunities to learn and grow as a frontend developer.
          </p>
          <div className='flex mt-10 items-center gap-7'>
            {
              info?.map(content=>(
                <div key={content.text}>
                  <h3 className='md:text-4xl text-2xl font-semibold text-white' >{content.count}</h3>
                  <span className='text-[#E08FBA]'>+</span>{" "}
                  <span className='md:text-base text-xs'>{content.text}</span>
                </div>
              ))
            }
          </div>
          <br/>
          <br/>
          <a href={cv} download={cv} >
          <button className='btn-primary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#e084b3] duration-300'>Download CV</button>
          </a>
          </div>
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justiy-center items-center'>
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm imageAbout">
              <img src={imageAbout} alt="" className="w-full object-cover bg-[#E08FBA] rounded-xl"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About