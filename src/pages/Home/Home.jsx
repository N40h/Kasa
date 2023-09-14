import React from "react"
import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import BannerBackground from "../../assets/banner.png"

export default function Home() {
	document.title = "Kasa - Accueil"
	
	return (
		<React.Fragment>
			<Banner
				image={BannerBackground}
				alt="paysage falaise"
				title="Chez vous, partout et ailleurs"
			/>
			<Gallery />
		</React.Fragment>
	)
}

