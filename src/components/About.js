import "./About.css";
import Button from "./Button";
import slize from "../img/slize_pizza.jpg";


const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>Welcome to Maestro Pizzini</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto praesentium quo eius sunt autem iste cum optio quos.
              Asperiores omnis vero cumque mollitia optio dolor velit incidunt
              expedita hic est.
            </p>
            <Button text={"Read More"} enllaç={"https:\\www.google.com"} />
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
