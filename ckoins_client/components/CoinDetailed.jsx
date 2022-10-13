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
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const StyledPriceTxtx = styled.h4`
  color: #94a3b8;
  display: inline-block;
  font-size: 1.35rem;
  margin-bottom: 14px;
`;

const ResSpan = styled.span`
  background-color: #fff;
  padding: 2px 4px;
  color: #262626;
  margin-left: 4px;
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
          <StyledPriceTxtx>
            Current Price : <ResSpan> {current_price.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Highest Price(24h) : <ResSpan>{high_24h.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Lowest Price(24h) : <ResSpan> {low_24h.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change(24h) :
            <ResSpan> {price_change_24h_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (7d) :
            <ResSpan>{price_change_percentage_7d_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change(14d) :
            <ResSpan>{price_change_percentage_14d_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (30d) :
            <ResSpan>{price_change_percentage_30d_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (60d) :
            <ResSpan>{price_change_percentage_60d_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (200d) :
            <ResSpan>{price_change_percentage_200d_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (365d) :
            <ResSpan>{price_change_percentage_1y_in_currency.usd}$</ResSpan>
          </StyledPriceTxtx>
        </StyledDetailedCoinCointainer>
      ) : null}
    </>
  );
};

export default CoinDetailed;
