import './Header.css'

import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner_content">
        <div className="container">
          <div className="banner_text">
            <h3>Entrega a Domicili</h3>
            <h1>CASTELLÓ PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad
              harum maiores nulla debitis.{" "}
            </p>
            <Button text={"Entrega Ara !"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
