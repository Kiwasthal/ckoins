import styled from 'styled-components';

const PaginationContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  list-style-type: none;
`;

const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(225, 29, 72, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 24px;
  min-width: 32px;
  background-color: ${props =>
    props.selected ? ' rgba(225, 225, 225, 0.5)' : 'none'};
  font-weight: ${props => (props.selected ? '700' : '400')};

  :hover {
    background-color: ${props =>
      props.selected ? ' rgba(225, 225, 225, 0.5)' : 'rgba(225,225,225, 0.04)'};
    cursor: pointer;
  }
`;

const PaginationItemDots = styled(PaginationItem)`
  :hover {
    background-color: transparent;
    cursor: default;
  }
`;

const PaginationArrow = styled.div`
  ::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    display: ${props => (props.disabled ? 'none' : 'inline-block')};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
    border-right: ${props =>
      props.disabled
        ? '0.12em solid rgba(0, 0, 0, 0.43)'
        : '0.12em solid rgba(0, 0, 0, 0.87)'};
    border-top: ${props =>
      props.disabled ? 'transparent' : '0.12em solid rgba(0, 0, 0, 0.87)'};
  }

  :hover {
    background-color: ${props =>
      props.disabled
        ? '0.12em solid rgba(0, 0, 0, 0.43)'
        : '0.12em solid rgba(0, 0, 0, 0.87)'};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  }
`;

const PaginationArrowLeft = styled(PaginationArrow)`
  transform: rotate(-135deg) translate(-50%);
`;

const PaginationArrowRight = styled(PaginationArrow)`
  transform: rotate(45deg);
`;

const StyledPagination = {
  PaginationContainer,
  PaginationItem,
  PaginationItemDots,
  PaginationArrow,
  PaginationArrowRight,
  PaginationArrowLeft,
};

export default StyledPagination;
