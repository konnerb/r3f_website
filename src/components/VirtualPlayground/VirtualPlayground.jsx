import React from 'react';
import './VirtualPlayground.scss';
import store from '../../store'

const VirtualPlayground = ({ match }) => {

  const params = match && match.params.name

  return (
  <div className="virtualPlayground">

    {store.demos.map((content, i) => {
      
      if(content.title.replace(/\s/g, '') !== params) return;
      
      return (
        <div 
          className="virtualPlayground__container" 
          key={i}>
          <h3>{content.title}</h3>
            {/*<img
              alt={`R3F ${content.title} Demo`}
              className="virtualPlayground__img"
              width="288" 
              src={content.src} 
              data-canonical-src={content.dataCanonicalSrc}
            />*/}
          <iframe
            className="virtualPlayground__iframe"
            src={content.href}
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
      </div>
    )})
  }
  </div>

)};

export default VirtualPlayground;