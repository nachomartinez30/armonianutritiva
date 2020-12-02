import logo from './assets/img/logo.svg'
const Hero = () => {
    return (
        <section className="text-gray-700 body-font">
            <div className="flex">
                <div className="rounded-lg h-screen w-full">
                    <div className="pt-48 px-5 flex flex-grow flex-col align-middle bg-fixed mBackground-image h-full w-full">
                        <img className='fade-in pl-4' src={logo} alt='Logo' />
                    </div>
                </div>
            </div>

        </section>
    );
}


export default Hero;