import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar__links">
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </ul>
        </nav>
    )
}