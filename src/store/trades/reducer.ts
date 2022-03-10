import {
  ADD_TRADE
} from '../actions';
import INIT_STATE from "../initialState"
import { IInitialTradeState } from "../../core/types"

export default (state: IInitialTradeState = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TRADE:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    default:
      return { ...state };
  }
};