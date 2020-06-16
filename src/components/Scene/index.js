import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader} from "react-three-fiber"
import lerp from 'lerp'
import { TextureLoader, LinearFilter } from "three"
import Sphere from './Sphere/Sphere'
import Lights from './Lights/Lights';
import OrbitControls from '../../components/Scene/OrbitControls/OrbitControls';
import { Stats, Stars, HTML } from 'drei';
import Terrain from './Terrain';
import Demos from '../Demos/Demos';
import store from '../../store';
import { Block, useBlock } from "../Blocks/Blocks";
import "./CustomMaterial/CustomerMaterial";
import * as THREE from 'three';

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
      <Plane scale={[1, 0.2, 0.2]} color="#61dafb" />{/*#e2bfca*/}
      <Plane scale={[0.2, 1, 0.2]} color="#61dafb" />
    </group>
  )
}

function Content({ left, children, map }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
  return (
    <group position={[0, 0, 0]}> {/*alignRight * (left ? -1 : 1),0,0*/}
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#049ef4" map={map} /> {/*#bfe2ca */}
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
  //const textures = useLoader(TextureLoader, store.content.images)
  //const [img1, img2, img3] = textures.map(texture => ((texture.minFilter = LinearFilter), texture))
  const { contentMaxWidth, mobile } = useBlock()
  const aspect = 1.75
  const pixelWidth = contentMaxWidth * 75 //store.zoom
  return (
    <>
      {/* First section */}
      <Block factor={1.5} offset={0}>
          <HTML 
            className="injectHTML" 
            zIndexRange={[4, 0]}  
            style={{ width: '100%', textAlign: 'center', fontSize: '3rem'}} //2
            position={[-contentMaxWidth / 2 + 1.75, contentMaxWidth / 2 / aspect - 2, 1]}> {/*position={[mobile ? -contentMaxWidth / 2 : 0, -contentMaxWidth / 2 / aspect - 0.4, 1]}*/}
            <h1>R3F</h1>
            <p>A REACT RENDERER FOR THREE.JS</p>
          </HTML>
      </Block>
      {/* Second section */}
      <Block factor={2.0} offset={1}>
        <Content>
          <HTML
            className="injectHTML" 
            zIndexRange={[4, 0]}  
            //style={{ width: pixelWidth / (mobile ? 1 : 1)}} //2
            position={[-contentMaxWidth / 2, contentMaxWidth / 2 / aspect - 0.4, 1]}>
            <div className="injectHTML__description">
              <h2>Why</h2>
              <p>{store.content.why}</p>
              <h2>Does it have limitations?</h2>
              <p>{store.content.limitations}</p>
              <h2>Is it slower than raw Threejs?</h2>
              <p>{store.content.isItSLower}</p>
            </div>

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
            zIndexRange={[4, 0]}  
            style={{ width: pixelWidth / (mobile ? 1 : 1)}} //2
            position={[-contentMaxWidth / 2, contentMaxWidth / 2 / aspect - 0.4, 1]}
          >
            <div className="injectHTML__description">
              <h2>Fundementals</h2>
              <ol>
                <li>Before you start, make sure you have a <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene">basic grasp of Threejs.</a> </li>
                <li>When you know what a scene is, a camera, mesh, geometry and material, more or less, fork the demo sandbox on the frontpage, try out some of the things you learn here.</li>
                <li>Don't break your head, three-fiber is Threejs, it does not introduce new rules or assumptions. If you see a snippet somewhere and you don't know how to make it declarative yet, use it 1:1 as it is.</li>
              </ol>
              <h3>Some Reading Material:</h3>
              <ul>
                <li><a href="https://threejs.org/docs/">Threejs-docs</a></li>
                <li><a href="https://threejs.org/examples/">Threejs-examples</a></li>
                <li><a href="https://threejsfundamentals.org/">Threejs-fundamentals</a></li>
                <li><a href="https://discoverthreejs.com/">Discover Threejs</a></li>
                <li><a href="https://discoverthreejs.com/tips-and-tricks/">Do's and don'ts</a>for performance and best practices</li>
                <li><a href="https://alligator.io/react/react-with-threejs">react-three-fiber</a>alligator.io tutorial by <a href="https://twitter.com/dghez_">@dghez_</a></li>
              </ul>
            </div>
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
            zIndexRange={[4, 0]}  
            style={{ width: pixelWidth / (mobile ? 1 : 1)}} //2
            position={[-contentMaxWidth / 2, contentMaxWidth / 2 / aspect - 0.4, 1]}
          >
            <Demos />
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
            zIndexRange={[4, 0]}  
            style={{ width: pixelWidth / (mobile ? 1 : 1)}} //2
            position={[-contentMaxWidth / 2, contentMaxWidth / 2 / aspect - 0.4, 1]}>
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
        shadowMap
        concurrent
        //orthographic
        camera={{ zoom: 6.5, position: [0, 0, 200] }}
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
          <OrbitControls />
          <Stars 
          //depth={-50}  
          //radius={50}
          //count={75000}  
          //factor={5}   
          />
          <Stats />
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