import React from "react"
import ConcertCard from "./ConcertCard"

const ConcertCollection = ({ concerts }) => {
  const concertInfo = concerts.map((concert) => (
    <ConcertCard
    key={concert.key}
    artist={concert.artist}
    image={concert.image}
    venue={concert.venue}
    cost={concert.cost}
    />
    ))
  
    return (
      <ul className="cards">{concertInfo}</ul>
    )
  }

export default ConcertCollection