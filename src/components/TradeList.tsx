import React from "react";
import { useSelector } from 'react-redux';
import Trade from "./Trade";
import { TradeList } from "../core/types";
import { getTrades } from "../store/trades/selectors"

const TradeList: React.FC = () => {
  const trades = useSelector(getTrades);

  return (
    <div className="tradeList-container">
      {trades.map((trade, index) => <Trade key={`index-${index}`} trade={trade}/>)}
    </div>
  );
};

export default TradeList;
