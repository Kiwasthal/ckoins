const CoinCard = ({ coin }) => {
  const { name, id, price, symbol, image, pricechange } = coin;

  return (
    <div>
      <img src={image} alt={`displaying coin : ${name}`} />
    </div>
  );
};

export default CoinCard;
