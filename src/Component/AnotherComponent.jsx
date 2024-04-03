import React from 'react';

const AnotherComponent = ({ count, incrementCount, color, userColor, name , changeName }) => {
  return (
    <>
      <h2>This is another component</h2>

      <button onClick={incrementCount}>Increase from Another Component</button>
      <h1>Count from Parent: {count}</h1>

      <button onClick={userColor}>Change Color</button>
      <h1>Color is {color}</h1>

      <button onClick={changeName}>ChangeName</button>
      <h1>Your Name is {name}</h1>
    </>
  );
};

export default AnotherComponent;
