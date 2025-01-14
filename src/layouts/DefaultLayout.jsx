import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Loader from "../components/Loader"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext)

  return (
    <>
      <Header />
      <main className="bg-info-subtle"  >
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Loader />}
    </>


  )
}