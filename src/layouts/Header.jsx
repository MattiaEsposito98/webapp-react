import Nav from "../components/Nav";

export default function Header() {

  return (
    <header className="bg-info py-3">
      <section className="container">
        <div className="d-flex align-items-center justify-content-between">
          <img className="logo" src="http://localhost:3000/logo.jpg" alt="" />
          <Nav />
        </div>
      </section>
    </header>
  )
}