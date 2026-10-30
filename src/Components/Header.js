import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="w-screen absolute px-8 py-4 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img className="w-15 h-9  " src={LOGO} />
      {user && (
        <div className="flex">
          <img
            className="w-10 h-15 m-2 rounded-lg border"
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
