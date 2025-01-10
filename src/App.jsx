import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DefaultLayout from "./layouts/DefaultLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HomePage from "./pages/Homepage"
import GlobalProvider from "./context/GlobalContext"
import Show from "./pages/Show"

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout />} >
              <Route index element={<HomePage />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path="/show/:id" element={<Show />} />
            </Route>
          </Routes>
        </BrowserRouter >
      </GlobalProvider>

    </>
  )
}

export default App
