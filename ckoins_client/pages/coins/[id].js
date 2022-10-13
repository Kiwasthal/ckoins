import HistoryChart from '../../components/HistoryChart';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/Searchbar';
import CoinDescriptionBox from '../../components/CoinDescription';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Coin({ coinsList }) {
  const [timespan, setTimespan] = useState(7);
  const [coinDescription, setCoinDescription] = useState('');
  const { ref, inView } = useInView();
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Navbar
        children={<SearchBar list={coinsList} inView={true} />}
        coinsList={coinsList}
        reference={ref}
        inView={inView}
      />
      <HistoryChart
        coinid={id}
        timespan={timespan}
        setDesc={setCoinDescription}
      />
      <CoinDescriptionBox
        coinDescription={coinDescription}
        setTimespan={setTimespan}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const resList = await fetch(`https://api.coingecko.com/api/v3/coins/list`);

  const coinsList = await resList.json();

  return {
    props: {
      coinsList,
    },
  };
}
