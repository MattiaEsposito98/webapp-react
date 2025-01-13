import { useState } from "react"

const initialFormData = {
  name: "",
  text: "",
  vote: ""
}
export default function Form() {
  const [formData, setFormData] = useState(initialFormData)

  function handleChange(e) {
    const { value, name } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log("Dati inviati:", formData);
  }

  return (
    <form className="d-flex flex-column mb-3" onSubmit={handleSubmit} >
      <div>
        <label htmlFor="nome" className="form-label">Nome</label>
        <input required
          type="text" className="form-control" id="nome" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="descrizione" className="form-label">Inserisci una descrizione</label>
        <textarea className="form-control" id="descrizione" name="text" rows="3" value={formData.text} onChange={handleChange} ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="voto" className="form-label" >Seleziona un voto</label>
        <select className="form-select" id="voto" name="vote" value={formData.vote} onChange={handleChange}>

          <option value="">Seleziona un voto</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

      </div>
      <button type="submit" className="btn btn-primary mt-3">Invia</button>
    </form>
  )
}