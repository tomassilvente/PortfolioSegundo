import { Link } from "react-router-dom"

export const Experience = () => {

    return (
    <div id="experience" className="fondoCeleste bordeFino my-4 pb-5 px-5 rounded-4 animate__animated animate__fadeIn">
        <h1 className="p-3 font">Experiencia</h1>
        <div className="row">
            <div className="list-group col-6 rounded-4 my-2">
                <button id="button" onClick={inmo} className="list-group-item list-group-item-action">
                    Aplicación Web para Inmobiliaria Centro
                </button>
                <button onClick={brujas} className="list-group-item list-group-item-action">Encargado en Negocios Familiares</button>
                <button onClick={bigSky} className="list-group-item list-group-item-action">Ayudante en Big Sky Resort</button>
                <button onClick={gitHub} className="list-group-item list-group-item-action">Repositorio GitHub</button>
                <button className="list-group-item list-group-item-action disabled ">Futuros Proyectos...</button>
                <button id="proyects" className="list-group-item list-group-item-action disabled">Esperando sumar nuevas experiencias...</button>
            </div>
            <div className='col-6 text-center exp rounded-3'>
                <div id='inmo' style={{display: 'none'}} className='pb-2 animate__animated animate__bounceInLeft'>
                    <h5 className="pt-2">Aplicación Web para inmobilairia Centro</h5>
                    <p>Aplicación hecha para Inmobiliaria Centro, de Punta Alta. Esta app fue realizada utilizando Python con Flask como motor general, luego se utilizó Js, CSS y HTML para las bases, MySQL, junto a PHP para utilizar el backend y bases de datos para almacenar contenidos. La función de esta app era la de almacenar y luego mostrar los inmuebles displonibles para alquiler/venta, junto a sus dueños/inquilinos y administrar esos alquileres y ventas.</p>
                    <Link className="link" to='https://github.com/tomassilvente/inmobiliaria' target='_blank'>Link a repositorio Aquí</Link>
                </div>
                <div id='brujas' style={{display: 'none'}} className='pb-2 animate__animated animate__bounceInLeft'>
                    <h5 className="pt-lg-4 pt-md-2">Encargado en Negocios Familiares</h5>
                    <p>Actualmente me encuentro ayudando a hacer todas las tareas en nuestros negocios familiares, tales como comunicación con distribuidores, control de stock, control de empleados, presencia y ayuda donde se necesite. Estas son las redes sociales de nuestros locales familiares.</p>
                    <Link className="px-2 link" to='https://instagram.com/golf_puertobelgrano?igshid=MzRlODBiNWFlZA==' target='_blank'>BarDelGolf</Link>
                    <Link className="px-2 link" to='https://instagram.com/mikonos.ok?igshid=MzRlODBiNWFlZA==' target='_blank'>Mikonos</Link>
                    <Link className="px-2 link" to='https://instagram.com/termolicafe?igshid=MzRlODBiNWFlZA==' target='_blank'> Térmoli</Link>
                    <Link className="px-2 link" to='https://instagram.com/brujaspub?igshid=MzRlODBiNWFlZA==' target='_blank'> Brujas</Link>
                </div>
                <div id='bigSky' style={{display: 'none'}} className='pb-2 animate__animated animate__bounceInLeft'>
                    <h5 className="pt-2">Ayudante en Big Sky Resort</h5>
                    <p> En Diciembre de 2016 recibí mi título de B2 en inglés otorgado por la Universidad de Cambridge. Gracias a eso pude generar una oportunidad laboral, con el objetivo de salir de mi zona de confort, explorar otra cultura y estilo de vida, y a su vez potenciar mucho mi comunicación en Inglés. Así es como terminé trabajando 2 temporadas de invierno en el centro de Ski de Big Sky, Montana, EEUU, como ayudante en un restaurante y teniendo fluida comunicación con turistas de todas partes del mundo. </p>
                    <Link className="link" to='https://instagram.com/bigskyresort?igshid=MzRlODBiNWFlZA==' target='_blank'>Big Sky Resort</Link>
                </div>
                <div id='gitHub' style={{display: 'none'}} className='pb-2 animate__animated animate__bounceInLeft'>
                    <h5 className="pt-2">Repositorio GitHub</h5>
                    <p> Como estudiante en curso de varias carreras/cursos, aún no tengo más experiencia laboral que la hecha para la WebApp de Inmobiliaria Centro, por eso intento llevar a cabo mini proyectos o simples páginas para practicar y repasar conceptos. Comparto aquí mi repositorio de GitHub para que puedan entrar y ver algunos de los proyectos que llevo a cabo para aprender nuevas técnicas y códigos. Con la esperanza de tener mi primer trabajo y así sumar experiencia y conocimientos una manera más enriquecedora</p>
                    <Link className="link" to='https://github.com/tomassilvente?tab=repositories' target='_blank'>Repositorios</Link>
                </div>
            </div>
        </div>
    </div>
  )
}