import React from 'react'
import { FaBath, FaBed, FaMapMarkerAlt,FaBuilding, FaRegHeart } from 'react-icons/fa';
import {FiMove } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PropertyCard = ({property}) => {
    const {img,title,id,price,location,room,bed,bath,sft}=property;
  return (
    <div className='bg-white p-3 rounded-lg shadow-sm'>
        <div>
            <div className='relative'>
                <button className='absolute top-2 left-2 bg-white text-blue-600 px-3 py-2 rounded-full text-base font-normal'>For Rent</button>
                <button className='absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white'>
                    <FaRegHeart className='text-lg'></FaRegHeart>
                </button>
                <img className='rounded-lg w-full h-64 object-cover' src={img} alt="Property image" />
            </div>
            <div className='px-4 pt-5'>
                <p className='flex items-center gap-1 text-base font-normal'><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                <h3 className='text-xl text-black font-medium mt-1 mb-3'>{title}</h3>
            </div>
            <div className='grid grid-cols-4 px-4 gap-2 pb-4'>
                <div>
                    <FaBuilding className='text-lg mb-2'></FaBuilding>
                    <p className='text-base font-normal'>{room} Room</p>
                </div>
                <div>
                    <FaBed className='text-lg mb-2'></FaBed>
                    <p className='text-base font-normal'>{bed} Bed</p>
                </div>
                <div>
                    <FaBath className='text-lg mb-2'></FaBath>
                    <p className='text-base font-normal'>{bath} Bath</p>
                </div>
                <div>
                    <FiMove className='text-lg mb-2'></FiMove>
                    <p className='text-base font-normal'>{sft} sft</p>
                </div>
            </div>
            <div className='px-4 border-dashed border-t pt-2 pb-3'>
                <div className='flex items-center justify-between py-2'>
                    <div>
                        <h4 className='text-blue-600 text-2xl font-semibold'>${price} <small className='text-base text-black font-normal'>/month</small></h4>
                    </div>
                    <div>
                        <Link className='py-3 px-5 border border-blue-600 text-blue-600 rounded-full font-medium
                        hover:bg-blue-600 hover:text-white duration-500' to={`/property/${id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard