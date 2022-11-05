import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import 'ol/ol.css'
import { osm, vector } from "./Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Controls, FullScreenControl } from "./Controls";

let styles = {
  'MultiPolygon': new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 1,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
};

const dataSetsUrls = {
  requests: [
    "/api/CessnockCityCouncil",
    "/api/LakeMacquarieCityCouncil",
    "/api/MaitlandCityCouncil",
    "/api/NewcastleCityCouncil",
    "/api/PortStephensCouncil"
  ],
  key: [
    "cessnockCityCouncil", 
    "lakeMacquarieCityCouncil",
    "maitlandCityCouncil",
    "newcastleCityCouncil",
    "portStephensCouncil"
  ]
}

const App = () => {

  const [results, setResults] = React.useState({});

  React.useEffect(() => {

    axios.all(dataSetsUrls.requests.map((endpoint) => axios.get(endpoint)))
      .then(axios.spread((...responses) => {

        let features = {}

        responses.forEach((response, index) => {
          const key = dataSetsUrls.key[index];
          features[key] = response.data;
        })

        return features
      })
      
    ).then(setResults);

  }, []);

  const [center] = useState([151.781868, -32.929066]);
  const [zoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  const [showLayer3, setShowLayer3] = useState(true);
  const [showLayer4, setShowLayer4] = useState(true);
  const [showLayer5, setShowLayer5] = useState(true);
return (
  <div>
    <Map center={fromLonLat(center)} zoom={zoom}>
      <Layers>
        <TileLayer
          source={osm()}
          zIndex={0}
        />
        {showLayer1 && results?.cessnockCityCouncil && (
          <VectorLayer
            source={vector({ features: new GeoJSON().readFeatures(results.cessnockCityCouncil, { featureProjection: get('EPSG:3857') }) })}
            style={styles.MultiPolygon}
          />
        )}
        {showLayer2 && results?.lakeMacquarieCityCouncil && (
          <VectorLayer
            source={vector({ features: new GeoJSON().readFeatures(results.lakeMacquarieCityCouncil, { featureProjection: get('EPSG:3857') }) })}
            style={styles.MultiPolygon}
          />
        )}
        {showLayer3 && results?.maitlandCityCouncil && (
          <VectorLayer
            source={vector({ features: new GeoJSON().readFeatures(results.maitlandCityCouncil, { featureProjection: get('EPSG:3857') }) })}
            style={styles.MultiPolygon}
          />
        )}
        {showLayer4 && results?.newcastleCityCouncil && (
          <VectorLayer
            source={vector({ features: new GeoJSON().readFeatures(results.newcastleCityCouncil, { featureProjection: get('EPSG:3857') }) })}
            style={styles.MultiPolygon}
          />
        )}
        {showLayer5 && results?.portStephensCouncil && (
          <VectorLayer
            source={vector({ features: new GeoJSON().readFeatures(results.portStephensCouncil, { featureProjection: get('EPSG:3857') }) })}
            style={styles.MultiPolygon}
          />
        )}
      </Layers>
      <Controls>
        <FullScreenControl />
      </Controls>
    </Map>
    <div>
      <input
        type="checkbox"
        checked={showLayer1}
        onChange={event => setShowLayer1(event.target.checked)}
      /> Cessnock City Council
    </div>
    <div>
      <input
        type="checkbox"
        checked={showLayer2}
        onChange={event => setShowLayer2(event.target.checked)}
      /> Lake Macquarie City Council
    </div>
    <div>
      <input
        type="checkbox"
        checked={showLayer3}
        onChange={event => setShowLayer3(event.target.checked)}
      /> Maitland City Council
    </div>
    <div>
      <input
        type="checkbox"
        checked={showLayer4}
        onChange={event => setShowLayer4(event.target.checked)}
      /> Newcastle City Council
    </div>
    <div>
      <input
        type="checkbox"
        checked={showLayer5}
        onChange={event => setShowLayer5(event.target.checked)}
      /> Port Stephens Council
    </div>
  </div>
  );
}
export default App;
// // client/src/App.js

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;