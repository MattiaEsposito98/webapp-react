import Nav from "../components/Nav"
import { Link } from "react-router-dom"

export default function Header() {

  return (
    <header className="bg-info py-3">
      <section className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <img className="logo" src="http://localhost:3000/logo.jpg" alt="" />
          </Link>

          <Nav />
        </div>
      </section>
    </header>
  )
}