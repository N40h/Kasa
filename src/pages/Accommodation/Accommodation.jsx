import React, {useState, useEffect} from "react"
import { useParams, Navigate } from "react-router-dom"
import accommodationData from "../../data/accommodationData.json"
import Slideshow from "../../components/Slideshow/Slideshow"
import StarRating from "../../components/StarRating/StarRating"
import Collapse from "../../components/Collapse/Collapse"

export default function Accommodation() {
    document.title = 'Kasa - Logement'
    
    const [currentAccommodationData, setCurrentAccommodationData] = useState([])

    const { id } = useParams();

    useEffect(() => {
        const filteredAccommodationData = accommodationData.filter((data) => data.id === id);
        setCurrentAccommodationData(filteredAccommodationData)
    }, [id]);

    const isValidID = accommodationData.find((data) => data.id === id);

    return (
        <React.Fragment> 
            {!isValidID ? <Navigate to="/Error" /> : currentAccommodationData.map((data) => (
                <div key={data.id} className="accommodation">
                    <Slideshow
                        title={data.title}
                        pictures={data.pictures}
                    />
                    <section className="accommodation__content">
                        <div className="accommodation__content--infos">
                            <h1>{data.title}</h1>
                            <p>{data.location}</p>
                            <ul className="accommodation__tags">
                                {data.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="accommodation__content--hosting">
                            <div className="accommodation__host">
                                <p>{data.host.name}</p>
                                <img src={data.host.picture} alt={`Portrait of ${data.host.name}`} />
                            </div>
                            <StarRating
                                rating={data.rating}
                            />
                        </div>
                    </section>
                    <section className="accommodation__collapse">
                        <Collapse
                            title="Description"
                            content={data.description}
                        />
                        <Collapse
                            title="Équipements"
                            content={data.equipments.map((item) => (<span key={item}>{item}</span>))}
                        />
                    </section>
                </div>
            ))}
        </React.Fragment>
    )
}