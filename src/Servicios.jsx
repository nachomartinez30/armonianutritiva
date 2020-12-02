import './assets/styles.css'
import Servicio from "./Servicio";

const Servicios = () => {
    return (
        <div className='flex'>
            <div className='py-5 bg-rosa lg:services-container-lg  slide-in-left'>
                <section>
                    <h1 className='text-4xl text-rosa  text-center'>Servicios</h1>
                    {/*Imagen SVG */}
                    <div className='flex flex-wrap '>
                        <Servicio
                            tittle={'Citas Online y presenciales'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Asesoría nutricional'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Coach nutricional'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Psiconutrición'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Cambio de hábitos'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Antropometría certificada'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Terapia floral'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Nutricion emocional'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Plan de alimentación personalizado'}
                            description='Lorem'
                        />
                        <Servicio
                            tittle={'Venta de productos saludables y suplementos'}
                            description='Lorem'
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Servicios;