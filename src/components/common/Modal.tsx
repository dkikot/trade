import React from "react";

interface IProps {
  headerText: string,
  onClose?: () => void,
  children?: React.ReactNode
}
const Trade: React.FC<IProps> = ({ headerText, onClose, children }) => {

  return (
    <>
      <div className="modal-background" />
      <div className="modal-container">
        <div className="modal-header">
          <span className="modal-header-text">{headerText}</span>
          <b className="modal-header-closeButton" onClick={() => onClose()}>X</b>
        </div>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Trade;
