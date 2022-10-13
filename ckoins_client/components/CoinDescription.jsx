import styled from 'styled-components';

const BottomPageContainer = styled.div`
  background-color: ${props => props.theme.main};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 30vh;
`;

const DescriptionSection = styled.div`
  width: 80%;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.4rem;
`;

const LabelText = styled.h1`
  color: #94a3b8;
  margin-right: 20px;
  font-size: 1.25rem;
`;

const SetTimespanButton = styled.button`
  background-color: #e11d48;
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #fff;
  transition: 0.2s;
  padding: 4px 8px;

  :hover {
    background-color: #fff;
    color: #e11d48;
  }
`;

function CoinDescriptionBox({ coinDescription, setTimespan }) {
  const handleClick = e => setTimespan(e.target.value);
  return (
    <BottomPageContainer>
      <DescriptionSection>
        <div style={{ display: 'flex', marginBottom: '30px' }}>
          <LabelText>Set Chart Timespan :</LabelText>
          <SetTimespanButton value={7} onClick={handleClick}>
            Last Week
          </SetTimespanButton>
          <SetTimespanButton value={14} onClick={handleClick}>
            Past Two Weeks
          </SetTimespanButton>
          <SetTimespanButton value={30} onClick={handleClick}>
            Last Month
          </SetTimespanButton>
          <SetTimespanButton value={60} onClick={handleClick}>
            Past Two Months
          </SetTimespanButton>
          <SetTimespanButton value={200} onClick={handleClick}>
            Past 200 Days
          </SetTimespanButton>
          <SetTimespanButton value={300} onClick={handleClick}>
            Last Year
          </SetTimespanButton>
        </div>
        <div dangerouslySetInnerHTML={{ __html: coinDescription }}></div>
      </DescriptionSection>
    </BottomPageContainer>
  );
}

export default CoinDescriptionBox;
