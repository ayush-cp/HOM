import React from 'react'
import services from './ServiceList'

const PricingTable = () => {

    const serviceList = services

  return (
    <div className='w-full h-max bg-gray-800 flex flex-col gap-8 items-center justify-center md:py-10 py-6 px-2'>
      <h2 className="md:text-5xl text-3xl font-bold text-[#F3777E]">Pricing List</h2>
      <table className='md:w-[80%] w-full h-max'>
        <thead>
            <tr>
                <th className="md:text-2xl text-base font-bold text-white border border-gray-600 p-1">S.No</th>
                <th className="md:text-2xl text-base font-bold text-white border border-gray-600 p-1">Service</th>
                <th className="md:text-2xl text-base font-bold text-white border border-gray-600 p-1">Price</th>
                <th className="md:text-2xl text-base font-bold text-white border border-gray-600 p-1">Reviews</th>
            </tr>
        </thead>
        <tbody>
            {
                serviceList.map((service, index)=>(
                    <tr key={index}>
                <th className="md:text-2xl text-base font-normal text-white border border-gray-600 p-1">{index}</th>
                <th className="md:text-2xl text-base font-normal text-white border border-gray-600 p-1">{service.name}</th>
                <th className="md:text-2xl text-base font-normal text-white border border-gray-600 p-1">${service.price}</th>
                <th className="md:text-2xl text-base font-normal text-white border border-gray-600 p-1">{service.reviews}/5</th>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default PricingTable