import { useAxios } from '../hooks/useAxios';
import moment from 'moment';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import CoinDetailed from './CoinDetailed';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const StyledChartContainer = styled.div`
  padding-top: 18vh;

  background-color: ${props => props.theme.main};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledChartSection = styled.div`
  display: flex;
  min-height: 57vh;
  width: 80%;
`;

const ChartDiv = styled.div`
  width: 70%;
`;

function HistoryChart({ coinid, timespan, setDesc }) {
  const { response } = useAxios(`chart/${coinid}/${timespan}`, [timespan]);

  if (!response) return <div>Loading...</div>;

  const coinChartData = response.prices.map(value => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  const options = {
    response: true,
  };

  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: coinid,
        data: coinChartData.map(value => value.y),
        borderColor: '#f43f5e',
        backgroundColor: '#9f1239',
      },
    ],
  };

  return (
    <StyledChartContainer>
      <StyledChartSection>
        <ChartDiv>
          <Line options={options} data={data} />
        </ChartDiv>
        <CoinDetailed coinid={coinid} setDesc={setDesc} />
      </StyledChartSection>
    </StyledChartContainer>
  );
}

export default HistoryChart;
