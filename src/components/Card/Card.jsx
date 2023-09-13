import React from "react"
import { Link } from "react-router-dom"

export default function Card({id, cover, title}) {
    return (
        <Link to={`/fiche-logement/${id}`} className="card">
            <img src={cover} alt={title} className="card__cover" />
            <div className="card__overlay"></div>
            <p className="card__title">{title}</p>
        </Link>
    )
}