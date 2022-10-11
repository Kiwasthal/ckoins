import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const Searchbox = styled.div`
  width: ${props => (props.active ? '360px' : '60px')};
  height: 60px;
  position: relative;
  background: #fff;
  display: flex;
  justify-content: space-between;
  transition: 0.5s;
  overflow: hidden;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
`;

const Seach = styled.div`
  position: relative;
  min-width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  cursor: pointer;
`;

const SearchInputContainer = styled.div`
  position: absolute;
  left: 60px;
  width: calc(100% - 120px);
  height: 100%;
  line-height: 60px;
`;
const SearchInput = styled.input`
  color: #374151;
  position: absolute;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 1.25em;
`;

const Close = styled.div`
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

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const openSearchBar = () => setActive(true);
  const closeSearchBar = () => setActive(false);

  return (
    <Searchbox active={active}>
      <Seach onClick={openSearchBar}>
        <FaSearch color={'black'} />
      </Seach>
      <SearchInputContainer>
        <SearchInput placeholder="Search coins" />
      </SearchInputContainer>
      <Close onClick={closeSearchBar} active={active}>
        <GrClose color={'black'} />
      </Close>
    </Searchbox>
  );
};

export default SearchBar;
