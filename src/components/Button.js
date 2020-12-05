import "./Button.css";

const Button = ({text}) => {
  return (
    <div className="banner_btn">
      <a href="" className="btn btn-smart">
        {text}
      </a>
    </div>
  );
};

export default Button;
