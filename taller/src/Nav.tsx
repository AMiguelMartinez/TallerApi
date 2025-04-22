import React from "react";
import { Link } from "react-router-dom";
import "./Nav2.css";

const Nav: React.FC = () => {
    return (
        <nav >
            <ul >
                <li>
                    <Link to="/"><span>Harry Potter</span></Link>
                </li>
                <li>
                    <Link to="/api2">Dragon Ball</Link>
                </li>
                <li>
                    <Link to="/api3" >Paises</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;