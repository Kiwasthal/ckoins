import styled from 'styled-components';
import Image from 'next/image';

const AlignBg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.main};
`;

const HeroContainer = styled.div`
  height: 100vh;
  width: ${props => (props.inView ? '100%' : '79.7%')};
  border: ${props => (props.inView ? '0px' : '2px')} solid white;
  border-bottom: none;
  transition: all 500ms ease;
  background-position: center;
  background-image: url('/hero.jpg');
`;

const Hero = ({ inView }) => {
  return (
    <AlignBg>
      <HeroContainer inView={inView}></HeroContainer>
    </AlignBg>
  );
};

export default Hero;
