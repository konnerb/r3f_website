import React from 'react';
import './Home.scss';
import Scene from '../../components/Scene';
//import Demos from '../../components/Demos/Demos'
//import Contact from '../Contact/Contact';
//import Shop from '../Shop/Shop';
//import AboutUs from '../AboutUs/AboutUs';
//import Videos from '../Videos/Videos';
//import Blog from '../Blog/Blog';

const Home = ({ match }) => {

  //const path = match.url

  return (
  <>
    <div className="home" 
    >
      <Scene />
      {/*<Demos />*/}
      {/*<div className="home__content-container">
        { path === "/nav/shop" && <Shop /> }
        { path === "/nav/contact" && <Contact /> }
        { path === "/nav/about-us" && <AboutUs/> }
        { path === "/nav/videos" && <Videos /> }
        { path === "/nav/blog" && <Blog /> }
  </div>*/}
    </div>
  </>
  );
}

export default Home;