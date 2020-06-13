import React, { useRef, useEffect } from 'react';
import { HTML } from 'drei';

const Plane = ({ position, rotation }) => {

  const ref = useRef()
  
  //useEffect(() => {
  //  ref.current.position.set(position)
  //  ref.current.rotation.set(rotation)
//
  //}, [position, rotation])

  return (
    <mesh 
      ref={ref} 
      receiveShadow
      position={position}
      rotation={rotation}
    >
      <planeBufferGeometry attach="geometry" args={[150, 84]} />
      <meshPhongMaterial attach="material" color="gray"/>
      <HTML>
        <div>
          <h1 className="main__plane-callasto">Callasto</h1>
        </div>
      </HTML>

    </mesh>
  )
}

export default Plane;