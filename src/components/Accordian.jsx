import React, { useState } from 'react'

const Accordian = ({activeSectionIndex, sections}) => {

    const [activeSection, setActiveSection] = useState(activeSectionIndex);
    
    const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  }
  return (
    <>
      <div className="flex flex-col gap-y-[57px]">
        {
          sections.map((section, index) => (

            <div key={index} className="">

              <div className="flex justify-between items-center">
                <p>{section.title}</p>
                <button onClick={() => toggleSection(index)}>
                  {activeSection === index ? '-' : '+'}
                </button>
              </div>

              {
                activeSection === index &&
                <>
                  <p>{section.content} <br />
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