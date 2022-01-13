import Divider from "../Divider";
import image from '../assets/posts/anioNuevo/e74b30c2-007e-4dc0-b0ff-6991ebd9e114.jfif'
import Firma from "../Firma.jsx";


const Navidad2020 = () => {

    return (
        <div className='h-full text-cafe-DEFAULT text-2xl text-justify'>
            <Divider />
            {/* Titulo */}
            <h1 className='slide-in-left text-center text-rosa-palo text-7xl script-font font-bold pt-40 px-5'>
                ¡Lo que el Covid me ha dejado!
            </h1>

            {/* Contenido */}
            <div className='flex flex-wrap space-x-5 space-y-8 justify-center slide-in-right  pt-8 md:px-20 xl:px-56 px-10'>
                <div className='space-y-5'>
                    <div className='flex flex-wrap md:flex-wrap sm:flex-wrap lg:flex-no-wrap  justify-center lg:space-x-4'>
                        {/* Imagen */}
                        {/* <div className='flex items-center'>
                            <img className='shadow-2xl fade-in' src={image} alt='hábitos' />
                        </div> */}
                        {/* Imagen */}
                        <div className='space-y-4 sm:pt-12 md:pt-12'>
                            <p>
                                Ya más de un año desde que nos pusieron en cuarentena por el virus Covid-19 en México y a nivel mundial. Varias muertes, incertidumbres, miedos, crisis, ansiedades y puedo decir que todos desde nuestra trinchera hemos vivido de alguna manera esta etapa experimentando una serie de cambios a nivel interno y sobretodo externo.
                            </p>
                            <p>
                                Uso del cubre bocas, desinfección, cuidados de limpieza, salir solo a lo indispensable, trabajando desde casa y otros con la misma rutina aún con el SARS.
                            </p>
                        </div>
                    </div>
                    <p>
                        De alguna manera esta experiencia en estos tiempos nos hizo bajar las revoluciones y hacernos un espacio y un momento para reflexionar sobre nuestras vidas, casi que nos obligó el Covid a hacer una introspección por todo esto que se estaba viviendo.
                    </p>
                    <p>
                        Ya bien conocidos los síntomas de este virus son el no presenciar olfato, el sabor, dificultad para respirar entre otros. Y la mayoría de nosotros hemos despertado con la sensación de ¿Aún me sabe la comida?, ¿Si huelo?, ¿Qué estoy oliendo? Cosa que antes del Covid no nos dábamos cuenta de conectar realmente con nuestros sentidos y comíamos por comer, sin parar un poco y darnos cuenta de lo que comíamos, comer con prisa y ni mucho menos presenciar más conscientemente los sabores y olores de lo que comíamos y ahora es muy chistoso que ya de manera más automática estamos con más presencia de los sentidos al comer y haciendo esas preguntas al otro.
                    </p>
                    <p>
                        El Covid me ha dejado ser más introspectiva con mis sentidos a disfrutar más la comida, a detectar los sabores, a pararme y presenciar lo que estoy olfateando y en preguntarme diariamente ¿Cómo me siento? ¿Tengo algún síntoma de Covid? En respirar profundo y agradecer por ese aire que inhalo y exhalo de manera natural.
                    </p>
                    <p>
                        El oxígeno tan indispensable y que de manera gratuitita hemos tenido todos y ahora tantas personas pagando cantidades fuertes de dinero por tener de él.
                    </p>
                </div>

                <div className='text-justify space-y-5 pt-5'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >

                    <p>
                        Sé que como a mí te ha pasado, y hoy por hoy diariamente hacemos ya de manera más consiente o como parte de nuestra rutina el conectar con nuestros sentidos y hacer un check de mi cuerpo y sus sensaciones. Conectar con nuestros sentidos nos hace estar más en el aquí y ahora, estar más presentes de nuestro cuerpo-mente, sobretodo ser agradecidos y <u className="text-rosa-DEFAULT">afortunados</u> por eso que ya teníamos y no nos dábamos cuenta, ahora sí que aplica la frase “Nadie sabe lo que tiene hasta que lo pierde”.
                    </p>
                    <p>
                        El estar en todas las comidas detectando si presenciamos o no los sentidos es algo que se nos va a quedar, ya es parte de nosotros y eso nos ayudará de alguna manera a estar más presentes y conectados con lo que olemos, comemos, tocamos, vemos y sobretodo agradeciendo <u>cada que, percibes los sentidos, poder respirar y estar libres de Covid un día más.</u>
                    </p>
                    <p>
                        Si aún no te habías hecho consiente sobre esto y quieres aún más conexión te dejo estas recomendaciones
                    </p>
                </div>

                <div className='md:pl-16 text-justify font-bold space-y-3'>
                    <div className='text-center' data-aos="fade-right">
                        <h1 className='script-font font-bold text-5xl text-tinto-ligth'>
                            Claves para estar más conectados en las comidas con más presencia aún.
                        </h1>
                    </div>
                    {/* LISTADO */}
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span>
                        Agradece en tus comidas por el alimento que consumirás
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span>
                        Respira profundo antes de comer
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span>
                        Huele y describe como lo presencias
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span>
                        Detecta el sabor de tu comida
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT pr-10'>*</span>
                        Siente texturas de tus alimentos
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span>
                        Come sin distracciones
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span>
                        Acomoda tu mesa como si tuvieras un invitado especial
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span>
                        Date tu tiempo para comer sin prisas
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span>
                        Come lento y mastica más tranquilamente

                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span>
                        Ve a la naturaleza y conecta con ella, hazte consiente de su grandeza
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span>
                        Y vuelve agradecer por tener un día más de vida, por ese aire que tienes y que no te cuesta
                    </div>
                    {/* LISTADO */}

                </div>
                {/*  */}


                <div className='text-justify space-y-5 pt-5'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <p>
                        El Covid llegó para quedarse, pero dentro de su llegada y catastróficos eventos podemos rescatar algo bueno, en mi particular caso he tenido tantos cambios a nivel interno que me hicieron parar y darle un giro de mentalidad a mi vida. Espero que veas eso bueno que el Covid te ha dejado.
                    </p>
                    <p>
                        Hoy parece que la vacunación se está llevando a cabo a nivel mundial pero no es garantía puesto que, el virus sigue evolucionando por lo que, no bajes la guardia y síguete cuidando a ti y a los tuyos y sigue con esa costumbre de presenciar olores y sabores, haciéndolo más consiente, con más disfrute en cada bocado que consumas y siendo más agradecido por un día más vida respirando profundo.
                    </p>
                </div>

                {/* SECCION FINAL */}
                <div className='pt-12 font-bold text-4xl text-center text-tinto-DEFAULT'
                    data-aos="fade-in">
                    {/*  */}
                </div>
                <div className='text-center text-tinto-dark py-8 text-3xl'>
                    {/*  */}
                </div>
            </div>
            {/* FIRMA */}
            <Firma
                fecha='1 de noviembre del 2021'
            />

        </div>
    );
}

export default Navidad2020;