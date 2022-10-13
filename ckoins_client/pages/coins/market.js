import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/Searchbar';
import { useInView } from 'react-intersection-observer';
import TrendingSection from '../../components/TrendingSection';
import { useEffect } from 'react';
import MarketList from '../../components/MarketList';
import { useAxios } from '../../hooks/useAxios';
import ErrorComponent from '../../components/ErrorPage';

export default function Market({ topTrendingData }) {
  const { response, loading, error } = useAxios('coinlist');
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(
      `   _______     ______  ______ _____   _____  _____ ____  _____  ______ \r\n  \/ ____\\ \\   \/ \/  _ \\|  ____|  __ \\ \/ ____|\/ ____\/ __ \\|  __ \\|  ____|\r\n | |     \\ \\_\/ \/| |_) | |__  | |__) | (___ | |   | |  | | |__) | |__   \r\n | |      \\   \/ |  _ <|  __| |  _  \/ \\___ \\| |   | |  | |  ___\/|  __|  \r\n | |____   | |  | |_) | |____| | \\ \\ ____) | |___| |__| | |    | |____ \r\n  \\_____|  |_|  |____\/|______|_|  \\_\\_____\/ \\_____\\____\/|_|    |______|\r\n                                                                       \r\n                                                                        `
    );
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorComponent error={error} />;
  if (!response) return;

  const { coinListData } = response;

  return (
    <>
      <Navbar
        children={<SearchBar list={coinListData} inView={inView} />}
        reference={ref}
        inView={inView}
      />
      <Hero inView={inView} />
      <TrendingSection data={topTrendingData} />
      <MarketList paginationLength={coinListData.length} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
  const topTrendingData = await res.json();

  if (!topTrendingData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      topTrendingData: topTrendingData.coins.slice(0, 6),
    },
  };
}
