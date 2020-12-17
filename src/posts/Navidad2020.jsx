import { useEffect } from "react";
import Divider from "../Divider";
import image from '../assets/posts/navidad2020/navidad2020.jpg'
import Firma from "../Firma.jsx";


const Navidad2020 = () => {

    return (
        <div className='h-full'>
            <Divider />
            {/* Titulo */}
            <h1 className='slide-in-left text-center text-tinto-ligth text-7xl script-font font-bold pt-40 px-5'>
                Hábitos sanos en fiestas decembrinas
            </h1>

            {/* Contenido */}
            <div className='flex flex-wrap space-x-3 space-y-5 justify-center slide-in-right  pt-8 md:px-20 lg:px-56 sm:px-10'>
                {/* Imagen */}
                <div className='h-64 shadow-2xl'>
                    <img className='h-full  fade-in' src={image} alt='hábitos' />
                </div>

                <div className='text-justify space-y-5'>
                    <p>
                        El año se está terminando, fueron tiempos difíciles,
                        muchas vidas afectadas, crisis en todo aspecto y un sin fin
                        de situaciones que se presentaron a cada uno de nosotros.
                    </p>
                    <p>
                        Pero hoy seguimos vivos y hay que agradecer por ello,
                        que hoy más que nunca se ve reflejado por esta pandemia que
                        nos sacó de contexto a todos.
                    </p>
                    <p>
                        Algunos aprovecharon la pandemia para formar una mejor rutina
                        en cuanto a hábitos se refiere, como comer más saludable, hacer
                        ejercicio en casa, cocinar sus alimentos etc.
                    </p>
                    <p>
                        Otros presentaron cambios en su rutina adquiriendo hábitos menos
                        beneficiosos como comer más procesado, ser más sedentarios, etc.
                    </p>
                </div>

                <div className='text-justify space-y-5 pt-5'
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <h1 className='script-font font-bold text-5xl text-tinto-ligth'>¿Reflexiona qué ocurrió contigo?</h1>
                    <p>
                        Sea cual sea tu caso no te juzgues, no te critiques.Hoy estás vivo y es una oportunidad más para
                        mejorarte en cualquier aspecto y área de tu vida.
                    </p>
                    <p>
                        Diciembre ya está aquí y con este mes, el mismo patrón de cada año.Las reuniones, posadas y
                        festividades típicas de la temporada seguirán surgiendo aún con el virus que nos asecha, (aunque sí es
                        así, no olvides tener las medias higiénicas correspondientes).
                    </p>
                    <p>
                        Es muy común escuchar “En diciembre subo de peso” “Voy a comer de todo” “Me voy a poner a dieta
                        para en las fiestas desatramparme” “No hago ejercicio en este mes” etc. y hoy acabándose el año y la
                        situación crítica del mismo “Hay que comer, beber y disfrutar que la vida se va acabar”
                    </p>
                    <p>
                        Es un hecho, la vida se va en un dos por tres, pero hay que vivir sin hacernos daño y no caer en
                        los excesos.
                    </p>
                    <p>
                        Y sí, en diciembre hay más fiestas y comida típica y aquí te dejo estas recomendaciones que pueden
                        ayudarte a darle un mejor sentido a las fechas en relación a tus hábitos
                    </p>
                </div>
                <div className='pl-16 text-justify space-y-3'>
                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Evita etiquetar a los alimentos como buenos o malos. Las cantidades y constancia en el consumo de un alimento puede llevarnos a un resultado, pero no por su consumo repentino y moderado.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> No te restringas a comer algún gusto por miedo a subir de peso o porque lo consideras “no sano”.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> No le tengas miedo a la temporada por ser tiempo de fiestas.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Sigue con esos hábitos que te ayudan y contribuyen a tu bienestar.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Realiza actividades que te agraden y disfrutes.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> El ejercicio te hará a sentirte mejor y lo mejor ¡Quita el frio!
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Agrega vegetales en diferentes preparaciones en tus comidas. ¡No te olvides de las frutas y verduras!
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Hidrátate, en estos tiempos podemos sentir menos sed, pero tu cuerpo necesita agua para su funcionamiento, aunque sea diciembre.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Si comes algún alimento que consideras “no es tan saludable” no te critiques, disfrútalo y sigue con tu vida habitual.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> No señales ni critiques la forma de comer de los demás.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Evita pensamientos de restricción y exceso en cuanto a la comida y la bebida
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Evita críticas en la cena navideña de acuerdo a los cuerpos de los demás. La crítica solo es un reflejo de nosotros mismos en el otro.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Es común que algunos por tiempos de cierre de año, cenas de festividades y la temporada en si puedan presentar síntomas de depresión y/o ansiedad y se refleje en la manera de comer o en los hábitos. Si es tu caso reflexiona y pide ayuda profesional.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Realiza colaciones y no te malpases.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> No te culpes por eso que hayas comido o bebido “de más”
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Escucha tu cuerpo y sus necesidades vitales y reales.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> No te obsesiones con querer compensar restringiendo comida o realizando ejercicio de más.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Evita los ayunos y come a tus horas con el objetivo de comer en exceso en las fiestas. Solo te llevara a sentir ansiedad por comer disparando emociones.
                    </div>

                    <div className=''
                        data-aos="fade-right"
                    >
                        -> Come lento y disfruta cada bocado y alimento con todos tus sentidos
                    </div>
                </div>
                <div className='font-bold text-xl text-center text-tinto-DEFAULT'
                    data-aos="fade-in"
                >
                    <p>
                        Disfruta de la temporada y elimina esos pensamientos que pueden sabotear tu bienestar, es un tiempo de reflexión y visualizar que es lo que quieres conseguir en todo aspecto de vida.
                    </p>
                </div>
                <div className='text-center text-tinto-dark py-8'>
                    Cuida a los tuyos y a ti mismo
                    ¡Felices Fiestas!
                </div>
                <div>
                <Firma />
                </div>

            </div>






        </div>
    );
}

export default Navidad2020;