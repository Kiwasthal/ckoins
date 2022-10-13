import StyledMarketCard from './styledComponents/marketcard';
import Link from 'next/link';
import { useState } from 'react';

const MarketCardVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.02,
    },
  }),
  exit: i => ({
    x: 100,
    opacity: 0,
    transition: {
      delay: i * 0.02,
    },
  }),
};

const MarketCard = ({ coin, index }) => {
  const [cardHovered, setCardHovered] = useState(false);
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 10));

  const startCardHover = () => {
    setCardHovered(true);
    setRandomNum(Math.floor(Math.random() * 10));
  };
  const stopCardHover = () => setCardHovered(false);

  return (
    <StyledMarketCard.MarketCard
      onMouseEnter={startCardHover}
      onMouseLeave={stopCardHover}
      variants={MarketCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      bgcol={randomNum}
    >
      <Link href={coin.id}>
        <StyledMarketCard.ViewMoreBtn cardHovered={cardHovered}>
          View
        </StyledMarketCard.ViewMoreBtn>
      </Link>

      <StyledMarketCard.CardImgBox cardHovered={cardHovered} index={index}>
        <Link href={coin.id}>
          <StyledMarketCard.CardImg src={coin.image} />
        </Link>
      </StyledMarketCard.CardImgBox>
      <StyledMarketCard.ContentBox cardHovered={cardHovered}>
        <StyledMarketCard.CardTitle>{coin.name}</StyledMarketCard.CardTitle>
        <StyledMarketCard.PriceBox>
          <StyledMarketCard.CoinPrice>
            Price
            <StyledMarketCard.CoinPriceValue>
              {coin.cur_price} $
            </StyledMarketCard.CoinPriceValue>
          </StyledMarketCard.CoinPrice>
        </StyledMarketCard.PriceBox>
        <StyledMarketCard.HighPriceContainer cardHovered={cardHovered}>
          <StyledMarketCard.CoinPrice>
            Highest
            <StyledMarketCard.CoinPriceValue>
              {coin.high_24} $
            </StyledMarketCard.CoinPriceValue>
          </StyledMarketCard.CoinPrice>
        </StyledMarketCard.HighPriceContainer>
        <StyledMarketCard.LowPriceContainer cardHovered={cardHovered}>
          <StyledMarketCard.CoinPrice>
            Lowest
            <StyledMarketCard.CoinPriceValue>
              {coin.low_24} $
            </StyledMarketCard.CoinPriceValue>
          </StyledMarketCard.CoinPrice>
        </StyledMarketCard.LowPriceContainer>
        <StyledMarketCard.DailyPriceChangeContainer cardHovered={cardHovered}>
          <StyledMarketCard.CoinPrice>
            24_H_Change
            <StyledMarketCard.CoinPriceValue>
              {coin.market_cap_24h} $
            </StyledMarketCard.CoinPriceValue>
          </StyledMarketCard.CoinPrice>
        </StyledMarketCard.DailyPriceChangeContainer>
      </StyledMarketCard.ContentBox>
    </StyledMarketCard.MarketCard>
  );
};

export default MarketCard;
