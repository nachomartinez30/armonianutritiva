import './assets/styles.css'
import Servicio from "./Servicio";
import citas from './assets/img/007-dieta.svg'
import asesoria from './assets/img/001-comida.svg'
import coach from './assets/img/002-manzana.svg'
import psiconutricion from './assets/img/003-autismo.svg'
import habitos from './assets/img/004-saltar-la-cuerda.svg'
import antropometria from './assets/img/005-cinta-metrica.svg'
import floral from './assets/img/006-lotus-flower.svg'
import emocional from './assets/img/008-medios-de-comunicacion-social.svg'
import plan from './assets/img/009-vitaminas.svg'
import venta from './assets/img/001-comida.svg'

const Servicios = () => {
    return (
        <div className='flex'>
            <div className='py-5 slide-in-left'>
                <section>
                    {/* <h1 className='text-4xl text-rosa  text-center'>Servicios</h1> */}
                    {/*Imagen SVG */}
                    <div className='flex flex-wrap '>

                        <Servicio
                            icon={citas}
                            tittle={'Citas Online y presenciales'}
                            description='Empieza a mejorar la relación que tienes con tu cuerpo y con la comida . En cualquier lugar de México y America Latina . Servicio de citas On line Presencial Guadalajara, Jalisco México'
                        />
                        <Servicio
                            icon={asesoria}
                            tittle={'Asesoría nutricional'}
                            description='La mejor manera de cambiar tus hábitos es con una asesoría y continúa educación en nutrición.'
                        />
                        <Servicio
                            icon={coach}
                            tittle={'Coach nutricional'}
                            description='Si dejas que nuestros coaches nutricionales te acompañen, conseguirás:
                                Conocer qué alimentos debes tomar de forma fácil y natural. Comprender el vínculo entre tus kilos y las emociones Aprender a preparar tus propios menús fácilmente y disfrutarás haciéndolo. Mejorar la confianza en ti mismo/a y en tu cuerpo Aumentar tu vitalidad y te sentirás más en forma a medida que te acercas a tu peso ideal.'
                        />
                        <Servicio
                            icon={psiconutricion}
                            tittle={'Psiconutrición'}
                            description='Relación de la mente, creencias, emociones y la nutrición.
                                        Aborda temas como miedo a subir de peso, autoestima, espíritu para llevar a ser una mejor versión de sí mismo, trastornos alimenticios, ansiedad por comer y patrones alimenticios.'
                        />
                        <Servicio
                            icon={habitos}
                            tittle={'Cambio de hábitos'}
                            description='Nuestra alimentación se basa principalmente en conductas que llevamos años realizando, y nos resulta muy complicado cambiar estos comportamientos debido a que se han convertido en nuestros hábitos.
                            ¡Pero conseguir cambiar tus hábitos alimenticios para alcanzar unos más saludables es posible! En Armonía Nutritiva te ayudamos a lograrlo.'
                        />
                        <Servicio
                            icon={antropometria}
                            tittle={'Antropometría certificada'}
                            description='Mediciones del cuerpo para conocer el porcentaje exacto de grasa de tu cuerpo y el porcentaje de masa muscular.'
                        />
                        <Servicio
                            icon={floral}
                            tittle={'Terapia floral'}
                            description='Las Terapias Florales te ayudan a armonizar tus emociones para equilibrarte física y emocionalmente.'
                        />
                        <Servicio
                            icon={emocional}
                            tittle={'Nutricion emocional'}
                            description='Nuestras emociones juegan un papel importante y se reflejan en la manera que comemos y los alimentos que elegimos . Aprende a manejarlas y reconcíliate con la comida.'
                        />
                        <Servicio
                            icon={plan}
                            tittle={'Plan de alimentación personalizado'}
                            description='La cantidad y calidad de alimentos es diferente para cada uno de nosotros. Nuestros planes de alimentación son personalizados de acuerdo a los gustos, preferencias , cultura , edad, actividades, ejercicio etc . Todos los organismos son diferentes.'
                        />
                        <Servicio
                            icon={venta}
                            tittle={'Venta de productos saludables'}
                            description='Tienda en nuestra clínica nutricional.'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Servicios;