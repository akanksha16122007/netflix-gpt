import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleShowGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import GptSearchBar from "./GptSearchBar";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleShowGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen absolute px-8 py-4 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img className="w-15 h-9  " src={LOGO} />
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="bg-[#222222] text-white border border-gray-500 rounded
           px-3 py-2 m-2 cursor-pointer hover:bg-[#333333] outline-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            type="button"
            className="text-white bg-slate-500 rounded-lg border p-2 m-2"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-10 h-15 m-2 rounded-lg border bg-white"
            src={user.photoURL}
            alt="profile-icon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-500 m-2 p-2 rounded-lg border text-white "
            type="button"
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
