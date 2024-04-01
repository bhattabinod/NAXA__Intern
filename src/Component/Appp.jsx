import React, {useEffect, useState} from 'react'

const Appp = () => {

    const [resourceType, setResourceType] = useState('posts')
    const [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    }, [])
  return (
    <>
    
        <div>
            <button onClick={()=>setResourceType('posts')}>Posts</button>
            <button onClick={()=>setResourceType('users')}>Users</button>
            <button onClick={()=>setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        <div> 
            <p>You have clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
        <h1>I have rendered {count} times!</h1>
    </>
  )
}

export default Appp