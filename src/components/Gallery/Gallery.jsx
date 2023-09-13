import React from "react"
import accommodationData from "../../data/accommodationData.json"
import Card from "../Card/Card"

export default function Gallery() {
    return (
        <section className="gallery">
            {accommodationData.map((data) => {
                return < Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                    />
            })}
        </section>
    )
}