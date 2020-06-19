import React from 'react';
import './Demos.scss';
import store from '../../store'
import { Link } from 'react-router-dom'
import VirtualPlayground from '../VirtualPlayground/VirtualPlayground'
//import { HTML } from 'drei'
//import { useLoader } from 'react-three-fiber'
//import { TextureLoader, LinearFilter } from "three"
import { useSprings, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(150px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const Demos = ({match}) => {

  const [props, set] = useSprings(store.demos.length, i => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

//const [state, setstate] = useState(false)
//const params = match && match.params.name
  return (
    <div className="demo">
      <div className="demo__wrapper">
      {store.demos.map((content, index) => (
        <div className="demo__container" key={index}> 
          <h3 className="demo__title">{content.title}</h3>
          <Link to={`/virtualplayground/${content.title.replace(/\s/g, '')}`}>
            <animated.img
              alt={`R3F ${content.title} Demo`}
              className="demo__content"
              width="288" 
              src={content.src} 
              data-canonical-src={content.dataCanonicalSrc}
              onMouseMove={({ clientX: x, clientY: y }) =>
              set(i => {
                if (i !== index) return;
                return { xys: calc(x, y) };
              })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
              transform: props[index].xys.interpolate(trans)
            }}
              />
              {/*<button className="demo__content-button" onclick={() => setstate(state = !state)}>Virual Playground</button>*/}
          </Link>
        </div>
      ))}
      </div>
        <VirtualPlayground match={match}/>
    </div>
  )
};

export default Demos;

//<mesh position={[offset - 5, 0, 0]}>
//<planeBufferGeometry attach="geometry" args={[1, 1]} />
//<meshBasicMaterial attach="material" map={images} />
//</mesh>