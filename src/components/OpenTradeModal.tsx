import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Modal, Button } from "./common";
import { ITrade } from "../core/types";
import { openTrade } from '../store/actions';

interface IProps {
  setIsModalOpen: (value: boolean) => void;
};

const OpenTradeModal: React.FC<IProps> = ({ setIsModalOpen }) => {
  const [newTrade, setNewTrade] = useState<ITrade>({amount: 1, currency: ''});
  const dispatch = useDispatch();

  const onChangeHandler = (key, value) => {
    setNewTrade((prev) => ({...prev, [key]: value}))
  }

  const onClickBuyHandler = () => {
    dispatch(openTrade(newTrade));
    setIsModalOpen(false);
  }

  return (
    <Modal headerText="Open Trade" onClose={() => setIsModalOpen(false)}>
      <div className="openTradeModal-form">
        <div className="openTradeModal-form-field">
          <span>Amount:</span>
          <input type="number" min={1} value={newTrade.amount} onChange={(e) => onChangeHandler("amount", parseInt(e.target.value, 10))} />
        </div>

        <div className="openTradeModal-form-field">
          <span>Currency:</span>
          <input value={newTrade.currency} onChange={(e) => onChangeHandler("currency", e.target.value)} />
        </div>
        <Button text="Buy" onClickHandler={() => onClickBuyHandler()}/>
      </div>
    </Modal>
  );
};

export default OpenTradeModal;

