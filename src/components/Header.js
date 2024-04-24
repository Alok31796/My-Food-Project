export const Title = () => (
  <>
    <a href="/">
      <img
        className="logo"
        src="https://cdn.logojoy.com/wp-content/uploads/20200506163708/31-1-600x314.png"
        alt="logo"
      />
    </a>
  </>
);

// composing component
const Header = () => (
  <>
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  </>
);
export default Header;
