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
    
    const handleSubmit = (event) => {
      event.preventDefault()
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
          placeholder="Artist You're Seeing Here"
          value={formData.artist}
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="image" 
          placeholder="Your Artist's Image Url Here" 
          value={formData.image}
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="venue" 
          placeholder="Philly Venue of the Show" 
          value={formData.venue}
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="date" 
          placeholder="Date/Time: mm/dd/yy, 0:00 AM/PM" 
          value={formData.date}
          onChange={handleChange}
          />
          <input 
          type="number" 
          name="cost" 
          placeholder="Price of Ticket: 0.00$" 
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