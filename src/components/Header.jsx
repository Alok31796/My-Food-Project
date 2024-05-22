import Logo from "../Assets/images/foodLogo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const userLoggedIn = () => {
//   // API Call if User log In
//   return true;
// };

// composing component
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const isonline = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using use Selecter hook
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-400 shadow-lg mb-2 px-5">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-[150px]" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-white">
            <Link to="/blinkit">Blinkit</Link>
          </li>
          <li className="px-4 text-white font-bold ">
            <Link to="/cart">Cart-{cartItems.length} items</Link>
          </li>
          <li className="px-4 text-white">User {isonline ? "🟢" : "🔴"}</li>
          <li className="text-white">
            {loggedIn ? (
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setLoggedIn(true)}>Login</button>
            )}
          </li>
          <li className="px-4 font-bold text-white">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
