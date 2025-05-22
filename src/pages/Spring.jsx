import React from 'react'

const Spring = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden z-[-1]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="src/assets/stream-running-fast-in-summer-green-forest-small-waterfall-with-crystal-clear--SBV-352115279-preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="text-white relative z-10  ">
        <div className="flex flex-col items-center gap-6 p-6 mt-20">
          <h1 className="text-6xl font-bold">Spring</h1>
          <p className="text-4xl text-center">
          “Spring whispers renewal in every blossom — a soft promise that beginnings are always possible.”


          </p>
        </div>
      </div>
    </div>  )
}

export default Spring