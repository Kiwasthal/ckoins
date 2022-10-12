import styled from 'styled-components';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CoinCard from './CoinCard';

const TrendingSec = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.main};
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(30% at right 50%);
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 10% 40%);
  }
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  margin-top: 50px;
  letter-spacing: 5px;
`;

const TrendingContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px 0;
`;

const TrendingSection = ({ data }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    inView ? controls.start('animate') : controls.start('hidden');
  }, [inView, controls]);

  return (
    <TrendingSec>
      <StyledHeader>TOP TRENDING</StyledHeader>
      <TrendingContainer ref={ref}>
        {data.map((coin, i) => {
          return (
            <CoinCard
              key={coin.item.id}
              index={i}
              coin={coin.item}
              controls={controls}
            />
          );
        })}
      </TrendingContainer>
    </TrendingSec>
  );
};

export default TrendingSection;
