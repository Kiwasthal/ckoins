import { FaSearch } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import Link from 'next/link';
import {
  Searchbox,
  Seach,
  SearchInputContainer,
  SearchInput,
  Close,
  SearchResults,
  SearchItem,
  SearchSymbol,
} from './styledComponents/searchbar';
import { FaArrowRight } from 'react-icons/fa';

const useInput = (initialValue, list, setFiltered) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    const { target } = e;
    setValue(target.value);
    if (!target.value) return setFiltered([]);
    const filteredValue = list.filter(item =>
      item.name.toLowerCase().startsWith(target.value)
    );
    setFiltered(filteredValue.slice(0, 5));
  };

  return {
    value,
    onChange: handleChange,
  };
};

const SearchBar = ({ list, inView }) => {
  const [filteredList, setFilteredList] = useState([]);
  const search = useInput('', list, setFilteredList);
  const [active, setActive] = useState(false);
  const openSearchBar = () => setActive(true);
  const closeSearchBar = () => {
    setActive(false);
    setFilteredList([]);
  };

  return (
    <>
      <Searchbox active={active}>
        <Seach onClick={openSearchBar}>
          <FaSearch color={'black'} />
        </Seach>
        <SearchInputContainer>
          <SearchInput placeholder="Search coins" {...search} />
        </SearchInputContainer>
        <Close onClick={closeSearchBar} active={active}>
          <GrClose color={'black'} />
        </Close>

        <SearchResults></SearchResults>
      </Searchbox>
      <SearchResults inView={inView} active={active}>
        {active &&
          filteredList.length !== 0 &&
          filteredList.map(item => {
            console.log(item);
            return (
              <Link href={`/coins/${item.id}`}>
                <SearchItem>
                  <SearchSymbol>{item.name}</SearchSymbol>
                  <FaArrowRight color="#262626" />
                </SearchItem>
              </Link>
            );
          })}
      </SearchResults>
    </>
  );
};

export default SearchBar;
