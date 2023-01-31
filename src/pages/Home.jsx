import React from 'react';
import "../style/home.scss";
import earth from "../assets/planet-earth.svg";

const Home = () => {
  return (
    <div className='home'>
      <div className='top'>
        <div className='col-2 planet'>
        <img src={earth} alt="planet"/>
      </div>
      <div className='col-4 info'>
        <h1>EARTH</h1>
        <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
        <p>Source <a>Wikipedia</a></p>
        <button><h4>01</h4><h4>OVERVIEW</h4></button>
        <button><h4>02</h4><h4>INTERNAL STRUCTURE</h4></button>
        <button><h4>03</h4><h4>SURFACE GEOLOGY</h4></button>
      </div>
      </div>
      <div className='statistic'>
        <div className='rotation-time'>
          <p>ROTATION TIME</p>
          <h2>58.6 DAYS</h2>
        </div>
        <div className='revolution-time'>
          <p>REVOLUTION TIME</p>
          <h2>87.97 DAYS</h2>
        </div>
        <div className='radius'>
          <p>RADIUS</p>
          <h2>2,439.7 KM</h2>
        </div>
        <div className='average-temp'>
          <p>AVERAGE TEMP.</p>
          <h2>430°C</h2>
        </div>
      </div>
    </div>
  )
}

export default Home