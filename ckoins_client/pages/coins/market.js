import styled from 'styled-components';
import CoinCard from '../../components/coincard';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/Searchbar';
import { useInView } from 'react-intersection-observer';
import TrendingSection from '../../components/TrendingSection';

const DataContainer = styled.div`
  background-color: '#0f172a';
  height: 100%;
`;

export default function Market({ coinsList, coinsData, topTrendingData }) {
  const [ref, inView] = useInView();

  return (
    <>
      <Navbar
        children={<SearchBar list={coinsList} inView={inView} />}
        reference={ref}
        inView={inView}
        coinsList={coinsList}
      />
      <Hero inView={inView} />
      <TrendingSection data={topTrendingData} />
      <DataContainer>
        {coinsData.map(coin => {
          return <CoinCard key={coin.id} coin={coin} />;
        })}
      </DataContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  const resList = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  );
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
  const coinsList = await resList.json();
  const coinsData = await response.json();
  const topTrendingData = await res.json();

  if (!coinsData && !topTrendingData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      coinsList,
      coinsData,
      topTrendingData: topTrendingData.coins.slice(0, 6),
    },
  };
}
