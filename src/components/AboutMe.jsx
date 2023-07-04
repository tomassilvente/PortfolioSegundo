
export const AboutMe = () => {
  return (
    <div id="about" className="fondoClaro bordeFino my-4 pb-5 px-2 rounded-4 animate__animated animate__fadeIn"> 
        <h1 className="p-3 font">¿Quién soy?</h1>
        <div className="row pt-2">
            <img className="col-lg-7 col-xl-6 rounded-5" src='./src/assets/mozo.jpg' />
            <div className="col-lg-5 col-xl-6 col-xxl-5 p-xxl-3">
                <h5 className="p-2 pt-4">Me llamo Tomás Silvente, vivo en la ciudad de Punta Alta.</h5>
                <h5 className="p-2">Nacido un 10 de Febrero de 1999 en Bahía Blanca.</h5>
                <h5 className="p-2">Apasionado por la tecnología desde niño, siempre me gustó estar al tanto de lo último en tecnología.</h5>
                <h5 className="p-2">Totalmente fanático del básquet, los videojuegos y los esports.</h5>
                <h5 id="study" className="p-2">Sueño con trabajar y aportar con la constante innovación tecnológica del mundo en el que vivimos.</h5>
            </div>
        </div>
    </div>
  )
}
