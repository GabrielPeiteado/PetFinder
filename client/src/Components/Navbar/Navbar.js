import React, {useState, useEffect} from 'react';
import './Navbar.css';
import LoginButton from '../Login/Login';
import LogoutButton from '../Logout/Logout.js';
import Fade from 'react-reveal/Fade';
import { useAuth0 } from "@auth0/auth0-react";
export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const { isAuthenticated } = useAuth0();

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWitdth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWitdth);

        return () => {
            window.removeEventListener('resize', changeWitdth);
        }

    }, [])
    return ( 
        <Fade top cascade>
            <nav className='sidebar'>
                {(toggleMenu || screenWidth > 768) && (
                <ul className='list'>
                    <li className="items"><a href="/" className='nav-links'>Home</a></li>
                    <li className="items"><a href="quienes-somos" className='nav-links'>¿Quienes somos?</a></li>
                    {isAuthenticated ? (
                    <>
                    <LogoutButton />
                    </>
                    ) : (
                    <LoginButton />
                    )}
                </ul>
                )}
                <button onClick={toggleNav} className="btn">&#9776;</button>
            </nav>
        </Fade>
    )
}

export default Navbar;