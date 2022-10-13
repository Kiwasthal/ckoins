function CoinDescriptionBox({ coinDescription, setTimespan }) {
  const handleClick = e => setTimespan(e.target.value);
  return (
    <>
      <div>
        <button value={7} onClick={handleClick}>
          7
        </button>
        <button value={14} onClick={handleClick}>
          14
        </button>
        <button value={30} onClick={handleClick}>
          30
        </button>
        <button value={60} onClick={handleClick}>
          60
        </button>
        <button value={200} onClick={handleClick}>
          200
        </button>
        <button value={300} onClick={handleClick}>
          365
        </button>
      </div>
      <div dangerouslySetInnerHTML={{ __html: coinDescription }}></div>
    </>
  );
}

export default CoinDescriptionBox;
