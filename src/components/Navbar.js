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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Tenda</a>
          </li>
          <li>
            <a href="#">Noticies</a>
          </li>
          <li>
            <a href="#">Contacte</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
