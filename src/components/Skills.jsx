import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const skillRefs = useRef([]);

  const skills=[
    {
      logo:'logo-html5',
      level:'Advanced', 
      count:89,
      name:'HTML5'
  },
  {
    logo:'logo-css3',
    level:'Advanced', 
    count:86,
    name:'CSS3'
  },
  {
    logo:'logo-javascript',
    level:'Intermediate', 
    count:70,
    name:'JavaScript'
  },
  {
    logo:'logo-react',
    level:'Intermediate', 
    count:70,
    name:'ReactJS'
  },
  {
    logo:'logo-nodejs',
    level:'Intermediate', 
    count:30,
    name:'NodeJS'
  },
  {
    logo:'leaf-outline',
    level:'Intermediate', 
    count:50,
    name:'MongoDB'
  },
  {
    logo:'git-branch-outline',
    level:'Advanced', 
    count:80,
    name:'Git'
  },
  {
    logo:'logo-github',
    level:'Advanced', 
    count:80,
    name:'GitHub'
  },
 
]
// Close label on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        skillRefs.current.every(
          (ref) => ref && !ref.contains(event.target)
        )
      ) {
        setActiveSkill(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
                  <div onClick={() => setActiveSkill(activeSkill === i ? null : i)} style={{ background:`conic-gradient(rgb(224, 143, 186) ${skill.count}%, #ddd ${skill.count}%)`}} className='w-32 h-32 flex items-center justify-center rounded-full'>
                    <div className="text-6xl w-28 h-28 rounded-full bg-gray-900 flex items-center justify-center group-hover:text-[#E08FBA]">
                      <ion-icon name={skill.logo}></ion-icon>
                    </div>
                  </div>
              {/* Skill label on click */}
              {activeSkill === i && (
                  <div className="mt-3 text-[#E08FBA] text-sm font-semibold">
                    {skill.name}
                  </div>
              )}
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