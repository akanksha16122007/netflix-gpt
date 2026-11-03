import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 flex justify-center">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="w-3/4 p-2 m-2 rounded-s-lg mr-0"
        />
        <button
          type="button"
          className="p-2 m-2 ml-0 bg-red-500 text-white rounded-r-lg "
        >
          <i className="fa-brands fa-sistrix"></i>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
