import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import Card from "../components/Card"

export default function HomePage() {
  const { movies, searchMovie, search, setSearch } = useContext(GlobalContext)

  return (
    <>
      <h2 className="text-center text-info mt-2">Elenco dei film</h2>

      <form onSubmit={searchMovie} className="d-flex justify-content-end gap-2">
        <input type="text" placeholder="Cerca un libro.." value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }} />
        <button className="btn btn-primary">Cerca</button>
      </form>

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
