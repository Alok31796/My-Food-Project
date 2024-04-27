import Logo from "./images/foodLogo.png";
import { useState } from "react";

const Title = () => (
  <>
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  </>
);

const userLoggedIn = () => {
  // API Call if User log In
  return true;
};

// composing component
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
