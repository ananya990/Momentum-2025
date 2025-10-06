import React from 'react'

function AnimatedWaves() {
  return (
    <>
        <div className="h-full">
          <div className="wave-container h-screen overflow-hidden -mt-[450px]">
            <svg
              className="wave h-[100%]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#3b82f6"
                fillOpacity="1"
                d="M0,128L30,160C60,192,120,256,180,245.3C240,235,300,149,360,117.3C420,85,480,107,540,133.3C600,160,660,192,720,181.3C780,171,840,117,900,117.3C960,117,1020,171,1080,181.3C1140,192,1200,160,1260,144C1320,128,1380,128,1410,128L1440,128L1440,320L0,320Z"
              />
            </svg>
          </div>
          <div className="wave-container h-[60%] overflow-hidden -mt-[450px]">
            <svg
              className="wave h-[100%]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#3b82w3"
                fillOpacity="1"
                d="M0,128L30,160C60,192,120,256,180,245.3C240,235,300,149,360,117.3C420,85,480,107,540,133.3C600,160,660,192,720,181.3C780,171,840,117,900,117.3C960,117,1020,171,1080,181.3C1140,192,1200,160,1260,144C1320,128,1380,128,1410,128L1440,128L1440,320L0,320Z"
              />
            </svg>
          </div>
          <div className="wave-container h-[60%] overflow-hidden -mt-[450px]">
            <svg
              className="wave h-[100%]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#3b82f6"
                fillOpacity="1"
                d="M0,128L30,160C60,192,120,256,180,245.3C240,235,300,149,360,117.3C420,85,480,107,540,133.3C600,160,660,192,720,181.3C780,171,840,117,900,117.3C960,117,1020,171,1080,181.3C1140,192,1200,160,1260,144C1320,128,1380,128,1410,128L1440,128L1440,320L0,320Z"
              />
            </svg>
          </div>
          <div className="wave-container h-[60%] overflow-hidden -mt-[450px]">
            <svg
              className="wave h-[100%]"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                fill="#3b82w3"
                fillOpacity="1"
                d="M0,128L30,160C60,192,120,256,180,245.3C240,235,300,149,360,117.3C420,85,480,107,540,133.3C600,160,660,192,720,181.3C780,171,840,117,900,117.3C960,117,1020,171,1080,181.3C1140,192,1200,160,1260,144C1320,128,1380,128,1410,128L1440,128L1440,320L0,320Z"
              />
            </svg>
          </div>
        </div>
    </>
  )
}

export default AnimatedWaves