import React from "react"
import ConcertCard from "./ConcertCard"

const ConcertCollection = ({ concerts, onDeleteConcert }) => {
  return (
      <ul className="cards">
        {concerts.map((concert) => (
            <ConcertCard
              key={concert.key}
              concert={concert}
              // artist={concert.artist}
              // image={concert.image}
              // venue={concert.venue}
              // date={concert.date}
              // cost={concert.cost}
              onDeleteConcert={onDeleteConcert}
            />
        ))}
      </ul>
  )
}

export default ConcertCollection
