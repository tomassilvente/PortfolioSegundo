import { Link } from "react-router-dom"

export const Contacto = () => {
  return (
    <div id="contact" className="fondoClaro bordesRosas rounded-4 animate__animated animate__fadeIn mb-5 pb-2">
        <h1 className="font p-3">Contactame</h1>
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <Link to='https://github.com/tomassilvente' target='_blank'><img className="littleImg rounded-5" src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></Link>
                    <h6 className="py-4">Tomás Silvente</h6>
                </div>
                <div className="col">
                    <Link to='https://www.linkedin.com/in/tomas-silvente-a4b1951b2/' target='_blank'><img className="littleImg rounded-5" src='https://cdn-icons-png.flaticon.com/256/61/61109.png'/></Link>
                    <h6 className="py-4">Tomás Silvente</h6>
                </div>
                <div className="col">
                    <Link to='mailto:silventetomas@gmail.com?Subject=Contacto%20desde%20PortFolio' target='_blank' ><img className="littleImg rounded-5" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png'/></Link>
                    <h6 className="py-4">silventetomas@gmail.com</h6>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href='./src/assets/CV2.pdf' download='Tomás Silvente CV'><img className="littleImg rounded-5" src='https://cdn-icons-png.flaticon.com/512/909/909314.png'/></a>
                    <h6 className="py-4">Descargar mi currículum</h6>
                </div>
                <div className="col">
                    <Link to='https://instagram.com/tomassilvente' target='_blank'><img className="littleImg rounded-5 " src='https://cdn-icons-png.flaticon.com/512/87/87390.png'/></Link>
                    <h6 className="py-4">Tomás Silvente</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
