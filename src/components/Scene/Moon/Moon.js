import React, { useRef } from 'react'
import { DoubleSide } from "three";
import { useFrame, useThree } from 'react-three-fiber'

const Sphere = () => {
  const ref = useRef()
  const { size } = useThree()

  let theta = 0;
  useFrame(() => {
    let r = Math.round(size.width * 0.15); 
    let dTheta = 2 * Math.PI / 4000;

    theta += dTheta;
    
    ref.current.position.x = r * Math.cos(theta);
    ref.current.position.z = r * Math.sin(theta); 
})

  return (
    <mesh 
      ref={ref}
      position={[0, 0, 0]}
      castShadow 
      receiveShadow
    >
      <sphereBufferGeometry 
        attach="geometry" 
        args={[
          Math.round(size.width * 0.01), 
          Math.round(size.width * 0.01), 
          Math.round(size.width * 0.04)
        ]}
      />
      <meshLambertMaterial 
        attach="material" 
        //side={DoubleSide}
        color={"white"}
        specular={"blue"}
        shininess={3}
        smoothShading
      />
    </mesh>
  )
}

export default Sphere