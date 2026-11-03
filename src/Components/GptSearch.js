import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import Header from "./Header";
import { BACKGROUND_IMG_URL } from "../utils/constants";
const GptSearch = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={BACKGROUND_IMG_URL} alt="body-images" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
