import { useEffect, useMemo, useState } from 'react';
import Pagination from './Pagination';

const MarketList = ({ paginationLength }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const [currentMarketData, setCurrentMarketData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMarketPageData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${currentPage}&sparkline=false`
      );
      const marketData = await res.json();
      setCurrentMarketData(marketData);
    };
    fetchMarketPageData();
    return setLoading(false);
  }, [currentPage]);
  console.log(currentMarketData);

  return (
    <>
      {!loading && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {currentMarketData.map(item => {
              return (
                <tr>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paginationLength}
        pageSize={20}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
};

export default MarketList;
