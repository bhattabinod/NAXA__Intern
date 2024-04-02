// import React, {useEffect, useState} from 'react'

// const Appp = () => {

//     const [resourceType, setResourceType] = useState('posts')
//     const [count, setCount] = useState(0)


//     useEffect(() => {
//         const fetchData = async () => {
//           const response = await fetch(`https://swapi.dev/api/people/1/`);
//           const newData = await response.json();
//         };
      
//         fetchData();
//       });

//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount((count)=>count+1)
//         },1000)
//     }, [])
//   return (
//     <>
    
//         <div>
//             {/* <button onClick={()=>setResourceType('posts')}>Posts</button> */}
//             {/* <button onClick={()=>setResourceType('users')}>Users</button> */}
//             {/* <button onClick={()=>setResourceType('comments')}>Comments</button> */}
//         </div>
//         <h1>{resourceType}</h1>
//         <div> 
//             <p>You have clicked {count} times</p>
//             <button onClick={()=>setCount(count+1)}>Click</button>
//         </div>
//         <h1>I have rendered {count} times!</h1>
//     </>
//   )
// }

// export default Appp


import React, { useEffect, useState } from 'react';

export default function DataDisplayer(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
      const newData = await response.json();
      setData(newData);
    };

    fetchData();
  }, [props.id]);

  if (data) {
    return <div>{data.name}</div>;
  } else {
    return null;
  }
}