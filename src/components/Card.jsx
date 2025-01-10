import { Link } from "react-router-dom"

export default function Card({ movie }) {
  return (
    <>
      <div className="card ">
        <img src={movie.image} className="card-img-top img-fluid img-card" />
        <div className="card-body bg-body-secondary">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary fst-italic">{movie.director}</h6>
          <p className="card-text">{movie.abstract}</p>
          <p>{movie.avg_vote}</p>
          <Link to={`/show/${movie.id}`} >
            <button className="btn btn-primary">Leggi di più</button>
          </Link>
        </div>
      </div>
    </>
  )
}