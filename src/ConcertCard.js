import React from "react"
// import YoutubeEmbed from "./YoutubeEmbed"

const ConcertCard = ({ key, concert, onDeleteConcert }) => {
  const { id, artist, image, venue, date, cost } = concert
  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/concerts/${id}`, {
      method: "DELETE"
    })
      .then(() => onDeleteConcert(concert))
  }

  return (
   <li key={key} className="card">
     <h2>{artist}</h2>
     <img src={image} alt={artist}/>
     <p><strong>Venue:</strong> {venue}</p>
     <p><strong>Date:</strong> {date}</p>
     <p><strong>Cost:</strong> ${cost}</p>
     <button className="delete-btn" onClick={handleDeleteClick}>
     Buy Tickets 🎟
     </button>
   </li>
  )
}

export default ConcertCard
