import { Card } from "../ui/Card"
import {Link} from 'react-router-dom'

export const Study = () => {
  return (
    <div className="fondoClaro bordeFino my-4 pb-4 px-2 rounded-4 animate__animated animate__fadeIn">
        <h1 className="font p-3">Mis Estudios</h1>
        <section className="p-lg-3 d-none d-lg-flex">
            <Card className='card '
                title={'Bachiller Secundario'} 
                subT={'Instituto José Manuel Estrada'} 
                descr={'Título secundario (2011 - 2016) en la ciudad de Punta Alta, Pvcia BsAs, Arg.'}
                link={'https://biblioestrada.com.ar/historia/'}
            />
            <Card className='card ' 
                title={'Técnico en Redes Informáticas'} 
                subT={'Instituto TECLAB'} 
                descr={'Título de Técnico en Redes Informáticas logrado en Diciembre de 2021, Córdoba, Argentina.'}
                link={'https://www.teclab.edu.ar/carrera/tecnico-superior-en-redes-informaticas/'}
            />
            <Card className='card'
                title={'Analista en Sistemas'} 
                subT={'Instituto Superior de Formación Técnica 190'} 
                descr={'Título terciario, aún no recibido, últimos finales pendientes para recibirme, fecha esperada de recibida Dic 2023.'}
                link={'https://www.isft190.com.ar/index.html'}
            />
            <Card className='card' 
                title={'Desarrollo en Python by HolaMundo'} 
                subT={'Udemy'} 
                descr={'Curso Completado en Diciembre de 2021, a través de la plataforma Udemy. Los temas más abordados fueron, además de HTML y CSS básicos y Python avanzado, Creación de páginas Web con Flask utilizando PHP y MySQL, creación de pequeñas App de escritorio con TkInter.'}
                link={'https://www.udemy.com/course/python-sin-fronteras-html-css-mysql/'}
            />
            <Card className='card' 
                title={'Desarrollo Web FullStack'} 
                subT={'Udemy'} 
                descr={'Curso finalizado en Noviembre de 2022, a través de Udemy. Los temas abordados van desde Javascript básico, junto a CSS y HTML, luego pasando por conceptos como JQuery, React (profundizando Hooks & Redux), consumo de APIs, Python, Bases de Datos, Djando y Wagtail, todo para producción y desarrollo de páginas Web modernas, responsivas y totalmente funcionales.'}
                link={'https://www.udemy.com/certificate/UC-0f30a5a2-ac1c-4ddb-ad5c-fafbb0b5595d/'}
            />
            <Card 
                className='card' 
                title={'Desarrollo BackEnd'} 
                subT={'CoderHouse'} 
                descr={'Curso en proceso en la plataforma CoderHouse, con estimada finalización en Octubre de 2023, donde se bsuca aprender el uso de Express, Mongo y Node, para completementar a mis conocimientos en React y tener el Stack completo de MERN y mejorar como desarrollador.'}
                link={'https://www.coderhouse.com/online/programacion-backend?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJtoEa5qhWUYC31s0DuvDXPDF4kXDvtykNoac4tOHNH8dmtCct05GdsaAijcEALw_wcB'}
            />
        </section>
        <div className="d-sm-block d-lg-none px-3">
            <Link className="link2 row mb-2" to='https://biblioestrada.com.ar/historia/' target='_blank'><h5 className="col-8 text-start">Bachiller Secundario</h5><p className="card-subtitle subT col-4 text-end">Instituto José Manuel Estrada</p></Link>
            <Link className="link2 row mb-3" to='https://www.teclab.edu.ar/carrera/tecnico-superior-en-redes-informaticas/' target='_blank'><h5 className="col-8 text-start">Técnico en Redes Informáticas</h5><p className="card-subtitle subT col-4 text-end">Instituto TECLAB</p></Link>
            <Link className="link2 row mb-2" to='https://www.isft190.com.ar/index.html' target='_blank'><h5 className="col-6 text-start">Analista en Sistemas</h5 ><p className="card-subtitle subT col-6 text-end">Instituto Superior de Formación Técnica 190</p></Link>
            <Link className="link2 row mb-3" to='https://www.udemy.com/course/python-sin-fronteras-html-css-mysql/' target='_blank'><h5 className="col-8 text-start">Desarrollo en Python</h5><p className="card-subtitle subT col-4 text-end">Udemy - HolaMundo!</p></Link>
            <Link className="link2 row mb-2" to='https://www.udemy.com/certificate/UC-0f30a5a2-ac1c-4ddb-ad5c-fafbb0b5595d/' target='_blank'><h5 className="col-8 text-start">Desarrollo Web FullStack</h5><p className="card-subtitle subT col-4 text-end">Udemy - Kalob Taulien</p></Link>
            <Link className="link2 row mb-2" to='https://www.coderhouse.com/online/programacion-backend?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJtoEa5qhWUYC31s0DuvDXPDF4kXDvtykNoac4tOHNH8dmtCct05GdsaAijcEALw_wcB' target='_blank'><h5 className="col-8 text-start">Desarrollo BackEnd</h5><p className="card-subtitle subT col-4 text-end">CODERHOUSE</p></Link>
        </div>
    </div>
  )
}
