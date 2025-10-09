import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import CustomDrawer from './CustomDrawer';

function EventsSearchBar({eventFilter, setEventFilter,searchQuery, setSearchQuery}) {
    const [drawerOpen, setDrawerOpen]= useState(false);
  return (
    <>
        <div className='pt-[100px] sticky top-0  px-10 bg-[#5b100b]'>
            <div className='flex items-center space-x-3'>
                <div className="w-full md:w-[40%] bg-[#00000095] h-11 flex items-center px-3 py-2 rounded-md">
                    <IoMdSearch size={25}/>
                    <input type="text" name="" id="" 
                        className='bg-transparent w-full outline-none px-2'
                        placeholder='Type in to search'
                        value={searchQuery}
                        onChange={(e)=>{
                            setSearchQuery(e.target.value)
                        }}
                    />
                </div>
                <button
                    className=" bg-[#eb7720] h-10 px-5 rounded-md hover:bg-[#c05d12] flex items-center space-x-3"
                    onClick={()=>{
                        setDrawerOpen(true);
                    }}
                >
                    <FaFilter size={12}/>
                    <span className='hidden sm:block'>Categories</span>
                </button>  
            </div>
            <hr className="mt-7 opacity-[0.3] pb-4"/>
        </div>
        <CustomDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} eventFilter={eventFilter} setEventFilter={setEventFilter}/>
    </>
  )
}

export default EventsSearchBar
