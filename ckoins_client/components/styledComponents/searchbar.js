import styled from 'styled-components';

export const Searchbox = styled.div`
  width: ${props => (props.active ? '360px' : '60px')};
  position: relative;
  height: 60px;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
  overflow: hidden;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
`;

export const Seach = styled.div`
  position: relative;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
`;

export const SearchInputContainer = styled.div`
  position: absolute;
  left: 60px;
  width: calc(100% - 120px);
  height: 100%;
  line-height: 60px;
`;
export const SearchInput = styled.input`
  color: #374151;
  position: absolute;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 1.25em;
`;

export const Close = styled.div`
  position: relative;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  cursor: pointer;
  transform: ${props => (props.active ? 'scale(1)' : 'scale(0)')};
  transition: 0.5s;
  transition-delay: 0.5s;
`;

export const SearchResults = styled.ul`
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: ${props => (props.inView ? '100px' : '67px')};
  right: 1.25rem;
  width: 360px;
  transition: 0.5s;
`;

export const SearchItem = styled.li`
  cursor: pointer;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid grey;
  transition: 0.2s;
  :hover {
    background-color: #cbd5e1;
  }
`;

export const SearchSymbol = styled.h4`
  color: #262626;
  font-weight: 600;
`;
