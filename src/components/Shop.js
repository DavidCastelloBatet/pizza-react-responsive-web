import Button from "./Button";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop_text">
          <div>
            <h1>
              Entrega Gratuïta amb la <span>PIZZA DEL DIA </span>Sols <span>8.99</span> Euros
            </h1>
          </div>
        <div className="shop_btn">
          <Button text="TRUCA ARA !" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
