import styled from 'styled-components';
import { motion } from 'framer-motion';

const MarketCard = styled(motion.div)`
  width: 100%;
  height: 300px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.blobSchema[props.bgcol]};
    clip-path: circle(110px at 90% 10%);
    transition: 0.5s ease-in-out;
  }

  :hover::before {
    clip-path: circle(160px at 70% -10%);
  }

  ::after {
    content: ${props => props.name};
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-style: italic;
    color: rgba(255, 255, 255, 0.4);
  }
`;

const CardImgBox = styled.div`
  position: absolute;
  top: 50%;
  transform: ${props =>
    props.cardHovered ? 'translateY(-85%)' : 'translateY(-60%)'};
  z-index: 1000;
  width: 100%;
  height: 220px;
  transition: 0.5s;
`;

const CardImg = styled.img`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 100px;
`;

const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${props => (props.cardHovered ? '150px' : '80px')};
  text-align: center;
  transition: 1s;
  z-index: 10;
`;

const CardTitle = styled.h2`
  position: relative;
  font-weight: 600;
  letter-spacing: 1;
  font-size: 1.7rem;
  color: #fff;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
`;

const CoinPrice = styled.h3`
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const CoinPriceValue = styled.span`
  text-align: center;
  margin-left: 5px;
  font-size: 1rem;
  color: #111;
  font-weight: 600;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 2px 8px;
`;

const HighPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.cardHovered ? '1' : '0')};
  visibility: ${props => (props.cardHovered ? 'visible' : 'hidden')};
  transition: 0.5s;
  transition-delay: 0.5s;
`;

const LowPriceContainer = styled(HighPriceContainer)`
  margin-top: 8px;
  transition-delay: 0.6s;
`;

const DailyPriceChangeContainer = styled(LowPriceContainer)`
  transition-delay: 0.7s;
`;

const ViewMoreBtn = styled.div`
  cursor: pointer;
  z-index: 9000;
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: 0.8s;
  transform: ${props =>
    props.cardHovered ? 'translateY(0)' : 'translateY(-100px)'};
  opacity: ${props => (props.cardHovered ? '1' : '0')};
  background-color: #262626;
  color: #fff;
  padding: 4px 8px;
  text-transform: uppercase;

  :hover {
    transform: scale(1.1);
  }
`;

const StyledMarketCard = {
  MarketCard,
  CardImgBox,
  ContentBox,
  CardImg,
  CardTitle,
  PriceBox,
  CoinPrice,
  CoinPriceValue,
  HighPriceContainer,
  LowPriceContainer,
  DailyPriceChangeContainer,
  ViewMoreBtn,
};

export default StyledMarketCard;
