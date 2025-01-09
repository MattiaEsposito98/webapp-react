import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function HomePage() {
  const { movies } = useContext(GlobalContext)

  return (
    <>
      <h2>Elenco dei film:</h2>
      <div className="container">
        {movies.length ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <p>{movie.title}</p>
              {/* <Card key={movie.id} movie={movie} /> */}
            </div>
          ))
        ) : (
          <div>
            <p>Nessun film trovato</p>
          </div>
        )}
      </div>
    </>
  )
}
