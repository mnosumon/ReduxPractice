import React from 'react'
import Accordian from '../../components/Accordian'

const Adds = () => {
  const AccordionSections = [
    {
      title: "Germany Office",
      content: "575 Crescent Ave. Quakertown, PA 18951",
      phone: '+432 533 12 523',
      domain: 'info@domain.com',
      time: 'Mon - Fri: 9am - 6pm'
    },
    {
      title: "Slovakia Office",
      content: "575 Crescent Ave. Quakertown, PA 18951",
      phone: '+432 533 12 523',
      domain: 'info@domain.com',
      time: 'Mon - Fri: 9am - 6pm'
    },
    {
      title: "Lithuania Office",
      content: "575 Crescent Ave. Quakertown, PA 18951",
      phone: '+432 533 12 523',
      domain: 'info@domain.com',
      time: 'Mon - Fri: 9am - 6pm'
    },

  ]
  return (
     <div className="max-w-container mx-auto">
        <div className="h-[450px] w-[400px] bg-white absolute left-20 top-20 py-[30px] px-[20px]">
          <Accordian sections={AccordionSections} activeSectionIndex={4} />
        </div>
     </div>
  )
}

export default Adds