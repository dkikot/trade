import {
  OPEN_TRADE,
  ADD_TRADE
} from '../actions';
import { ITrade } from '../../core/types';

export const openTrade = (trade: ITrade) => ({
  type: OPEN_TRADE,
  payload: trade,
});

export const addTrade = (trade: ITrade) => ({
  type: ADD_TRADE,
  payload: trade,
});