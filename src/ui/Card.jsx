import { Link } from "react-router-dom"

export const Card = ({title, subT, descr, link}) => {
  return (
    <div className="card ">
        <div className="card-body">
            <h5 className="card-title pb-xl-2">{title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{subT}</h6>
            <p className="card-text">{descr}</p>
            <Link to={link} className="card-link" target='_blank'>Ver más</Link>
        </div>
    </div>
  )
}
