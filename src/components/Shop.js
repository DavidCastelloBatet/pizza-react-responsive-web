import Button from "./Button";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop_text">
          <div>
            <h1>
              Free Delivery With <span>PIZZA OF THE DAY </span>Only 8.99 USD
            </h1>
          </div>
        <div className="shop_btn">
          <Button text="CALL NOW" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
