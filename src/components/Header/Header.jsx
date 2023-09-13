import React from "react"
import LogoKasa from "../../assets/logo-kasa-big.svg"
import Navbar from "./Navbar/Navbar"

export default function Header() {
    return (
        <header className="header">
            <img src={LogoKasa} alt="Logo Kasa" className="header__logo"/>
            <Navbar />
        </header>
    )
}