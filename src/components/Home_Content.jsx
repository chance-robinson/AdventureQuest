import "./Home_Content.css";
import { homeData } from "../assets/homeData";

const Home_Content = () => {
  return (
    <div className="home-content">
      <h3 className="divider">Latest News</h3>
      {homeData.map((data, index) => (
        <div key={index} className="content-info">
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home_Content;
