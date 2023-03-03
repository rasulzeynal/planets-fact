import React, { useState } from "react";
import "../style/home.scss";

const Home = ({
  planet,
  planetInfo,
  setPlanetInfo,
  planetImage,
  setPlanetImage,
  imageGeology,
  setImageGeology,
  setActiveButton,
  activeButton
}) => {
  return (
    <div className={"home container"}>
      <div className="top d-flex">
        <div className="planet d-flex justify-content-center align-items-center flex-direction-column col-md-12 col-lg-8">
          <img src={planetImage} alt="planet" />
          {imageGeology ? (
            <img className="geology" src={planet.images.geology} alt="planet" />
          ) : null}
        </div>
        <div className="info d-flex flex-column col-xs-12  col-lg-4">
          <div className="col-xs-12 col-sm-6 col-lg-12">
            <h1>{planet.name}</h1>
          <p>{planetInfo.content}</p>
          <p>
            Source:{" "}
            <a href={planetInfo.source} target="_blank">
              Wikipedia
            </a>
          </p>
          </div>
          
          <div className="buttons d-flex flex-column mt-2 col-xs-12 col-sm-5 col-lg-12">
            <button
            className={activeButton && "active"}
              onClick={() => {
                setPlanetInfo(planet.overview);
                setPlanetImage(planet.images.planet);
                setImageGeology(false);
                setActiveButton(true)
              }}
            >
              <h4>01</h4>
              <h3>OVERVIEW</h3>
            </button>
            <button
              onClick={() => {
                setPlanetInfo(planet.structure);
                setPlanetImage(planet.images.internal);
                setImageGeology(false);
                setActiveButton(false)
              }}
            >
              <h4>02</h4>
              <h3>INTERNAL STRUCTURE</h3>
            </button>
            <button
              onClick={() => {
                setPlanetInfo(planet.geology);
                setPlanetImage(planet.images.planet);
                setImageGeology(true);
                setActiveButton(false)
              }}
            >
              <h4>03</h4>
              <h3>SURFACE GEOLOGY</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="statistics d-flex justify-content-between">
        <div className="rotation-time">
          <p>ROTATION TIME</p>
          <h2>{planet.rotation}</h2>
        </div>
        <div className="revolution-time">
          <p>REVOLUTION TIME</p>
          <h2>{planet.revolution}</h2>
        </div>
        <div className="radius">
          <p>RADIUS</p>
          <h2>{planet.radius}</h2>
        </div>
        <div className="average-temp">
          <p>AVERAGE TEMP.</p>
          <h2>{planet.temperature}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
