import React from 'react'
import Marquee from 'react-fast-marquee'

function EventsMarquee() {
  return (
    <>
        <Marquee 
            autoFill={true}
            style={{
                color: "white",             
                marginTop: "-40px",
                backgroundColor: "black"      
            }}
        >

            <div className="text-xl font-extralight py-1 flex items-center">
                <span className="px-1 text-sm" style={{ lineHeight: "1" }}>●</span>
        
                <span className="px-[3px]"> 
                  RESULTS ARE OUT
                </span>
            </div>
        </Marquee>
    </>
  )
}

export default EventsMarquee
