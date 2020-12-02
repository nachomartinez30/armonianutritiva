import { useState } from "react";
import "./assets/styles.css";
const Servicio = ({ tittle, description }) => {

    const [animacion, setAnimacion] = useState(false)
    const [showDescription, setShowDescription] = useState(false)

    const handleMouseOver = ev => {
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
        <div className={`xl:w-1/3 md:w-1/2 p-4 ${animacion ? 'slide-fwd-center' : null}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            <div className="services_shadows p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-4">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                </div>
                <h2 className="text-2xl text-amarillo-titulo font-medium title-font mb-2">{tittle}</h2>
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