import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

function GlobeArcs() {
  const globeEl = useRef();

  // Gen random data, incl lat/longs
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
  }));

  useEffect(() => {
    const mapCenter = { lat: 59.9139, lng: 10.7522, altitude: 2.5 }; // Oslo
    globeEl.current.pointOfView(mapCenter, 4000);
  }, []);

  const tooltipHtml = () => {
    return `<div>
        <p>White text</p>
        <p style="color: red">Red text</p>
      </div>`;
  };

  return (
    <div>
      <Globe
        ref={globeEl}
        // globeImageUrl="images/land_ocean_ice_cloud_2048.jpg"
        globeImageUrl="/images/earthmap1k.jpg"
        backgroundImageUrl="/images/night-sky.png"
        arcsData={arcsData}
        arcColor={() => "#00FF00"}
        arcDashLength={0.3}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={4000}
        arcAltitudeAutoScale={0.6}
        arcLabel={() => tooltipHtml()}
        arcStroke={0.5}
      />
    </div>
  );
}

export default GlobeArcs;
