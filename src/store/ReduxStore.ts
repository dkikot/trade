import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { OPEN_TRADE, addTrade } from "./actions";

const interceptor = () => next => action => {
  if(action.type === OPEN_TRADE) {
    setTimeout(() => {
      next(addTrade(action.payload))
    }, 2000);
    return;
  };

  const returnValue = next(action);

  return returnValue;
};

export const configureStore = (initialState) => {
  // @ts-ignore
  const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(interceptor)));

  return store;
};
