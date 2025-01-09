import Nav from "../components/Nav";

export default function Header() {

  return (
    <header>
      <section className="container">
        <div className="d-flex align-items-center justify-content-between">
          <img src="http://localhost:3000/logo.jpg" alt="" />
          <Nav />
        </div>
      </section>
    </header>
  )
}