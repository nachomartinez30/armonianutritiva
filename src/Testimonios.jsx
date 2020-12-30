const Testimonios = () => {
    return (
        <section className="text-cafe-dark body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-8xl script-font font-bold text-rosa-DEFAULT mb-12 text-center">Testimonios</h1>
                <div className="flex flex-wrap -m-4">
                    <Testimonio
                        name='Mitzi González'
                        testify={"100% Recomendada, la Dra Susan me ayudó a llevar el control de mi alimentación durante mi embarazo, mi bebe nacio sana y solo subí lo correspondiente al embarazo.\nActualmente llevo la alimentación post parto y estoy muy feliz con los resultados , he perdido grasa y aumentado musculo comiendo bien."}
                    />
                    <Testimonio
                        name='Yessica Muñoz'
                        testify={"Susan ha sido más que simplemente una nutrióloga para mi.\nAl inicio, llegué a ella únicamente con el objetivo de perder peso. Luego de un par de consultas Susan me ayudó a descubrir el por qué realmente yo quería perder peso. Fui aprendiendo a comer de manera correcta y a descubrir  mi personalidad, los momentos y emociones que me llevaban a sentir necesidad de comer alimentos que hacían más difīcil cumplir con mi objetivo.\nMe siento muy contenta de los resultados que he obtenido hasta el momento. He perdido más de 10 kg y se que sin la ayuda de Susan no lo hubiera logrado!"}
                    />

                    <Testimonio
                        name="Hugo Marcelo"
                        testify={"Mi experiencia en el proceso nutricional ha sido ha sido muy satisfactoria, ya que me estoy alimentando de mejor manera al balancear mis alimentos diarios, a tener colaciones y tomar mejors decisiones respecto a los alimentos.\nAdemás he aprendido a que el sueño y el ejercicio soy muy importantes para tener una buena calidad de vida.Susan ha sido clave en todo lo mencionado, pues su calidad humana es fuente de inspiración."}
                    />

                    <Testimonio
                        name="Marisol Gonzalez"
                        testify={"Cansada de “cuidarme con la comida” y con unos kilos de más, decidí ir con una coach nutricional, porque evidentemente no estaba haciendo bien las cosas.\nFue cuando me puse en manos de Susan, quien me enseño a comer sano y no pasar hambre, actualmente estoy cumpliendo el plan de nutrición el cual me ayudo a bajar de peso y talla.\nEn un inicio hubo que ajustar malos hábitos y luego encaminada, fui aprendiendo de acuerdo a las necesidades de mi cuerpo. gracias a la confianza de Susan, esto se convirtió en mi nuevo estilo de vida: Comer sano, cuidarme, ¡¡¡estar saludable y feliz!!!"}
                    />

                    <Testimonio
                        name="Diana López"
                        testify={"Susan es una de las mejores nutriologas, se toma el tiempo para escucharte, entender tus necesidades, debilidades y emociones, sobre eso enfoca de una manera muy humana un seguimiento de hábitos y retos que te motivan a ser mejor, no sólo te da un plan de alimentación si no que también te da un motivo para cumplir tus metas.\nLa recomiendo muchísimo"}
                    />

                    <Testimonio
                        name="José Luis Espinoza"
                        testify={"Fue una experiencia buenísima, en lo particular no había estado con una nutrióloga antes.\nComía de todo tipo de comidas y muy variado, el seguimiento era constante y muy bueno.La explicación de la alimentación me agradaba y del por qué de las cosas."}
                    />
                </div>
            </div>
        </section>
    );
}


const Testimonio = ({ name, job, testify }) => {
    let parrafos = testify.split("\n");

    const testimonios = parrafos.map(item => <p className="leading-relaxed text-rosa-dark mb-6">
        {item}
    </p>)

    return (<div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-cafe-ligth p-8 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            {testimonios}
            <div className="inline-flex items-center">
                <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font script-font text-2xl font-bold text-gray-900">{name}</span>
                    <span className="text-gray-500 text-sm">{job}</span>
                </span>
            </div>
        </div>
    </div>
    );
}

export default Testimonios;