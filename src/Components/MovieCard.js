import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="group w-[180px] sm:w-[200px] flex-none cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:z-10">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie-card"
        className="w-full aspect-[2/3] object-cover rounded-md shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
