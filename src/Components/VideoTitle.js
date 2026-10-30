import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
      <div className="ml-1">
        <button
          type="button"
          className="text-black bg-white px-4  py-2 m-2 text-lg rounded-lg border hover:bg-opacity-80"
        >
          <i className="fa-solid fa-play"></i> Play
        </button>
        <button
          type="button"
          className="text-white bg-gray-500 px-4 py-2 m-2 text-lg rounded-lg border hover:bg-opacity-50"
        >
          {" "}
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
