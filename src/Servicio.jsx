import { useState } from "react";
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
            <div className="flex services_shadows bg-cafe-ligth p-6 rounded-lg">
                <h2 className="text-3xl text-cafe-dark font-bold  script-font mt-4">{tittle}</h2>
                <div className="w-16 h-16  items-center justify-center flex-col-reverse rounded-full mb-4 mx-5">
                    <img alt='' src={icon} />
                </div>
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