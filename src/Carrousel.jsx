import imgNavidad2020 from './assets/posts/carousel/navidad2020.jfif'
import anioNuevo2021 from './assets/posts/carousel/26177b8a-4748-463d-a990-8141cdd570e5.jfif'
import Carousel from 'react-elastic-carousel'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Carrousel = () => {
    const [articulos, setArticulos] = useState([])


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];

    const getArticles = async () => {
        try {
            const resp = await axios.get(`${process.env.REACT_APP_API_URL}/articulos`)
            if (resp.status === 200) {
                setArticulos(resp.data)
            } else {
                alert('Error al adquirir articulos')
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log(process.env);
        getArticles()
    }, [''])

    return (
        <section section className="text-rosa-dark body-font py-48">
            <Carousel itemsToShow={2} breakPoints={breakPoints}>
                {articulos.map(art => <Card
                    title={art.titulo}
                    imgPath={`${process.env.REACT_APP_API_URL}${art.avatar_carousel.url}`}
                    category=''
                    descr={art.descripcion_carousel}
                    route={`/post/${art.id}`}
                />)}
                <Card
                    imgPath={imgNavidad2020}
                    title='¿Cuidarme en Navidad?'
                    category=''
                    descr='Sea cual sea tu caso no te juzgues, no te critiques. Hoy estás vivo y es una oportunidad más para mejorarte en cualquier aspecto y área de tu vida.'
                    route='/navidad2020'
                />
                <Card
                    imgPath={anioNuevo2021}
                    title='¿Y si cambias tu propósito este Año?'
                    category='Nueva'
                    descr='Otra vez Enero y ese sentimiento de querer cambiar tu cuerpo, modificar alguna parte de ti y todo esto con la emoción detrás de miedo, rechazo y odio hacia ti y tu organismo.'
                    route='/anioNuevo2020'
                />
            </Carousel>

        </section>
    );
}

const Card = ({ imgPath, title, category, descr, route }) =>
    <div className="p-4 h-full">
        <div className="h-full border-2 shadow-lg border-gray-200 rounded-lg bg-cafe-ligth overflow-hidden">
            <img className="lg:h-48 md:h-56 w-full object-cover object-center"
                src={imgPath} alt="blog"
            />
            <div className="p-6">
                <h2 className="tracking-widest text-lg title-font font-bold text-amarillo-dark  mb-1">
                    {category}
                </h2>
                <h1 className="title-font text-center text-4xl script-font font-medium mb-3">
                    {title}
                </h1>
                <p className="leading-relaxed  mb-3">
                    {descr}
                </p>
                <div className="flex items-center flex-wrap ">
                    <a href={route} className="text-rosa-DEFAULT inline-flex items-center md:mb-2 lg:mb-0">Leer más
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                    </span>
                </div>
            </div>
        </div>
    </div>


export default Carrousel;