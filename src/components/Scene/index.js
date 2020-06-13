import React, { Suspense } from 'react';
import Sphere from './Sphere/Sphere'
import Lights from './Lights/Lights';
//import OrbitControls from '../../components/PlayerScene/OrbitControls/OrbitControls';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import { Stats, Stars } from 'drei';
import Terrain from './Terrain';

//softShadows()

const PlayerScene = () => (
    <div className="home__player-scene">
      <Canvas 
        //pixelRatio={window.devicePixelRatio}
        shadowMap
        camera={{ position: [0, 0, 200] }}
        //onCreated={({ gl }) => {
        //  //gl.toneMapping = THREE.ACESFilmicToneMapping
        //  //gl.outputEncoding = THREE.sRGBEncoding
        //  //gl.shadowMap.enabled = true
        //  gl.shadowMap.type = THREE.PCFSoftShadowMap
        //}}>
      >
          <Terrain /> 
          <Sphere />
          <Lights />
          {/*<OrbitControls />*/}
          <Stars />
          <Stats />
      </Canvas>
    </div>
)

export default PlayerScene;