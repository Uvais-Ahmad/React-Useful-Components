import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Accordion (props) {
    const {title, description } = props;
    const [open , setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <>
            <div style={{backgroundColor:'#FFFFF6', boxShadow:'1px 1px 10px 1px grey', cursor: 'pointer', margin: '10px auto', width : "60%", padding:"10px 20px", borderRadius: '10px'}} onClick={handleOpen}>
                <div style={{display : 'flex', margin:'0px', justifyContent:'space-between'}}>
                    <p style={{fontWeight:'bolder'}}>{title}</p>
                    <div style={{rotate : open?'180deg' : '0deg' ,margin:'auto 5px', transition:'all .5s'}}><FontAwesomeIcon icon="fa-solid fa-caret-down"  /></div>
                </div>
                {open && <p>
                    {description}
                </p>}
            </div>
        </>
    )
}

export default function AccordionComponent() {
  return (
    <>
        <div className='container' style={{width:'80%',margin:'auto', boxShadow:'1px 1px 5px 1px lightgrey', borderRadius:'10px',padding:'10px',marginTop:'20px',minHeight:'90vh'}}>
            <h2 style={{textAlign:'center'}}>Accordion</h2>
            <Accordion title={"Open Me, I m an accordion that have description"} description={"lorem Ipsum is the new field of the any soports trechniques that can helpful in field of organisation"} />
            <Accordion title={"Open Me, I m an accordion that have description"} description={"lorem Ipsum is the new field of the any soports trechniques that can helpful in field of organisation"} />
            <Accordion title={"Open Me, I m an accordion that have description"} description={"lorem Ipsum is the new field of the any soports trechniques that can helpful in field of organisation"} />
            <Accordion title={"Open Me, I m an accordion that have description"} description={"lorem Ipsum is the new field of the any soports trechniques that can helpful in field of organisation"} />
            <Accordion title={"Open Me, I m an accordion that have description"} description={"lorem Ipsum is the new field of the any soports trechniques that can helpful in field of organisation"} />
        </div>
    </>
  )
}
