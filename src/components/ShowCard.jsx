import ReviewsCard from "./ReviewsCard"

export default function ShowCard({ movie }) {

  if (movie.id === 1) {
    movie.image = `${import.meta.env.VITE_BE_HOST}/inception.jpg`

  } else if (movie.id === 2) {
    movie.image = `${import.meta.env.VITE_BE_HOST}/the_godfather.jpg`
  } else if (movie.id === 3) {
    movie.image = `${import.meta.env.VITE_BE_HOST}/titanic.jpg`
  } else if (movie.id === 4) {
    movie.image = `${import.meta.env.VITE_BE_HOST}/matrix.jpg`
  } else if (movie.id === 5) {
    movie.image = `${import.meta.env.VITE_BE_HOST}/interstellar.jpg`
  } else {
    movie.image = `http://localhost:3000/logo.jpg` // Immagine predefinita
  }



  return (
    <>
      <div className="card mb-3">
        <div className="row g-0 align-item-center">
          <div className="col-4">
            <img src={movie.image} className="img-fluid rounded mt-4 ms-1 " />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{movie.title}</h4>
              <p className="fst-italic">{movie.director}</p>
              <p className="card-text">{movie.abstract}</p>
              <p>{movie.avg_vote}</p>
            </div>
          </div>
        </div>
      </div>

      {
        movie.reviews.map((review) => {
          return <ReviewsCard key={review.id} review={review} />
        })
      }
    </>
  )
}