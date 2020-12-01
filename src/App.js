import Descripcion from "./Descripcion";
import Hero from "./Hero";
import QuienSoy from "./QuienSoy";
import Servicios from "./Servicios";

const App = () => {
  return (
    <div className='bg-base'>
      <Hero />
      <Descripcion />
      <QuienSoy />
      <Servicios />
      {/* testimonios */}
      {/* ubicacion y contacto */}
    </div>
  );
}

export default App;
