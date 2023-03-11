import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

// must be rendered across every page component of the site
// must contain a nav bar

// need to make it into a burger menu for mobile

function NavTabs() {
    return (
        <ul className="nav nav-pills justify-content-end">
            <li className="nav-item">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="projects"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="contact"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    );
}

export default NavTabs;
