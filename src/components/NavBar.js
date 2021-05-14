import React, {useState, useEffect} from 'react'
import {Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const clickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
                
    const [scroll, setScroll] = useState(true);
   
    
    // let scrollPos = 0;
    // useEffect(() => {
        
    //     window.addEventListener('scroll', function(){
    //     if ((document.body.getBoundingClientRect()).top > scrollPos){
    //             setScroll(false)
    //             console.log(scroll)
    //     }else{
    //             setScroll(true)
    //             console.log(scroll)
    //         }
    //         scrollPos = (document.body.getBoundingClientRect()).top;
    //     });
    //   });

    return (
        <>
        <nav className={scroll ? 'navbar': 'navbar-fixed'}>
            <div className='navbar-container'>
                <div className="left">
                    <Link to='' className='navbar-logo' onClick={closeMobileMenu}>
                        <i class="fab fa-dev"/> &nbsp;Mohammed Qureshi &nbsp;
                    </Link>
                </div>
                <div className="right">
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
            </div>
        </nav>
        </>
    )
}

export default NavBar
