import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAxios } from '../hooks/useAxios';
import MarketCard from './MarketCard';
import Pagination from './Pagination';
import StyledSelectPage from './styledComponents/selectPageSize';

const StyledMarketSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.main};
`;

const StyledMarketCardContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: repeat(5, 1fr);
  row-gap: 15px;
  gap: 20px;
`;

const StyledMarketTitle = styled.h1`
  font-size: 4rem;
  color: #fff;
  margin-bottom: 60px;
`;

const MarketList = ({ paginationLength }) => {
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const { response, loading } = useAxios(
    `pagination/${pageSize}/${currentPage}`,
    [pageSize, currentPage]
  );
  if (!response) return;
  const { paginationList } = response;

  return (
    <StyledMarketSection>
      <StyledMarketTitle>MARKET</StyledMarketTitle>
      <StyledSelectPage modifyPageSize={setPageSize} />
      <StyledMarketCardContainer>
        <AnimatePresence mode="wait">
          {paginationList.map((coin, index) => {
            return <MarketCard key={coin.id} coin={coin} index={index} />;
          })}
        </AnimatePresence>
      </StyledMarketCardContainer>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paginationLength}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </StyledMarketSection>
  );
};

export default MarketList;
