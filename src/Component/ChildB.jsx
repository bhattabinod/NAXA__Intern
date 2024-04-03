import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
  return (
    <ChildC name = {props.name}/>
  )
}

export default ChildB