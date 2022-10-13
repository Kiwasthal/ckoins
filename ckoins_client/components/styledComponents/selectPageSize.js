import styled from 'styled-components';

const StyledSelectContainer = styled.div`
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #5c6664;
  overflow: hidden;
  border-radius: 0.25em;
  margin-bottom: 40px;

  ::after {
    content: '\0';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    color: #fff;
    background-color: #000;
    cursor: pointer;
    pointer-events: none;
    transition: all 0.25s ease;
  }

  :hover::after {
    color: #23b499;
  }
`;
const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -ms-progress-appearance: none;
  -moz-appearance: none;
  outline: none;
  box-shadow: none;
  border: 0 !important;
  background: #5c6664;
  background-image: none;
  ::-ms-expand {
    display: none;
  }
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
  font-size: 1em;
`;
const StyledSelectLabel = styled.label``;
const StyledSelectOption = styled.option``;

const StyledSelectPage = ({ modifyPageSize }) => {
  return (
    <StyledSelectContainer>
      <StyledSelectLabel></StyledSelectLabel>
      <StyledSelect
        onChange={e => {
          modifyPageSize(e.target.value);
        }}
        defaultValue={'Choose Page Size'}
      >
        <StyledSelectOption disabled>Choose Page Size</StyledSelectOption>
        <StyledSelectOption value={20}>20</StyledSelectOption>
        <StyledSelectOption value={40}>40</StyledSelectOption>
        <StyledSelectOption value={60}>60</StyledSelectOption>
        <StyledSelectOption value={80}>80</StyledSelectOption>
        <StyledSelectOption value={100}>100</StyledSelectOption>
      </StyledSelect>
    </StyledSelectContainer>
  );
};

export default StyledSelectPage;
