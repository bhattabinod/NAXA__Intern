import React, { useState } from 'react';
import About from './Aboutt'
import AnotherComponent from './AnotherComponent'

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] =useState('Red');
  const [name, setName] = useState('Binod');
  const [comment, setComment] = useState('Before Comment')

  const incrementCount = () => {
    setCount(count + 1);
  };

  const userColor = () => {
    setColor('blue');
  }

  const changeName = () => {
    setName('Aarogya');
  }


  return (
    <div>
      <About count={count} incrementCount={incrementCount} color = {color} userColor = {userColor} 
      name = {name} changeName={changeName}  />
      <AnotherComponent count={count} incrementCount={incrementCount} color = {color} userColor={userColor}
       name ={name} changeName={changeName}  />
    </div>
  );
};

export default ParentComponent;