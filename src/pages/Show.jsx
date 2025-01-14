import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import ShowCard from "../components/ShowCard"
import axios from "axios"
import Loader from "../components/Loader"

export default function Show() {
  const { id } = useParams()
  const { movies, setIsLoading } = useContext(GlobalContext)
  const [movie, setMovie] = useState(null)


  function fetchMovie() {
    setIsLoading(true)
    axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(err => {
        console.error("Errore nel recupero dei dati:", err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchMovie()
  }, [id, movies]) //passo anche movies per far aggiornare l'array

  return (
    <>
      <h1 className="text-center text-info mt-2">Dettaglio Film</h1>
      <div className="d-flex flex-column gap-2 align-items-start">
        {movie ?
          <div className="container">
            <ShowCard movie={movie} fetchMovie={fetchMovie} />
            {/* passiamo come prop movie e fetchMovie a ShowCard */}
          </div> : <Loader />
        }
      </div>

    </>
  );
}
