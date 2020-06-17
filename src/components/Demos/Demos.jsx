import React, { useState } from 'react';
import './Demos.scss';
import store from '../../store'
import { Link } from 'react-router-dom'
import VirtualPlayground from '../VirtualPlayground/VirtualPlayground'
import { HTML } from 'drei'
import { useLoader } from 'react-three-fiber'
//import { TextureLoader, LinearFilter } from "three"

const Demos = () => {
//const [state, setstate] = useState(false)

  return (
    <div className="demo">
    {store.demos.map((content, i) => (
      <div className="demo__container" key={i}> 
        <h3 className="demo__title">{content.title}</h3>
          <img
            alt={`R3F ${content.title} Demo`}
            className="demo__content"
            width="288" 
            //src={content.src} 
            data-canonical-src={content.dataCanonicalSrc}
            />
          {/*<Link to={`/virtualplayground/${content.title.replace(/\s/g, '')}`}>
            <button className="demo__content-button" onclick={() => setstate(state = !state)}>Virual Playground</button>
          </Link>
      
      {state && <VirtualPlayground /> }*/}
      </div>
    ))}
    </div>
  )
};

export default Demos;

//<mesh position={[offset - 5, 0, 0]}>
//<planeBufferGeometry attach="geometry" args={[1, 1]} />
//<meshBasicMaterial attach="material" map={images} />
//</mesh>