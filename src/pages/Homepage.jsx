import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"
import Card from "../components/Card"


export default function HomePage() {
  const { movies, searchMovie, search, setSearch } = useContext(GlobalContext)
  const navigate = useNavigate()

  function Home() {
    location.reload()
  }

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

          {movies.length > 2 ? (
            movies.map((movie) => (
              <div className="col-lg-4 mb-5 h-100 col-md-6" key={movie.id}>
                <Card movie={movie} />
              </div>
            ))
          ) : movies.length === 0 ? (
            <div className="d-flex justify-content-center flex-column gap-3 align-items-center">
              <p>Nessun film trovato</p>
              <button type="button" onClick={Home} className="btn btn-outline-warning">Torna alla home</button>
            </div>
          ) : (
            movies.map((movie) => (
              <div className="d-flex justify-content-between align-items-start" key={movie.id}>
                <Card movie={movie} />
                <button type="button" onClick={Home} className="btn btn-outline-warning">Torna alla home</button>
              </div>
            ))
          )}



        </div>

      </div>
    </>
  )
}
