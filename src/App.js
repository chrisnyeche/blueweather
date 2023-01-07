import "./App.css";
import "./index.css";
import Card from "./components/card";
import bw from "./images/bw.png";

const App = () => {


  return (
    <main>
      <div className="mt-3">
        <h5 class="text-center animate-character fw-bolder styling">
          <span><img src={bw} className="img-fluid" width={'75px'} alt="blueweather" /></span>
          BLUE WEATHER
        </h5>
      </div>
      <h2 className="fw-bolder display-6 text-white text-center mt-5 styling1"> KNOW YOUR WEATHER CONDITION</h2>
      <Card />
    </main>
  );
};

export default App;
