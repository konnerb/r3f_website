import React from 'react';
import './Demos.scss';
import store from '../../store'

const Demos = () => (

  <div className="demo">
    {store.demos.map(content => (
    <>  
      <h3>{content.title}</h3>
      <a 
        className="demo__link"
        href={content.href} 
        rel="nofollow"
      >
        <img
          alt={`R3F ${content.title} Demo`}
          className="demo__link-content"
          width="288" 
          src={content.src} 
          data-canonical-src={content.dataCanonicalSrc}
          />    
      </a>
    </>
    ))}
  </div>

);

export default Demos;