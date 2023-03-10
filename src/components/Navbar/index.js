import React from 'react';
import { NavLink } from 'react-router-dom';

// must be rendered across every page component of the site


// must contain a nav bar

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
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
