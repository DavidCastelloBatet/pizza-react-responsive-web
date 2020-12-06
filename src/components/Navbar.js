import './Navbar.css'

import logo from "../img/logo_pizza.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_text">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="navbar_ul">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Menu</p>
          </li>
          <li>
            <p>Tenda</p>
          </li>
          <li>
            <p>Noticies</p>
          </li>
          <li>
            <p>Contacte</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
