import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { use } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const fetchMovie = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}`, {
        params: {
          search: search
        }
      })
      .then((response) => {
        setMovies(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  //Funzione per cercare un libro
  function searchMovie(e) {
    e.preventDefault()
    fetchMovie()
    setSearch('')

  }

  useEffect(() => {
    fetchMovie()
  }, []);

  return (
    <GlobalContext.Provider value={{ movies, setMovies, search, setSearch, searchMovie }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider
