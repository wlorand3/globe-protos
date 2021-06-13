import { useEffect, useRef } from "react";

import * as THREE from "three";

// import world from "../assets/images/land_ocean_ice_cloud_2048.jpg";

function Globe() {
  const sceneRef = useRef(null);

  useEffect(() => {
    // 1- define scene, camera, renderer and associated vars
    const width = window.innerWidth;
    const height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(
      45, // view-angle / field-of-view in degrees
      width / height, // aspect
      0.1, // near clip
      10000 // far clip
    );
    camera.position.set(0, 0, 500);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000); // green (vs black (0x000)
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const current = sceneRef.current;
    current.appendChild(renderer.domElement);

    // 2- define group, geometry, mesh, loader, group to render the globe
    const globe = new THREE.Group();
    scene.add(globe);

    const sphere = new THREE.SphereGeometry(200, 50, 50);

    // load the texture and associate with the material
    // const texture = new THREE.TextureLoader().load(
    //   "../assets/images/land_ocean_ice_cloud_2048.jpg"
    // );
    // const material = new THREE.MeshBasicMaterial({
    //   map: texture,
    // });
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });

    // mesh the sphere with the material

    const mesh = new THREE.Mesh(sphere, material);
    globe.add(mesh);

    // bring the globe into view
    globe.position.z = -300;

    const animate = () => {
      requestAnimationFrame(animate); // init first frame
      // cube.rotation.x += 0.01; // rotate on every frame - makes animation loop
      // cube.rotation.y += 0.01;
      renderer.render(scene, camera); // render the renderer -- key line!!
    };

    // invoke
    animate();
  }, []);

  return <div ref={sceneRef}>{/* <img src={world} alt="world" /> */}</div>;
}

export default Globe;
