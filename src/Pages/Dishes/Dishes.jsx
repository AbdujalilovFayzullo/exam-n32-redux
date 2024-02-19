import React from 'react'
import useProduct from '../../app/useProduct'
import { useEffect } from 'react'
import { FaStar } from 'react-icons/fa6'
import { FaPlusCircle } from 'react-icons/fa'
import './dishes.scss'
import Asked from './Asked/Asked'
import { NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react'

const Dishes = ({user}) => {
  const {loading, product, error, getProduct } = useProduct()

  const [searchTerm, setSearchTerm] = useState("");


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  useEffect(() => {
      getProduct()
  },[])




  return (
    <div className='container'>

        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search__input'
        />


      {
        loading ? <h1>Loading...</h1> : null
      }
      {
        error ? <h1>{error}</h1> : null
      }

      

        {product.length > 0 ? (
                  <ul className='dishes__list'>
                    {product.filter((product) => {
                if (searchTerm === "") {
                  return product;
                } else if (
                  product.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return product;
                }
              }).map((product) => (
                      <li key={product.id} className='dishes__itemm'>
                            <NavLink to="/next">
                            <div className='box dishes__item'>
                            <img src={product.avatar} alt="" />
                            <h2 className='text-[30px] desc'>{product.title}</h2>
                            <p className='flex gap-3 text'>{product.min} <FaStar className='iconnn'/> 4.9</p>
                            <div className='flex gap-[100px] items-center'>
                                <p className='text-[25px]'>{product.price}</p>
                                <FaPlusCircle className='plus__icon' />
                            </div>
                        </div>
                            </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
    <Asked />
    </div>
  )
}

export default Dishes