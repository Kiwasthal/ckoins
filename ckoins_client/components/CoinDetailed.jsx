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
  const { response } = useAxios(`coin/${coinid}`);

  useEffect(() => {
    if (!response) return;
    setDesc(response.detailedCoin.description);
  });

  if (!response) return;
  const { detailedCoin } = response;

  return (
    <>
      {response ? (
        <StyledDetailedCoinCointainer>
          <StyledCoinImg src={detailedCoin.image} alt="" />
          <StyledTitle>{detailedCoin.name}</StyledTitle>
          <StyledPriceTxtx>
            Current Price : <ResSpan> {detailedCoin.current_price}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Highest Price(24h) : <ResSpan>{detailedCoin.high_24h}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Lowest Price(24h) : <ResSpan> {detailedCoin.low_24h}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change(24h) :
            <ResSpan> {detailedCoin.price_change_24h_in_currency}$</ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (7d) :
            <ResSpan>
              {detailedCoin.price_change_percentage_7d_in_currency}$
            </ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change(14d) :
            <ResSpan>
              {detailedCoin.price_change_percentage_14d_in_currency}$
            </ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (30d) :
            <ResSpan>
              {detailedCoin.price_change_percentage_30d_in_currency}$
            </ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (60d) :
            <ResSpan>
              {detailedCoin.price_change_percentage_60d_in_currency}$
            </ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (200d) :
            <ResSpan>
              {detailedCoin.price_change_percentage_200d_in_currency}$
            </ResSpan>
          </StyledPriceTxtx>
          <StyledPriceTxtx>
            Price Change (365d) :
            <ResSpan>
              {detailedCoin.price_change_percentage_1y_in_currency}$
            </ResSpan>
          </StyledPriceTxtx>
        </StyledDetailedCoinCointainer>
      ) : null}
    </>
  );
};

export default CoinDetailed;
