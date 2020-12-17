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
import { useEffect } from "react";


const Servicios = () => {

    

    return (
        <div className='flex'
            data-aos="fade-right"
            data-aos-duration="2000"
        >
            <div className='py-1' >
                <section>
                    <h1 className='text-8xl font-bold text-rosa-DEFAULT script-font text-center py-10'>
                        Servicios
                    </h1>
                    {/*Imagen SVG */}
                    <div className='flex flex-wrap justify-items-center'>

                        <Servicio
                            key='citas'
                            icon={citas}
                            tittle={'Cita Online y Presencial'}
                            description='Empieza a mejorar la relación que tienes con tu cuerpo y con la comida . En cualquier lugar de México y America Latina . Servicio de citas On line Presencial Guadalajara, Jalisco México'
                        />
                        <Servicio
                            key='asesoria'
                            icon={asesoria}
                            tittle={'Asesoría Nutricional'}
                            description='La mejor manera de cambiar tus hábitos es con una asesoría y continúa educación en nutrición.'
                        />
                        <Servicio
                            key='coach'
                            icon={coach}
                            tittle={'Coach Nutricional'}
                            description='Si dejas que nuestros coaches nutricionales te acompañen, conseguirás:
                                Conocer qué alimentos debes tomar de forma fácil y natural. Comprender el vínculo entre tus kilos y las emociones Aprender a preparar tus propios menús fácilmente y disfrutarás haciéndolo. Mejorar la confianza en ti mismo/a y en tu cuerpo Aumentar tu vitalidad y te sentirás más en forma a medida que te acercas a tu peso ideal.'
                        />
                        <Servicio
                            key='psiconutricion'
                            icon={psiconutricion}
                            tittle={'Psiconutrición'}
                            description='Relación de la mente, creencias, emociones y la nutrición.
                                        Aborda temas como miedo a subir de peso, autoestima, espíritu para llevar a ser una mejor versión de sí mismo, trastornos alimenticios, ansiedad por comer y patrones alimenticios.'
                        />
                        <Servicio
                            key='habitos'
                            icon={habitos}
                            tittle={'Cambio de Hábitos'}
                            description='Nuestra alimentación se basa principalmente en conductas que llevamos años realizando, y nos resulta muy complicado cambiar estos comportamientos debido a que se han convertido en nuestros hábitos.
                            ¡Pero conseguir cambiar tus hábitos alimenticios para alcanzar unos más saludables es posible! En Armonía Nutritiva te ayudamos a lograrlo.'
                        />
                        <Servicio
                            key='antropometria'
                            icon={antropometria}
                            tittle={'Antropometría Certificada'}
                            description='Mediciones del cuerpo para conocer el porcentaje exacto de grasa de tu cuerpo y el porcentaje de masa muscular.'
                        />
                        <Servicio
                            key='floral'
                            icon={floral}
                            tittle={'Terapia Floral'}
                            description='Las Terapias Florales te ayudan a armonizar tus emociones para equilibrarte física y emocionalmente.'
                        />
                        <Servicio
                            key='emocional'
                            icon={emocional}
                            tittle={'Nutrición Emocional'}
                            description='Nuestras emociones juegan un papel importante y se reflejan en la manera que comemos y los alimentos que elegimos . Aprende a manejarlas y reconcíliate con la comida.'
                        />
                        <Servicio
                            key='plan'
                            icon={plan}
                            tittle={'Plan de Alimentación Personalizado'}
                            description='La cantidad y calidad de alimentos es diferente para cada uno de nosotros. Nuestros planes de alimentación son personalizados de acuerdo a los gustos, preferencias , cultura , edad, actividades, ejercicio etc . Todos los organismos son diferentes.'
                        />
                        <Servicio
                            key='venta'
                            icon={venta}
                            tittle={'Venta de Productos Saludables'}
                            description='Tienda en nuestra clínica nutricional.'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Servicios;