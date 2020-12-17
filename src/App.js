import Carrousel from "./Carrousel";
import Testimonios from "./Testimonios";
import Descripcion from "./Descripcion";
import Divider from "./Divider";
import Hero from "./Hero";
import QuienSoy from "./QuienSoy";
import Servicios from "./Servicios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Navidad2020 from "./posts/Navidad2020";
import AOS from 'aos'
import 'aos/dist/aos.css'

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
        </Switch>
      </Router>
      {/* multimedia publicaciones intsa, ebook, videos, blog */}

      {/* ubicacion y contacto */}
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
    {/* <Testimonios /> */}
  </Fragment>

export default App;
