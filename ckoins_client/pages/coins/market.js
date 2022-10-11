import styled from 'styled-components';
import CoinCard from '../../components/coincard';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/Searchbar';
import { useInView } from 'react-intersection-observer';

const DataContainer = styled.div`
  background-color: '#0f172a';
  height: 100%;
`;

export default function Market({ coinsData }) {
  const [ref, inView] = useInView();

  return (
    <>
      <Navbar children={<SearchBar />} reference={ref} inView={inView} />
      <Hero inView={inView} />
      <DataContainer>
        {coinsData.map(coin => {
          return <CoinCard key={coin.id} coin={coin} />;
        })}
      </DataContainer>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=150&page=1&sparkline=false`
  );
  const coinsData = await response.json();

  if (!coinsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { coinsData },
  };
}
