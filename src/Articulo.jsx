// import ReactHtmlParser from 'react-html-parser';
// import moment from "moment"
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import axios from 'axios'
// import Divider from './Divider';
// import Firma from './Firma';

// const Articulo = () => {
//     let { id } = useParams();
//     const [data, setData] = useState('')
//     const [imagen, setImagen] = useState('')
//     useEffect(() => {

//         /* axios para extraer el articulo */
//         getPost()
//     }, [''])

//     const getPost = async () => {
//         try {
//             const resp = await axios.get(`http://localhost:1337/articulos/${id}`)
//             if (resp.status === 200) {
//                 moment.locale('es-mx');
//                 resp.data.published_at = moment(resp.data.published_at).format('LL')
//                 setData(resp.data);
//                 setImagen(`http://localhost:1337${resp.data.foto_portada.url}`)
//             } else {
//                 console.error();
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     return (
//         <div className='h-full text-cafe-DEFAULT text-2xl text-justify'>
//             <Divider />
//             <h1 className='slide-in-left text-center text-rosa-palo text-7xl script-font font-bold pt-40 px-5'>
//                 {data.titulo}
//             </h1>
//             <div className='flex flex-wrap space-x-5 space-y-8 justify-center slide-in-right  pt-8 md:px-20 xl:px-56 px-10'>
//                 <div className='space-y-5'>
//                     <div className='flex flex-wrap md:flex-wrap sm:flex-wrap lg:flex-no-wrap  justify-center lg:space-x-4'>
//                         <div className='flex items-center'>
//                             <img className='shadow-2xl fade-in' src={imagen} alt={'chahcita'} />
//                         </div>

//                         <div className='space-y-4 sm:pt-12 md:pt-12'>
//                             <p>
//                                 El año se está terminando, fueron tiempos difíciles,
//                                 muchas vidas afectadas, crisis en todo aspecto y un sin fin
//                                 de situaciones que se presentaron a cada uno de nosotros.
//                              </p>
//                             <p>
//                                 Pero hoy seguimos vivos y hay que agradecer por ello,
//                                 que hoy más que nunca se ve reflejado por esta pandemia que
//                                 nos sacó de contexto a todos.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {
//                 ReactHtmlParser(data.contenido)
//             }
//             <Firma
//                 fecha={data.published_at}
//             />
//         </div>
//     );
// }

// export default Articulo;