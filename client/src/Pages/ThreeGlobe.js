
import Globe from "react-globe.gl";
import { useRef } from "react";

export const ThreeGlobe = () => {
  const globeEl = useRef();

  return (
    <div className="App">
        <Globe
        pointOfView
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        // edges
        arcColor={"color"}
        //arcDashLength={() => 0.5}
        arcDashGap={(d) => 1 - (d.stroke - 0.1)}
        arcDashAnimateTime={(d) => 5000}
        arcStroke={"stroke"}
        //arcCircularResolution={64}
        // arcLabel={() => "test"}
        // labels
        labelLat={(d) => d.lat}
        labelLng={(d) => d.lng}
        labelText={(d) => d.name}
        labelSize={(d) => 0.5 + d.size}
        labelDotRadius={(d) => 0.5 + d.size}
        labelColor={() => "rgba(255, 165, 0, 0.75)"}
        labelResolution={2}
        // bars
        hexBinPointWeight="size"
        hexAltitude={(d) => d.sumWeight - 0.1 + 0.05}
        hexBinResolution={4}
        hexBinMerge={true}
        enablePointerInteraction={false}
        />
    </div>
  );
}

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// export const ThreeGlobe = () => {
//   const containerRef = useRef();

//   useEffect(() => {
//     // Create a three.js Scene object
//     const scene = new THREE.Scene();

//     // Create a three.js PerspectiveCamera object
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     // Create a three.js WebGLRenderer object
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Create a three.js TextureLoader object to load the map tiles
//     const textureLoader = new THREE.TextureLoader();

//     // Load the map tiles from the XYZ tile service
//     const texture = textureLoader.load(
//       'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
//     );

//     // Create a three.js SphereGeometry object to represent the globe
//     const geometry = new THREE.SphereGeometry(5, 32, 32);

//     // Create a three.js MeshBasicMaterial using the map tiles as the texture
//     const material = new THREE.MeshBasicMaterial({ map: texture });

//     // Create a three.js Mesh object using the globe geometry and material
//     const globe = new THREE.Mesh(geometry, material);
//     scene.add(globe);

//     // Set the position of the camera
//     camera.position.z = 10;

//     // Animate the globe
//     const animate = () => {
//       requestAnimationFrame(animate);
//       globe.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default ThreeGlobe;

// import React, { useRef } from "react";
// import { Canvas, useFrame } from '@react-three/fiber';
// import * as THREE from 'three';

// const Sphere=()=>{
//     const base=new THREE.TextureLoader().load(earthImg)
//     const ref=useRef()
//     useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01))
//     return(
//        <mesh visible castShadow ref={ref}>
//        <directionalLight intensity={0.5} />
//        <sphereGeometry attach="geometry" args={[2, 32, 32]} />
//        <meshBasicMaterial
//           map={base}
//           color="white"
//        />
//        </mesh>
//     )
//  }

// export const ThreeGlobe = () => {

// useFrame(() => {
//     // Set up the Three.js scene
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Add the globe to the scene
//     const globeGeometry = new THREE.SphereGeometry(5, 32, 32);
//     const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//     const globe = new THREE.Mesh(globeGeometry, globeMaterial);
//     scene.add(globe);

//     // Render the scene
//     renderer.render(scene, camera);
// });

// return (
//     <Canvas>
//         {/* Add the globe to the scene here */}
//     </Canvas>
// );
// }

// function Globe() {
//     useRender(() => {
//       // Set up the Three.js scene
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       const renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
  
//       // Add the globe to the scene
//       const globeGeometry = new THREE.SphereGeometry(5, 32, 32);
//       const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//       const globe = new THREE.Mesh(globeGeometry, globeMaterial);
//       scene.add(globe);
  
//       // Load the XYZ tiles as a texture
//       const texture = useTextureLoader('https://{a-c}.tile.openstreetmap.org/