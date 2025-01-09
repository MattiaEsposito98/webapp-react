import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DefaultLayout from "./layouts/DefaultLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import HomePage from "./pages/Homepage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />} >
            <Route index Component={HomePage} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>

      </BrowserRouter >

    </>
  )
}

export default App
