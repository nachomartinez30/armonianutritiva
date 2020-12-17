import imgNavidad2020 from './assets/posts/carousel/navidad2020.jfif'
const Carrousel = () => {
    return (

        <section section className="text-rosa-dark body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Card
                        imgPath={imgNavidad2020}
                        title='Hábitos de Navidad'
                        category='Nueva'
                        descr='Sea cual sea tu caso no te juzgues, no te critiques. Hoy estás vivo y es una oportunidad más para mejorarte en cualquier aspecto y área de tu vida.'
                        route='/navidad2020'
                    />
                </div>
            </div>
        </section>
    );
}

const Card = ({ imgPath, title, category, descr, route }) => <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 rounded-lg bg-cafe-ligth overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imgPath} alt="blog"
        />
        <div className="p-6">
            {/* <h2 className="tracking-widest text-lg title-font font-bold text-verde-DEFAULT mb-1">
                {category}
            </h2> */}
            <h1 className="title-font text-4xl script-font font-medium mb-3">
                {title}
            </h1>
            <p className="leading-relaxed  mb-3">
                {descr}
            </p>
            <div className="flex items-center flex-wrap ">
                <a href={route} className="text-rosa-DEFAULT inline-flex items-center md:mb-2 lg:mb-0">Leer más
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </a>
                <span className="text-gray-600 inline-flex items-center leading-none text-sm">
                </span>
            </div>
        </div>
    </div>
</div>


export default Carrousel;