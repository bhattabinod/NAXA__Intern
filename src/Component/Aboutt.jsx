import React from 'react';

const About = ({ count, incrementCount, color, userColor, name, changeName }) => {
  return (
    <>
      <p>This is original Component!</p>

      <button onClick={incrementCount}>Increase</button>
      <h1>You have clicked {count} times</h1>

      <button onClick={userColor}>Color Change</button>
      <h1>Now your favourite color is: {color}</h1>
      
      <button onClick={changeName}>ChangeName</button>
      <h1>Your name is {name}</h1>
    </>
  );
};

export default About;
