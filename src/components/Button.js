import "./Button.css";

const Button = ({text, enllaç}) => {
  return (
    <div className="banner_btn">
      <a href={enllaç} className="btn btn-smart">
        {text}
      </a>
    </div>
  );
};

export default Button;
