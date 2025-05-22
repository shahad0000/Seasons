import React from 'react'

const Autumn = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden z-[-1]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        type="video/mp4" 
        preload="auto"
        src="/videos/flight-along-a-path-in-a-scenic-autumn-forest-SBV-318519680-preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="text-white relative z-10  ">
        <div className="flex flex-col items-center gap-6 p-6 mt-20">
          <h1 className="text-6xl font-bold font-['cursive']">Autumn</h1>
          <p className="text-4xl text-center leading-loose italic">
          “In every falling leaf, autumn teaches us the grace of letting go.”


          </p>
        </div>
      </div>
    </div>  )
}

export default Autumn