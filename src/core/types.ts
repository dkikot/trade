export interface ITrade {
  amount: number,
  currency: string,
};

export type TradeList = Array<ITrade>;

export interface IInitialTradeState {
  list: TradeList;
};
