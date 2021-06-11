// react
import React from 'react';

// components
import Cube from './components/Cube';

// styles
import './styles/global-styles.css';

function App() {
  return (
    <>
      <header className="map-header">
        <h1>ThreeJS Virtual Globe</h1>
      </header>
      <Cube />
    </>
  );
}

export default App;