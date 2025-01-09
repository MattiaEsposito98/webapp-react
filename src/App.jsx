import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* <Header /> */}
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
