import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { ICoinData } from '../../types/Coin';
import { CoinData } from './CoinData/CoinData';

interface IOption {
  value: string;
  label: string;
}

const getOptions = (coins: ICoinData[]): IOption[] =>
  coins.map((coin) => ({
    value: coin.id,
    label: coin.name,
  }));

export const Main: React.FC = () => {
  const [fetchedCoins, setFetchedCoins] = useState<ICoinData[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<IOption | null>(null);

  useEffect((): void => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
      )
      .then((res) => {
        const coins = res.data;
        setFetchedCoins(coins);
      });
  }, []);

  const handleChange = useCallback((val: any): void => {
    setSelectedCoin(val);
  }, []);

  const options = useMemo(() => getOptions(fetchedCoins), [fetchedCoins]);
  const selectedCoinData = useMemo(() => {
    if (selectedCoin) {
      return fetchedCoins.find((coin) => coin.id! === selectedCoin.value!);
    }
    return null;
  }, [fetchedCoins, selectedCoin]);

  return (
    <div>
      <Select
        defaultValue={selectedCoin}
        onChange={handleChange}
        options={options}
      />
      {selectedCoinData && <CoinData coin={selectedCoinData} />}
    </div>
  );
};
