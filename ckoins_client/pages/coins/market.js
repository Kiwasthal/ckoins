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
  if (!response) return;

  const { coinList } = response;

  return (
    <>
      {error ? (
        <ErrorComponent error={error} />
      ) : (
        <>
          <Navbar
            children={<SearchBar list={coinList} inView={inView} />}
            reference={ref}
            inView={inView}
          />
          <Hero inView={inView} />
          <TrendingSection data={topTrendingData} />
          <MarketList paginationLength={coinList.length} />
        </>
      )}
    </>
  );
}
