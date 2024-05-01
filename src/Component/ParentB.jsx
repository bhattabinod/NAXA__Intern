import React from 'react'
import Child1 from './Child1'

const ParentB = () => {

    function getData(data){
        console.log(data)
    }

  return (
    <Child1 getData = {getData}/>
  )
}

export default ParentB