import React, { useEffect, useState } from 'react'
import PropertyCard from '../../components/property-card/PropertyCard'

// city name list
const cityName=[
  "London",
  "New York",
  "Mumbai",
  "Paris",
]

const PropertyDataLoad = () => {

  const [properties, setProperties] = useState([]); //all properties data
  const [selectedCity, setSelectedCity] = useState('London'); // active data
  const [filteredProperties, setFilteredProperties] = useState([]); // filter data and send display

  // property data load form public folder
  useEffect(()=>{
    fetch(`propertyData.json`)
    .then((res)=>res.json())
    .then((data)=>setProperties(data))
    .catch((err)=>console.log(err.message))
  },[])

  // filter using cityName
  useEffect(()=>{
    const filtered = properties.filter((property) => property.cityName === selectedCity);
    setFilteredProperties(filtered);
  },[selectedCity, properties])

  // city name target value
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className='bg-neutral-100 py-20'>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-semibold text-center mb-10'>Featured Listed Property</h1>
            <p></p>
            {/* city name list show */}
            <div className='flex gap-3 mb-5'>
                {cityName && cityName.map((name,index)=><button
                  key={index} 
                  value={name}
                  onClick={handleCityChange}
                  className='bg-[#EBEBFB] px-10 py-2 rounded-full text-lg font-medium'
                  >{name}</button>
                )}
            </div>
            {/* Property Card data pass */}
            <div className='grid grid-cols-3 gap-10'>
                {filteredProperties && 
                    filteredProperties.map((property,index)=><PropertyCard 
                        key={index} 
                        property={property}
                    ></PropertyCard>
                )}
            </div>
        </div>
    </div>
  )
}

export default PropertyDataLoad