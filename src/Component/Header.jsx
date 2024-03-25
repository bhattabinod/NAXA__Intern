import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className='w-full h-10 bg-indigo-300 rounded-xl'>
                <ul className='md:flex justify-end items-center h-full'>
                    <li>
                        <NavLink className='mx-4' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='mx-4' to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className='mx-4' to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
