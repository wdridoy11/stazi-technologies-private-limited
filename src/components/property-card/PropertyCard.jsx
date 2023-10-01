import React from 'react'
import { FaBath, FaBed, FaMapMarkerAlt,FaBuilding, FaRegHeart } from 'react-icons/fa';
import {FiMove } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const image=`https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80`

const PropertyCard = () => {
  return (
    <div className='bg-white p-3 rounded-md shadow-sm'>
        <div>
            <div className='relative'>
                <button className='absolute top-2 left-2 bg-white text-blue-600 px-3 py-2 rounded-full text-base font-normal'>For Rent</button>
                <button className='absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white'>
                    <FaRegHeart className='text-lg'></FaRegHeart>
                </button>
                <img className='rounded-md w-full h-64 object-cover' src={image} alt="Property image" />
            </div>
            <div className='px-4 pt-5'>
                <p className='flex items-center gap-1 text-base font-normal'><FaMapMarkerAlt></FaMapMarkerAlt> 8558 pecan St.</p>
                <h3 className='text-xl text-black font-medium mt-1 mb-3'>RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536</h3>
            </div>
            <div className='grid grid-cols-4 px-4 gap-2 pb-4'>
                <div>
                    <FaBuilding className='text-lg mb-2'></FaBuilding>
                    <p className='text-base font-normal'>3 Room</p>
                </div>
                <div>
                    <FaBed className='text-lg mb-2'></FaBed>
                    <p className='text-base font-normal'>4 Bed</p>
                </div>
                <div>
                    <FaBath className='text-lg mb-2'></FaBath>
                    <p className='text-base font-normal'>1 Bath</p>
                </div>
                <div>
                    <FiMove className='text-lg mb-2'></FiMove>
                    <p className='text-base font-normal'>732 sft</p>
                </div>
            </div>
            <div className='px-4 border-dashed border-t pt-2 pb-3'>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h4 className='text-blue-600 text-2xl font-semibold'>$7,255 <small className='text-base text-black font-normal'>/month</small></h4>
                    </div>
                    <div>
                        <Link className='py-3 px-5 border border-blue-600 text-blue-600 rounded-full font-medium
                        hover:bg-blue-600 hover:text-white duration-500'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard