import HistoryChart from '../../components/HistoryChart';
import Navbar from '../../components/Navbar';
import SearchBar from '../../components/Searchbar';
import CoinDescriptionBox from '../../components/CoinDescription';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useAxios } from '../../hooks/useAxios';

export default function Coin() {
  const { response, loading, error } = useAxios('coinlist');
  const [timespan, setTimespan] = useState(7);
  const [coinDescription, setCoinDescription] = useState('');
  const { ref, inView } = useInView();
  const router = useRouter();
  const { id } = router.query;

  if (!response) return;
  const { coinList } = response;

  return (
    <div>
      <Navbar
        children={<SearchBar list={coinList} inView={true} />}
        coinsList={coinList}
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
