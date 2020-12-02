import { useState } from "react";
import "./assets/styles.css";
const Servicio = ({ tittle, description, icon }) => {

    const [animacion, setAnimacion] = useState(false)
    const [showDescription, setShowDescription] = useState(false)

    const handleClick = ev => {
        ev.preventDefault();
        setAnimacion(true)
        setShowDescription(true)
    }
    const handleMouseLeave = ev => {
        ev.preventDefault();
        setAnimacion(false)
        setShowDescription(false)
    }

    return (
        <div className={`xl:w-1/3 md:w-1/2 w-full p-4 ${animacion ? 'slide-fwd-center' : null}`}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
        >
            <div className="services_shadows bg-cafe-ligth p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-amarillo-light mb-4">
                    <img alt='' src={icon} />
                </div>
                <h2 className="text-3xl text-cafe-dark font-bold hello-font mb-2">{tittle}</h2>
                {
                    (showDescription) &&
                    <p className="leading-relaxed text-base fade-in">
                        {description}
                    </p>
                }
            </div>
        </div>

    );
}

export default Servicio;