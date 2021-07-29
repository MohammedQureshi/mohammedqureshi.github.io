import React from 'react';
import './NotFound.scss';
import {NavLink } from "react-router-dom";

function NotFound(){
    return(
        <div className="PageNotFound">
            <div className="PageNotFoundContent">
                <h1> Page Not Found - 404 </h1>
                <NavLink
                  to="/"
                  className="nav-links"
                  exact={true}
                >
                  Click to go home
                </NavLink>
            </div>
        </div>
    )
}

export default NotFound