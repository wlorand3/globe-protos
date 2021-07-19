import { useEffect, useRef } from "react";

import * as THREE from "three";

function Cube() {
  // 0- create a ref for your ThreeJS scene
  const sceneRef = useRef(null);

  // Stuff THREE js code into a useEffect ala componentDidMount
  useEffect(() => {
    // 1- define scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, // viw-angle / field-of-view in degrees
      window.innerWidth / window.innerHeight, // aspect
      0.1, // near clip
      1000 // far clip
    );
    const renderer = new THREE.WebGLRenderer();

    // 2- set size and (direct) render to the DOM
    renderer.setSize(window.innerWidth, window.innerHeight);

    // document.body.appendChild(renderer.domElement); // direct DOM access
    const current = sceneRef.current;
    current.appendChild(renderer.domElement);

    // 3- define geometry, material and mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth (sphere geom for globe)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    }); // this mesh material not affected by lights
    const cube = new THREE.Mesh(geometry, material); // mesh (v) them together

    // 4- add the cube to the scene and move the camera out of the way (set camera position)
    scene.add(cube);
    camera.position.z = 3;

    // 5- KEY: render the scene with an animation loop
    const animate = () => {
      requestAnimationFrame(animate); // init first frame
      cube.rotation.x += 0.01; // rotate on every frame - makes animation loop
      cube.rotation.y += 0.01;
      renderer.render(scene, camera); // render the renderer
    };

    // 6- handle resize // TODO: do this in a more react-y way
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // direct DOM method of adding event listener to window
    window.addEventListener("resize", handleResize);

    animate();

    // useEffect cleanup // todo: remove the event listener too ?!
    return () => current.removeChild(renderer.domElement);
  }, []);

  return <div ref={sceneRef}></div>;
}

export default Cube;
