import { Link } from "react-router-dom"
import Stars from "./Stars"

export default function Card({ movie }) {
  return (
    <>
      <div className="card h-75">
        <img src={movie.image} className="card-img-top img-fluid img-card" />
        <div className="card-body bg-body-secondary">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle text-body-secondary fst-italic">{movie.director}</h6>
          <p className="card-text">{movie.abstract}</p>
          <Stars avg_vote={movie.avg_vote} />
          <Link to={`/show/${movie.id}`} >
            <button className="btn btn-primary mt-2">Leggi di più</button>
          </Link>
        </div>
      </div>
    </>
  )
}