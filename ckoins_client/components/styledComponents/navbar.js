import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 9999;
`;

export const Bar = styled.nav`
  font-size: 18px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.main};
  padding-left: 20px;
  padding-right: 20px;
  transition: all 500ms ease;
  transform-origin: center;
  position: relative;
  width: ${props => (props.inView ? '100%' : '80%')};
  height: ${props => (props.inView ? '15vh' : '7.5vh')};
  top: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    align-items: center;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: 800;
`;
