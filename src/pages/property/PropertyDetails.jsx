import React from 'react'
import { FaBath, FaBed, FaMapMarkerAlt,FaBuilding, FaRegHeart } from 'react-icons/fa';
import {FiMove } from 'react-icons/fi';
import Feature from '../../components/feature/Feature';

const image=`https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80`

const PropertyDetails = () => {
  return (
    <div className='py-20 bg-neutral-100'>
      <div className='container mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
          <div>
              <h3 className='text-xl text-black font-medium mb-2'>RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536</h3>
              <p className='flex items-center gap-1 text-base font-normal mb-5'><FaMapMarkerAlt></FaMapMarkerAlt> 8558 Pecan St.</p>
              <img className='w-full h-[700px] object-cover rounded-2xl' src={image} alt="Header image" />
          </div>
          <div className='grid grid-cols-5 mt-10'>
              {/* Overview */}
              <div className='col-span-3'>
                  <div className='bg-white p-10 rounded-lg'>
                      <div>
                          <h3 className='text-2xl font-medium mb-3'>Overview</h3>
                      </div>
                      <hr />
                      <div className='grid grid-cols-4 mt-5'>
                          <Feature></Feature>
                      </div>
                  </div>
              </div>
              {/* right side */}
              <div>

              </div>
          </div>
      </div>
    </div>
  )
}

export default PropertyDetails