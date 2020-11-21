import logo from './assets/img/logo.svg'
const Hero = () => {
    return (
        <section className="text-gray-700 body-font">
            <div className="container flex">
                <div className="rounded-lg h-screen w-screen">
                    <div className="flex content-center bg-fixed mBackground-image h-screen w-screen"
                        style={{ verticalAlign: 'middle' }}
                    >
                        <img className='fade-in ' src={logo} alt='Logo' />
                    </div>
                </div>
            </div>

        </section>
    );
}


export default Hero;