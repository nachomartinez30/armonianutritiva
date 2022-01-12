import { useState, useEffect } from 'react'
import Divider from '../components/Divider'
import Hero from '../components/Hero'
import Descripcion from '../components/Descripcion'
import QuienSoy from '../components/QuienSoy'
import Servicios from '../components/Servicios'
// import Carrousel from '../components/Carrousel'
import Testimonios from '../components/Testimonios'
import Footer from '../components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'


const Home = ({ data }) => {
  console.log("data", data);
  const [inicio, setInicio] = useState(false);

  useEffect(() => {
    AOS.init()
    setInicio(true);
  }, [inicio])

  return (
    <div className='bg-base'>
      <Head>
        <title>Armonia Nutritiva</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Divider />
      <Hero />
      <Descripcion />
      <QuienSoy />
      <Servicios />
      {/* <Carrousel /> */}
      <Testimonios />
      <Footer />
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:1337/api/publicacions')
  const json = await res.json()
  return { data: json }
}

export default Home;