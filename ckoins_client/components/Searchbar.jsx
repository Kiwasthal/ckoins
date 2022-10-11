import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import {
  Searchbox,
  Seach,
  SearchInputContainer,
  SearchInput,
  Close,
} from './styledComponents/searchbar';

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
