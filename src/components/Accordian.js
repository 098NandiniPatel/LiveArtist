import React from 'react'
import {Accordion,AccordionItem} from '@szhsin/react-accordion'
import './accordian.css'
import accordian from '../data/accordian.json'
// import AccordianFunc from './AccordianFunc'
const Accordian = () => {
  return (
    <div className='accordion-main'>
      <h1>Frequently asked question</h1>
      <div className="accordion">
      <Accordion>     
        {accordian.map(({ title, content }) => (
            <AccordionItem header={title}>{content}
            </AccordionItem>
        ))}
       
        </Accordion>
      </div>
    </div>
  )
}

export default Accordian