import React from 'react';
import './VirtualPlayground.scss';
import store from '../../store'

const VirtualPlayground = ({ match }) => {

  const params = match && match.params.name

  return (
  <div className="virtualPlayground">

    {store.demos
    .filter(content => content.title.replace(/\s/g, '') === params)
    .map((content, i) => (
      <div 
        className="virtualPlayground__container" 
        key={i}>
        <h3>{content.title}</h3>
        <iframe
          title={content.title}
          className="virtualPlayground__iframe"
          src={content.href}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        />
      </div>
      ))
    }
  </div>

)};

export default VirtualPlayground;