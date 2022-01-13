import Servicio from "./Servicio";
// Iconos
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

import composicion_corporal from './assets/img/005-ejercicio.svg'
import enfermedades_cronicas from './assets/img/007-nutricion.svg'
import nutricion_ejercicio from './assets/img/003-deporte.svg'
import embarazos from './assets/img/006-maternidad.svg'
import plimericas from './assets/img/002-las-personas-de-edad.svg'


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
                            description='Inicia tu proceso de transformación mejorando tus hábitos llevándote al bienestar mejorándola relación con tu cuerpo, la comida y contigo. Servicio On line en cualquier parte de México, América Latina y Europa. Servicio presencial en Guadalajara Jalisco. Para más informes escríbenos en este link vía WhatsApp'
                        />
                        <Servicio
                            key='asesoria'
                            icon={asesoria}
                            tittle={'Asesoría Nutricional'}
                            description='El llevar una educación nutricional es importante para adquirir hábitos y cambies tu estilo de vida acorde a tu situación personal, siempre estamos aprendiendo para poco a poco realizar ajustes en nuestra rutina diaria.'
                        />
                        <Servicio
                            key='coach'
                            icon={coach}
                            tittle={'Coach Nutricional'}
                            description='Alanzar tus metas es posible, cambiar tus hábitos es posible y para eso el tener un coach que te motive y te ayude a encontrar esos recursos para caminar hacia tu objetivo es uno de nuestros pilares en Armonía Nutritiva. No se trata solo de seguir una dieta, sino que encuentres tu verdadera motivación y lo que hace querer ir hacia ella. Más que una dieta es que en tu proceso adquieras hábitos para toda la vida.'
                        />
                        <Servicio
                            key='psiconutricion'
                            icon={psiconutricion}
                            tittle={'Psiconutrición'}
                            description='El cómo comemos y como lo comemos tiene una historia llena de creencias y patrones que si no somos conscientes de ello, será parte de los bloqueos para el avance a tus metas. Todos tenemos una relación íntimamente ligada con la mente, emociones, creencias, pensamientos y que son un reflejo en nuestro proceso nutricional. Con este abordaje se trabajan miedos como subir de peso, autoestima, ansiedad por comer entre otros para así llegar a una mejor versión de ti mismo y tener una mejor relación con la comida y contigo.'
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
                            description='Todos somos seres emocionales y cuándo estas sensaciones las vemos como negativas estamos en una lucha constante. Lleva tratamiento a través de esencias florales que ayudaran a armonizar tus emociones y equilibrando tus sensaciones a nivel cognitivo, físico y emocional.'
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
                        {/* nuevos */}
                        <Servicio
                            key='venta'
                            icon={venta}
                            tittle={'Venta de Productos Saludables'}
                            description='Ten a la mano del consultorio diversos productos naturales que puedes encontrar para tu consumo diario y que pueden beneficiarte.'
                        />
                        <Servicio
                            key='composicion_corporal'
                            icon={composicion_corporal}
                            tittle={'Mejora de Composición Corporal'}
                            description='Disminución grasa corporal y aumento de masa muscular con la alimentación de acuerdo a las necesidades de tu organismo'
                        />
                        <Servicio
                            key='enfermedades_cronicas'
                            icon={enfermedades_cronicas}
                            tittle={'Alimentación para Enfermedades Crónicas'}
                            description='El llevar una alimentación equilibrada, de acuerdo a la patalogía, será importante para el tratamiento y mejora de las mismas.'
                        />
                        <Servicio
                            key='nutricion_ejercicio'
                            icon={nutricion_ejercicio}
                            tittle={'Nutrición y Ejercicio'}
                            description='Llevar una alimentación de acuerdo al deporte y actividad física es importante para así evitar desequilibrios a nivel nutricional y físico, así como para el buen rendimiento y condición'
                        />
                        <Servicio
                            key='embarazos'
                            icon={embarazos}
                            tittle={'Embarazo y lactancia'}
                            description='El aporte adecuado de nutrientes en la etapa de gestación es de total importancia para el desarrollo materno-infantil llevandolos a una nutrición optima'
                        />
                        <Servicio
                            key='plimericas'
                            icon={plimericas}
                            tittle={'Alimentacion en el adulto mayor'}
                            description='Muchas veces en esta etapa de vida puede llevar al paciente a padecer alteraciones nutricionlales lo cual propensa a complicaciones como malnutrición.Una nutrición adecuada a sus condiciones sera primordial para una estabilidad orgánica'
                        />
                        <Servicio
                            key='transtornos_coducta_alimentaria'
                            // icon={plimericas}
                            tittle={'Trastornos de la Conducta Alimentaria'}
                            description='Los trastornos alimenticios van en crecimiento cada día más y el llevar una asesoría nutricional en estos casos es primordial para una recuperación óptima modificando conductas y teniendo una alimentación más compasiva entendiendo el proceso.'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Servicios;