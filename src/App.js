import Descripcion from "./Descripcion";
import Hero from "./Hero";
import QuienSoy from "./QuienSoy";

const App = () => {
  return (
    <div className='bg-base'>
      <Hero />
      <Descripcion />
      <QuienSoy />
    </div>
  );
}

export default App;
