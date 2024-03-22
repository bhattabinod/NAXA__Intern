import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Component/Header'

const Contact = () => {
  return (
    <>
      <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    <section>
        <h1>Contact Page</h1>
        <p>+977 98678345</p>
        <p>Baneshwor, Kathmandu</p>
    </section>
    </>
  )
}

export default Contact