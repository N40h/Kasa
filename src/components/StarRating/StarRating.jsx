import React from "react"
import StarFull from "../../assets/star-active.svg"
import StarEmpty from "../../assets/star-inactive.svg"

export default function StarRating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return <img key={index} src={index < rating ? StarFull : StarEmpty} alt="star" />
    })

    return <div className="accommodation__ratings">{stars}</div>
}