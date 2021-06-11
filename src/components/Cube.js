import { useEffect, useRef } from "react";

import * as THREE from "three";

function Cube() {
  // Stuff THREE js code into a useEffect ala componentDidMount
  useEffect(() => {
    // 1- define scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // field-of-view in degrees
      window.innerWidth / window.innerHeight, // aspect
      0.1, // near
      1000 // far
    );
    const renderer = new THREE.WebGLRenderer();

    // 2- set size and (direct) render to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 3- define geometry, material and mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    }); // not affected by lights
    const cube = new THREE.Mesh(geometry, material);

    // 4- add the cube to the scene and move the camera out of the way
    scene.add(cube);
    camera.position.z = 5;

    // 5- render the scene with an animation loop
    const animate = () => {
      requestAnimationFrame(animate); // init
      cube.rotation.x += 0.01; // rotate on every frame
      cube.rotation.y += 0.01;
      renderer.render(scene, camera); // render the renderer
    };

    animate();
  }, []);

  return <div></div>;
}

export default Cube;
