import React from "react";

const Winter = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden z-[-1]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        type="video/mp4"
        preload="auto"
        src="/videos/aerial-close-up-golden-sun-shining-trough-snowy-spruce-trees-at-winter-sunrise-SBV-318026679-preview.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="text-white relative z-10  ">
        <div className="flex flex-col items-center gap-6 p-6 mt-20">
          <h1 className="text-6xl font-bold font-['cursive'] ">Winter</h1>
          <p className="text-4xl text-center italic leading-loose">
            “Winter drapes the world in silence, inviting us to pause, reflect,
            and find warmth within.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Winter;
