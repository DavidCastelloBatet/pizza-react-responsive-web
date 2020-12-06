import { prices } from "../datos";

import "./Prices.css";

const Prices = () => {
  return (
    <div className="prices">
      <h1 className="titulo">Les nostres Pizzes</h1>
      <div className="container">
        <div className="row">
          {prices.map((price) => {
            const { id, foto, nombre, descripcion, precio } = price;
            return (
              <div className="col-4">
                <div key={id} className="price">
                  <div className="price_image">
                    <img src={foto} alt="pizza" />
                  </div>
                  <div className="card">
                    <h1 className="price_heading">{nombre}</h1>
                    <p className="price_text">{descripcion}</p>
                    <p className="price_rs">{precio} Euros</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prices;
