import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader, Dom } from "react-three-fiber"
import lerp from 'lerp'
import { TextureLoader, LinearFilter } from "three"
import Sphere from './Sphere/Sphere'
import Lights from './Lights/Lights';
import OrbitControls from '../../components/Scene/OrbitControls/OrbitControls';
import { Stats, Stars, HTML } from 'drei';
import Terrain from './Terrain';
import Demos from '../Demos/Demos'
import store from '../../store'
import { Block, useBlock } from "../Blocks/Blocks"
import "./CustomMaterial/CustomerMaterial"
import * as THREE from 'three'

function Plane({ color = "white", map, ...props }) {
  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  let last = store.top.current
  useFrame(() => {
    const { pages, top } = store
    material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
    material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.1)
    last = top.current
  })
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial ref={material} attach="material" color={color} /> {/*map={map}*/}
    </mesh>
  )
}

function Cross() {
  const ref = useRef()
  const { viewportHeight } = useBlock()
  useFrame(() => {
    const curTop = store.top.current
    const curY = ref.current.rotation.z
    const nextY = (curTop / ((store.pages - 1) * viewportHeight)) * Math.PI
    ref.current.rotation.z = lerp(curY, nextY, 0.1)
  })
  return (
    <group ref={ref} scale={[2, 2, 2]}>
      <Plane scale={[1, 0.2, 0.2]} color="#e2bfca" />
      <Plane scale={[0.2, 1, 0.2]} color="#e2bfca" />
    </group>
  )
}

function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
  return (
    <group position={[0, 0, 0]}> {/*alignRight * (left ? -1 : 1),0,0*/}
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" map={map} />
      {children}
    </group>
  )
}

function Stripe() {
  const { contentMaxWidth } = useBlock()
  return (
    <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#e3f6f5" />
  )
}

function Pages() {
  const textures = useLoader(TextureLoader, store.content.images)
  const [img1, img2, img3] = textures.map(texture => ((texture.minFilter = LinearFilter), texture))
  const { contentMaxWidth, mobile } = useBlock()
  const aspect = 1.75
  const pixelWidth = contentMaxWidth * 75 //store.zoom
  return (
    <>
      {/* First section */}
      <Block factor={1.5} offset={0}>
        <Content>
          <HTML 
            className="injectHTML" 
            style={{ width: pixelWidth / (mobile ? 1 : 2)}}  
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}> {/*position={[mobile ? -contentMaxWidth / 2 : 0, -contentMaxWidth / 2 / aspect - 0.4, 1]}*/}
            The substance can take you to heaven but it can also take you to hell.
            <div className="injectHTML__box"></div>
          </HTML>
        </Content>
      </Block>
      {/* Second section */}
      <Block factor={2.0} offset={1}>
        <Content>
          <HTML 
            className="injectHTML" 
            style={{ width: pixelWidth / (mobile ? 1 : 2)}} 
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            We’ve found that the people whose EEG doesn’t show any alpha-wave activity when they’re relaxed aren’t likely to respond significantly to the substance.
          </HTML>
        </Content>
      </Block>
      {/* Stripe 
      <Block factor={-1.0} offset={1}>
        <Stripe />
      </Block>
      {/* Last section*/}
      <Block factor={1.5} offset={2}>
        <Content>
          <Block factor={-0.5}>
            <Cross />
          </Block>
          <HTML 
            className="injectHTML" 
            style={{ width: pixelWidth / (mobile ? 1 : 2)}} 
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </HTML>
        </Content>
      </Block>
      <Block factor={2.0} offset={3}>
        <Content>
          <Block factor={-0.5}>
            <Cross />
          </Block>
          <HTML 
            className="injectHTML" 
            style={{ width: pixelWidth / (mobile ? 1 : 2)}} 
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </HTML>
        </Content>
      </Block>
      <Block factor={1.5} offset={4}>
        <Content>
          <Block factor={-0.5}>
            <Cross />
          </Block>
          <HTML 
            className="injectHTML" 
            style={{ width: pixelWidth / (mobile ? 1 : 2)}} 
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </HTML>
        </Content>
      </Block>
      <Block factor={2.0} offset={5}>
        <Content>
          <Block factor={-0.5}>
            <Cross />
          </Block>
          <HTML 
            className="injectHTML" 
            style={{width: pixelWidth / (mobile ? 1 : 2)}} 
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </HTML>
        </Content>
      </Block>
      <Block factor={1.5} offset={6}>
        <Content>
          <Block factor={-0.5}>
            <Cross />
          </Block>
          <HTML 
            className="injectHTML" 
            style={{ width: pixelWidth / (mobile ? 1 : 2)}} 
            position={[-contentMaxWidth / 2, -contentMaxWidth / 2 / aspect - 0.4, 1]}>
            Education and enlightenment.
          </HTML>
        </Content>
      </Block> 
    </>
  )
}

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return (
    <mesh ref={ref} position={[0, 0, 200]} scale={[100, 100, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color="#dfdfdf" transparent />
    </mesh>
  )
}

const PlayerScene = () => {

  const scrollArea = useRef()
  const onScroll = e => (store.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <div className="home__player-scene">
      <Canvas 
        pixelRatio={1} //window.devicePixelRatio
        //shadowMap
        concurrent
        //orthographic
        camera={{ zoom: 6, position: [0, 0, 200] }}
        //onCreated={({ gl }) => {
        //  //gl.toneMapping = THREE.ACESFilmicToneMapping
        //  //gl.outputEncoding = THREE.sRGBEncoding
        //  //gl.shadowMap.enabled = true
        //  gl.shadowMap.type = THREE.PCFSoftShadowMap
        //}}
      >
        <Suspense fallback={<HTML center className="loading" children="Loading..." />}>
          <Terrain /> 
          <Sphere />
          <Lights />
          <Stats />
          <OrbitControls />
          <Stars 
            //depth={-50}  
            //radius={25}
            //count={75000}  
            //factor={5}   
          />
          <Pages />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        { new Array(store.sections).fill().map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: `${(store.pages / store.sections) * 100}vh` }} />
        ))}
      </div>
    </div>
  )
};

export default PlayerScene;