import React, { useEffect, useState } from 'react'
import PropertyCard from '../../components/property-card/PropertyCard'
import { click } from '@testing-library/user-event/dist/click';

const cityName=[
  "New York",
  "Mumbai",
  "Paris",
  "London",
]


const PropertyDataLoad = () => {
  const [propertyData, setPropertyData] = useState([]);
  // property data load form public folder
  useEffect(()=>{
    fetch(`propertyData.json`)
    .then((res)=>res.json())
    .then((data)=>setPropertyData(data))
  },[])

const handleCity=(event)=>{
  console.log(event.target.value)
}




  return (
    <div className='bg-neutral-100 py-20'>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center mb-10'>Featured Listed Property</h1>
            <p></p>
            <div className='flex gap-3 mb-5'>
                {cityName.map((name,index)=><button
                  key={index} 
                  value={name}
                  onClick={handleCity}
                  className='bg-[#EBEBFB] px-10 py-2 rounded-full text-lg font-medium'
                  >{name}</button>
                )}
            </div>
            <div className='grid grid-cols-3 gap-10'>
                {propertyData && propertyData.map((property)=><PropertyCard key={property.id} property={property}></PropertyCard>)}
            </div>
        </div>
    </div>
  )
}

export default PropertyDataLoad