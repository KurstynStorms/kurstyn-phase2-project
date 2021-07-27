import React, { useState } from "react"

const ConcertForm = ({ onAddConcert }) => {
  const [formData, setFormData] = useState({
    artist: "",
    image: "",
    venue: "",
    date: "",
    cost: "",
  })

    const handleChange = (event) => {
      setFormData({
        ...formData,
      [event.target.name]: event.target.value,
    })  
  }
    
    const handleSubmit = () => {
      const addNewConcert = {
        artist: formData.artist,
        image: formData.image,
        venue: formData.venue,
        date: formData.date,
        cost: parseFloat(formData.cost),
      }
      

    fetch("http://localhost:4000/concerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(addNewConcert),
    })
      .then((resp) => resp.json())
      .then(onAddConcert)
}
  return (
    <div className="segment">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inline-fields">
          <input 
          type="text" 
          name="artist" 
          placeholder="Artist..."
          value={formData.artist}
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="image" 
          placeholder="Artist Image..." 
          value={formData.image}
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="venue" 
          placeholder="Venue..." 
          value={formData.venue}
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="date" 
          placeholder="Date..." 
          value={formData.date}
          onChange={handleChange}
          />
          <input 
          type="number" 
          name="cost" 
          placeholder="Cost..." 
          step="0.01" 
          value={formData.cost}
          onChange={handleChange}
          />
        </div>
        <button className="concert-button" type="submit">
          Add Your Concert!
        </button>
      </form>
    </div>
  )
}

export default ConcertForm