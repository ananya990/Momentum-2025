import React from 'react'

function PosterBox({ poster, title, eventId }) {
  return (
    <>
      <div className="mt-8 flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-[280px] md:w-[350px] flex-shrink-0">
        <button
          className="
            mb-4 px-10 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          text-white font-semibold shadow-lg transform transition-all duration-300 
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] 
            animate-pulse"
        >
          Register
        </button>

        <img
          src={`/events/1.webp`}
          alt={title}
          className=" rounded-lg border-2 border-gray-200"
        />
      </div>
    </>
  )
}

export default PosterBox