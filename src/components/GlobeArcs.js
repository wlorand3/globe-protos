import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { useHotkeys } from "react-hotkeys-hook";

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

  let currentLat = 46.8772;
  let currentLng = -96.7898;
  // const altitude = 2.5;

  useEffect(() => {
    const globeCenter = {
      lat: currentLat,
      lng: currentLng,
      // altitude: altitude,
    }; // Fargo, SD
    globeEl.current.pointOfView(globeCenter, 4000);
  }, [currentLat, currentLng]);

  useHotkeys("right", () => {
    currentLng = currentLng + 45;
    globeEl.current.pointOfView(
      {
        lat: currentLat,
        lng: currentLng,
        // altitude: altitude,
      },
      1000
    );
  });

  useHotkeys("left", () => {
    currentLng = currentLng - 45;
    globeEl.current.pointOfView(
      {
        lat: currentLat,
        lng: currentLng,
        // altitude: altitude,
      },
      1000
    );
  });

  useHotkeys(
    "up",
    () => {
      // globe doesn't fully rotate to the poles, so if lat = 90, oscillate back towards the equator
      currentLat = currentLat !== -90 ? currentLat - 30 : currentLat + 30;
      globeEl.current.pointOfView(
        {
          lat: currentLat,
          lng: currentLng,
          // altitude: altitude,
        },
        1000
      );
    },
    {
      keyup: true,
      keydown: false,
    }
  );

  useHotkeys("down", () => {
    currentLat = currentLat !== 90 ? currentLat + 30 : currentLat - 30;
    globeEl.current.pointOfView(
      {
        lat: currentLat,
        lng: currentLng,
        // altitude: altitude,
      },
      1000
    );
  });

  // useHotkeys("up", () => alert("you hit up"));
  // useHotkeys("right", () => alert("you hit right"));
  // useHotkeys("down", () => alert("you hit down"));
  // useHotkeys("left", () => alert("you hit left"));

  // ALT
  // case "up":
  //       // globe doesn't fully rotate to the poles, so if lat = 90 || -90, oscillate back towards the equator
  //       currentLat = currentLat === -90 ? currentLat + 30 : currentLat - 30;
  //       break;
  //     case "down":
  //       currentLat = currentLat === 90 ? currentLat - 30 : currentLat + 30;
  //       break;

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
        arcAltitudeAutoScale={0.5}
        arcLabel={() => tooltipHtml()}
        arcStroke={0.75}
      />
    </div>
  );
}

export default GlobeArcs;
