import React, { useState } from "react";
import { useFrame, useUpdate, useThree } from "react-three-fiber";

import { noise } from "./perlin";
//import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise'; 
//const perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;
import { DoubleSide } from "three";
const Terrain = ({ aspect }) => {
    const [t, setT] = useState(0.0);
    const { size } = useThree()
    const stopRender = (aspect >= 1.00 || size.width >= 750) ? window.scrollY <= 900 : aspect <= 1.00 ? window.scrollY <= 550 : false
    const mesh = useUpdate(({ geometry }) => {
      noise.seed(5);
      let pos = geometry.getAttribute("position");
      let pa = pos.array;
      const hVerts = geometry.parameters.heightSegments + 1;
      const wVerts = geometry.parameters.widthSegments + 1;

      for (let j = 0; j < hVerts; j++) {
          for (let i = 0; i < wVerts; i++) {
              const ex = 1.1;
              pa[3 * (j * wVerts + i) + 2] =
              (noise.simplex2(i / 100, j / 100 + t) +
                  noise.simplex2((i + 200) / 50, j / 50 + t) * Math.pow(ex, 1) +
                  noise.simplex2((i + 400) / 25, j / 25 + t) * Math.pow(ex, 2) +
                  noise.simplex2((i + 600) / 12.5, j / 12.5 + t) * Math.pow(ex, 3) +
                  +(noise.simplex2((i + 800) / 6.25, j / 6.25 + t) * Math.pow(ex, 4))) /
              2
              ;
          }
      }
      pos.needsUpdate = true;
    },[t]); 

  useFrame(() => {
    stopRender && setT(t + 0.001)
    //mesh.current.rotation.y += .00025
  });
  return (
  <>
    <mesh 
    ref={mesh} 
    positon={[0,0,0]}
    receiveShadow
    > 
      <sphereBufferGeometry 
        attach="geometry" 
        args={[150, 150, 75]} //20,20,100
      />
      <meshPhongMaterial
        side={DoubleSide}
        attach="material"
        color={"white"}
        specular={"blue"}
        shininess={3}
        smoothShading
      />
    </mesh>
  </>
  );
};

export default Terrain;