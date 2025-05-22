import React from "react";

const Summer = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden z-[-1]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        type="video/mp4" 
        preload="auto"
        src="/videos/mountain-hill-silhouette-at-evening-coastline-summer-beach-landscape-sunset-su-SBV-346709373-preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="text-white relative z-10  ">
        <div className="flex flex-col items-center gap-6 p-6 mt-20">
          <h1 className="text-6xl font-bold font-['cursive']">Summer</h1>
          <p className="text-4xl text-center leading-loose italic">
            Where the sun lingers and time slows, summer carries the scent of
            freedom and laughter.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summer;
