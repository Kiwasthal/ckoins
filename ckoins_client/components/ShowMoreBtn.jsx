import styled from 'styled-components';
import Link from 'next/link';
import { BsBoxArrowRight } from 'react-icons/bs';
import { useState } from 'react';

const ShowMoreBtnWrapper = styled.div`
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #262626;
  text-transform: uppercase;
  bottom: 25px;
  margin: 0 10px;
  opacity: ${props => (props.cardHovered ? '1' : '0.5')};
  transform: ${props =>
    props.cardHovered
      ? 'translateY(0) scale(1)'
      : 'translateY(14px) scale(0.6)'};
  transition: 0.5s;
  cursor: pointer;
`;

const BtnOutterWrapperTop = styled.div`
  display: inline-block;
  background: #fff;
  position: relative;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  width: 120px;
  height: 40px;
`;

const BtnOutterWrapperBottom = styled(BtnOutterWrapperTop)`
  width: 40px;
  left: 1px;
`;

const BtnInnerWrapperUpper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    background: #262626;
    transform: ${props => (props.btnHovered ? 'translateX(-100%)' : '0.5')};
  }
`;
const BtnInnerWrapperBottom = styled(BtnInnerWrapperUpper)`
  background: #262626;
  ::before {
    background: #fff;
    transform: ${props => (props.btnHovered ? 'translateX(100%)' : '0')};
  }
`;

const ShowMoreSpanUpper = styled.span`
  position: relative;
  transition: 0.2s;
  color: ${props => (props.btnHovered ? '#262626' : '#fff')};
  z-index: 1;
`;

const ShowMoreSpanBottom = styled.span`
  position: relative;
  transition: 0.2s;
  color: #fff;
  color: ${props => (props.btnHovered ? '#fff' : '#262626')};
  z-index: 1;
`;

const DefaultBtn = ({ btnHovered }) => {
  return (
    <>
      <BtnOutterWrapperTop>
        <BtnInnerWrapperUpper btnHovered={btnHovered}>
          <ShowMoreSpanUpper btnHovered={btnHovered}>
            Show More
          </ShowMoreSpanUpper>
        </BtnInnerWrapperUpper>
      </BtnOutterWrapperTop>
      <BtnOutterWrapperBottom>
        <BtnInnerWrapperBottom btnHovered={btnHovered}>
          <ShowMoreSpanBottom btnHovered={btnHovered}>
            <BsBoxArrowRight size={20} style={{ marginTop: '10px' }} />
          </ShowMoreSpanBottom>
        </BtnInnerWrapperBottom>
      </BtnOutterWrapperBottom>
    </>
  );
};

const ShowMoreBtn = ({ hasWrapper, cardHovered, path }) => {
  const [btnHovered, setBtnHovered] = useState(false);
  console.log(btnHovered);

  const startHovering = () => setBtnHovered(true);
  const stopHovering = () => setBtnHovered(false);

  return hasWrapper ? (
    <Link href={`/coins/${path}`}>
      <ShowMoreBtnWrapper
        cardHovered={cardHovered}
        onMouseEnter={startHovering}
        onMouseLeave={stopHovering}
      >
        <DefaultBtn btnHovered={btnHovered} />
      </ShowMoreBtnWrapper>
    </Link>
  ) : (
    <Link href={`/coins/${path}`}>
      <DefaultBtn btnHovered={btnHovered} />
    </Link>
  );
};

export default ShowMoreBtn;
