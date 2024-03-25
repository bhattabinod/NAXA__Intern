import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Component/Header'

const Contact = () => {
  return (
    <div className='bg-red-50 w-full'>
    <Header/>
    <section>
        <h1>Contact Page</h1>
        <p>+977 98678345</p>
        <p>Baneshwor, Kathmandu</p>
    </section>
    <button className='text-white shadow-sm rounded-full hover:bg-blue-700 hover:text-black'>Reach Us</button>
    </div>
  )
}

export default Contact