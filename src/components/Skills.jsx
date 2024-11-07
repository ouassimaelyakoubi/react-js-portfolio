import React from 'react'
import { FaGitAlt } from "react-icons/fa";
import img from '../assets/image.png';
const Skills = () => {
  const skills=[
    {
      logo:'logo-html5',
      level:'Advanced', 
      count:89,
  },
  {
    logo:'logo-css3',
    level:'Advanced', 
    count:86,
  },
  {
    logo:'logo-javascript',
    level:'IntermedIate', 
    count:70,
  },
  {
    logo:'logo-angular',
    level:'Intermediate', 
    count:60,
  },
  {
    logo:'logo-react',
    level:'Intermediate', 
    count:70,
  },
  {
    logo:'logo-nodejs',
    level:'Intermediate', 
    count:30,
  },
  {
    logo:'cafe-outline',
    level:'Intermediate', 
    count:70,
  },
  {
    logo:'leaf-outline',
    level:'Intermediate', 
    count:50,
  },
  {
    logo:"git-branch-outline",
    level:'Advanced', 
    count:80,
  },
  {
    logo:"logo-github",
    level:'Advanced', 
    count:80,
  },
 
]

  return (
    <section id="skills" className='py-10 bg-gray-800 relative'>
      <div className="mt-8 text-gray-100 text-center">
        <div className='text-4xl font-semibold'>
          <h3>My <span className='text-[#E08FBA]'>Skills</span></h3>
          <p className='text-gray-400 mt-3 text-lg'>My knowledge</p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {
              skills?.map((skill,i)=>(
                <div key={i} className='border-2 group border-[#E08FBA] relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
              <div style={{ background:`conic-gradient(rgb(224, 143, 186) ${skill.count}%, #ddd ${skill.count}%)`}} className='w-32 h-32 flex items-center justify-center rounded-full'>
                <div className="text-6xl w-28 h-28 rounded-full bg-gray-900 flex items-center justify-center group-hover:text-[#E08FBA]">
                  <ion-icon name={skill.logo}></ion-icon>
      
                </div>
              </div>
              <p className='text-xl mt-3'>{skill.level}</p>
            </div>
              ))
            }
          </div>
          


        </div>
      </div>
    </section>
  )
}

export default Skills