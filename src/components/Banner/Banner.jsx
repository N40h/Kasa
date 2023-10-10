import React from "react"
import { useLocation } from "react-router-dom"


export default function Banner({ image, alt, title }) {    
    const location = useLocation();

    return (
        <section className="banner">
            <img src={image} alt={alt} />
            {location.pathname === "/" && <h1 className="banner__title">{title}</h1>}
        </section>
    )
}