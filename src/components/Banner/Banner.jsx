import React from "react"
import BannerBackground from "../../assets/banner.png"

export default function Banner() {
    return (
        <section className="banner">
            <img src={BannerBackground} alt="paysage falaise" />
            <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </section>
    )
}