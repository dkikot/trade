import React from "react";
import { ITrade } from "../core/types";

interface IProps {
  trade: ITrade,
};

const Trade: React.FC<IProps> = ({ trade }) => {

  return (
    <div className="trade">
      <div>
        <b>Amount:&nbsp;</b>
        <span>{trade?.amount}</span>
      </div>
      <div>
        <b>Currency:&nbsp;</b>
        <span>{trade?.currency}</span>
      </div>
    </div>
  );
};

export default Trade;

