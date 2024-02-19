import React, { useState } from 'react'
import './asked.scss'
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const Asked = () => {

    const [openWords, setOpenWords] = useState(true)
    const [open, setOpen] = useState(false)
    
  return (
    <div className='container'>
        <div className='asked'>
            <h1 className='asked__title'>Frequently Asked <span className='asked__span'>Questions</span></h1>
            <div>
            {openWords ? (
                  <div className="asked__block">
                    <h2 className='asked__text'>How long does delivery take?</h2>
                    <img
                      className="asked__icon"
                      onClick={() => setOpenWords(!openWords)}
                      src="../../../../public/plus.jpg"
                      alt="rasm"
                    />
                  </div>
                ) : (
                  <div className="asked__transition">
                    <div className="asked__block">
                      <h2 className='asked__text'>How long does delivery take?</h2>
                      <img
                        className='asked__icon'
                        onClick={() => setOpenWords(!openWords)}
                        src="../../../../public/minus.jpg"
                        alt=""
                      />
                    </div>
                    <div className="asked__howw">
                      <p className="asked__desc">
                        You Can Get Information By Contacting Our Support Team
                        Have 24/7 Service. <br /> What’s The Difference Between
                        Free And Paid Plan ?
                      </p>
                      <hr />
                    </div>
                  </div>
                )}

                
 
 
 
 
 
 
 
            </div>





            
            <span className='asked__border'></span>
            <div className='asked__block'>
                <h1 className='asked__text'>How Does It Work ?</h1>
                <FaCirclePlus className='asked__icon' />
            </div>
            <span className='asked__border'></span>
            <div className='asked__block'>
                <h1 className='asked__text'>How does your food delivery service work?</h1>
                <FaCirclePlus className='asked__icon' />
            </div>
            <span className='asked__border'></span>
            <div className='asked__block'>
                <h1 className='asked__text'>What payment options do you accept?</h1>
                <FaCirclePlus className='asked__icon' />
            </div>
            <span className='asked__border'></span>
            <div className='asked__block'>
                <h1 className='asked__text'>Do you offer discounts or promotions?</h1>
                <FaCirclePlus className='asked__icon' />
            </div>


        </div>
    </div>
  )
}

export default Asked