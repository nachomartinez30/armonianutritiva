import { Fragment } from 'react';
import nutricionista from './assets/img/nutricionista.jpg';
const Firma = () => {
    return (
        <Fragment>
            <div className="flex flex-wrap items-center text-center justify-center">
                <div className="w-20 h-20 rounded-full  items-center justify-center bg-gray-200">
                    <img className='rounded-full bg-gray-700' src={nutricionista} alt='Nutricionista' />
                </div>
            </div>
            <h2 className="text-center mt-4 text-rosa-dark font-bold script-font text-3xl pb-12"><p>Nutrióloga</p> Susan Areli Osornio Guzmán</h2>
        </Fragment>
    );
}

export default Firma;