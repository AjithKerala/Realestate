import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
}from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './value.css'
import data from '../../utils/accordion'
function Value() {
  return (
    <div>
      <selction className="c-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* left */}
                <div className="v-left">
                    <div className="image-container">
                        <img src="./value.png" alt="value" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                        <span className='orangeText'>Our Value</span>
                        <span className='primaryText'>Value you give to you</span>
                        <span className='secondaryText'> we always to help by providing the best service for you <br/>
                        you belive a good blace to live  can make your life better
                        </span>
                        <Accordion 
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        >
                            {
                                data.map((item,i)=>{
                                    return(
                                        <AccordionItem key={i} className="accordionitem">
                                            <AccordionItemHeading>
                                                <AccordionItemButton className='accordionbutton'>
                                                    <div className="flexCenter icon">{item.icon}</div>
                                                    <span className='primaryText'>
                                                        {item.heading}
                                                        </span>
                                                        <div className="flexCenter icon">
                                                            <MdOutlineArrowDropDown size={20}/>
                                                        </div>
            
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel >
                                                <p className='secondaryText' style={{maxWidth:"100"}}>{item.detail}</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>

                </div>
            </div>
      </selction>
    </div>
  )
}

export default Value
