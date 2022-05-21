import axios from "axios";
import Image from "next/image";

const CoinList = ({ coinData }) => {
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div key={coin.rank}>
            <h1> {coin.name} </h1>
            <img src={coin.icon} alt="" />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinList;
