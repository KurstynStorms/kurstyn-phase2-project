import React from "react"
// import YoutubeEmbed from "./YoutubeEmbed"

const ConcertCard = ({ artist, image, venue, date, cost }) => {
 return (
   <li className="card">
     <h2>{artist}</h2>
     <img src={image} alt={artist}/>
     <p>Venue: {venue}</p>
     <p>Date: {date}</p>
     <p>Cost: {cost}</p>
   </li>
 )
}

export default ConcertCard