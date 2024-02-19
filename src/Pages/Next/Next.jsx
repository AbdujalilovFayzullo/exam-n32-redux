import React from 'react'
import Image1 from '../../assets/img/Food Image (1).png'
import { Navigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import './next.scss'

const Next = ({user}) => {

    if (!user) {
        return <Navigate to="/login" replace />;
      }


  return (
    <div className='container'>
                        <div className='box'>
                    <img className='h-[208px]' src={Image1} alt="img" />
                    <p className='bg-amber-500 p-1'>Healthy</p>
                    <h2 className='text-[30px] desc'>Chicken Hell</h2>
                    <p className='flex gap-3 text'>24min • <FaStar className='iconnn' /> 4.8</p>
                    <div className='flex gap-[100px] items-center'>
                        <p className='text-[25px]'>$12.99</p>
                        <FaPlusCircle className='plus__icon' />
                    </div>
                </div>
    </div>
  )
}

export default Next