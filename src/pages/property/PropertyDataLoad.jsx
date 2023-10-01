import React, { useEffect, useState } from 'react'
import PropertyCard from '../../components/property-card/PropertyCard'

const PropertyDataLoad = () => {

  const [propertyData, setPropertyData] = useState([]);

  // property data load form public folder
  useEffect(()=>{
    fetch(`propertyData.json`)
    .then((res)=>res.json())
    .then((data)=>setPropertyData(data))
  },[])

  return (
    <div className='bg-neutral-100 py-20'>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center mb-10'>Featured Listed Property</h1>
            <p></p>
            <div className='grid grid-cols-3 gap-10'>
                {propertyData && propertyData.map((property)=><PropertyCard property={property}></PropertyCard>)}
            </div>
        </div>
    </div>
  )
}

export default PropertyDataLoad