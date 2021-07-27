import React from "react"
import ConcertCard from "./ConcertCard"

const ConcertCollection = ({ concerts }) => {
    return (
      <ul className="cards">
        {concerts.map((concert) => (
            <ConcertCard
              key={concert.key}
              artist={concert.artist}
              image={concert.image}
              venue={concert.venue}
              date={concert.date}
              cost={concert.cost}
            />
        ))}
      </ul>
    )
  }

export default ConcertCollection