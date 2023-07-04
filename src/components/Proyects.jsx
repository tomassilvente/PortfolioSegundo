import { Link } from "react-router-dom"

export const Proyects = () => {
  return (
    <div  className="fondoClaro bordeFino mb-5 pb-3 rounded-4 container animate__animated animate__fadeIn">
        <h1 className="font p-3">Proyectos</h1>
        <div className="row">
            <div className="card bordesCarta rounded-5 carta col-md-4 my-2 my-md-0" >
                <a  href="./src/assets/Gestor.exe" download='Gestor de Tareas - Tomas Silvente.exe'><img src="https://img.freepik.com/free-icon/todo-list_318-10185.jpg" className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title"> Gestor de tareas </h5>
                    <p className="card-text">Aplcación de escritorio con la finalidad de ser una típica app "Todo List", donde se pueden agregar, borrar tareas y tachar o marcar a medida que se realian las mismas.</p>
                    <a href="./src/assets/Gestor.exe" download='Gestor de Tareas - Tomas Silvente.exe' className="btn btn-primary">Descargar</a>
                </div>
            </div>
            <div className="card bordesCarta carta rounded-5 col-md-4 my-2 my-md-0" >
            <a href="./src/assets/libreta-clientes.exe" download='Libreta de Clientes - Tomas Silvente.exe'><img src="https://cdn-icons-png.flaticon.com/512/1250/1250592.png" className="card-img-top" alt="..." /></a>
                <div className="card-body">
                    <h5 className="card-title"> Libreta de Clientes </h5>
                    <p className="card-text">Aplicación de escritorio que tiene como propósito agendar contactos con nombre y apellido, número de teléfono y empresa para la cual trabaja.</p>
                    <a href="./src/assets/libreta-clientes.exe" download='Libreta de Clientes - Tomas Silvente.exe' className="btn btn-primary">Descargar</a>
                </div>
            </div>
            <div className="card bordesCarta carta rounded-5 col-md-4 my-2 my-md-0" >
            <Link to="https://github.com/tomassilvente/Mailer"><img src="https://img.freepik.com/iconos-gratis/correo-electronico_318-859700.jpg?w=2000" className="card-img-top " alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title"> Mailer </h5>
                    <p className="card-text">Código fuente de app hecho en Python, junto a Flask y Sengrid con el propósito de enviar mails a cualquier usuario utilizando un mail "empresarial" previamente configurado de forma simple y sencilla.</p>
                    <Link to="https://github.com/tomassilvente/Mailer" className="btn btn-primary">Ir al Repositorio</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
