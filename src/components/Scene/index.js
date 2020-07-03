import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import { Stats, Stars, HTML } from 'drei';
import lerp from 'lerp';
//import OrbitControls from '../../components/Scene/OrbitControls/OrbitControls';
import Lights from './Lights/Lights';
import Pages from './Pages/Pages'
import Moon from './Moon/Moon';
import Planet from './Planet/Planet';
import store from '../../store';

const Startup = () => {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return (
    <mesh ref={ref} position={[0, 0, 200]} scale={[150, 150, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#000000" transparent />
    </mesh>
  )
}

//Renders scene via Canvas element

const PlayerScene = () => {
  const [events, setEvents] = useState()
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = e => (store.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <div className="home__player-scene">
      <Canvas 
        pixelRatio={1} //window.devicePixelRatio
        shadowMap
        concurrent
        //colorManagement
        //orthographic
        camera={{ zoom: store.zoom, position: [0, 0, 250] }}
        onCreated={({ gl, events }) => {
          //gl.toneMapping = THREE.ACESFilmicToneMapping
          //gl.outputEncoding = THREE.sRGBEncoding
          //gl.shadowMap.enabled = true
          //gl.shadowMap.type = THREE.PCFSoftShadowMap
          setEvents(events)
        }}
      >
        <Suspense fallback={<HTML center className="loading" children="Loading..." />}>
          <Planet /> 
          <Moon />
          <Lights />
          <Stars />
          <Stats />
          <Pages portal={domContent} />
          {/*<OrbitControls />*/}
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${store.pages * 100}vh` }} />
      </div>
    </div>
  )
};

export default PlayerScene;