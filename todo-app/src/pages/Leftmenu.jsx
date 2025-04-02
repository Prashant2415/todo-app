import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./page.css";

const Leftmenu = () => {
    const [active, setActive] = useState("/");

    return (
        <div className='leftmenu-container'>
            <div className="logo-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-amd logo" viewBox="0 0 16 16">
                    <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z" />
                </svg>
                <p className='logo-text'>PM</p>
            </div>
            <div className="leftmenu-link-container">
                <ul className='nav-ul'>
                    <li className={`nav-li ${active === "/" ? "active" : ""}`} onClick={() => setActive("/")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill circle blue" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <Link className='nav-links' to="/">All</Link>
                    </li>
                    <li className={`nav-li ${active === "/inProgress" ? "active" : ""}`} onClick={() => setActive("/inProgress")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill circle yellow" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <Link className='nav-links' to="/inProgress">In Progress</Link>
                    </li>
                    <li className={`nav-li ${active === "/completed" ? "active" : ""}`} onClick={() => setActive("/completed")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill circle green" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <Link className='nav-links' to="/completed">Completed</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Leftmenu;
