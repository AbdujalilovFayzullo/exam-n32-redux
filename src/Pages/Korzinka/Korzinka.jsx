import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Image9 from '../../assets/img/Mask Group (1).png'
import Hero5 from '../../assets/img/Food Image.png'
import './korzinka.scss'
import useCount from '../../app/useCount';
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const Korzinka = ({user,}) => {


    if (!user) {
    return <Navigate to="/login" replace />;
  }

  const { count, increment, decrement} = useCount()

  

  return (
    <div className='container'>


          <div className='korzinka__block'>
              <div className='korzinka__left_block'>
                  <img src={Hero5} alt="img" width={90} height={100} />
                  <div>
                  <h2 className='korzinka__title'>Chicken Hell</h2>
                  <p className='korzinka__text'>$12.99</p>
                  </div>
              </div>

              <div className='korzinka__right'>
                  <button onClick={decrement} className='count__btn'><FaMinusCircle /></button>
                  <h2>{count}</h2>
                  <button onClick={increment} className='count__btn'><FaPlusCircle /></button>
              </div>
          </div>

          <div className='korzinka__block'>
              <div className='korzinka__left_block'>
                  <img src={Hero5} alt="img" width={90} height={100} />
                  <div>
                  <h2 className='korzinka__title'>Chicken Hell</h2>
                  <p className='korzinka__text'>$12.99</p>
                  </div>
              </div>

              <div className='korzinka__right'>
                  <button onClick={decrement} className='count__btn'><FaMinusCircle /></button>
                  <h2>{count}</h2>
                  <button onClick={increment} className='count__btn'><FaPlusCircle /></button>
              </div>
          </div>

          <section>
                        <div className='last'>
                          <img src={Image9} alt="" />
                          <img className='last__img' src={Hero5} alt="img" />
                        </div>
          </section>
    </div>
  )
}

export default Korzinka