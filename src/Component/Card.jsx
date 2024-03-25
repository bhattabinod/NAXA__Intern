import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='p-3 max-w-sm mx-auto bg-slate-500 rounded-xl shadow-lg items-center space-x-4'>
            <div>
                <h6 className='text-white items-center'>{props.info}</h6>
            </div>
            <div className='text-xl font-semibold text-black items-center'>{props.information}</div>
        </div>
    </div>
  )
}

export default Card