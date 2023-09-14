import React from "react"
import aboutData from "../../data/aboutData.json"
import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import BannerBackground from "../../assets/other-banner.png"

export default function About() {
    return (
        <React.Fragment>
            <Banner
                image={BannerBackground}
                alt="paysage de montagne"
            />
            <section className="collapse">
                {aboutData.map((data) => {
                    return <Collapse
                        key={data.id}
                        title={data.title}
                        content={data.content}
                    />
                })}
            </section>
        </React.Fragment>
    )
}