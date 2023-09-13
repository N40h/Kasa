import React from "react"
import LogoFooter from "../../assets/logo-kasa-small.svg"

export default function Footer() {
    return (
        <footer className="footer ">
            <img src={LogoFooter} alt="Logo Kasa" className="footer__logo" />
            <span className="footer__copyright">© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}