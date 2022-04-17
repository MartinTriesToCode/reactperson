import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    state = {};
    render() {
        return (
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/People">
                        <li>People</li>
                    </Link>
                    <Link to = '/About'>
                    <li>About</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;
