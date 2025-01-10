import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Card from "../components/Card"

export default function HomePage() {
  const { movies } = useContext(GlobalContext)

  return (
    <>
      <h2 className="text-center text-info mt-2">Elenco dei film</h2>
      <div className="container mt-4">
        <div className="row">

          {movies.length ? (
            movies.map((movie) => (
              <div className="col-lg-4 mb-5 h-100 col-md-6 " key={movie.id}>
                <Card movie={movie} />
              </div>
            ))
          ) : (
            <div>
              <p>Nessun film trovato</p>
            </div>
          )}


        </div>

      </div>
    </>
  )
}
