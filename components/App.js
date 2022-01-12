import Carrousel from "./Carrousel";
import Descripcion from "./Descripcion";
import Divider from "./Divider";
import Hero from "./Hero";
import QuienSoy from "./QuienSoy";
import Servicios from "./Servicios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Navidad2020 from "./posts/Navidad2020";
import AnioNuevo2020 from "./posts/AnioNuevo2020";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Testimonios from "./Testimonios";
import Articulo from "./Articulo";
import Footer from "./Footer";

const App = () => {
  const [inicio, setInicio] = useState(false);

  useEffect(() => {
    AOS.init()
    setInicio(true);
  }, [inicio])

  return (
    <div className='bg-base'>
      <Router>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/navidad2020" component={Navidad2020} />
          <Route exact path="/anioNuevo2020" component={AnioNuevo2020} />
          <Route exact path="/post/:id" component={Articulo} />
        </Switch>
      </Router>
      {/* multimedia publicaciones intsa, ebook, videos, blog */}

      {/* ubicacion y contacto */}

      {/* <div>Iconos diseñados por <a href="https://www.flaticon.es/autores/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/pongsakornred" title="pongsakornRed">pongsakornRed</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div><div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div><div>Iconos diseñados por <a href="https://www.flaticon.es/autores/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> */}
      
      <Footer />
    </div>
  );
}

const Principal = () =>
  <Fragment>
    <Divider />
    <Hero />
    <Descripcion />
    <QuienSoy />
    <Servicios />
    <Carrousel />
    <Testimonios />
  </Fragment>

export default App;
