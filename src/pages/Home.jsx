import React from 'react';
import "../style/home.scss";

const Home = ({planet}) => {
  console.log(planet.images);
  return (
    <div className='home container'>
      <div className='top d-flex'>
        <div className='planet d-flex justify-content-center align-items-center col-8'>
        <img src={planet.images.planet} alt="planet"/>
      </div>
      <div className='info d-flex flex-column col-4'>
        <h1>{planet.name}</h1>
        <p>{planet.overview.content}</p>
        <p>Source: <a href={planet.overview.source} target="_blank">Wikipedia</a></p>
        <div className="buttons d-flex flex-column mt-2">
          <button><h4>01</h4><h3>OVERVIEW</h3></button>
          <button><h4>02</h4><h3>INTERNAL STRUCTURE</h3></button>
          <button><h4>03</h4><h3>SURFACE GEOLOGY</h3></button>
        </div>
        
      </div>
      </div>
      <div className='statistics d-flex mt-5 justify-content-between'>
        <div className='rotation-time'>
          <p>ROTATION TIME</p>
          <h2>{planet.rotation}</h2>
        </div>
        <div className='revolution-time'>
          <p>REVOLUTION TIME</p>
          <h2>{planet.revolution}</h2>
        </div>
        <div className='radius'>
          <p>RADIUS</p>
          <h2>{planet.radius}</h2>
        </div>
        <div className='average-temp'>
          <p>AVERAGE TEMP.</p>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </div>
  )
}

export default Home