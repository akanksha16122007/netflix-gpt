import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen absolute px-8 py-4 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img
        className="w-15 h-9  "
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAVIENVPMEM3Kn4hVzJseX4N8xPjtBDIpwuFDucWksdxQZ8Ss6Xf8U_vt7ThYYfRmzq0x1CS3nOwTGyVrgADvwfB_tPiK_liS2RjvI40RJSzbKRk-o8b3nCxHfCCnBsyB2XBB9_vRoSmN.svg"
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img src={user.photoURL} alt="profile-icon" />
          <button
            onClick={handleSignOut}
            className="bg-red-500 m-2 p-2 "
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
