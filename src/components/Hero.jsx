import React from 'react';
import hero from "../assets/hero.png";
const Hero = () => {
  const social_media=[
    'logo-linkedin',
    'logo-github',
    'logo-facebook',
  ]
  return (
    <section id="home" className="min-h-screen flex py-10 px-2 md:px-0 md:flex-row flex-col items-center">
        <div className='flex-1 flex items-center justify-center h-full'>
          <img src={hero} alt="" className='h-full object-cover origin-center  md:w-9/12 '/>
        </div>
        <div className="flex-1">
          <div className='md:text-left text-center'>
            <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
              <span className="text-[#E08FBA] md:text-6xl text-5xl">
                Hello !
                <br/>
              </span>
              My Name is <span>Ouassima EL YAKOUBI</span>
            </h1>
            <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Full Stack Developer </h4>
            <button className="btn-primary mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#e084b3] duration-300" onClick={() => {window.location.href = `mailto:elyakoubi.ouassima@gmail.com`}}>Contact Me</button>
            <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-5'>
              {
                social_media?.map(icon=>(
                  <div key={icon} className='text-gray-600 hover:text-white cursor-pointer '>
                    <ion-icon name={icon} onClick={() => {
                        let url;
                        switch (icon) {
                          case 'logo-linkedin':
                            url = `https://www.linkedin.com/in/ouassima-e-9a3342200`;
                            break;
                          case 'logo-github':
                            url = 'https://github.com/ouassimaELYAKOUBI'; // Replace with your username
                            break;
                          case 'logo-facebook':
                            url = 'https://www.facebook.com/quoi.deneuf.7393';
                            break;               
                          default:
                            url = '#'; // Handle unknown icons (optional)
                        }
                        window.open(url, '_blank');
          }}></ion-icon>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
    </section>
  )
}

export default Hero