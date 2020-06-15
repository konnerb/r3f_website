import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const Cube = () => {
  const ref = useRef()

  let theta = 0;
  useFrame(() => {
    let r = 40;
    let dTheta = 2 * Math.PI / 3000;

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
      <sphereBufferGeometry attach="geometry" args={[4, 4, 25]} />
      <meshLambertMaterial 
        attach="material" 
        //side={THREE.DoubleSide} 
      />
    </mesh>
  )
}

export default Cube