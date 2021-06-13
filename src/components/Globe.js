import { useEffect, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const sceneRef = useRef(null);

  useEffect(() => {
    // 1- define scene, camera, renderer and associated vars
    const width = window.innerWidth;
    const height = window.innerHeight;
    const earthTexture = "/images/land_ocean_ice_cloud_2048.jpg"; // or earthmap1k.jpg,
    const camera = new THREE.PerspectiveCamera(
      45, // view-angle in degrees
      width / height, // aspect
      0.1, // near clip
      10000 // far clip
    );
    camera.position.set(0, 0, 500);

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000); // TODO: add stars as texture

    // create renderer and add to DOM via ref
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    const current = sceneRef.current;
    current.appendChild(renderer.domElement);

    // 2- define group, geometry, texture, material, mesh to render the globe
    const globe = new THREE.Group();
    const sphere = new THREE.SphereGeometry(200, 50, 50);
    const texture = new THREE.TextureLoader().load(earthTexture);
    // associate the texture with the material
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      // color: 0x00ff00,
      // wireframe: true,
    });

    // mesh the geometry with the material
    const mesh = new THREE.Mesh(sphere, material);
    globe.add(mesh);
    // bring the globe into view
    globe.position.z = -300;

    scene.add(globe);

    // create render loop
    const animate = () => {
      requestAnimationFrame(animate); // init first frame
      globe.rotation.x -= 0.0;
      globe.rotation.y -= 0.002; // += 0.01, -= 0.02
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={sceneRef}></div>;
}

export default Globe;
