import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import PropertyDetails from './PropertyDetails';

const Property = () => {

  const loadProperty = useLoaderData();
  const {property_id} = useParams();

  const propertyData =[];
  const foundId = loadProperty.find((data)=> data.id === property_id);
  propertyData.push(foundId);

  return (
    <div className='py-20 bg-neutral-100'>
      <div className='container mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
          {propertyData.map((property)=><PropertyDetails
              key={property.id}
              property={property}
          ></PropertyDetails>)}
      </div>
    </div>
  )
}

export default Property