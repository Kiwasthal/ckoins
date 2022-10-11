import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1/2;
  width: 25%;
  background: rgba(255, 255, 255, 0.5);
  margin: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  height: 350px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: ${props => (props.cardHovered ? 1 : 0.5)};
  transform: ${props =>
    props.cardHovered ? 'translateY(-24px)' : 'translateY(6px)'};
  transition: 0.5s;
`;
const CoinImageBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 10px solid rgba(0, 0, 0, 0.6);
`;

const CoinImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentBox = styled.div`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
  margin: 20px 0 10px;
`;
const CoinName = styled.h3`
  color: #262626;
`;
const CoinPrice = styled.span`
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  text-transform: initial;
`;

const StyledCoinCard = {
  Card,
  Content,
  CoinImageBox,
  CoinImage,
  ContentBox,
  CoinName,
  CoinPrice,
};

export default StyledCoinCard;
