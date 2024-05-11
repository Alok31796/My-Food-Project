import Logo from "../Assets/images/foodLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
  <>
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  </>
);

// const userLoggedIn = () => {
//   // API Call if User log In
//   return true;
// };

// composing component
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const isonline = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/" className="link-tag">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-tag">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link-tag">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blinkit" className="link-tag">
              Blinkit
            </Link>
          </li>
          <li>Cart</li>
          <li>{isonline ? "🟢" : "🔴"}</li>
          <li>
            <input type="search" required />
          </li>
          <li>
            <button className="btn-Search">Search Now</button>
          </li>
          <li>
            {loggedIn ? (
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            ) : (
              <button onClick={() => setLoggedIn(true)}>Login</button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
