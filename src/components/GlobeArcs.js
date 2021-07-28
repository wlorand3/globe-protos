import Globe from "react-globe.gl";

function GlobeArcs() {
  // Gen random data
  const N = 30;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
    ],
  }));

  return (
    <div>
      <Globe
        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        globeImageUrl="/images/earthmap1k.jpg"
        arcsData={arcsData}
        arcColor={() => "#00FF00"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={2000}
        arcLabel={() => "swoosh"}
        arcStroke={1}
      />
    </div>
  );
}

export default GlobeArcs;
