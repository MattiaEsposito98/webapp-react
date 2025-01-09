import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([])

  const fetchMovie = () => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((response) => {
        setMovies(response.data)
      })
      .catch((err) => {
        console.error(err)
      });
  };

  useEffect(() => {
    fetchMovie()
  }, []);

  return (
    <GlobalContext.Provider value={{ movies, setMovies }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider
