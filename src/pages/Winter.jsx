import React from "react";

const Winter = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden z-[-1]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        type="video/mp4"
        preload="auto"
        src="/videos/winter-preview.mp4.mov"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="text-white relative z-10  ">
        <div className="flex flex-col items-center gap-6 p-6 mt-20">
          <h1 className="text-6xl font-bold">Winter</h1>
          <p className="text-4xl text-center">
            “Winter drapes the world in silence, inviting us to pause, reflect,
            and find warmth within.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Winter;
