import React, { useState } from "react";

const Child1 = (props) => {
  const [name, setName] = useState("Binod");

  function handleSubmit(e) {
    e.preventDefault();
    props.getData(name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Child1;
