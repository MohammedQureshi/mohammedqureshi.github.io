import React, {useState} from 'react'
import {Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const clickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }else{
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // },[]);

    // window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='' className='navbar-logo' onClick={closeMobileMenu}>
                    <i class="fab fa-dev"/> &nbsp;Mohammed Qureshi &nbsp;
                </Link>
                <div className='menu-icon' onClick={clickHandler}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink  to='/' className='nav-links' exact={true} activeClassName='is-active' onClick={closeMobileMenu}>
                            Home
                        </NavLink >
                    </li>
                    <li className='nav-item'>
                        <NavLink  to='/about-me' className='nav-links' activeClassName='is-active' onClick={closeMobileMenu}>
                            About Me
                        </NavLink >
                    </li>
                    <li className='nav-item'>
                        <NavLink  to='/projects' className='nav-links' activeClassName='is-active' onClick={closeMobileMenu}>
                            Projects
                        </NavLink >
                    </li>
                    <li className='nav-item'>
                        <NavLink  to='/contact-me' className='nav-links' activeClassName='is-active' onClick={closeMobileMenu}>
                            Contact Me
                        </NavLink >
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
