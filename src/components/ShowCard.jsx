export default function ShowCard({ movie }) {

  if (movie.id === 1) {
    movie.image = `${import.meta.env.VITE_BE_HOST}/inception.jpg`
    console.log(movie.image)
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
      <div className="card ">
        <img src={movie.image} className="card-img-top img-fluid img-card" />
        <div className="card-body bg-body-secondary">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary fst-italic">{movie.director}</h6>
          <p className="card-text">{movie.abstract}</p>
          <p>{movie.avg_vote}</p>

        </div>
      </div>
    </>
  )
}