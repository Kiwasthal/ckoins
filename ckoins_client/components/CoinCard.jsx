import { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  const startHover = () => setIsHovered(true);
  const stopHover = () => setIsHovered(false);

  return (
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
            src={coin.image}
            alt={`rounded icon for ${coin.name}`}
          />
        </StyledCoinCard.CoinImageBox>
        <StyledCoinCard.ContentBox>
          <StyledCoinCard.CoinName>
            {coin.name} <br></br>
            <StyledCoinCard.CoinPrice>
              BTC_PRICE : {coin.price_btc}
            </StyledCoinCard.CoinPrice>
          </StyledCoinCard.CoinName>
        </StyledCoinCard.ContentBox>
      </StyledCoinCard.Content>
      <ShowMoreBtn cardHovered={isHovered} hasWrapper={true} path={coin.id} />
    </StyledCoinCard.Card>
  );
};

export default CoinCard;
