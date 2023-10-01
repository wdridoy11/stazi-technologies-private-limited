import React from 'react'
import { FaBath, FaBed, FaMapMarkerAlt,FaBuilding, FaRegHeart } from 'react-icons/fa';
import {FiMove } from 'react-icons/fi';

const Feature = () => {
  return (
    <>
        <div>
            <FaBuilding className='text-lg mb-2'></FaBuilding>
            <p className='text-base font-normal'>1 Room</p>
        </div>
        <div>
            <FaBed className='text-lg mb-2'></FaBed>
            <p className='text-base font-normal'>1 Bed</p>
        </div>
        <div>
            <FaBath className='text-lg mb-2'></FaBath>
            <p className='text-base font-normal'>1 Bath</p>
        </div>
        <div>
            <FiMove className='text-lg mb-2'></FiMove>
            <p className='text-base font-normal'>1 sft</p>
        </div>
    </>
  )
}

export default Feature