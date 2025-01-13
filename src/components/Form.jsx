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
    const dataName = formData.name.trim()
    const vote = parseInt(formData.vote)

    // Validazione
    if (!dataName || dataName.length > 255 || !vote || vote < 1 || vote > 5 || formData.text.length > 255) {
      console.log("Il modulo non è valido",);
      return;
    }

    console.log("Dati inviati:", formData.text.length, {
      ...formData,
      name: dataName

    });

    setFormData(initialFormData)
  }

  return (
    <form className="d-flex flex-column mb-3" onSubmit={handleSubmit} >
      <label className="text-center">Scrivi una recensione!</label>
      <div>
        <label htmlFor="nome" className="form-label">Nome*</label>
        <input required
          type="text" className="form-control" id="nome" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div className="mt-2">
        <label htmlFor="descrizione" className="form-label">Inserisci una descrizione </label>
        <textarea className="form-control" id="descrizione" name="text" rows="3" placeholder="Massimo 255 caratteri" maxLength={255} value={formData.text} onChange={handleChange} ></textarea>
      </div>

      <div className="mt-2">
        <label htmlFor="voto" className="form-label" >Seleziona un voto*</label>
        <select required className="form-select" id="voto" name="vote" value={formData.vote} onChange={handleChange}>

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