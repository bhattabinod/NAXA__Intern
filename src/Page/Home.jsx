import React from "react";

import { NavLink } from "react-router-dom";
import Header from "../Component/Header";
import Card from "../Component/Card";
import Photo_Text from "../Component/Photo_Text";

const Home = () => {
  return (
    <>
      <Header />
      <div className="text-center flex float-end mx-4">
        <Card info="Age" information="22" />
        <Card info="Height" information="5.5" />
        <Card info="Weight" information="62.3 kg" />
      </div>
      <div>
        <Photo_Text />
      </div>
      <section>
        {/* <h1 className='text-7xl text-center text-blue-400 background-red '>Home Page</h1> */}
        <p1 className="text-blue-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia
          itaque dolore neque? Perspiciatis ea doloribus dolor saepe, deleniti
          pariatur quod magnam fugit iusto eaque placeat sunt cumque nemo
          officiis?
        </p1>
        <h2 className="text-center text-blue-800 backdrop-blur">Some Info</h2>
        <p1 className="text-pretty bg-slate-600 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          ullam eius maiores consequatur, quibusdam quia odit repellendus
          numquam ea magni dolores corrupti minus placeat? Iusto tempore culpa
          soluta est illo!
        </p1>
      </section>
    </>
  );
};

export default Home;
