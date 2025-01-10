import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import ShowCard from "../components/ShowCard"
import axios from "axios"

export default function Show() {
  const { id } = useParams()
  const { movies } = useContext(GlobalContext)
  const [movie, setMovie] = useState(null)


  function fetchMovie() {
    axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(err => {
        console.error("Errore nel recupero dei dati:", err);
      })
  }

  useEffect(() => {
    fetchMovie()
  }, [id, movies]) //passo anche movies per far aggiornare l'array

  return (
    <>
      <h1 className="text-center">Dettaglio Film</h1>
      <div className="d-flex flex-column gap-2 align-items-start">
        {movie ?
          <div className="container">
            <ShowCard movie={movie} />
          </div> : <p>Caricamento in corso...</p>
        }
      </div>

    </>
  );
}
