import Divider from "../Divider";
import image from '../assets/posts/anioNuevo/e74b30c2-007e-4dc0-b0ff-6991ebd9e114.jfif'
import Firma from "../Firma.jsx";


const Navidad2020 = () => {

    return (
        <div className='h-full text-cafe-DEFAULT text-2xl text-justify'>
            <Divider />
            {/* Titulo */}
            <h1 className='slide-in-left text-center text-rosa-palo text-7xl script-font font-bold pt-40 px-5'>
                ¿Y si cambias tu propósito este Año?
            </h1>

            {/* Contenido */}
            <div className='flex flex-wrap space-x-5 space-y-8 justify-center slide-in-right  pt-8 md:px-20 xl:px-56 px-10'>
                <div className='space-y-5'>
                    <div className='flex flex-wrap md:flex-wrap sm:flex-wrap lg:flex-no-wrap  justify-center lg:space-x-4'>
                        {/* Imagen */}
                        <div className='flex items-center'>
                            <img className='shadow-2xl fade-in' src={image} alt='hábitos' />
                        </div>
                        {/* Imagen */}
                        <div className='space-y-4 sm:pt-12 md:pt-12'>
                            <p>
                                ¡Bienvenido 2021!
                             </p>
                            <p>
                                Ya es enero, las 12 campanas sonaron, 12 deseos en cada uva consumimos y el propósito número uno como cada inicio de año es <span className='font-bold'>BAJAR DE PESO.</span>
                            </p>
                        </div>
                    </div>
                    <p>
                        Buscando el reto mensual que promete bajar muchos kilos, haciendo el ayuno intermitente, la dieta Keto, el détox con los jugos como único alimento, tomando pastillas y polvos, siguiendo al influencer más FIT y sus tips para tener un cuerpo como el de ella o él, realizando tratamientos corporales e inscribiéndote al gym, el cual todo esto se abandonará a los pocos meses y con ese abandono la sensación de fracaso, baja autoestima y sintiendo que “No tengo fuerza de voluntad” hasta que vuelva de nuevo la sensación de querer comenzar y así es el ciclo de dieta.
                            </p>
                    <p>
                        Otra vez Enero y ese sentimiento de querer cambiar tu cuerpo, modificar alguna parte de ti y todo esto con la emoción detrás de miedo, rechazo y odio hacia ti y tu organismo.
                    </p>
                    <p>
                        Hoy te quiero preguntar ¿Cuánto es tu deseo de querer bajar de peso?
                    </p>
                    <p>
                        Y ¿Para qué quieres bajar de peso?
                    </p>
                </div>

                <div className='text-justify space-y-5 pt-5'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >

                    <p>
                        Quizá quieres bajar por la ola cultural que te dice que tienes que bajar, por tradición de cada enero y por cultura y con esto algunas personas se aprovechan de ese deseo y te venden lo impensable con la esperanza de obtener y lograr el sueño de bajar y tener el cuerpo de tus sueños.
                    </p>
                    <p>
                        Ten cuidado a lo que sometes a tu cuerpo ya que puede sufrir y tú con él las consecuencias de ese tipo de tratamientos rigurosos.
                    </p>
                </div>

                <div className='md:pl-16 text-justify font-bold space-y-3'>
                    <div className='text-center' data-aos="fade-right">
                        <h1 className='script-font font-bold text-5xl text-tinto-ligth'>
                            Alertas de qué estás en un tratamiento que puede afectar a tu organismo
                        </h1>
                    </div>
                    {/* LISTADO */}
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span> Te quedas con hambre
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span> Mareos, dolores de cabeza
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span> Cansancio
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span> Arritmias cardiacas
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span> Prohibición de alimentos
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span> Poca cantidad en porciones alimenticias
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span> Te venden la dieta de moda
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span> Ansiedad constante por comer
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span> Eliminación de grupos de alimento como grasas ó harinas
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span> Temor hacia los alimentos
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-rosa-DEFAULT'>*</span> Es una alimentación desequilibrada
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-verde-DEFAULT'>*</span> Comes solo verduras ó frutas
                    </div>
                    <div className='' data-aos="fade-right">
                        <span className='text-4xl font-bold align-middle text-amarillo-DEFAUL'>*</span> Te someten al consumo de pastillas o polvos
                    </div>
                    {/* LISTADO */}

                </div>
                {/*  */}


                <div className='text-justify space-y-5 pt-5'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <p>
                        Identifica de dónde viene tu deseo de querer cambiar tu cuerpo y más en estas fechas dónde mundialmente somos atrapados por esta tradición. No seamos presos de la mercadotecnia y publicidad que nos llega atrapar y ser víctimas del momento.
                    </p>
                    <p>
                        No hay nada malo en ti.No tienes que cambiar tu cuerpo.Y con esto no estoy diciendo que está mal querer comer con mejor calidad, hacer ejercicio y demás, al contrario, si todo es desde el amor que sea bienvenido.
                    </p>
                    <p>
                        Sólo te estoy llevando a la reflexión de que no sometas a tu organismo a tratamientos que pueden perjudicarte a nivel mental, físico, emocional y hasta tu bolsillo.
                    </p>
                    <p>
                        Y pues sí, es Enero y esa sensación llegará, identifícala y reconócela y hoy te invito a que cambies ese deseo de bajar de peso por adoptar nuevos hábitos que te lleven al bienestar, no desde el odio sino desde el amor y la aceptación corporal.
                    </p>
                    <p>
                        ¿Si bajar de peso no existiera en tus propósitos que pudieras hacer para fomentar bienestar en tu organismo y cuerpo a todo nivel ? Sin obsesiones, sin miedo, sin restricción y con mayor autocuidado
                    </p>
                    <p>
                        No tienes que esperar a que bajes de peso para vivir tu vida, Ni tienes que esperar a que sea enero para reconciliarte la comida, tu cuerpo y contigo.
                    </p>
                    <p>
                        Empieza a fomentar hábitos de autocuidado no por bajar de peso y sin esa parte perturbadora de someterte a esos tratamientos que en vez de ayudarte te pueden afectar más.
                    </p>
                 
                </div>


                <div className='pt-12 font-bold text-4xl text-center text-tinto-DEFAULT'
                    data-aos="fade-in"
                >
                    <p>
                        ¿Cómo te gustaría sentirte en este año que comienza con tu cuerpo y mente? Y 
                        ¿Qué acciones harás para fomentarlo?
                    </p>
                </div>
                {/*  */}
                <div className='text-center text-tinto-dark py-8 text-3xl'>
                    <p>
                        Reconcíliate con tu cuerpo, estarás con él toda la vida.
                    </p>
                </div>
            </div>
            {/* FIRMA */}
            <Firma
                fecha='31 de diciembre del 2020'
            />

        </div>
    );
}

export default Navidad2020;