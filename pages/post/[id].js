import { Fragment } from "react/cjs/react.production.min";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from "next/image";
import nutrisionista from "../../assets/img/nutricionista.jpg";
import Footer from "../../components/Footer";



const Posts = () => {
    const router = useRouter()
    const { id } = router.query
    // const [data, setData] = useState()
    const [content, setContent] = useState()

    const getData = async () => {
        try {
            const res = await fetch(`http://localhost:1337/api/publicacions/${id}`)
            const json = await res.json()
            setContent(json.data.attributes.contenido)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        id && getData();
    }, [id])



    return (<Fragment>
        <div className="bg-base ">
            {content && <div className="h-full text-cafe text-2xl text-justify" dangerouslySetInnerHTML={{ __html: content }} />}
            {/* FIRMA */}
            <div className="flex flex-wrap items-center text-center justify-center"><div className="w-20 h-20 rounded-full  items-center justify-center bg-gray-200"><Image className="rounded-full bg-gray-700" src={nutrisionista} alt="Nutricionista" /></div></div>
            <h2 className="text-center mt-4 text-rosa-dark font-bold script-font text-3xl"><p>Nutrióloga</p> Susan Areli Osornio Guzmán</h2>
            <div className="text-center text-sm pb-12">{'fecha'}</div>


        </div>
        <Footer/>
    </Fragment>
    );
}



export default Posts;