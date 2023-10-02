import React from 'react'
import { FaBath, FaBed, FaMapMarkerAlt,FaBuilding, FaRegHeart } from 'react-icons/fa';
import {FiMove } from 'react-icons/fi';
import Feature from '../../components/feature/Feature';
import Form from '../../components/form/Form';
import { useParams } from 'react-router-dom';
const description ="Regal North Hills is a prominent cinema located at 4150 Main at North Hills Street in Raleigh, North Carolina. This upscale movie theater is part of the bustling North Hills district, known for its vibrant atmosphere and diverse entertainment options. Regal North Hills offers a premium cinematic experience for moviegoers in the area. The exterior of the theater is inviting and modern, with sleek architectural design and well-maintained surroundings. As you enter, you'll be greeted by a spacious and welcoming lobby, adorned with movie posters and comfortable seating areas. The atmosphere is designed to create anticipation and excitement for your movie-going experience. Inside the theater, you'll find a range of screening options, including standard screens and, potentially, IMAX or VIP screens, depending on the location's amenities. The seating arrangements are comfortable and offer excellent sightlines to the big screen, ensuring an immersive viewing experience.";
const image=`https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2144&q=80`

const PropertyDetails = () => {
  const {propertyDetails} = useParams();
  console.log(propertyDetails)
  return (
    <div className='py-20 bg-neutral-100'>
      <div className='container mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
          <div>
              <h3 className='text-xl text-black font-medium mb-2'>RCE Theaters - 907 S Beckford Dr, Henderson, NC 27536</h3>
              <p className='flex items-center gap-1 text-base font-normal mb-5'><FaMapMarkerAlt></FaMapMarkerAlt> 8558 Pecan St.</p>
              <img className='w-full h-[700px] object-cover rounded-2xl' src={image} alt="Header image" />
          </div>
          <div className='grid grid-cols-3 gap-10 mt-10'>
              {/* Overview */}
              <div className='col-span-2'>
                  <div className='bg-white p-10 rounded-lg mb-10'>
                      <div className='flex items-center justify-between'>
                          <h3 className='text-2xl text-black font-medium mb-3'>Overview</h3>
                          <h4 className='text-blue-600 text-2xl font-semibold'>$5,000 <small className='text-base text-black font-normal'>/month</small></h4>
                      </div>
                      <hr />
                      <div className='grid grid-cols-4 mt-5'>
                          <Feature></Feature>
                      </div>
                  </div>
                  <div>
                      <div className='bg-white p-10 rounded-lg'>
                           <h3 className='text-2xl text-black font-medium mb-3'>Description</h3>
                           <hr />
                           <p className='text-base mt-5 font-normal'>{description}</p>
                      </div>
                  </div>
              </div>
              {/* right side */}
              <div className='bg-white p-10 rounded-lg'>
                <h3 className='text-2xl text-black font-medium mb-3'>Contact Us</h3>
                <Form></Form>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PropertyDetails