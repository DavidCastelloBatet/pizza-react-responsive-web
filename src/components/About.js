import "./About.css";
import Button from "./Button";
import slize from "../img/delivery.jpg";


const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-26">
            <h3>De nosaltres</h3>
            <h1>Benvinguts a Castelló Pizzini</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto praesentium quo eius sunt autem iste cum optio quos.
              Asperiores omnis vero cumque mollitia optio dolor velit incidunt
              expedita hic est.
            </p>
            <Button text={"Més Informació"}  />
          </div>
          <div className="col-6">
              <div className="about_img">
                <img src={slize} alt="slize pizza"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
