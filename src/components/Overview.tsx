import { useAppContext } from '@/app/context/ContextProvider'
import React from 'react'

function Overview({loading, data}) {

  if(data && data.payments && data.teams && data.users)
  return (
    <>
      {
        loading?
        <>Loading...</>
        :
        <div className='flex justify-between space-x-3'>
          <div className=' bg-[#3c3c3c] w-full px-5 py-10 text-center rounded-lg flex flex-col space-y-2 '>
            <div className='text-xl font-semibold'>Rs. {data.amount}</div>
            <div>Total Registrations: {data.payments}</div>
          </div>
          <div className=' bg-[#3c3c3c] w-full px-5 py-10 text-center rounded-lg'>
            Total Teams: {data.teams}
          </div>
          <div className=' bg-[#3c3c3c] w-full px-5 py-10 text-center rounded-lg'>
            Total Users: {data.users}
          </div>
        </div>
      }
    </>
  )
}

export default Overview
