import React from "react";

interface IProps {
  text: string;
  onClickHandler: () => void;
}
const Button: React.FC<IProps> = ({ text, onClickHandler }) => (
  <button className={"button"} onClick={() => onClickHandler()}>
    {text}
  </button>
);

export default Button;
