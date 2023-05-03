import { Suspense } from "react";
import "./App.css";
import Tile from "./components/tile/tile";

const audioFiles = [
  { url: require('./assets/river.mp3'), logo: 'fa-water' },
  { url: require('./assets/campfire.mp3'), logo: 'fa-fire' },
  { url: require('./assets/thunder.mp3'), logo: 'fa-cloud-bolt' },
  { url: require('./assets/rain.wav'), logo: 'fa-cloud-showers-heavy' },
  { url: require('./assets/wind.wav'), logo: 'fa-wind' },
  { url: require('./assets/birds.wav'), logo: 'fa-dove' },
];

function App() {
  return (
    <div className="App">
      <h1>Nature Sounds App</h1>
      <div className="tiles">
      <Suspense fallback={<div>Loading...</div>}>
        {audioFiles.map((audio, i) => <Tile key={i} logo={audio.logo} url={audio.url} />)}
      </Suspense>
      </div>
    </div>
  );
}

export default App;
