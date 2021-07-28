// react
import React from "react";

// components
// import Cube from "./components/Cube";
// import Globe from "./components/Globe";
// import ReactGlobe1 from "./components/ReactGlobe1";
// import GlobeGL from "./components/GlobeGL";
import GlobeArcs from "./components/GlobeArcs";

// styles
import "./styles/global-styles.css";

function App() {
  return (
    <>
      <header className="map-header">
        <h1>ThreeJS Virtual Globe</h1>
      </header>
      {/* <Cube /> */}
      {/* <Globe /> */}
      {/* <ReactGlobe1 /> */}
      {/* <GlobeGL /> */}
      <GlobeArcs />
    </>
  );
}

export default App;
