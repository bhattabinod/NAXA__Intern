import React from 'react'

import { NavLink } from 'react-router-dom'

const Home = () => {
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
        <h1>Home Page</h1>
        <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia itaque dolore neque? Perspiciatis ea doloribus dolor saepe, 
            deleniti pariatur quod magnam fugit iusto eaque placeat sunt cumque nemo officiis?</p1>
        <h2>Some Info</h2>
        <p1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ullam eius maiores consequatur, 
            quibusdam quia odit repellendus numquam ea magni dolores corrupti minus placeat? Iusto tempore culpa soluta est illo!</p1>
    </section>
    </>
  )
}

export default Home