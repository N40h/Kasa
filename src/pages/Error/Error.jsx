import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
    document.title = 'Kasa - Page Introuvable'

    return (
        <div className="Error">
            <h1 className="Error__404">404</h1>
            <p className="Error__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="Error__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}