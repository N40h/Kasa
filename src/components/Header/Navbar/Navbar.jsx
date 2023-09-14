import React from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <Link to="/" className={location.pathname === '/' ? 'navbar__links--active' : ''}>Accueil</Link>
                <Link to="/a-propos" className={location.pathname === '/a-propos' ? 'navbar__links--active' : ''}>A Propos</Link>
            </ul>
        </nav>
    )
}