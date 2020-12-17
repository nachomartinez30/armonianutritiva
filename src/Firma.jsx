import nutricionista from './assets/img/nutricionista.jpg';
const Firma = () => {
    return (
        <div className=" items-center text-center justify-center">
            <div className="w-20 h-20 rounded-full  items-center justify-center bg-gray-200">
                <img className='rounded-full bg-gray-700' src={nutricionista} alt='Nutricionista' />
            </div>
            <h2 className="mt-4 text-rosa-dark font-bold script-font text-3xl"><p>Nutrióloga</p> Susan Areli Osornio Guzmán</h2>
        </div>
    );
}

export default Firma;