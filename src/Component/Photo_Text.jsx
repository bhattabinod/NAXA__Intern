import React from 'react'

import img from '../Images/my-passport-photo.png'

const Photo_Text = () => {
  return (
    <div className='object-contain h-48 w-96'>
        <img src={img} alt="" />
    </div>
  )
}

export default Photo_Text