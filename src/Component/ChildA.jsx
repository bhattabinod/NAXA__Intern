import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
  return (
    <ChildB name = {props.name}/>
  )
}

export default ChildA