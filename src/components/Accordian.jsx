import React, { useState } from 'react'

const Accordian = ({activeSectionIndex, sections}) => {

    const [activeSection, setActiveSection] = useState(activeSectionIndex);
    
    const toggleSection = (index) => {
      setActiveSection(activeSection === index ? null : index)
  }
  return (
    <>
      <div className="flex flex-col gap-y-6 bg-slate-400 p-5">
        {
          sections.map((section, index) => (

            <div key={index} className="">

              <div className="flex justify-between items-center mb-8">
                <p className='text-3xl '>{section.title}</p>
                <button onClick={() => toggleSection(index)} className='text-3xl'>
                  {activeSection === index ? '-' : '+'}
                </button>
              </div>

              {
                activeSection == index &&
                <>
                  <p className='text-xl'>{section.content} <br />
                    {section.phone}
                    <br />
                    {section.domain}
                    <br />
                    {section.time}
                  </p>
                </>
              }
            </div>

          ))
        }
      </div>


    </>
  )
}

export default Accordian