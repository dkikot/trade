import "../../resources/css/layout.scss"

import React, {useState, useMemo} from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store/ReduxStore";
import initialState from "../store/initialState";
import { Button } from "./common";
import TradeList from "./TradeList";
import OpenTradeModal from "./OpenTradeModal";

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const store = useMemo(() => configureStore(initialState), [])

  return (
    <Provider store={store}>
      <div className="content">
        <Button text="Open Trade" onClickHandler={() => setIsModalOpen(true)}/>
        <TradeList />
      </div>
      {isModalOpen && <OpenTradeModal setIsModalOpen={setIsModalOpen}/>}
    </Provider>
  );
};
