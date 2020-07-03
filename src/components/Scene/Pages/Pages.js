import React, { useRef } from 'react';
import './Pages.scss'
import { useFrame } from "react-three-fiber";
import lerp from 'lerp';
import { HTML } from 'drei';
import { Block, useBlock } from "../../Blocks/Blocks";
import "../CustomMaterial/CustomerMaterial";
import { Text } from '../Text/Text';
import store from '../../../store';

const Plane = ({ color = "white", map, ...props }) => {
  const { viewportHeight, offsetFactor } = useBlock()
  const material = useRef()
  let last = store.top.current
  useFrame(() => {
    const { pages, top } = store
    material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
    material.current.shift = lerp(material.current.shift, (top.current - last) / 150, 0.8)
    last = top.current
  })
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 32, 32]} />
      <customMaterial ref={material} attach="material" color={color} /> {/*map={map}*/}
    </mesh>
  )
}

const X = () => {
  const ref = useRef()
  const { viewportHeight, contentMaxWidth } = useBlock()
  const aspect = 1.5
  useFrame(() => {
    const curTop = store.top.current
    const curY = ref.current.rotation.z
    const nextY = (curTop / ((store.pages - 1) * viewportHeight)) * Math.PI
    ref.current.rotation.z = lerp(curY, nextY, 0.1)
  })
  return (
    <group ref={ref} scale={[contentMaxWidth / aspect / 2 , contentMaxWidth / aspect / 2, 2]}>
      <Plane scale={[1, 0.2, 0.2]} color="#61dafb" />{/*#e2bfca*/}
      <Plane scale={[0.2, 1, 0.2]} color="#61dafb" />
    </group>
  )
}

const Content = ({ children, map }) => {
  const { 
    contentMaxWidth, 
    //canvasWidth, 
    //margin 
  } = useBlock()
  const aspect = 1.5 //15
  return (
    <group position={[0, 0, 0]}>
      <Plane scale={[contentMaxWidth / aspect, contentMaxWidth / aspect / 2, 1]} color="#049ef4" map={map} />
      {children}
    </group>
  )
}

const Pages = ({ portal }) => {

  const { 
    contentMaxWidth, 
    //mobile 
  } = useBlock()
  //const size = aspect < 1 && !mobile ? 0.65 : 1
  //const aspect = 15 //1.75
  const pixelWidth = contentMaxWidth //75
  //const aspect = 15
  return (
    <>
      <Block factor={1.5}>
          <Text 
            size={pixelWidth * 0.05} 
            position={[contentMaxWidth * 0.0020, 0, 1]} 
            color="#D40749" 
            font="/Josefin_Sans/JosefinSans_Bold.json"
          >
            REACT-THREE-FIBER
          </Text>
        </Block>
      <Block factor={0.80} offset={0}>
          <HTML 
            className="pages" 
            portal={portal} 
            style={{ 
              width: pixelWidth * 2, 
              top: '3rem'
              //textAlign: 'center'
            }}
            position={[-pixelWidth / 3.5, -3, 1]}
          >
            <p style={{top: '10rem', fontSize: pixelWidth * 0.07}}>A REACT RENDERER FOR THREE.JS</p>
          </HTML>
      </Block>
      <Block factor={2.0} offset={1}>
        <Content>
          <HTML
            className="pages" 
            //center
            portal={portal}
            style={{ width: pixelWidth * 1.75, fontSize: pixelWidth * 0.025 }} 
            position={[-pixelWidth / 2.5, pixelWidth / 7, 1]}
          > 
            <div className="pages__description">
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
      {/*<Block factor={1.5} offset={2}>
        <HTML 
          className="pages" 
          //center
          portal={portal}
          style={{ width: pixelWidth * 1.75, fontSize: pixelWidth * 0.025 }}
          position={[-pixelWidth / 2.5, pixelWidth / 7, 1]}
        >
          <h1>Demos</h1>
        </HTML>
      </Block>*/}
      <Block factor={2} offset={2}>
        <Content>
          <Block factor={-3.5}>
            <X />
          </Block>
          <HTML 
            className="pages" 
            //center
            portal={portal}
            style={{ width: pixelWidth * 1.75, fontSize: pixelWidth * 0.025 }} 
            position={[-pixelWidth / 2.5, pixelWidth / 7, 1]}
          >
            <div className="pages__description">
              <h1 className="pages__description-title">Fundementals</h1>
              <ol>
                <li>Before you start, make sure you have a <a href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene">basic grasp of Threejs.</a> </li>
                <li>When you know what a scene is, a camera, mesh, geometry and material, more or less, fork the demo sandbox on the frontpage, try out some of the things you learn here.</li>
                <li>Don't break your head, three-fiber is Threejs, it does not introduce new rules or assumptions. If you see a snippet somewhere and you don't know how to make it declarative yet, use it 1:1 as it is.</li>
              </ol>
              <h2>Some Reading Material:</h2>
              <ul>
                <li><a className="pages__docs-link" href="https://threejs.org/docs/">Threejs-docs</a></li>
                <li><a className="pages__docs-link" href="https://threejs.org/examples/">Threejs-examples</a></li>
                <li><a className="pages__docs-link" href="https://threejsfundamentals.org/">Threejs-fundamentals</a></li>
                <li><a className="pages__docs-link" href="https://discoverthreejs.com/">Discover Threejs</a></li>
                <li><a className="pages__docs-link" href="https://discoverthreejs.com/tips-and-tricks/">Do's and don'ts</a> for performance and best practices</li>
                <li><a className="pages__docs-link" href="https://alligator.io/react/react-with-threejs">react-three-fiber</a> alligator.io tutorial by <a href="https://twitter.com/dghez_">@dghez_</a></li>
              </ul>
            </div>
          </HTML>
        </Content>
      </Block>
      <Block factor={2.5} offset={3}>
        <HTML 
            className="pages" 
            //center
            portal={portal}
            style={{ width: pixelWidth * 1.75, fontSize: pixelWidth * 0.025 }} 
            position={[-pixelWidth / 3, pixelWidth / 7, 1]}
        >
          <div className="pages__code-container">
            <h1 className="pages__description-title">GET STARTED</h1>
            <div className="pages__code">
              <h3>$ npm install three react-three-fiber</h3>
              <h3>$ yarn three react-three-fiber</h3>
            </div>
          <iframe
            title='Basic Demo'
            className="pages__iframe"
            src="https://codesandbox.io/embed/rrppl0y8l4"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
          </div>
        </HTML>
      </Block>
      <Block factor={1.5} offset={4}>
        <Block factor={2}>
          <X />
        </Block>
        <HTML 
          className="pages" 
          //center
          portal={portal}
          style={{ width: pixelWidth * 1.75, fontSize: pixelWidth * 0.025 }} 
          position={[-pixelWidth / 3, pixelWidth / 7, 1]}
        >
          <div className="pages__footer">
            <div className="pages__docs-container">
              <h1 className="pages__footer-title">Docs</h1>
              <div className="pages__footer-links">
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Installation</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Main Concepts</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">API Reference</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Hooks</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Testing</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Contributing</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">FAQ</a>
              </div>
            </div>
            <div className="pages__community-container">
              <h1 className="pages__footer-title">Community</h1>
              <div className="pages__footer-links">
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Code Of Conduct</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Community Resources</a>
              </div>
            </div>
            <div className="pages__more-container">
              <h1 className="pages__footer-title">More</h1>
              <div className="pages__footer-links">
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Tutorial</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Blog</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">Acknwoledgements</a>
              <a className="pages__link" href={store.testLink} rel="noopener noreferrer" target="_blank">React Native</a>
              </div>
            </div>
          </div>
        </HTML>
      </Block>
    </>
  )
}

export default Pages;