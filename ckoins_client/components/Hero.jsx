import styled from 'styled-components';
import Image from 'next/image';

const AlignBg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #111827;
`;

const HeroContainer = styled.div`
  height: 100vh;
  width: ${props => (props.inView ? '100%' : '80%')};
  border: ${props => (props.inView ? '0px' : '2px')} solid white;
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
