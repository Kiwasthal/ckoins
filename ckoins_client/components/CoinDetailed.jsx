import { useAxios } from '../hooks/useAxios';
import styled from 'styled-components';
import { useEffect } from 'react';

const StyledDetailedCoinCointainer = styled.section`
  display: flex;
  flex-direction: column;
  width: auto;
  flex: 1;
  align-items: center;
`;

const StyledCoinImg = styled.img`
  height: 120px;
  width: 120px;
`;

const StyledTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
`;

const CoinDetailed = ({ coinid, setDesc }) => {
  const { response } = useAxios(
    `coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );

  useEffect(() => {
    if (!response) return;
    setDesc(response.description.en);
    console.log(response);
  });

  if (!response) return;

  const {
    current_price,
    high_24h,
    low_24h,
    price_change_24h_in_currency,
    price_change_percentage_7d_in_currency,
    price_change_percentage_14d_in_currency,
    price_change_percentage_30d_in_currency,
    price_change_percentage_60d_in_currency,
    price_change_percentage_200d_in_currency,
    price_change_percentage_1y_in_currency,
  } = response.market_data;

  return (
    <>
      {response ? (
        <StyledDetailedCoinCointainer>
          <StyledCoinImg src={response.image.large} alt="" />
          <StyledTitle>{response.name}</StyledTitle>
          <StyledTitle>{current_price.usd}$</StyledTitle>
          <StyledTitle>{high_24h.usd}$</StyledTitle>
          <StyledTitle>{low_24h.usd}$</StyledTitle>
          <StyledTitle>{price_change_24h_in_currency.usd}$</StyledTitle>
          <StyledTitle>
            {price_change_percentage_7d_in_currency.usd}$
          </StyledTitle>
          <StyledTitle>
            {price_change_percentage_14d_in_currency.usd}$
          </StyledTitle>
          <StyledTitle>
            {price_change_percentage_30d_in_currency.usd}$
          </StyledTitle>
          <StyledTitle>
            {price_change_percentage_60d_in_currency.usd}$
          </StyledTitle>
          <StyledTitle>
            {price_change_percentage_200d_in_currency.usd}$
          </StyledTitle>
          <StyledTitle>
            {price_change_percentage_1y_in_currency.usd}$
          </StyledTitle>
        </StyledDetailedCoinCointainer>
      ) : null}
    </>
  );
};

export default CoinDetailed;
