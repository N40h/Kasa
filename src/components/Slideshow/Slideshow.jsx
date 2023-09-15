import React, {useState} from "react"
import ArrowLeft from "../../assets/arrow_left.svg"
import ArrowRight from "../../assets/arrow_right.svg"

export default function Slideshow({title, pictures}) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const previousSlide = () => {currentSlide === 0 ? setCurrentSlide(pictures.length - 1) : setCurrentSlide(currentSlide - 1)
    }

    const nextSlide = () => {currentSlide === pictures.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)
    }

    return (
        <section className="slideshow">
            <img src={pictures[currentSlide]} alt={title} className="slideshow__images"/>
            <img src={ArrowLeft} alt="arrow left icon" onClick={previousSlide} className={pictures.length <= 1 ? "slideshow__arrow--none" : "slideshow__arrow--left"} />
            <img src={ArrowRight} alt="arrow right icon" onClick={nextSlide} className={pictures.length <= 1 ? "slideshow__arrow--none" : "slideshow__arrow--right"} />
            <span className={pictures.length <= 1 ? "slideshow__count--none" : "slideshow__count"}>{currentSlide + 1}/{pictures.length}</span>
        </section>
    )
}