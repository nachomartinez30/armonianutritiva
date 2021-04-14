import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios'
import Divider from './Divider';
import Firma from './Firma';
import { Link } from 'react-router-dom';
import getFecha from './helpers/getFecha'

const Articulo = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    let { id } = useParams();
    const [reload, setReload] = useState(true)
    const [data, setData] = useState('');
    const [parrafos, setParrafos] = useState([])
    const [fechaPublicacion, setFechaPublicacion] = useState('')
    const [imagen, setImagen] = useState('')
    const [imagenSecundaria, setImagenSecundaria] = useState('')

    useEffect(() => {
        /* axios para extraer el articulo */
        getPost()
        setReload(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reload])

    const getPost = async () => {
        try {
            const resp = await axios.get(`${API_URL}/articulos/${id}`)
            if (resp.status === 200) {
                const { data } = resp

                setFechaPublicacion(getFecha(data.published_at))
                // debugger
                setData(data);
                setParrafos(data.contenido.split("\n"))
                setImagen(`${API_URL}${data.foto_portada.url}`)
                setImagenSecundaria(`${API_URL}${data.foto_secundaria[0].url}`)

            } else {
                console.error();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='h-full text-cafe-DEFAULT text-2xl space-y-10 text-justify'>
            <Divider />

            <div className='pt-20 lg:pl-56 pl-4 fade-in items-center flex'>
                <Link to='/' className='text-verde-DEFAULT font-bold inline-flex'>
                    <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Inicio
                </Link>
            </div>
            <h1 className='slide-in-left text-center text-rosa-palo text-7xl script-font font-bold  px-5'>
                {data.titulo}
            </h1>
            {/* IMAGEN */}
            <img className='shadow-xl fade-in 
                                w-2/3 ml-auto mr-auto
                                lg:float-left lg:w-4/12 lg:ml-56 lg:mr-5
            '
                src={imagen}
                alt={`post_${id}`}
            />
            {/* Contenido */}
            <div className='md:px-20 xl:px-56 px-10 space-y-12 pb-8'>
                {parrafos.map((item, index) => {
                    return (<Fragment>
                        {
                            imagenSecundaria && index === 8 && <img className='shadow-xl fade-in w-2/3 ml-auto mr-auto lg:float-right lg:w-4/12 lg:ml-10 lg:mr-5 lg:mb-16 ' src={imagenSecundaria} alt={`img_sec_post_${id}`} />
                        }
                        <p data-aos="fade-right">
                            {item}
                        </p>
                    </Fragment>
                    )
                }
                )
                }
            </div>
            <Firma
                fecha={fechaPublicacion}
            />
        </div>
    );
}

export default Articulo;