// import React from "react";

import Globe from "react-globe.gl";

function GlobeGL() {
  return (
    <div>
      <Globe
        animateIn={true}
        // backgroundImageUrl="/images/blue-night-sky.jpg"
        showGraticules={true}
        onGlobeClick={({ lat, lng }, evt) =>
          console.log(`you clicked on lat/long ${lat}, ${lng}`)
        }
      />
    </div>
  );
}

export default GlobeGL;
