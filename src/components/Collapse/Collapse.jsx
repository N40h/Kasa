import React, {useState} from "react"
import ArrowUp from "../../assets/arrow_up.svg"
import ArrowDown from "../../assets/arrow_down.svg"

export default function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const [animationClass, setAnimationClass] = useState("");

    function handleClick() {
        setIsOpen(!isOpen);
        setAnimationClass(!isOpen ? "collapse__dropdown--open" : "collapse__dropdown--close")
    }

    return (
        <React.Fragment>
            <div className="collapse__dropdown">
                <div className="collapse__dropdown--menu">
                    <h2 className="collapse__dropdown--title">{title}</h2>
                    <img src={isOpen ? ArrowDown : ArrowUp} alt="chevron" onClick={handleClick} className={`collapse__dropdown--icon ${animationClass}`} />
                </div>
                <div className={`collapse__dropdown--content ${isOpen ? "active" : ''}`}>{content}</div>
            </div>
        </React.Fragment>
    )
}