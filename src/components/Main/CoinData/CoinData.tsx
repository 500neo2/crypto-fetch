import React from 'react';
import { ICoinData } from '../../../types/Coin';

interface IProps {
  coin: ICoinData;
}

const getAmount = (n: number): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(n);

export const CoinData: React.FC<IProps> = ({ coin }) => (
  <div className="coin-data-wrapper">
    <div className="coin-data-row">
      <h3>Name:</h3>
      {coin.name}
    </div>
    <div className="coin-data-row">
      <h3>Current price:</h3>
      {getAmount(coin.current_price)}
    </div>
    <div className="coin-data-row">
      <h3>Market Cap:</h3>
      {getAmount(coin.market_cap)}
    </div>
  </div>
);
