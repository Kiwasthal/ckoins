import { useEffect, useState } from 'react';
import StyledCoinCard from './styledComponents/coincard';
import ShowMoreBtn from './ShowMoreBtn';

const coinVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(5px)',
    x: -200,
  },

  animate: i => ({
    opacity: 1,
    filter: 'blur(0)',
    x: 0,
    transition: {
      duration: 1,
      delay: i * 0.1,
    },
  }),
};

const CoinCard = ({ coin, index, controls }) => {
  const [validCoin, setValidCoin] = useState({});
  const [fetching, setFetching] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const startHover = () => setIsHovered(true);
  const stopHover = () => setIsHovered(false);

  useEffect(() => {
    const normalizeCoin = async () => {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}`
      );
      const coinData = await res.json();
      setValidCoin(coinData);
      setFetching(false);
    };
    normalizeCoin();
  }, []);

  return fetching ? (
    <div></div>
  ) : (
    <StyledCoinCard.Card
      variants={coinVariants}
      initial="hidden"
      animate={controls}
      custom={index}
      onMouseEnter={startHover}
      onMouseLeave={stopHover}
    >
      <StyledCoinCard.Content cardHovered={isHovered}>
        <StyledCoinCard.CoinImageBox>
          <StyledCoinCard.CoinImage
            src={validCoin.image.large}
            alt={`rounded icon for ${validCoin.name}`}
          />
        </StyledCoinCard.CoinImageBox>
        <StyledCoinCard.ContentBox>
          <StyledCoinCard.CoinName>
            {validCoin.name} <br></br>
            <StyledCoinCard.CoinPrice>
              {validCoin.market_data.ath.usd} $
            </StyledCoinCard.CoinPrice>
          </StyledCoinCard.CoinName>
        </StyledCoinCard.ContentBox>
      </StyledCoinCard.Content>
      <ShowMoreBtn
        cardHovered={isHovered}
        hasWrapper={true}
        path={validCoin.id}
      />
    </StyledCoinCard.Card>
  );
};

export default CoinCard;
